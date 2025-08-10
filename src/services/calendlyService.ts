// Calendly Integration Service for Booking System

interface CalendlyEvent {
  url: string;
  text?: string;
  color?: string;
  textColor?: string;
  branding?: boolean;
}

class CalendlyService {
  private calendlyUrl: string;
  private isLoaded: boolean = false;

  constructor() {
    // Replace with your actual Calendly URL
    this.calendlyUrl = process.env.REACT_APP_CALENDLY_URL || 'https://calendly.com/your-clinic';
  }

  // Load Calendly widget script
  loadScript(): Promise<void> {
    return new Promise((resolve) => {
      if (this.isLoaded) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = () => {
        this.isLoaded = true;
        resolve();
      };
      document.head.appendChild(script);
    });
  }

  // Open Calendly popup widget
  async openPopupWidget(options?: Partial<CalendlyEvent>): Promise<void> {
    await this.loadScript();

    if (typeof (window as any).Calendly !== 'undefined') {
      (window as any).Calendly.initPopupWidget({
        url: options?.url || this.calendlyUrl,
        text: options?.text || 'Book Consultation',
        color: options?.color || '#4b93c5',
        textColor: options?.textColor || '#ffffff',
        branding: options?.branding !== false,
      });
    }
  }

  // Initialize inline widget
  async initInlineWidget(
    containerElement: HTMLElement,
    options?: Partial<CalendlyEvent>
  ): Promise<void> {
    await this.loadScript();

    if (typeof (window as any).Calendly !== 'undefined') {
      (window as any).Calendly.initInlineWidget({
        url: options?.url || this.calendlyUrl,
        parentElement: containerElement,
        prefill: {},
        utm: {},
      });
    }
  }

  // Initialize badge widget
  async initBadgeWidget(options?: Partial<CalendlyEvent>): Promise<void> {
    await this.loadScript();

    if (typeof (window as any).Calendly !== 'undefined') {
      (window as any).Calendly.initBadgeWidget({
        url: options?.url || this.calendlyUrl,
        text: options?.text || 'Book Consultation',
        color: options?.color || '#4b93c5',
        textColor: options?.textColor || '#ffffff',
        branding: options?.branding !== false,
      });
    }
  }

  // Create a booking link with pre-filled data
  createBookingLink(params?: {
    name?: string;
    email?: string;
    customAnswers?: Record<string, string>;
  }): string {
    const url = new URL(this.calendlyUrl);
    
    if (params?.name) {
      url.searchParams.append('name', params.name);
    }
    
    if (params?.email) {
      url.searchParams.append('email', params.email);
    }
    
    if (params?.customAnswers) {
      Object.entries(params.customAnswers).forEach(([key, value]) => {
        url.searchParams.append(`a${key}`, value);
      });
    }
    
    return url.toString();
  }

  // Track booking events (requires Calendly Premium)
  listenForBookingEvents(callback: (event: any) => void): void {
    if (typeof window !== 'undefined') {
      window.addEventListener('message', (e) => {
        if (e.origin === 'https://calendly.com' && e.data.event) {
          callback(e.data);
        }
      });
    }
  }
}

export default new CalendlyService();