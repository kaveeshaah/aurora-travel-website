'use client';

import { useState } from 'react';
import { bookingApi, BookingFormData } from '@/lib/api';

export default function BookingForm() {
  const [formData, setFormData] = useState<BookingFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    destination: '',
    travelDates: {
      start: '',
      end: ''
    },
    travelers: 1,
    budget: undefined,
    specialRequests: '',
    accommodationType: 'luxury',
    interests: []
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const interestOptions = [
    'beach', 'mountain', 'city', 'culture', 'adventure', 'relaxation',
    'food', 'wine', 'spa', 'wildlife', 'history', 'art'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (name === 'travelers' || name === 'budget') {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'number' ? parseInt(value) || 0 : value
      }));
    } else if (name.startsWith('travelDates.')) {
      const dateField = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        travelDates: {
          ...prev.travelDates,
          [dateField]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests?.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...(prev.interests || []), interest]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await bookingApi.submitBooking(formData);
      
      if (response.success) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          destination: '',
          travelDates: {
            start: '',
            end: ''
          },
          travelers: 1,
          budget: undefined,
          specialRequests: '',
          accommodationType: 'luxury',
          interests: []
        });
      } else {
        setSubmitStatus('error');
        setErrorMessage(response.message || 'Failed to submit booking inquiry');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">
          Plan Your Journey
        </h2>
        <p className="text-gray-600">
          Share your travel dreams with us and let our experts craft the perfect luxury experience.
        </p>
      </div>

      {submitStatus === 'success' && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <div className="flex items-center">
            <div className="text-green-600 mr-3">✓</div>
            <p className="text-green-800">
              Thank you for your booking inquiry! Our travel consultant will contact you within 2 hours.
            </p>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <div className="flex items-center">
            <div className="text-red-600 mr-3">✗</div>
            <p className="text-red-800">
              {errorMessage}
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Personal Information */}
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your first name"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your last name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your phone number"
              />
            </div>
          </div>
        </div>

        {/* Travel Details */}
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Travel Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-2">
                Destination *
              </label>
              <input
                type="text"
                id="destination"
                name="destination"
                value={formData.destination}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Where would you like to go?"
              />
            </div>

            <div>
              <label htmlFor="travelers" className="block text-sm font-medium text-gray-700 mb-2">
                Number of Travelers *
              </label>
              <select
                id="travelers"
                name="travelers"
                value={formData.travelers}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {Array.from({ length: 20 }, (_, i) => i + 1).map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="travelDates.start" className="block text-sm font-medium text-gray-700 mb-2">
                Departure Date *
              </label>
              <input
                type="date"
                id="travelDates.start"
                name="travelDates.start"
                value={formData.travelDates.start}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="travelDates.end" className="block text-sm font-medium text-gray-700 mb-2">
                Return Date *
              </label>
              <input
                type="date"
                id="travelDates.end"
                name="travelDates.end"
                value={formData.travelDates.end}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                Budget (USD)
              </label>
              <input
                type="number"
                id="budget"
                name="budget"
                value={formData.budget || ''}
                onChange={handleInputChange}
                min="1000"
                step="1000"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your budget"
              />
            </div>

            <div>
              <label htmlFor="accommodationType" className="block text-sm font-medium text-gray-700 mb-2">
                Accommodation Type
              </label>
              <select
                id="accommodationType"
                name="accommodationType"
                value={formData.accommodationType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="luxury">Luxury</option>
                <option value="boutique">Boutique</option>
                <option value="resort">Resort</option>
                <option value="villa">Private Villa</option>
                <option value="hotel">Hotel</option>
              </select>
            </div>
          </div>
        </div>

        {/* Interests */}
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Travel Interests</h3>
          <p className="text-gray-600 mb-4">Select all that apply to help us customize your experience:</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {interestOptions.map(interest => (
              <label key={interest} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.interests?.includes(interest) || false}
                  onChange={() => handleInterestChange(interest)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700 capitalize">{interest}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Special Requests */}
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Special Requests</h3>
          <div>
            <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-2">
              Additional Information
            </label>
            <textarea
              id="specialRequests"
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder="Any special requests, dietary restrictions, accessibility needs, or other important information..."
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-4 px-8 rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-lg"
        >
          {isSubmitting ? 'Submitting Inquiry...' : 'Submit Booking Inquiry'}
        </button>
      </form>
    </div>
  );
}
