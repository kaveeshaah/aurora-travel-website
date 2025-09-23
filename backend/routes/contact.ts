import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { v4 as uuidv4 } from 'uuid';
import {
  Contact,
  ContactFormData,
  ContactUpdateData,
  ApiResponse,
  ValidationError as ValidationErrorType,
  NotFoundError
} from '../types';

const router = express.Router();

// In-memory storage (replace with database in production)
const contacts: Contact[] = [];

// Validation rules
const contactValidation = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters'),
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email address'),
  body('phone')
    .optional()
    .isMobilePhone('any')
    .withMessage('Please provide a valid phone number'),
  body('subject')
    .trim()
    .isLength({ min: 5, max: 200 })
    .withMessage('Subject must be between 5 and 200 characters'),
  body('message')
    .trim()
    .isLength({ min: 10, max: 2000 })
    .withMessage('Message must be between 10 and 2000 characters'),
  body('preferredContact')
    .optional()
    .isIn(['email', 'phone', 'either'])
    .withMessage('Preferred contact method must be email, phone, or either')
];

// POST /api/contact - Submit contact form
router.post('/', contactValidation, async (req: Request, res: Response) => {
  try {
    // Check validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const validationErrors = errors.array().map(error => ({
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

    const { name, email, phone, subject, message, preferredContact }: ContactFormData = req.body;

    // Create contact record
    const contact: Contact = {
      id: uuidv4(),
      name,
      email,
      ...(phone && { phone }),
      subject,
      message,
      preferredContact: preferredContact || 'email',
      status: 'new',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    // Store contact (in production, save to database)
    contacts.push(contact);

    // In production, you would:
    // 1. Save to database
    // 2. Send email notification to admin
    // 3. Send auto-reply to customer
    // 4. Create ticket in support system

    console.log('New contact form submission:', contact);

    const response: ApiResponse<{ id: string; status: string }> = {
      success: true,
      message: 'Thank you for your message. We will get back to you within 24 hours.',
      data: {
        id: contact.id,
        status: contact.status
      }
    };

    return res.status(201).json(response);

  } catch (error) {
    console.error('Contact form error:', error);
    const response: ApiResponse = {
      success: false,
      message: 'Failed to submit contact form. Please try again later.'
    };
    return res.status(500).json(response);
  }
});

// GET /api/contact - Get all contacts (admin only - add authentication in production)
router.get('/', (_req: Request, res: Response) => {
  try {
    const response: ApiResponse<Contact[]> = {
      success: true,
      data: contacts,
      message: `Retrieved ${contacts.length} contacts`
    };
    return res.json(response);
  } catch (error) {
    console.error('Get contacts error:', error);
    const response: ApiResponse = {
      success: false,
      message: 'Failed to retrieve contacts'
    };
    return res.status(500).json(response);
  }
});

// GET /api/contact/:id - Get specific contact
router.get('/:id', (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const contact = contacts.find(c => c.id === id);
    
    if (!contact) {
      throw new NotFoundError('Contact');
    }

    const response: ApiResponse<Contact> = {
      success: true,
      data: contact,
      message: 'Contact retrieved successfully'
    };
    return res.json(response);
  } catch (error) {
    if (error instanceof NotFoundError) {
      const response: ApiResponse = {
        success: false,
        message: error.message
      };
      return res.status(404).json(response);
    }

    console.error('Get contact error:', error);
    const response: ApiResponse = {
      success: false,
      message: 'Failed to retrieve contact'
    };
    return res.status(500).json(response);
  }
});

// PATCH /api/contact/:id - Update contact status (admin only)
router.patch('/:id', (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status, notes }: ContactUpdateData = req.body;
    
    const contactIndex = contacts.findIndex(c => c.id === id);
    
    if (contactIndex === -1) {
      throw new NotFoundError('Contact');
    }

    // Update contact
    const updatedContact: Contact = {
      ...contacts[contactIndex],
      ...(status && { status }),
      ...(notes !== undefined && { notes }),
      updatedAt: new Date().toISOString()
    };
    contacts[contactIndex] = updatedContact;

    const response: ApiResponse<Contact> = {
      success: true,
      message: 'Contact updated successfully',
      data: updatedContact
    };
    return res.json(response);
  } catch (error) {
    if (error instanceof NotFoundError) {
      const response: ApiResponse = {
        success: false,
        message: error.message
      };
      return res.status(404).json(response);
    }

    console.error('Update contact error:', error);
    const response: ApiResponse = {
      success: false,
      message: 'Failed to update contact'
    };
    return res.status(500).json(response);
  }
});

export default router;
