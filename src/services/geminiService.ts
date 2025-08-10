// Google Gemini API Service for AI Chatbot

interface GeminiConfig {
  apiKey: string;
  model: string;
  temperature: number;
  maxTokens: number;
}

class GeminiService {
  private config: GeminiConfig;
  private apiEndpoint: string;
  private conversationContext: string[];

  constructor() {
    this.config = {
      apiKey: process.env.REACT_APP_GEMINI_API_KEY || '',
      model: 'gemini-pro',
      temperature: 0.7,
      maxTokens: 1024,
    };
    this.apiEndpoint = 'https://generativelanguage.googleapis.com/v1beta';
    this.conversationContext = [
      `You are a helpful beauty consultant for Aesthetic Clinic Toronto. 
      You provide information about our services including:
      - Anti-wrinkle injections (Botox/Dysport)
      - Dermal fillers
      - Facial treatments
      - Skin boosters
      - Acne/scar treatments
      - Hair loss treatments
      
      Important details:
      - Location: 123 Beauty Lane, Toronto, ON M5V 3A8
      - Phone: (416) 555-0123
      - Email: info@aestheticclinic.ca
      - Hours: Mon-Fri 9AM-7PM, Sat 9AM-5PM
      
      Be friendly, professional, and helpful. If asked about pricing, mention that consultations are free and pricing varies based on treatment needs.
      Always encourage booking a free consultation for personalized advice.`,
    ];
  }

  async sendMessage(message: string): Promise<string> {
    if (!this.config.apiKey) {
      return this.getFallbackResponse(message);
    }

    try {
      const response = await fetch(
        `${this.apiEndpoint}/models/${this.config.model}:generateContent?key=${this.config.apiKey}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `${this.conversationContext.join('\n')}\n\nUser: ${message}\n\nAssistant:`,
                  },
                ],
              },
            ],
            generationConfig: {
              temperature: this.config.temperature,
              maxOutputTokens: this.config.maxTokens,
            },
            safetySettings: [
              {
                category: 'HARM_CATEGORY_HARASSMENT',
                threshold: 'BLOCK_ONLY_HIGH',
              },
              {
                category: 'HARM_CATEGORY_HATE_SPEECH',
                threshold: 'BLOCK_ONLY_HIGH',
              },
            ],
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to get response from Gemini');
      }

      const data = await response.json();
      const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || 
        'I apologize, but I couldn\'t process your request. Please try again.';
      
      // Add to conversation context (keep last 10 exchanges)
      this.conversationContext.push(`User: ${message}`);
      this.conversationContext.push(`Assistant: ${aiResponse}`);
      if (this.conversationContext.length > 20) {
        this.conversationContext = [
          this.conversationContext[0], // Keep system prompt
          ...this.conversationContext.slice(-19), // Keep last 19 messages
        ];
      }

      return aiResponse;
    } catch (error) {
      console.error('Gemini API error:', error);
      return this.getFallbackResponse(message);
    }
  }

  private getFallbackResponse(message: string): string {
    const lowerMessage = message.toLowerCase();

    // Booking related
    if (lowerMessage.includes('book') || lowerMessage.includes('appointment') || lowerMessage.includes('consultation')) {
      return 'I\'d be happy to help you book a consultation! You can call us at (416) 555-0123 or use our online booking system. Our consultations are completely free and our experts will create a personalized treatment plan for you.';
    }

    // Services
    if (lowerMessage.includes('service') || lowerMessage.includes('treatment')) {
      return 'We offer a wide range of aesthetic treatments including:\n\n• Anti-wrinkle injections (Botox/Dysport)\n• Dermal fillers for lips and face\n• HydraFacial and chemical peels\n• Skin boosters for hydration\n• Acne and scar treatments\n• Hair loss solutions\n\nWhich service would you like to know more about?';
    }

    // Pricing
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('how much')) {
      return 'Our pricing varies based on the specific treatment and your individual needs. We offer:\n\n• Free initial consultations\n• Competitive pricing starting from $200\n• Flexible payment plans available\n\nFor accurate pricing, I recommend booking a free consultation where our experts can assess your needs and provide a detailed quote.';
    }

    // Location
    if (lowerMessage.includes('location') || lowerMessage.includes('where') || lowerMessage.includes('address')) {
      return 'We\'re conveniently located at:\n\n📍 123 Beauty Lane\nToronto, ON M5V 3A8\n\n🕒 Hours:\nMonday-Friday: 9AM-7PM\nSaturday: 9AM-5PM\nSunday: Closed\n\n📞 Phone: (416) 555-0123';
    }

    // Botox specific
    if (lowerMessage.includes('botox') || lowerMessage.includes('wrinkle')) {
      return 'Botox/Dysport treatments are excellent for reducing fine lines and wrinkles. Common treatment areas include:\n\n• Forehead lines\n• Crow\'s feet\n• Frown lines\n\nResults typically last 3-4 months. We use only genuine products and our certified injectors ensure natural-looking results. Would you like to book a free consultation?';
    }

    // Fillers specific
    if (lowerMessage.includes('filler') || lowerMessage.includes('lips')) {
      return 'Dermal fillers can enhance your natural beauty by:\n\n• Adding volume to lips\n• Restoring facial contours\n• Smoothing nasolabial folds\n• Enhancing cheeks\n\nWe use premium hyaluronic acid fillers that provide natural-looking results lasting 6-18 months. Book a free consultation to discuss your goals!';
    }

    // Contact
    if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('email')) {
      return 'Here\'s how you can reach us:\n\n📞 Phone: (416) 555-0123\n📧 Email: info@aestheticclinic.ca\n💬 Or continue chatting with me here!\n\nWe typically respond within 24 hours. How else can I help you today?';
    }

    // Default response
    return 'Thank you for your interest in Aesthetic Clinic Toronto! I\'m here to help with any questions about our treatments, booking consultations, or general inquiries. What would you like to know?';
  }

  clearContext(): void {
    this.conversationContext = [this.conversationContext[0]]; // Keep only system prompt
  }
}

export default new GeminiService();