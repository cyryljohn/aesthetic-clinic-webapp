# API Setup Guide for Aesthetic Clinic Website

This guide will walk you through setting up all the necessary APIs and integrations for your aesthetic clinic website.

## 📋 Table of Contents
1. [Google Gemini API (AI Chatbot)](#1-google-gemini-api-ai-chatbot)
2. [Calendly (Booking System)](#2-calendly-booking-system)
3. [Klaviyo (Email/SMS Marketing)](#3-klaviyo-emailsms-marketing)
4. [HubSpot (CRM & Lead Tracking)](#4-hubspot-crm--lead-tracking)
5. [Meta Pixel (Facebook Ads)](#5-meta-pixel-facebook-ads)
6. [Backend Requirements](#6-backend-requirements)

---

## 1. Google Gemini API (AI Chatbot)

### Setup Steps:
1. **Get API Access:**
   - Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Sign in with your Google account
   - Click "Get API Key"
   - Create a new API key or use existing one
   - Copy the API key

2. **Configure in Project:**
   - Add to `.env.local`: `REACT_APP_GEMINI_API_KEY=your_api_key_here`

3. **Pricing:**
   - Free tier: 60 requests per minute
   - Paid: Starting at $0.00025 per 1K characters

### Features:
- AI-powered customer support
- 24/7 availability
- Contextual responses about services
- Appointment booking assistance

---

## 2. Calendly (Booking System)

### Setup Steps:
1. **Create Calendly Account:**
   - Go to [Calendly.com](https://calendly.com)
   - Sign up for a Professional account (required for API access)
   - Set up your availability and services

2. **Get Your Calendly URL:**
   - Go to Account Settings → Share Your Link
   - Copy your scheduling link (e.g., `https://calendly.com/your-clinic`)
   - Add to `.env.local`: `REACT_APP_CALENDLY_URL=your_calendly_url`

3. **Create Event Types:**
   - Create different event types for each service:
     - Initial Consultation (30 min)
     - Botox/Fillers Consultation (45 min)
     - Facial Treatment Booking (60 min)
     - Follow-up Appointment (15 min)

4. **Customize Appearance:**
   - Go to Appearance Settings
   - Set brand colors to match website (#4b93c5)
   - Add clinic logo
   - Customize confirmation messages

5. **Enable Integrations:**
   - Connect to Google Calendar
   - Set up email reminders
   - Configure SMS reminders (if available)

### Pricing:
- Basic: Free (limited features)
- Professional: $12/user/month (recommended)
- Teams: $20/user/month

---

## 3. Klaviyo (Email/SMS Marketing)

### Setup Steps:
1. **Create Klaviyo Account:**
   - Go to [Klaviyo.com](https://www.klaviyo.com)
   - Sign up for free account
   - Complete onboarding

2. **Get API Keys:**
   - Navigate to Account → Settings → API Keys
   - Generate a new Private API Key
   - Copy the Public API Key (starts with 'pk_')
   - Add to `.env.local`:
     ```
     REACT_APP_KLAVIYO_PUBLIC_KEY=pk_xxxxx
     REACT_APP_KLAVIYO_PRIVATE_KEY=sk_xxxxx
     ```

3. **Create Lists:**
   - Create "Newsletter Subscribers" list
   - Create "Consultation Requests" list
   - Create "Existing Clients" list

4. **Set Up Flows:**
   - Welcome series for new subscribers
   - Appointment reminder sequence
   - Post-treatment follow-up
   - Birthday promotions

5. **Design Templates:**
   - Create branded email templates
   - Set up SMS templates for reminders

### Pricing:
- Free: Up to 250 contacts
- Paid: Starting at $20/month for 500 contacts

---

## 4. HubSpot (CRM & Lead Tracking)

### Setup Steps:
1. **Create HubSpot Account:**
   - Go to [HubSpot.com](https://www.hubspot.com)
   - Sign up for free CRM
   - Complete setup wizard

2. **Get API Credentials:**
   - Go to Settings → Integrations → API Key
   - Generate new API key
   - Copy your Portal ID from account settings
   - Add to `.env.local`:
     ```
     REACT_APP_HUBSPOT_PORTAL_ID=your_portal_id
     REACT_APP_HUBSPOT_API_KEY=your_api_key
     ```

3. **Create Forms:**
   - Navigate to Marketing → Forms
   - Create "Contact Us" form
   - Create "Newsletter Signup" form
   - Create "Consultation Request" form
   - Note each form's ID

4. **Set Up Properties:**
   - Add custom properties:
     - Service Interest (dropdown)
     - Preferred Contact Method
     - Treatment History
     - Budget Range

5. **Configure Workflows:**
   - New lead notification
   - Lead scoring based on engagement
   - Automated follow-up sequences

### Pricing:
- Free CRM: Basic features
- Starter: $20/month
- Professional: $800/month (advanced features)

---

## 5. Meta Pixel (Facebook Ads)

### Setup Steps:
1. **Access Meta Business Suite:**
   - Go to [business.facebook.com](https://business.facebook.com)
   - Create or select your business account

2. **Create Pixel:**
   - Navigate to Events Manager
   - Click "Connect Data Sources" → "Web"
   - Select "Meta Pixel"
   - Name your pixel (e.g., "Aesthetic Clinic Pixel")
   - Copy Pixel ID

3. **Configure in Project:**
   - Add to `.env.local`: `REACT_APP_META_PIXEL_ID=your_pixel_id`

4. **Set Up Events:**
   - Configure standard events:
     - PageView (automatic)
     - Lead (form submissions)
     - Schedule (booking appointments)
     - Contact (phone/email clicks)
   - Create custom events:
     - ServiceViewed
     - ChatbotInteraction

5. **Create Audiences:**
   - Website visitors (all)
   - Service page viewers
   - Form submitters
   - Lookalike audiences

6. **Verify Installation:**
   - Install Meta Pixel Helper Chrome extension
   - Visit your website
   - Confirm pixel is firing correctly

### Pricing:
- Pixel setup: Free
- Advertising costs: Variable based on campaign

---

## 6. Backend Requirements

### Do You Need a Backend?

**Short Answer:** For production, yes - but you can start without one.

### Current Setup (Frontend-Only):
✅ **What Works:**
- Static content display
- Client-side form validation
- Calendly popup bookings
- Basic chatbot responses
- Pixel tracking

❌ **What Doesn't Work:**
- Secure API key storage
- Form data processing
- Email sending
- Database storage
- Advanced chatbot context

### Recommended Backend Solutions:

#### Option 1: Serverless Functions (Recommended)
**Platform:** Vercel Functions or Netlify Functions
```javascript
// api/submit-form.js
export default async function handler(req, res) {
  // Process form data
  // Send to Klaviyo & HubSpot
  // Return response
}
```
**Cost:** Free tier available, ~$20/month for typical usage

#### Option 2: Node.js Express Server
```javascript
// Simple Express backend
const express = require('express');
const app = express();

app.post('/api/contact', async (req, res) => {
  // Handle contact form
});

app.post('/api/chat', async (req, res) => {
  // Proxy Gemini API calls
});
```
**Hosting:** Heroku, Railway, or Render (~$7-25/month)

#### Option 3: Backend-as-a-Service
**Supabase or Firebase:**
- Authentication
- Database
- Real-time features
- File storage
**Cost:** Free tier, then $25/month

### Backend Implementation Priority:

1. **High Priority:**
   - API key security (move keys to backend)
   - Form submission handling
   - Email notifications

2. **Medium Priority:**
   - User authentication
   - Appointment management
   - Analytics dashboard

3. **Future Enhancements:**
   - Client portal
   - Treatment history
   - Loyalty program

### Quick Start Backend Template:
```bash
# Create simple backend
npx create-express-backend aesthetic-clinic-api
cd aesthetic-clinic-api
npm install cors dotenv axios nodemailer
```

### Environment Variables (Backend):
```env
# Server
PORT=3001
NODE_ENV=production

# API Keys (NEVER expose in frontend)
GEMINI_API_KEY=xxx
KLAVIYO_PRIVATE_KEY=xxx
HUBSPOT_API_KEY=xxx

# Email
SMTP_HOST=smtp.gmail.com
SMTP_USER=clinic@gmail.com
SMTP_PASS=app-specific-password
```

---

## 📝 Testing Checklist

- [ ] Chatbot responds to queries
- [ ] Calendly booking popup works
- [ ] Forms submit successfully
- [ ] Meta Pixel fires on page views
- [ ] HubSpot receives form submissions
- [ ] Klaviyo captures email signups
- [ ] Mobile responsive on all devices
- [ ] Page load speed < 3 seconds

## 🚨 Security Best Practices

1. **Never commit `.env.local` to Git**
2. **Use environment variables in production**
3. **Implement rate limiting for APIs**
4. **Add CORS restrictions**
5. **Use HTTPS in production**
6. **Regularly rotate API keys**
7. **Monitor API usage and costs**

## 📞 Support Contacts

- **Gemini API**: [Google AI Support](https://ai.google.dev/support)
- **Calendly**: support@calendly.com
- **Klaviyo**: support@klaviyo.com
- **HubSpot**: Live chat in dashboard
- **Meta**: Business Help Center

## 🎉 Launch Checklist

1. ✅ All API keys configured
2. ✅ Test bookings working
3. ✅ Tracking pixels verified
4. ✅ Email flows activated
5. ✅ Chatbot trained
6. ✅ SSL certificate installed
7. ✅ Backup system in place
8. ✅ Analytics configured
9. ✅ Legal pages added
10. ✅ Go live! 🚀