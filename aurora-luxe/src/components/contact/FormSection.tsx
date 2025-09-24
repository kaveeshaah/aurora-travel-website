'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import LightweightIcon from '../common/LightweightIcon';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  preferredContact: 'email' | 'phone' | 'either';
  destinationInterest: string;
  travelDates: string;
  budget: string;
  groupSize: string;
}

interface ValidationErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  destinationInterest?: string;
  groupSize?: string;
  general?: string;
}

export default function RedesignContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'email',
    destinationInterest: '',
    travelDates: '',
    budget: '',
    groupSize: ''
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateEmail = (email: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePhone = (phone: string): boolean => /^[\+]?[1-9][\d]{0,15}$/.test(phone.replace(/[\s\-\(\)]/g, ''));

  const validateForm = (): ValidationErrors => {
    const newErrors: ValidationErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    else if (formData.name.trim().length < 2) newErrors.name = 'Name must be at least 2 characters';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!validateEmail(formData.email)) newErrors.email = 'Please enter a valid email address';
    if (formData.phone && !validatePhone(formData.phone)) newErrors.phone = 'Please enter a valid phone number';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    else if (formData.subject.trim().length < 5) newErrors.subject = 'Subject must be at least 5 characters';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';
    if (!formData.destinationInterest) newErrors.destinationInterest = 'Please select a destination';
    if (!formData.groupSize) newErrors.groupSize = 'Please select your group size';
    return newErrors;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ValidationErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      await addDoc(collection(db, 'contact-inquiries'), {
        ...formData,
        phone: formData.phone || undefined,
        travelDates: formData.travelDates || undefined,
        budget: formData.budget || undefined,
        createdAt: Timestamp.now(),
        status: 'new'
      });
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        preferredContact: 'email',
        destinationInterest: '',
        travelDates: '',
        budget: '',
        groupSize: ''
      });
      setErrors({});
    } catch {
      setSubmitStatus('error');
      setErrors({ general: 'Unable to send your message. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const destinationOptions = [
    { value: '', label: 'Select a destination...' },
    { value: 'europe', label: 'Europe' },
    { value: 'asia', label: 'Asia & Pacific' },
    { value: 'africa', label: 'Africa & Middle East' },
    { value: 'north-america', label: 'North America' },
    { value: 'south-america', label: 'South America' },
    { value: 'oceania', label: 'Australia & New Zealand' },
    { value: 'luxury-cruises', label: 'Luxury Cruises' },
    { value: 'adventure-tours', label: 'Adventure Tours' },
    { value: 'cultural-heritage', label: 'Cultural & Heritage' },
    { value: 'multiple', label: 'Multiple Destinations' },
    { value: 'other', label: 'Other' }
  ];

  const budgetRanges = [
    { value: '', label: 'Select budget range...' },
    { value: 'under-5k', label: 'Under $5,000 per person' },
    { value: '5k-10k', label: '$5,000 - $10,000 per person' },
    { value: '10k-20k', label: '$10,000 - $20,000 per person' },
    { value: '20k-50k', label: '$20,000 - $50,000 per person' },
    { value: 'over-50k', label: 'Over $50,000 per person' },
    { value: 'flexible', label: 'Flexible / Discuss' }
  ];

  const groupSizes = [
    { value: '', label: 'Select group size...' },
    { value: '1', label: 'Solo Traveler' },
    { value: '2', label: 'Couple' },
    { value: '3-4', label: 'Small Group (3-4)' },
    { value: '5-8', label: 'Medium Group (5-8)' },
    { value: '9-15', label: 'Large Group (9-15)' },
    { value: '16+', label: 'Corporate/Event Group (16+)' }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-50 flex items-center justify-center px-6 py-12">
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-3xl w-full p-10 md:p-14">
        <h2 className="font-serif text-4xl text-center text-amber-700 mb-8 tracking-wide">
          Plan Your Dream Journey
        </h2>

        {submitStatus === 'success' && (
          <div className="mb-8 p-5 rounded-lg bg-green-50 border border-green-200 text-green-700 text-center font-semibold shadow-sm">
            Thank you! Your inquiry has been received. We&apos;ll respond within 24 hours.
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="mb-8 p-5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-center font-semibold shadow-sm">
            Oops! Something went wrong. Please try again later or contact support.
          </div>
        )}
        {errors.general && (
          <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-center font-semibold shadow-sm">
            {errors.general}
          </div>
        )}

        <form className="space-y-8" onSubmit={handleSubmit} noValidate>
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label htmlFor="name" className="font-semibold text-amber-700">
                Full Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleInputChange}
                className={`mt-2 block w-full rounded-xl border border-amber-300 bg-amber-50 px-5 py-3 text-lg focus:ring-amber-400 focus:border-amber-400 ${
                  errors.name ? 'border-red-400 bg-red-50' : 'hover:border-amber-400'
                }`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="font-semibold text-amber-700">
                Email Address <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email address"
                value={formData.email}
                onChange={handleInputChange}
                className={`mt-2 block w-full rounded-xl border border-amber-300 bg-amber-50 px-5 py-3 text-lg focus:ring-amber-400 focus:border-amber-400 ${
                  errors.email ? 'border-red-400 bg-red-50' : 'hover:border-amber-400'
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>
          </div>

          {/* Phone and Contact Preference */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label htmlFor="phone" className="font-semibold text-amber-700">
                Phone Number <span className="text-amber-500 text-sm">(optional)</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+1 (555) 123-4567"
                value={formData.phone}
                onChange={handleInputChange}
                className={`mt-2 block w-full rounded-xl border border-amber-300 bg-amber-50 px-5 py-3 text-lg focus:ring-amber-400 focus:border-amber-400 ${
                  errors.phone ? 'border-red-400 bg-red-50' : 'hover:border-amber-400'
                }`}
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
              )}
            </div>

            <div>
              <label htmlFor="preferredContact" className="font-semibold text-amber-700">
                Preferred Contact Method
              </label>
              <select
                id="preferredContact"
                name="preferredContact"
                value={formData.preferredContact}
                onChange={handleInputChange}
                className="mt-2 block w-full rounded-xl border border-amber-300 bg-amber-50 px-5 py-3 text-lg focus:ring-amber-400 focus:border-amber-400 hover:border-amber-400"
              >
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                <option value="either">Either Email or Phone</option>
              </select>
            </div>
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="font-semibold text-amber-700">
              Subject <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Luxury honeymoon trip to Maldives"
              value={formData.subject}
              onChange={handleInputChange}
              className={`mt-2 block w-full rounded-xl border border-amber-300 bg-amber-50 px-5 py-3 text-lg focus:ring-amber-400 focus:border-amber-400 ${
                errors.subject ? 'border-red-400 bg-red-50' : 'hover:border-amber-400'
              }`}
            />
            {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}
          </div>

          {/* Travel Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <label htmlFor="destinationInterest" className="font-semibold text-amber-700">
                Destination <span className="text-red-600">*</span>
              </label>
              <select
                id="destinationInterest"
                name="destinationInterest"
                value={formData.destinationInterest}
                onChange={handleInputChange}
                className={`mt-2 block w-full rounded-xl border border-amber-300 bg-amber-50 px-5 py-3 text-lg focus:ring-amber-400 focus:border-amber-400 ${
                  errors.destinationInterest ? 'border-red-400 bg-red-50' : 'hover:border-amber-400'
                }`}
              >
                {destinationOptions.map(({ value, label }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
              {errors.destinationInterest && (
                <p className="mt-1 text-sm text-red-600">{errors.destinationInterest}</p>
              )}
            </div>

            <div>
              <label htmlFor="groupSize" className="font-semibold text-amber-700">
                Group Size <span className="text-red-600">*</span>
              </label>
              <select
                id="groupSize"
                name="groupSize"
                value={formData.groupSize}
                onChange={handleInputChange}
                className={`mt-2 block w-full rounded-xl border border-amber-300 bg-amber-50 px-5 py-3 text-lg focus:ring-amber-400 focus:border-amber-400 ${
                  errors.groupSize ? 'border-red-400 bg-red-50' : 'hover:border-amber-400'
                }`}
              >
                {groupSizes.map(({ value, label }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
              {errors.groupSize && <p className="mt-1 text-sm text-red-600">{errors.groupSize}</p>}
            </div>

            <div>
              <label htmlFor="budget" className="font-semibold text-amber-700">
                Budget <span className="text-amber-500 text-sm">(optional)</span>
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className="mt-2 block w-full rounded-xl border border-amber-300 bg-amber-50 px-5 py-3 text-lg focus:ring-amber-400 focus:border-amber-400 hover:border-amber-400"
              >
                {budgetRanges.map(({ value, label }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Travel Dates */}
          <div>
            <label htmlFor="travelDates" className="font-semibold text-amber-700">
              Preferred Travel Dates <span className="text-amber-500 text-sm">(optional)</span>
            </label>
            <input
              type="text"
              id="travelDates"
              name="travelDates"
              placeholder="e.g. December 2025, flexible dates"
              value={formData.travelDates}
              onChange={handleInputChange}
              className="mt-2 block w-full rounded-xl border border-amber-300 bg-amber-50 px-5 py-3 text-lg focus:ring-amber-400 focus:border-amber-400"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="font-semibold text-amber-700">
              Tell us about your dream trip <span className="text-red-600">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Share preferences, occasions, must-haves, or requests..."
              value={formData.message}
              onChange={handleInputChange}
              className={`mt-2 block w-full rounded-xl border border-amber-300 bg-amber-50 px-5 py-3 text-lg focus:ring-amber-400 focus:border-amber-400 resize-y ${
                errors.message ? 'border-red-400 bg-red-50' : 'hover:border-amber-400'
              }`}
            />
            {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-6 bg-gradient-to-r from-amber-500 to-amber-700 text-white font-serif text-xl py-4 rounded-xl shadow-lg hover:from-amber-600 hover:to-amber-800 disabled:opacity-60 transition"
          >
            {isSubmitting ? 'Sending Your Journey Request...' : 'Send My Journey Request'}
          </button>

          <p className="text-center text-amber-400 text-xs mt-4">
            Your data is secure & never shared with third parties.
          </p>
        </form>
      </div>
    </section>
  );
}
