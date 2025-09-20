import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { v4 as uuidv4 } from 'uuid';
import { 
  Booking, 
  BookingFormData, 
  BookingUpdateData, 
  BookingQueryParams,
  ApiResponse, 
  ValidationError as ValidationErrorType,
  PaginationInfo,
  AppError,
  NotFoundError
} from '../types';

const router = express.Router();

// In-memory storage (replace with database in production)
const bookings: Booking[] = [];

// Validation rules
const bookingValidation = [
  body('firstName')
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('First name must be between 2 and 50 characters'),
  body('lastName')
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('Last name must be between 2 and 50 characters'),
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email address'),
  body('phone')
    .isMobilePhone()
    .withMessage('Please provide a valid phone number'),
  body('destination')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Destination must be between 2 and 100 characters'),
  body('travelDates')
    .isObject()
    .withMessage('Travel dates must be an object with start and end dates'),
  body('travelDates.start')
    .isISO8601()
    .withMessage('Start date must be a valid date'),
  body('travelDates.end')
    .isISO8601()
    .withMessage('End date must be a valid date'),
  body('travelers')
    .isInt({ min: 1, max: 20 })
    .withMessage('Number of travelers must be between 1 and 20'),
  body('budget')
    .optional()
    .isInt({ min: 1000 })
    .withMessage('Budget must be at least $1,000'),
  body('specialRequests')
    .optional()
    .trim()
    .isLength({ max: 1000 })
    .withMessage('Special requests must be less than 1000 characters'),
  body('accommodationType')
    .optional()
    .isIn(['luxury', 'boutique', 'resort', 'villa', 'hotel'])
    .withMessage('Invalid accommodation type'),
  body('interests')
    .optional()
    .isArray()
    .withMessage('Interests must be an array')
];

// POST /api/booking - Submit booking inquiry
router.post('/', bookingValidation, async (req: Request, res: Response) => {
  try {
    // Check validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const validationErrors: ValidationErrorType[] = errors.array().map(error => ({
        field: error.type === 'field' ? error.path : 'unknown',
        message: error.msg,
        value: error.type === 'field' ? error.value : undefined
      }));

      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: validationErrors
      });
    }

    const {
      firstName,
      lastName,
      email,
      phone,
      destination,
      travelDates,
      travelers,
      budget,
      specialRequests,
      accommodationType,
      interests
    }: BookingFormData = req.body;

    // Create booking record
    const booking: Booking = {
      id: uuidv4(),
      firstName,
      lastName,
      email,
      phone,
      destination,
      travelDates,
      travelers,
      budget: budget || undefined,
      specialRequests: specialRequests || undefined,
      accommodationType: accommodationType || 'luxury',
      interests: interests || [],
      status: 'inquiry',
      priority: 'normal',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    // Store booking (in production, save to database)
    bookings.push(booking);

    // In production, you would:
    // 1. Save to database
    // 2. Send email to travel consultant
    // 3. Send confirmation email to customer
    // 4. Create task in CRM system
    // 5. Calculate estimated cost

    console.log('New booking inquiry:', booking);

    const response: ApiResponse<{ id: string; status: string; estimatedResponseTime: string }> = {
      success: true,
      message: 'Thank you for your booking inquiry. Our travel consultant will contact you within 2 hours.',
      data: {
        id: booking.id,
        status: booking.status,
        estimatedResponseTime: '2 hours'
      }
    };

    res.status(201).json(response);

  } catch (error) {
    console.error('Booking form error:', error);
    const response: ApiResponse = {
      success: false,
      message: 'Failed to submit booking inquiry. Please try again later.'
    };
    res.status(500).json(response);
  }
});

