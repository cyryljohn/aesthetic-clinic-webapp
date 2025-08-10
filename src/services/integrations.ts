// Central integration initialization and management

import klaviyoService from './klaviyoService';
import hubspotService from './hubspotService';
import metaPixelService from './metaPixelService';
import bookingService from './bookingService';

class IntegrationsManager {
  private initialized: boolean = false;
  
  // Initialize all integrations
  initialize(): void {
    if (this.initialized) return;
    
    try {
      // Initialize Meta Pixel
      metaPixelService.initialize();
      
      // Initialize HubSpot tracking
      hubspotService.initializeTracking();
      
      // Log initialization
      console.log('All integrations initialized successfully');
      
      this.initialized = true;
    } catch (error) {
      console.error('Failed to initialize integrations:', error);
    }
  }
  
  // Track page views across all platforms
  trackPageView(pageName: string): void {
    metaPixelService.trackPageView();
    hubspotService.trackPageView(pageName);
  }
  
  // Track form submissions across all platforms
  async trackFormSubmission(formName: string, formData: any): Promise<void> {
    // Track in Meta Pixel
    metaPixelService.trackFormSubmission(formName, formData);
    
    // Track in Klaviyo
    await klaviyoService.trackFormSubmission(formName, formData);
    
    // Track in HubSpot
    hubspotService.trackEvent(`Form Submitted - ${formName}`, formData);
    
    // Create lead in HubSpot
    await hubspotService.createOrUpdateContact({
      email: formData.email,
      firstName: formData.firstName,
      lastName: formData.lastName,
      phone: formData.phone,
      properties: {
        service_interest: formData.service,
        form_name: formName,
      },
    });
  }
  
  // Track booking creation
  async trackBookingCreated(bookingData: any): Promise<void> {
    // Track in Meta Pixel
    metaPixelService.trackSchedule(bookingData.service, bookingData.value);
    
    // Track in Klaviyo
    await klaviyoService.trackEvent({
      event: 'Booking Created',
      customerProperties: {
        email: bookingData.email,
        firstName: bookingData.firstName,
        lastName: bookingData.lastName,
        phone: bookingData.phone,
      },
      properties: {
        service: bookingData.service,
        date: bookingData.preferredDate,
        time: bookingData.preferredTime,
      },
    });
    
    // Track in HubSpot
    hubspotService.trackEvent('Booking Created', bookingData);
  }
  
  // Track contact interactions
  trackContactInteraction(method: string, details?: any): void {
    metaPixelService.trackContact(method);
    hubspotService.trackEvent(`Contact - ${method}`, details);
  }
  
  // Set user identity across platforms
  async setUserIdentity(userData: {
    email: string;
    firstName?: string;
    lastName?: string;
    phone?: string;
  }): Promise<void> {
    // Set in Meta Pixel
    metaPixelService.setUserData({
      email: userData.email,
      firstName: userData.firstName,
      lastName: userData.lastName,
      phone: userData.phone,
    });
    
    // Set in HubSpot
    hubspotService.setUserIdentity(userData.email, {
      firstname: userData.firstName,
      lastname: userData.lastName,
      phone: userData.phone,
    });
    
    // Identify in Klaviyo
    await klaviyoService.identify({
      email: userData.email,
      firstName: userData.firstName,
      lastName: userData.lastName,
      phone: userData.phone,
    });
  }
}

export default new IntegrationsManager();