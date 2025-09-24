// API configuration and utility functions
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  errors?: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  preferredContact?: 'email' | 'phone' | 'either';
}

export interface BookingFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  destination: string;
  travelDates: {
    start: string;
    end: string;
  };
  travelers: number;
  budget?: number;
  specialRequests?: string;
  accommodationType?: string;
  interests?: string[];
}

export interface NewsletterFormData {
  email: string;
  firstName?: string;
  interests?: string[];
}

// Generic API request function
async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const defaultOptions: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const config = { ...defaultOptions, ...options };

  try {
    const response = await fetch(url, config);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'An error occurred');
    }

    return data;
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
}

// Contact API functions
export const contactApi = {
  async submitContact(formData: ContactFormData): Promise<ApiResponse> {
    return apiRequest('/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
  },

  async getContacts(): Promise<ApiResponse> {
    return apiRequest('/contact');
  },

  async getContact(id: string): Promise<ApiResponse> {
    return apiRequest(`/contact/${id}`);
  },
};

// Booking API functions
export const bookingApi = {
  async submitBooking(formData: BookingFormData): Promise<ApiResponse> {
    return apiRequest('/booking', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
  },

  async getBookings(params?: {
    status?: string;
    destination?: string;
    limit?: number;
    offset?: number;
  }): Promise<ApiResponse> {
    const queryParams = new URLSearchParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          queryParams.append(key, value.toString());
        }
      });
    }
    
    const queryString = queryParams.toString();
    const endpoint = queryString ? `/booking?${queryString}` : '/booking';
    
    return apiRequest(endpoint);
  },

  async getBooking(id: string): Promise<ApiResponse> {
    return apiRequest(`/booking/${id}`);
  },

  async updateBooking(id: string, updates: Partial<BookingFormData>): Promise<ApiResponse> {
    return apiRequest(`/booking/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(updates),
    });
  },

  async cancelBooking(id: string): Promise<ApiResponse> {
    return apiRequest(`/booking/${id}`, {
      method: 'DELETE',
    });
  },
};

// Newsletter API functions
export const newsletterApi = {
  async subscribe(formData: NewsletterFormData): Promise<ApiResponse> {
    return apiRequest('/newsletter', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
  },

  async unsubscribe(email: string): Promise<ApiResponse> {
    return apiRequest('/newsletter/unsubscribe', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  },

  async getSubscribers(params?: {
    status?: string;
    limit?: number;
    offset?: number;
  }): Promise<ApiResponse> {
    const queryParams = new URLSearchParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          queryParams.append(key, value.toString());
        }
      });
    }
    
    const queryString = queryParams.toString();
    const endpoint = queryString ? `/newsletter?${queryString}` : '/newsletter';
    
    return apiRequest(endpoint);
  },

  async getNewsletterStats(): Promise<ApiResponse> {
    return apiRequest('/newsletter/stats');
  },
};

// Health check
export const healthApi = {
  async checkHealth(): Promise<ApiResponse> {
    return apiRequest('/health');
  },
};

const api = {
  contact: contactApi,
  booking: bookingApi,
  newsletter: newsletterApi,
  health: healthApi,
};

export default api;