// GET /api/booking - Get all bookings (admin only - add authentication in production)
router.get('/', (req: Request, res: Response) => {
  try {
    const { status, destination, limit = '50', offset = '0' }: BookingQueryParams = req.query;
    
    let filteredBookings = bookings;
    
    if (status) {
      filteredBookings = filteredBookings.filter(b => b.status === status);
    }
    
    if (destination) {
      filteredBookings = filteredBookings.filter(b => 
        b.destination.toLowerCase().includes(destination.toLowerCase())
      );
    }
    
    // Pagination
    const startIndex = parseInt(offset);
    const endIndex = startIndex + parseInt(limit);
    const paginatedBookings = filteredBookings.slice(startIndex, endIndex);
    
    const pagination: PaginationInfo = {
      total: filteredBookings.length,
      limit: parseInt(limit),
      offset: parseInt(offset),
      hasMore: endIndex < filteredBookings.length
    };
    
    const response: ApiResponse<Booking[]> = {
      success: true,
      data: paginatedBookings,
      message: `Retrieved ${paginatedBookings.length} bookings`
    };
    
    res.json({ ...response, pagination });
  } catch (error) {
    console.error('Get bookings error:', error);
    const response: ApiResponse = {
      success: false,
      message: 'Failed to retrieve bookings'
    };
    res.status(500).json(response);
  }
});

// GET /api/booking/:id - Get specific booking
router.get('/:id', (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const booking = bookings.find(b => b.id === id);
    
    if (!booking) {
      throw new NotFoundError('Booking');
    }

    const response: ApiResponse<Booking> = {
      success: true,
      data: booking,
      message: 'Booking retrieved successfully'
    };
    res.json(response);
  } catch (error) {
    if (error instanceof NotFoundError) {
      const response: ApiResponse = {
        success: false,
        message: error.message
      };
      return res.status(404).json(response);
    }

    console.error('Get booking error:', error);
    const response: ApiResponse = {
      success: false,
      message: 'Failed to retrieve booking'
    };
    res.status(500).json(response);
  }
});

// PATCH /api/booking/:id - Update booking status (admin only)
router.patch('/:id', (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status, priority, notes, estimatedCost }: BookingUpdateData = req.body;
    
    const bookingIndex = bookings.findIndex(b => b.id === id);
    
    if (bookingIndex === -1) {
      throw new NotFoundError('Booking');
    }

    // Update booking
    bookings[bookingIndex] = {
      ...bookings[bookingIndex],
      status: status || bookings[bookingIndex].status,
      priority: priority || bookings[bookingIndex].priority,
      notes: notes || bookings[bookingIndex].notes,
      estimatedCost: estimatedCost || bookings[bookingIndex].estimatedCost,
      updatedAt: new Date().toISOString()
    };

    const response: ApiResponse<Booking> = {
      success: true,
      message: 'Booking updated successfully',
      data: bookings[bookingIndex]
    };
    res.json(response);
  } catch (error) {
    if (error instanceof NotFoundError) {
      const response: ApiResponse = {
        success: false,
        message: error.message
      };
      return res.status(404).json(response);
    }

    console.error('Update booking error:', error);
    const response: ApiResponse = {
      success: false,
      message: 'Failed to update booking'
    };
    res.status(500).json(response);
  }
});

// DELETE /api/booking/:id - Cancel booking
router.delete('/:id', (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const bookingIndex = bookings.findIndex(b => b.id === id);
    
    if (bookingIndex === -1) {
      throw new NotFoundError('Booking');
    }

    // Update status to cancelled instead of deleting
    bookings[bookingIndex] = {
      ...bookings[bookingIndex],
      status: 'cancelled',
      updatedAt: new Date().toISOString()
    };

    const response: ApiResponse = {
      success: true,
      message: 'Booking cancelled successfully'
    };
    res.json(response);
  } catch (error) {
    if (error instanceof NotFoundError) {
      const response: ApiResponse = {
        success: false,
        message: error.message
      };
      return res.status(404).json(response);
    }

    console.error('Cancel booking error:', error);
    const response: ApiResponse = {
      success: false,
      message: 'Failed to cancel booking'
    };
    res.status(500).json(response);
  }
});

export default router;
