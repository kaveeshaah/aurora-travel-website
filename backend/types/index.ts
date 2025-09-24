// Common types and interfaces for the Aurora Luxe Travel backend

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  errors?: ValidationError[];
}

export interface ValidationError {
  field: string;
  message: string;
  value?: any;
}

export interface PaginationInfo {
  total: number;
  limit: number;
  offset: number;
  hasMore: boolean;
}

// Contact types
export interface Contact {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  preferredContact: 'email' | 'phone' | 'either';
  status: 'new' | 'in_progress' | 'resolved' | 'closed';
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  preferredContact?: 'email' | 'phone' | 'either';
}

export interface ContactUpdateData {
  status?: 'new' | 'in_progress' | 'resolved' | 'closed';
  notes?: string;
}


// Newsletter types
export interface NewsletterSubscriber {
  id: string;
  email: string;
  firstName?: string;
  interests: NewsletterInterest[];
  status: 'active' | 'unsubscribed' | 'bounced';
  subscribedAt: string;
  unsubscribedAt?: string;
  updatedAt: string;
  lastEmailSent?: string;
  emailCount: number;
}

export type NewsletterInterest = 'destinations' | 'experiences' | 'offers' | 'news' | 'events';

export interface NewsletterFormData {
  email: string;
  firstName?: string;
  interests?: NewsletterInterest[];
}

export interface NewsletterQueryParams {
  status?: string;
  limit?: number;
  offset?: number;
}

export interface NewsletterStats {
  total: number;
  active: number;
  unsubscribed: number;
  recentSubscriptions: number;
  interestBreakdown: Record<NewsletterInterest, number>;
}

// Server types
export interface ServerConfig {
  port: number;
  nodeEnv: string;
  frontendUrl: string;
  smtpHost?: string;
  smtpPort?: number;
  smtpUser?: string;
  smtpPass?: string;
}

export interface HealthCheckResponse {
  status: 'OK';
  timestamp: string;
  uptime: number;
}

// Express types
export interface RequestWithUser extends Express.Request {
  user?: {
    id: string;
    email: string;
    role: string;
  };
}

// Error types
export class AppError extends Error {
  public statusCode: number;
  public isOperational: boolean;

  constructor(message: string, statusCode: number = 500, isOperational: boolean = true) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;

    Error.captureStackTrace(this, this.constructor);
  }
}

export class ValidationError extends AppError {
  public errors: ValidationError[];

  constructor(message: string, errors: ValidationError[]) {
    super(message, 400);
    this.errors = errors;
  }
}

export class NotFoundError extends AppError {
  constructor(resource: string) {
    super(`${resource} not found`, 404);
  }
}

export class ConflictError extends AppError {
  constructor(message: string) {
    super(message, 409);
  }
}

export class UnauthorizedError extends AppError {
  constructor(message: string = 'Unauthorized') {
    super(message, 401);
  }
}

export class ForbiddenError extends AppError {
  constructor(message: string = 'Forbidden') {
    super(message, 403);
  }
}
