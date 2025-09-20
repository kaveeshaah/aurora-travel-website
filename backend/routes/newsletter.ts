import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { v4 as uuidv4 } from 'uuid';
import { 
  NewsletterSubscriber, 
  NewsletterFormData, 
  NewsletterQueryParams,
  NewsletterStats,
  NewsletterInterest,
  ApiResponse, 
  ValidationError as ValidationErrorType,
  PaginationInfo,
  AppError,
  NotFoundError,
  ConflictError
} from '../types';

const router = express.Router();

// In-memory storage (replace with database in production)
const subscribers: NewsletterSubscriber[] = [];

// Validation rules
const newsletterValidation = [
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email address'),
  body('firstName')
    .optional()
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('First name must be between 2 and 50 characters'),
  body('interests')
    .optional()
    .isArray()
    .withMessage('Interests must be an array'),
  body('interests.*')
    .optional()
    .isIn(['destinations', 'experiences', 'offers', 'news', 'events'])
    .withMessage('Invalid interest category')
];

// POST /api/newsletter - Subscribe to newsletter
router.post('/', newsletterValidation, async (req: Request, res: Response) => {
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

    const { email, firstName, interests = [] }: NewsletterFormData = req.body;

    // Check if email already exists
    const existingSubscriber = subscribers.find(s => s.email === email);
    
    if (existingSubscriber) {
      if (existingSubscriber.status === 'active') {
        throw new ConflictError('Email is already subscribed to our newsletter');
      } else {
        // Reactivate subscription
        existingSubscriber.status = 'active';
        existingSubscriber.firstName = firstName || existingSubscriber.firstName;
        existingSubscriber.interests = interests;
        existingSubscriber.updatedAt = new Date().toISOString();
        
        console.log('Newsletter subscription reactivated:', existingSubscriber);
        
        const response: ApiResponse<{ id: string; status: string }> = {
          success: true,
          message: 'Welcome back! Your newsletter subscription has been reactivated.',
          data: {
            id: existingSubscriber.id,
            status: existingSubscriber.status
          }
        };
        
        return res.json(response);
      }
    }

    // Create new subscriber
    const subscriber: NewsletterSubscriber = {
      id: uuidv4(),
      email,
      firstName: firstName || undefined,
      interests,
      status: 'active',
      subscribedAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      lastEmailSent: undefined,
      emailCount: 0
    };

    // Store subscriber (in production, save to database)
    subscribers.push(subscriber);

    // In production, you would:
    // 1. Save to database
    // 2. Add to email marketing service (Mailchimp, SendGrid, etc.)
    // 3. Send welcome email
    // 4. Add to CRM system

    console.log('New newsletter subscription:', subscriber);

    const response: ApiResponse<{ id: string; status: string }> = {
      success: true,
      message: 'Thank you for subscribing! Check your email for confirmation.',
      data: {
        id: subscriber.id,
        status: subscriber.status
      }
    };

    res.status(201).json(response);

  } catch (error) {
    if (error instanceof ConflictError) {
      const response: ApiResponse = {
        success: false,
        message: error.message
      };
      return res.status(409).json(response);
    }

    console.error('Newsletter subscription error:', error);
    const response: ApiResponse = {
      success: false,
      message: 'Failed to subscribe to newsletter. Please try again later.'
    };
    res.status(500).json(response);
  }
});

// POST /api/newsletter/unsubscribe - Unsubscribe from newsletter
router.post('/unsubscribe', [
  body('email').isEmail().normalizeEmail().withMessage('Please provide a valid email address')
], async (req: Request, res: Response) => {
  try {
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

    const { email } = req.body;
    const subscriber = subscribers.find(s => s.email === email);
    
    if (!subscriber) {
      throw new NotFoundError('Email not found in our subscription list');
    }

    if (subscriber.status === 'unsubscribed') {
      const response: ApiResponse = {
        success: true,
        message: 'Email is already unsubscribed'
      };
      return res.json(response);
    }

    // Update subscriber status
    subscriber.status = 'unsubscribed';
    subscriber.unsubscribedAt = new Date().toISOString();
    subscriber.updatedAt = new Date().toISOString();

    console.log('Newsletter unsubscription:', subscriber);

    const response: ApiResponse = {
      success: true,
      message: 'You have been successfully unsubscribed from our newsletter'
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

    console.error('Newsletter unsubscription error:', error);
    const response: ApiResponse = {
      success: false,
      message: 'Failed to unsubscribe. Please try again later.'
    };
    res.status(500).json(response);
  }
});

// GET /api/newsletter - Get all subscribers (admin only - add authentication in production)
router.get('/', (req: Request, res: Response) => {
  try {
    const { status, limit = '100', offset = '0' }: NewsletterQueryParams = req.query;
    
    let filteredSubscribers = subscribers;
    
    if (status) {
      filteredSubscribers = filteredSubscribers.filter(s => s.status === status);
    }
    
    // Pagination
    const startIndex = parseInt(offset);
    const endIndex = startIndex + parseInt(limit);
    const paginatedSubscribers = filteredSubscribers.slice(startIndex, endIndex);
    
    const pagination: PaginationInfo = {
      total: filteredSubscribers.length,
      limit: parseInt(limit),
      offset: parseInt(offset),
      hasMore: endIndex < filteredSubscribers.length
    };
    
    const response: ApiResponse<NewsletterSubscriber[]> = {
      success: true,
      data: paginatedSubscribers,
      message: `Retrieved ${paginatedSubscribers.length} subscribers`
    };
    
    res.json({ ...response, pagination });
  } catch (error) {
    console.error('Get subscribers error:', error);
    const response: ApiResponse = {
      success: false,
      message: 'Failed to retrieve subscribers'
    };
    res.status(500).json(response);
  }
});

// GET /api/newsletter/stats - Get subscription statistics (admin only)
router.get('/stats', (req: Request, res: Response) => {
  try {
    const totalSubscribers = subscribers.length;
    const activeSubscribers = subscribers.filter(s => s.status === 'active').length;
    const unsubscribedSubscribers = subscribers.filter(s => s.status === 'unsubscribed').length;
    
    // Interest breakdown
    const interestStats: Record<NewsletterInterest, number> = {
      destinations: 0,
      experiences: 0,
      offers: 0,
      news: 0,
      events: 0
    };
    
    subscribers.forEach(subscriber => {
      subscriber.interests.forEach(interest => {
        if (interest in interestStats) {
          interestStats[interest as NewsletterInterest]++;
        }
      });
    });
    
    // Recent subscriptions (last 30 days)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    const recentSubscriptions = subscribers.filter(s => 
      new Date(s.subscribedAt) > thirtyDaysAgo
    ).length;
    
    const stats: NewsletterStats = {
      total: totalSubscribers,
      active: activeSubscribers,
      unsubscribed: unsubscribedSubscribers,
      recentSubscriptions,
      interestBreakdown: interestStats
    };
    
    const response: ApiResponse<NewsletterStats> = {
      success: true,
      data: stats,
      message: 'Newsletter statistics retrieved successfully'
    };
    
    res.json(response);
  } catch (error) {
    console.error('Get newsletter stats error:', error);
    const response: ApiResponse = {
      success: false,
      message: 'Failed to retrieve newsletter statistics'
    };
    res.status(500).json(response);
  }
});

export default router;
