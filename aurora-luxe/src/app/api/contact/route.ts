import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  destinationInterest: string;
  subject: string;
  message: string;
  preferredContact: 'email' | 'phone' | 'either';
}

interface ValidationErrors {
  name?: string;
  email?: string;
  destinationInterest?: string;
  subject?: string;
  message?: string;
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateFormData(data: ContactFormData): ValidationErrors {
  const errors: ValidationErrors = {};

  if (!data.name?.trim()) {
    errors.name = 'Name is required';
  }

  if (!data.email?.trim()) {
    errors.email = 'Email is required';
  } else if (!validateEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!data.destinationInterest?.trim()) {
    errors.destinationInterest = 'Destination interest is required';
  }

  if (!data.subject?.trim()) {
    errors.subject = 'Subject is required';
  }

  if (!data.message?.trim()) {
    errors.message = 'Message is required';
  }

  return errors;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const formData: ContactFormData = body;

    const validationErrors = validateFormData(formData);
    if (Object.keys(validationErrors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed',
          errors: validationErrors
        },
        { status: 400 }
      );
    }

    const submissionData = {
      id: Date.now().toString(),
      name: formData.name.trim(),
      email: formData.email.trim().toLowerCase(),
      phone: formData.phone?.trim() || '',
      destinationInterest: formData.destinationInterest,
      subject: formData.subject.trim(),
      message: formData.message.trim(),
      preferredContact: formData.preferredContact,
      createdAt: new Date().toISOString(),
      status: 'new',
      ipAddress: request.ip || 'unknown',
      userAgent: request.headers.get('user-agent') || 'unknown'
    };

    // Store in local JSON file
    const dataDir = path.join(process.cwd(), 'data');
    const filePath = path.join(dataDir, 'contact-submissions.json');

    try {
      await fs.access(dataDir);
    } catch {
      await fs.mkdir(dataDir, { recursive: true });
    }

    let existingData = [];
    try {
      const fileContent = await fs.readFile(filePath, 'utf-8');
      existingData = JSON.parse(fileContent);
    } catch {
      // File doesn't exist or is empty, start with empty array
    }

    existingData.push(submissionData);
    await fs.writeFile(filePath, JSON.stringify(existingData, null, 2));

    return NextResponse.json({
      success: true,
      message: 'Thank you for your message! We\'ll get back to you within 24 hours.',
      id: submissionData.id
    });

  } catch (error) {
    console.error('Error processing contact form:', error);

    return NextResponse.json(
      {
        success: false,
        message: 'Something went wrong. Please try again later.'
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    {
      message: 'Contact API endpoint is running',
      timestamp: new Date().toISOString()
    },
    { status: 200 }
  );
}