'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import LightweightIcon from '../common/LightweightIcon';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
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
  general?: string;
}

// Contact form styled and structured like the Our Story section
export default function FormSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    destinationInterest: '',
    subject: '',
    message: '',
    preferredContact: 'email'
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

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
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
          phone: '',
          destinationInterest: '',
          subject: '',
          message: '',
          preferredContact: 'email'
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
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-stone-100">
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
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="transition-all duration-1000 delay-300 opacity-100 translate-y-0">
          <div className="flex justify-center mb-16">
            <div className="w-24 h-px bg-amber-500" />
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl text-slate-800 mb-20 text-center tracking-wide">
            Contact Us
          </h2>
          <br />
          <br />
          <form onSubmit={handleSubmit} className="space-y-8 max-w-4xl w-full mx-auto bg-white/90 rounded-2xl shadow-2xl border border-amber-100 backdrop-blur-lg px-10 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-4">
              <div>
                <label htmlFor="fullName" className="block text-base font-bold text-slate-700 mb-2">Full Name *</label>
                <input type="text" id="fullName" name="fullName" placeholder="Enter your full name" className="w-full border border-amber-200 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-amber-400 font-lato bg-white text-lg" />
              </div>
              <div>
                <label htmlFor="email" className="block text-base font-bold text-slate-700 mb-2">Email Address *</label>
                <input type="email" id="email" name="email" placeholder="Enter your email address" className="w-full border border-amber-200 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-amber-400 font-lato bg-white text-lg" />
              </div>
              <div>
                <label htmlFor="phoneNumber" className="block text-base font-bold text-slate-700 mb-2">Phone Number *</label>
                <input type="text" id="phoneNumber" name="phoneNumber" placeholder="Enter your phone number" className="w-full border border-amber-200 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-amber-400 font-lato bg-white text-lg" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-base font-bold text-slate-700 mb-2">Subject *</label>
                <input type="text" id="subject" name="subject" placeholder="Enter the subject" className="w-full border border-amber-200 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-amber-400 font-lato bg-white text-lg" />
              </div>
            </div>
            <div className="px-4">
              <label htmlFor="message" className="block text-base font-bold text-slate-700 mb-2">Message *</label>
              <textarea id="message" name="message" rows={6} placeholder="Type your message here." className="w-full border border-amber-200 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-amber-400 font-lato bg-white text-lg resize-none" />
            </div>
            <div className="flex justify-end px-4 pt-2">
              <button type="submit" className="text-lg font-bold font-lato bg-gradient-to-r from-amber-500 to-indigo-600 hover:from-amber-600 hover:to-indigo-700 text-white rounded-xl px-12 py-4 shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-400">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
