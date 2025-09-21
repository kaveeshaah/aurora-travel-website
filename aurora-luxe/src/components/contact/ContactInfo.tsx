'use client';

import { MapPin, Phone, Mail, Clock, LucideIcon } from 'lucide-react';

interface ContactInfoItem {
  icon: LucideIcon;
  title: string;
  details: string[];
}

const contactInfo: ContactInfoItem[] = [
  {
    icon: MapPin,
    title: 'Address',
    details: ['123 Luxury Avenue', 'New York, NY 10001', 'United States']
  },
  {
    icon: Phone,
    title: 'Phone',
    details: ['+1 (555) 123-4567', '+1 (555) 987-6543']
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['info@auroraluxe.com', 'concierge@auroraluxe.com']
  },
  {
    icon: Clock,
    title: 'Hours',
    details: ['Monday - Friday: 9AM - 6PM', 'Weekend: 10AM - 4PM', '24/7 Emergency Support']
  }
];

export default function ContactInfo() {
  return (
    <div className="bg-gray-50 rounded-2xl p-8">
      <h3 className="font-serif text-2xl font-bold text-gray-900 mb-8">
        Get in Touch
      </h3>

      <div className="space-y-8">
        {contactInfo.map((info, index) => {
          const IconComponent = info.icon;
          return (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <IconComponent className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-gray-900 mb-2">
                  {info.title}
                </h4>
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-gray-600 text-sm">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 pt-8 border-t border-gray-200">
        <h4 className="font-serif font-bold text-gray-900 mb-4">
          Follow Us
        </h4>
        <div className="flex space-x-4">
          <button className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
            f
          </button>
          <button className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
            t
          </button>
          <button className="w-10 h-10 bg-pink-500 text-white rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
            i
          </button>
        </div>
      </div>
    </div>
  );
}