// Klaviyo Integration Service for SMS/Email Marketing

interface KlaviyoProfile {
  email: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  properties?: Record<string, any>;
}

interface KlaviyoEvent {
  event: string;
  customerProperties: KlaviyoProfile;
  properties?: Record<string, any>;
}

class KlaviyoService {
  private publicKey: string;
  private apiEndpoint: string;
  
  constructor() {
    this.publicKey = process.env.REACT_APP_KLAVIYO_PUBLIC_KEY || '';
    this.apiEndpoint = 'https://a.klaviyo.com/api';
  }
  
  // Identify a user/profile in Klaviyo
  async identify(profile: KlaviyoProfile): Promise<void> {
    try {
      const data = {
        token: this.publicKey,
        properties: {
          $email: profile.email,
          $first_name: profile.firstName,
          $last_name: profile.lastName,
          $phone_number: profile.phone,
          ...profile.properties,
        },
      };
      
      // Using Klaviyo's track API for client-side
      const response = await fetch(`${this.apiEndpoint}/identify`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `data=${encodeURIComponent(JSON.stringify(data))}`,
      });
      
      if (!response.ok) {
        throw new Error('Failed to identify profile in Klaviyo');
      }
    } catch (error) {
      console.error('Klaviyo identify failed:', error);
    }
  }
  
  // Track an event in Klaviyo
  async trackEvent(event: KlaviyoEvent): Promise<void> {
    try {
      const data = {
        token: this.publicKey,
        event: event.event,
        customer_properties: {
          $email: event.customerProperties.email,
          $first_name: event.customerProperties.firstName,
          $last_name: event.customerProperties.lastName,
          $phone_number: event.customerProperties.phone,
        },
        properties: event.properties,
        time: Math.floor(Date.now() / 1000),
      };
      
      const response = await fetch(`${this.apiEndpoint}/track`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `data=${encodeURIComponent(JSON.stringify(data))}`,
      });
      
      if (!response.ok) {
        throw new Error('Failed to track event in Klaviyo');
      }
    } catch (error) {
      console.error('Klaviyo track event failed:', error);
    }
  }
  
  // Subscribe to newsletter
  async subscribeToNewsletter(email: string, listId?: string): Promise<void> {
    try {
      const data = {
        api_key: this.publicKey,
        profiles: [
          {
            email: email,
            $consent: ['email'],
          },
        ],
      };
      
      // You'll need to implement this on your backend for security
      // This is just a placeholder for the frontend implementation
      console.log('Newsletter subscription:', email);
      
      // Track the subscription event
      await this.trackEvent({
        event: 'Newsletter Subscription',
        customerProperties: { email },
        properties: { list_id: listId || 'default' },
      });
    } catch (error) {
      console.error('Newsletter subscription failed:', error);
    }
  }
  
  // Track form submission
  async trackFormSubmission(formName: string, data: any): Promise<void> {
    try {
      await this.trackEvent({
        event: `Form Submitted - ${formName}`,
        customerProperties: {
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          phone: data.phone,
        },
        properties: {
          form_name: formName,
          ...data,
        },
      });
    } catch (error) {
      console.error('Form submission tracking failed:', error);
    }
  }
}

export default new KlaviyoService();