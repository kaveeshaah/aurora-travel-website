'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import LightweightIcon from '../common/LightweightIcon';

interface ContactFormData {
  name: string;
  email: string;
  destinationInterest: string;
  message: string;
}

interface ValidationErrors {
  name?: string;
  email?: string;
  destinationInterest?: string;
  message?: string;
  general?: string;
}

// Contact form styled and structured like the Our Story section
export default function FormSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    destinationInterest: '',
    message: ''
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): ValidationErrors => {
    const newErrors: ValidationErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.destinationInterest.trim()) {
      newErrors.destinationInterest = 'Destination interest is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    return newErrors;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error for this field when user starts typing
    if (errors[name as keyof ValidationErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setFormData({
          name: '',
          email: '',
          destinationInterest: '',
          message: ''
        });
        setErrors({});
      } else {
        setErrors(result.errors || {});
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({ general: 'Unable to send message. Please check your connection and try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-stone-100">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Travel story background"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/70 to-stone-100/70" />
      </div>
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto w-full">
        <h2 className="font-serif text-3xl lg:text-4xl text-slate-800 mb-12 text-center">
          Contact Us
        </h2>
        <br />
        <br />
        <form onSubmit={handleSubmit} className="space-y-8 w-full">
          <div>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-lg px-4 py-6 focus:outline-none focus:border-gray-500 bg-white text-base text-gray-700"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <br />
          <div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-6 focus:outline-none focus:border-gray-500 bg-white text-base text-gray-700"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <br />
          <div>
            <input
              type="text"
              id="destinationInterest"
              name="destinationInterest"
              value={formData.destinationInterest}
              onChange={handleInputChange}
              placeholder="Which Destination are you interested In?"
              className="w-full border border-gray-300 rounded-lg px-4 py-6 focus:outline-none focus:border-gray-500 bg-white text-base text-gray-700"
            />
            {errors.destinationInterest && <p className="text-red-500 text-sm mt-1">{errors.destinationInterest}</p>}
          </div>
          <br />
          <div>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={6}
              placeholder="Message"
              className="w-full border border-gray-300 rounded-lg px-4 py-4 focus:outline-none focus:border-gray-500 bg-white text-base text-gray-700 resize-none"
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>
          <br />
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-white border border-gray-300 rounded-full px-8 py-3 text-gray-700 font-medium hover:bg-gray-50 focus:outline-none focus:border-gray-500 transition-colors"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
