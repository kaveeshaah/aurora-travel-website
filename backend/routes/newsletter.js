const express = require('express');
const { body, validationResult } = require('express-validator');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();

// In-memory storage (replace with database in production)
const subscribers = [];

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
router.post('/', newsletterValidation, async (req, res) => {
  try {
    // Check validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { email, firstName, interests = [] } = req.body;

    // Check if email already exists
    const existingSubscriber = subscribers.find(s => s.email === email);
    
    if (existingSubscriber) {
      if (existingSubscriber.status === 'active') {
        return res.status(409).json({
          success: false,
          message: 'Email is already subscribed to our newsletter'
        });
      } else {
        // Reactivate subscription
        existingSubscriber.status = 'active';
        existingSubscriber.firstName = firstName || existingSubscriber.firstName;
        existingSubscriber.interests = interests;
        existingSubscriber.updatedAt = new Date().toISOString();
        
        console.log('Newsletter subscription reactivated:', existingSubscriber);
        
        return res.json({
          success: true,
          message: 'Welcome back! Your newsletter subscription has been reactivated.',
          data: {
            id: existingSubscriber.id,
            status: existingSubscriber.status
          }
        });
      }
    }

    // Create new subscriber
    const subscriber = {
      id: uuidv4(),
      email,
      firstName: firstName || null,
      interests,
      status: 'active',
      subscribedAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      lastEmailSent: null,
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

    res.status(201).json({
      success: true,
      message: 'Thank you for subscribing! Check your email for confirmation.',
      data: {
        id: subscriber.id,
        status: subscriber.status
      }
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to subscribe to newsletter. Please try again later.'
    });
  }
});

// POST /api/newsletter/unsubscribe - Unsubscribe from newsletter
router.post('/unsubscribe', [
  body('email').isEmail().normalizeEmail().withMessage('Please provide a valid email address')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { email } = req.body;
    const subscriber = subscribers.find(s => s.email === email);
    
    if (!subscriber) {
      return res.status(404).json({
        success: false,
        message: 'Email not found in our subscription list'
      });
    }

    if (subscriber.status === 'unsubscribed') {
      return res.json({
        success: true,
        message: 'Email is already unsubscribed'
      });
    }

    // Update subscriber status
    subscriber.status = 'unsubscribed';
    subscriber.unsubscribedAt = new Date().toISOString();
    subscriber.updatedAt = new Date().toISOString();

    console.log('Newsletter unsubscription:', subscriber);

    res.json({
      success: true,
      message: 'You have been successfully unsubscribed from our newsletter'
    });

  } catch (error) {
    console.error('Newsletter unsubscription error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to unsubscribe. Please try again later.'
    });
  }
});

// GET /api/newsletter - Get all subscribers (admin only - add authentication in production)
router.get('/', (req, res) => {
  try {
    const { status, limit = 100, offset = 0 } = req.query;
    
    let filteredSubscribers = subscribers;
    
    if (status) {
      filteredSubscribers = filteredSubscribers.filter(s => s.status === status);
    }
    
    // Pagination
    const startIndex = parseInt(offset);
    const endIndex = startIndex + parseInt(limit);
    const paginatedSubscribers = filteredSubscribers.slice(startIndex, endIndex);
    
    res.json({
      success: true,
      data: paginatedSubscribers,
      pagination: {
        total: filteredSubscribers.length,
        limit: parseInt(limit),
        offset: parseInt(offset),
        hasMore: endIndex < filteredSubscribers.length
      }
    });
  } catch (error) {
    console.error('Get subscribers error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve subscribers'
    });
  }
});

// GET /api/newsletter/stats - Get subscription statistics (admin only)
router.get('/stats', (req, res) => {
  try {
    const totalSubscribers = subscribers.length;
    const activeSubscribers = subscribers.filter(s => s.status === 'active').length;
    const unsubscribedSubscribers = subscribers.filter(s => s.status === 'unsubscribed').length;
    
    // Interest breakdown
    const interestStats = {};
    subscribers.forEach(subscriber => {
      subscriber.interests.forEach(interest => {
        interestStats[interest] = (interestStats[interest] || 0) + 1;
      });
    });
    
    // Recent subscriptions (last 30 days)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    const recentSubscriptions = subscribers.filter(s => 
      new Date(s.subscribedAt) > thirtyDaysAgo
    ).length;
    
    res.json({
      success: true,
      data: {
        total: totalSubscribers,
        active: activeSubscribers,
        unsubscribed: unsubscribedSubscribers,
        recentSubscriptions,
        interestBreakdown: interestStats
      }
    });
  } catch (error) {
    console.error('Get newsletter stats error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve newsletter statistics'
    });
  }
});

module.exports = router;
