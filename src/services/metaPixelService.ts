// Meta (Facebook) Pixel Integration Service for Ad Tracking

interface MetaPixelEvent {
  eventName: string;
  parameters?: Record<string, any>;
}

interface MetaPixelUserData {
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  dateOfBirth?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
}

class MetaPixelService {
  private pixelId: string;
  private isInitialized: boolean = false;
  
  constructor() {
    this.pixelId = process.env.REACT_APP_META_PIXEL_ID || '';
  }
  
  // Initialize Meta Pixel
  initialize(): void {
    if (this.isInitialized || !this.pixelId) return;
    
    if (typeof window !== 'undefined') {
      // Meta Pixel base code
      (function(f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
        if (f.fbq) return;
        n = f.fbq = function() {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
      
      // Initialize pixel
      (window as any).fbq('init', this.pixelId);
      (window as any).fbq('track', 'PageView');
      
      this.isInitialized = true;
    }
  }
  
  // Track standard events
  trackPageView(): void {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'PageView');
    }
  }
  
  trackViewContent(contentName: string, contentCategory: string, value?: number): void {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'ViewContent', {
        content_name: contentName,
        content_category: contentCategory,
        value: value,
        currency: 'CAD',
      });
    }
  }
  
  trackLead(value?: number, category?: string): void {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead', {
        value: value,
        currency: 'CAD',
        content_category: category || 'Aesthetic Treatment',
      });
    }
  }
  
  trackSchedule(serviceName: string, value?: number): void {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Schedule', {
        content_name: serviceName,
        value: value,
        currency: 'CAD',
      });
    }
  }
  
  trackContact(method: string): void {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Contact', {
        contact_method: method,
      });
    }
  }
  
  trackCompleteRegistration(status: string, value?: number): void {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'CompleteRegistration', {
        status: status,
        value: value,
        currency: 'CAD',
      });
    }
  }
  
  // Track custom events
  trackCustomEvent(event: MetaPixelEvent): void {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('trackCustom', event.eventName, event.parameters);
    }
  }
  
  // Advanced matching - hash user data for better ad targeting
  setUserData(userData: MetaPixelUserData): void {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      const hashedData: any = {};
      
      // Hash sensitive data (Meta Pixel will hash automatically)
      if (userData.email) hashedData.em = userData.email.toLowerCase();
      if (userData.phone) hashedData.ph = userData.phone.replace(/\D/g, '');
      if (userData.firstName) hashedData.fn = userData.firstName.toLowerCase();
      if (userData.lastName) hashedData.ln = userData.lastName.toLowerCase();
      if (userData.dateOfBirth) hashedData.db = userData.dateOfBirth.replace(/\D/g, '');
      if (userData.city) hashedData.ct = userData.city.toLowerCase();
      if (userData.state) hashedData.st = userData.state.toLowerCase();
      if (userData.zipCode) hashedData.zp = userData.zipCode;
      if (userData.country) hashedData.country = userData.country.toLowerCase();
      
      (window as any).fbq('init', this.pixelId, hashedData);
    }
  }
  
  // Track form submissions
  trackFormSubmission(formName: string, formData: any): void {
    this.trackCustomEvent({
      eventName: 'FormSubmission',
      parameters: {
        form_name: formName,
        service_interest: formData.service,
        has_phone: !!formData.phone,
        has_email: !!formData.email,
      },
    });
    
    // Also track as a lead
    this.trackLead();
  }
}

export default new MetaPixelService();