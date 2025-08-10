// Booking System Integration Service
// This can be integrated with services like Calendly, Acuity, or custom booking system

interface BookingData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
}

class BookingService {
  private apiEndpoint: string;
  
  constructor() {
    // Replace with your actual booking system API endpoint
    this.apiEndpoint = process.env.REACT_APP_BOOKING_API_URL || '';
  }
  
  async createBooking(data: BookingData): Promise<any> {
    try {
      const response = await fetch(`${this.apiEndpoint}/bookings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.REACT_APP_BOOKING_API_KEY}`,
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error('Failed to create booking');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Booking creation failed:', error);
      throw error;
    }
  }
  
  async getAvailableSlots(date: string, service: string): Promise<string[]> {
    try {
      const response = await fetch(
        `${this.apiEndpoint}/availability?date=${date}&service=${service}`,
        {
          headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_BOOKING_API_KEY}`,
          },
        }
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch availability');
      }
      
      const data = await response.json();
      return data.slots;
    } catch (error) {
      console.error('Failed to fetch available slots:', error);
      // Return mock data for development
      return ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM'];
    }
  }
  
  async cancelBooking(bookingId: string): Promise<void> {
    try {
      const response = await fetch(`${this.apiEndpoint}/bookings/${bookingId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_BOOKING_API_KEY}`,
        },
      });
      
      if (!response.ok) {
        throw new Error('Failed to cancel booking');
      }
    } catch (error) {
      console.error('Booking cancellation failed:', error);
      throw error;
    }
  }
  
  async rescheduleBooking(bookingId: string, newDate: string, newTime: string): Promise<any> {
    try {
      const response = await fetch(`${this.apiEndpoint}/bookings/${bookingId}/reschedule`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.REACT_APP_BOOKING_API_KEY}`,
        },
        body: JSON.stringify({ date: newDate, time: newTime }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to reschedule booking');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Booking rescheduling failed:', error);
      throw error;
    }
  }
}

export default new BookingService();