// HubSpot Integration Service for Lead Tracking

interface HubSpotContact {
  email: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  company?: string;
  properties?: Record<string, any>;
}

interface HubSpotForm {
  portalId: string;
  formId: string;
  fields: Record<string, any>;
}

class HubSpotService {
  private portalId: string;
  private apiKey: string;
  
  constructor() {
    this.portalId = process.env.REACT_APP_HUBSPOT_PORTAL_ID || '';
    this.apiKey = process.env.REACT_APP_HUBSPOT_API_KEY || '';
  }
  
  // Initialize HubSpot tracking code
  initializeTracking(): void {
    if (typeof window !== 'undefined') {
      // HubSpot tracking code
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.defer = true;
      script.id = 'hs-script-loader';
      script.src = `//js.hs-scripts.com/${this.portalId}.js`;
      
      if (!document.getElementById('hs-script-loader')) {
        document.getElementsByTagName('head')[0].appendChild(script);
      }
    }
  }
  
  // Submit form to HubSpot
  async submitForm(formData: HubSpotForm): Promise<void> {
    try {
      const fields = Object.entries(formData.fields).map(([name, value]) => ({
        name,
        value,
      }));
      
      const response = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${formData.portalId}/${formData.formId}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fields,
            context: {
              pageUri: window.location.href,
              pageName: document.title,
            },
          }),
        }
      );
      
      if (!response.ok) {
        throw new Error('Failed to submit form to HubSpot');
      }
    } catch (error) {
      console.error('HubSpot form submission failed:', error);
      throw error;
    }
  }
  
  // Create or update contact
  async createOrUpdateContact(contact: HubSpotContact): Promise<void> {
    try {
      const properties = {
        email: contact.email,
        firstname: contact.firstName,
        lastname: contact.lastName,
        phone: contact.phone,
        company: contact.company,
        ...contact.properties,
      };
      
      // This should be implemented on your backend for security
      // Frontend implementation is for demonstration
      console.log('Creating/updating HubSpot contact:', properties);
      
      // Use HubSpot Forms API for client-side
      await this.submitForm({
        portalId: this.portalId,
        formId: 'contact-form', // Replace with your actual form ID
        fields: properties,
      });
    } catch (error) {
      console.error('Contact creation/update failed:', error);
    }
  }
  
  // Track page view
  trackPageView(pageName: string, properties?: Record<string, any>): void {
    if (typeof window !== 'undefined' && (window as any)._hsq) {
      (window as any)._hsq.push(['trackPageView']);
      
      if (properties) {
        (window as any)._hsq.push(['identify', properties]);
      }
    }
  }
  
  // Track custom event
  trackEvent(eventName: string, properties?: Record<string, any>): void {
    if (typeof window !== 'undefined' && (window as any)._hsq) {
      (window as any)._hsq.push(['trackEvent', {
        id: eventName,
        value: properties,
      }]);
    }
  }
  
  // Track form view
  trackFormView(formId: string): void {
    if (typeof window !== 'undefined' && (window as any).hbspt) {
      (window as any).hbspt.forms.create({
        portalId: this.portalId,
        formId: formId,
        target: `#hubspot-form-${formId}`,
      });
    }
  }
  
  // Set user identity
  setUserIdentity(email: string, properties?: Record<string, any>): void {
    if (typeof window !== 'undefined' && (window as any)._hsq) {
      (window as any)._hsq.push(['identify', {
        email: email,
        ...properties,
      }]);
    }
  }
}

export default new HubSpotService();