'use client';

import React, { useState, useEffect } from 'react';
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
}

export default function FormSection() {
  const [isVisible, setIsVisible] = useState(false);
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
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
    setSubmitStatus('idle');
    setErrorMessage('');

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
        setSubmitStatus('success');
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
        setSubmitStatus('error');
        if (result.errors) {
          setErrors(result.errors);
        } else {
          setErrorMessage(result.message || 'Something went wrong. Please try again later.');
        }
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setErrorMessage('Unable to send message. Please check your connection and try again.');
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
          alt="Soft travel texture"
          fill
          className="object-cover opacity-30"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/70 to-stone-100/70" />
      </div>

      <div className="relative z-10 px-6 max-w-6xl mx-auto w-full">
        <div className={`transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>

          {/* Section divider line */}
          <div className="flex justify-center mb-16">
            <div className="w-24 h-px bg-amber-500" />
          </div>

          <h2 className="font-serif text-4xl lg:text-5xl text-slate-800 mb-20 text-center tracking-wide">
            Send Us a Message
          </h2>
          <br />

          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              <div className="w-full">
                <div className="text-center mb-8">
                  <p className="text-slate-600">
                    Ready to plan your next luxury adventure? Our travel experts are here to help.
                  </p>
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                    <div className="flex items-center">
                      <LightweightIcon name="mdi:check-circle" className="text-green-600 mr-3" size={20} />
                      <p className="text-green-800">
                        Thank you for your message! Well get back to you within 24 hours.
                      </p>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                    <div className="flex items-center">
                      <LightweightIcon name="mdi:alert-circle" className="text-red-600 mr-3" size={20} />
                      <p className="text-red-800">
                        {errorMessage}
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="mx-auto max-w-3xl bg-white/90 rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl border border-slate-200 backdrop-blur space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3.5 border rounded-lg bg-white focus:ring-2 focus:ring-amber-500 focus:border-transparent ${
                          errors.name ? 'border-red-500' : 'border-slate-300'
                        }`}
                        placeholder="Enter your full name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                          <LightweightIcon name="mdi:alert-circle" size={16} />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3.5 border rounded-lg bg-white focus:ring-2 focus:ring-amber-500 focus:border-transparent ${
                          errors.email ? 'border-red-500' : 'border-slate-300'
                        }`}
                        placeholder="Enter your email address"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                          <LightweightIcon name="mdi:alert-circle" size={16} />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3.5 border border-slate-300 rounded-lg bg-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div>
                      <label htmlFor="destinationInterest" className="block text-sm font-medium text-slate-700 mb-2">
                        Destination Interest *
                      </label>
                      <select
                        id="destinationInterest"
                        name="destinationInterest"
                        value={formData.destinationInterest}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3.5 border rounded-lg bg-white focus:ring-2 focus:ring-amber-500 focus:border-transparent ${
                          errors.destinationInterest ? 'border-red-500' : 'border-slate-300'
                        }`}
                      >
                        <option value="">Select a destination...</option>
                        <option value="europe">Europe</option>
                        <option value="asia">Asia</option>
                        <option value="africa">Africa</option>
                        <option value="north-america">North America</option>
                        <option value="south-america">South America</option>
                        <option value="oceania">Oceania</option>
                        <option value="middle-east">Middle East</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.destinationInterest && (
                        <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                          <LightweightIcon name="mdi:alert-circle" size={16} />
                          {errors.destinationInterest}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="preferredContact" className="block text-sm font-medium text-slate-700 mb-2">
                      Preferred Contact Method
                    </label>
                    <select
                      id="preferredContact"
                      name="preferredContact"
                      value={formData.preferredContact}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3.5 border border-slate-300 rounded-lg bg-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    >
                      <option value="email">Email</option>
                      <option value="phone">Phone</option>
                      <option value="either">Either</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3.5 border rounded-lg bg-white focus:ring-2 focus:ring-amber-500 focus:border-transparent ${
                        errors.subject ? 'border-red-500' : 'border-slate-300'
                      }`}
                      placeholder="What is this regarding?"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                        <LightweightIcon name="mdi:alert-circle" size={16} />
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className={`w-full px-4 py-3.5 border rounded-lg bg-white focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none ${
                        errors.message ? 'border-red-500' : 'border-slate-300'
                      }`}
                      placeholder="Tell us about your dream destination and travel preferences..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                        <LightweightIcon name="mdi:alert-circle" size={16} />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto mx-auto bg-slate-900 text-white py-3 px-8 rounded-lg font-medium hover:bg-slate-800 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <LightweightIcon name="mdi:loading" className="animate-spin" size={20} />
                        Sending...
                      </>
                    ) : (
                      <>
                        <LightweightIcon name="mdi:send" size={20} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


