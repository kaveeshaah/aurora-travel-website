# Aurora Luxe Travel - Backend API

A Node.js + Express.js + TypeScript backend server for the Aurora Luxe Travel website, providing RESTful APIs for contact forms, booking inquiries, and newsletter subscriptions.

## Features

- **Contact Management**: Handle contact form submissions with validation
- **Booking Inquiries**: Process luxury travel booking requests
- **Newsletter System**: Manage email subscriptions and preferences
- **Security**: Rate limiting, CORS, Helmet security headers
- **Validation**: Input validation using express-validator
- **Error Handling**: Comprehensive error handling and logging
- **TypeScript**: Full type safety with comprehensive type definitions
- **Type Safety**: Strict TypeScript configuration for better code quality

## API Endpoints

### Contact API (`/api/contact`)
- `POST /` - Submit contact form
- `GET /` - Get all contacts (admin)
- `GET /:id` - Get specific contact
- `PATCH /:id` - Update contact status (admin)

### Booking API (`/api/booking`)
- `POST /` - Submit booking inquiry
- `GET /` - Get all bookings (admin)
- `GET /:id` - Get specific booking
- `PATCH /:id` - Update booking status (admin)
- `DELETE /:id` - Cancel booking

### Newsletter API (`/api/newsletter`)
- `POST /` - Subscribe to newsletter
- `POST /unsubscribe` - Unsubscribe from newsletter
- `GET /` - Get all subscribers (admin)
- `GET /stats` - Get subscription statistics (admin)

### Health Check
- `GET /health` - Server health status

## Installation

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp env.example .env
```

4. Update `.env` with your configuration:
```env
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

## Running the Server

### Development Mode
```bash
npm run dev
```

### Build TypeScript
```bash
npm run build
```

### Production Mode
```bash
npm start
```

### Type Checking
```bash
npm run type-check
```

The server will start on `http://localhost:5000` (or the port specified in your `.env` file).

## API Usage Examples

### Contact Form Submission
```javascript
const response = await fetch('http://localhost:5000/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1234567890',
    subject: 'Luxury Travel Inquiry',
    message: 'I am interested in planning a luxury trip to the Maldives.',
    preferredContact: 'email'
  })
});

const data = await response.json();
console.log(data);
```

### Booking Inquiry
```javascript
const response = await fetch('http://localhost:5000/api/booking', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    phone: '+1234567890',
    destination: 'Maldives',
    travelDates: {
      start: '2024-06-01',
      end: '2024-06-08'
    },
    travelers: 2,
    budget: 15000,
    specialRequests: 'Private villa with overwater bungalow',
    accommodationType: 'luxury',
    interests: ['beach', 'spa', 'snorkeling']
  })
});

const data = await response.json();
console.log(data);
```

### Newsletter Subscription
```javascript
const response = await fetch('http://localhost:5000/api/newsletter', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: 'john@example.com',
    firstName: 'John',
    interests: ['destinations', 'experiences', 'offers']
  })
});

const data = await response.json();
console.log(data);
```

## Data Storage

Currently, the application uses in-memory storage for demonstration purposes. In production, you should:

1. **Database Integration**: Replace in-memory storage with a proper database (PostgreSQL, MongoDB, etc.)
2. **Email Service**: Integrate with email service providers (SendGrid, Mailchimp, etc.)
3. **Authentication**: Add JWT-based authentication for admin endpoints
4. **File Storage**: Add file upload capabilities for travel documents
5. **Payment Processing**: Integrate with payment gateways (Stripe, PayPal, etc.)

## Security Features

- **Rate Limiting**: 100 requests per 15 minutes per IP
- **CORS**: Configurable cross-origin resource sharing
- **Helmet**: Security headers for protection
- **Input Validation**: Comprehensive validation for all inputs
- **Error Handling**: Secure error responses without sensitive information

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | 5000 |
| `NODE_ENV` | Environment | development |
| `FRONTEND_URL` | Frontend URL for CORS | http://localhost:3000 |
| `SMTP_HOST` | SMTP server host | - |
| `SMTP_PORT` | SMTP server port | - |
| `SMTP_USER` | SMTP username | - |
| `SMTP_PASS` | SMTP password | - |

## Development

### Scripts
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm test` - Run tests (when implemented)

### Adding New Endpoints

1. Create route file in `routes/` directory
2. Add validation rules using express-validator
3. Implement controller logic
4. Add route to `server.js`
5. Update this README with endpoint documentation

## Production Deployment

1. Set `NODE_ENV=production`
2. Configure production database
3. Set up proper email service
4. Configure reverse proxy (nginx)
5. Set up SSL certificates
6. Configure monitoring and logging

## License

MIT License - see LICENSE file for details.
