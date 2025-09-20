import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import { ServerConfig, HealthCheckResponse, AppError } from './types';

// Import routes
import contactRoutes from './routes/contact';
import bookingRoutes from './routes/booking';
import newsletterRoutes from './routes/newsletter';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Server configuration
const config: ServerConfig = {
  port: Number(PORT),
  nodeEnv: process.env.NODE_ENV || 'development',
  frontendUrl: process.env.FRONTEND_URL || 'http://localhost:3000',
  smtpHost: process.env.SMTP_HOST,
  smtpPort: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined,
  smtpUser: process.env.SMTP_USER,
  smtpPass: process.env.SMTP_PASS,
};

// Security middleware
app.use(helmet());

// CORS configuration
app.use(cors({
  origin: config.frontendUrl,
  credentials: true
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});
app.use(limiter);

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Logging middleware
app.use(morgan('combined'));

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  const healthResponse: HealthCheckResponse = {
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  };
  
  res.status(200).json(healthResponse);
});

// API routes
app.use('/api/contact', contactRoutes);
app.use('/api/booking', bookingRoutes);
app.use('/api/newsletter', newsletterRoutes);

// 404 handler
app.use('*', (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Global error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('Error:', err);
  
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      ...(config.nodeEnv === 'development' && { stack: err.stack })
    });
  }
  
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    ...(config.nodeEnv === 'development' && { stack: err.stack })
  });
});

// Start server
app.listen(config.port, () => {
  console.log(`🚀 Aurora Luxe Backend running on port ${config.port}`);
  console.log(`📧 Environment: ${config.nodeEnv}`);
  console.log(`🌐 CORS enabled for: ${config.frontendUrl}`);
});

export default app;
