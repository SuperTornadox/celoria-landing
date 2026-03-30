# Privacy Policy

**Celoria Management System**
**Effective Date:** March 20, 2026
**Last Updated:** March 20, 2026

---

## 1. Introduction

Celoria ("we", "us", or "our") operates the celoria.ai platform and related services (the "Service"), a business management system for beauty and wellness salons. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Service.

By using the Service, you agree to the collection and use of information in accordance with this policy.

---

## 2. Information We Collect

### 2.1 Information You Provide

- **Account Information:** Name, email address, phone number, business name, business address
- **Employee Information:** Staff names, contact details, work schedules, performance metrics
- **Customer Information:** Guest names, phone numbers, email addresses, appointment history, service preferences, payment records
- **Payment Information:** Transaction amounts, payment methods (we do not store credit card numbers; payment processing is handled by third-party providers)

### 2.2 Information Collected Automatically

- **Usage Data:** Pages visited, features used, timestamps, device information, browser type
- **Log Data:** IP address, access times, error logs
- **Cookies:** Session management and user preference cookies (see Section 9)

### 2.3 Information from Third-Party Services

When you connect third-party services to your Celoria account, we may receive information from those services as described in Section 7.

---

## 3. How We Use Your Information

We use collected information to:

- Provide, operate, and maintain the Service
- Process appointments, payments, and business transactions
- Send appointment reminders, confirmations, and notifications via SMS/email
- Generate business analytics, reports, and performance insights
- Improve and personalize the Service
- Communicate with you about updates, support, and promotional offers
- Comply with legal obligations
- Detect and prevent fraud or unauthorized access

---

## 4. SMS/Text Messaging

### 4.1 Types of Messages

With your consent, we may send:

- **Transactional Messages:** Appointment confirmations, reminders, status updates
- **Review Solicitation Messages:** Post-service follow-ups requesting feedback (see Section 7.1)
- **Marketing Messages:** Promotional offers and announcements (with opt-in consent)

### 4.2 Review Solicitation

Our automated review solicitation system may send a follow-up message after your salon visit to request your feedback on Google. These messages:

- Are sent only to customers who have provided a phone number
- Include a link to leave a review on Google Maps
- **Do not offer any incentives** (discounts, coupons, or rewards) in exchange for reviews, in compliance with Google's Terms of Service
- Are subject to frequency limits (maximum one solicitation per customer per 90 days)
- Are not sent during quiet hours (9 PM - 8 AM local time) in compliance with TCPA regulations

### 4.3 Opt-Out

You may opt out of SMS messages at any time by replying STOP to any message. Standard message and data rates may apply.

---

## 5. Data Sharing and Disclosure

We do not sell, trade, or rent your personal information. We may share information with:

### 5.1 Service Providers

Third-party companies that assist in providing the Service:

| Provider | Purpose | Data Shared |
|----------|---------|-------------|
| Twilio / Telnyx | SMS and voice messaging | Phone numbers, message content |
| AWS SES / Resend | Email delivery | Email addresses, message content |
| Stripe | Payment processing | Transaction amounts, payment tokens |
| CodePay | Point-of-sale payment processing | Transaction amounts |
| Anthropic (Claude AI) | AI-powered content generation | De-identified business context (see Section 7.3) |

### 5.2 Legal Requirements

We may disclose your information if required by law, regulation, legal process, or government request.

### 5.3 Business Transfers

In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.

---

## 6. Data Security

We implement industry-standard security measures:

- **Encryption in Transit:** All data transmitted via HTTPS/TLS
- **Encryption at Rest:** Sensitive credentials (API tokens, OAuth tokens) encrypted with AES-256-GCM
- **Access Controls:** Role-based access control (RBAC) with granular permissions
- **Multi-Tenant Isolation:** Each business's data is isolated in separate database schemas
- **Monitoring:** Continuous security monitoring and alerting

---

## 7. Third-Party Platform Integrations

### 7.1 Google Business Profile (Google APIs)

When you connect your Google Business Profile account to Celoria, we access and use the following data through the Google Business Profile API:

**Data We Access:**
- Business profile information (name, address, hours, services)
- Google reviews (reviewer name, rating, review text, timestamp)
- Review reply status

**How We Use This Data:**
- **Review Monitoring:** We poll for new Google reviews to notify you and generate AI-drafted response suggestions
- **Review Replies:** When you approve a reply (or edit and approve), we publish it to Google on your behalf
- **Business Information Sync:** We sync your service menu, pricing, and business hours from Celoria to your Google Business Profile to keep your listing accurate
- **Competitive Intelligence:** We may access publicly available Google Places data (ratings, review counts) for competitors you designate, to generate comparison reports

**Data Storage:** Google review data is stored in your tenant database for display in the Celoria dashboard. OAuth tokens are encrypted with AES-256-GCM and stored securely.

**Data Sharing:** We do not share your Google Business Profile data with any third parties. AI-generated review replies use de-identified context (store name, service type, review text) and are processed by Anthropic Claude under their data processing agreement.

**Revoking Access:** You may disconnect your Google Business Profile at any time from Settings > Connected Accounts. Upon disconnection, we stop accessing your Google data. Cached review data may be retained for up to 30 days for reporting continuity, after which it is deleted.

**Google API Services User Data Policy:** Celoria's use and transfer of information received from Google APIs adheres to the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy), including the Limited Use requirements.

### 7.2 Meta Platforms (Instagram and Facebook)

When you connect your Instagram Business Account or Facebook Page to Celoria, we access and use the following data through the Meta Graph API:

**Data We Access:**
- Instagram Business Account or Facebook Page profile information
- Post engagement metrics (likes, comments, shares, impressions)
- Page access tokens for content publishing

**How We Use This Data:**
- **Content Publishing:** We publish social media posts (photos with AI-generated captions) to your Instagram or Facebook Page on your behalf, after you review and approve the content
- **Engagement Tracking:** We retrieve engagement metrics for published posts to help you understand content performance
- **Promotional Posts:** When your schedule has idle time slots, we may generate promotional post suggestions for your approval

**Data Storage:** Engagement metrics and post metadata are stored in your tenant database. OAuth tokens are encrypted with AES-256-GCM.

**Data Sharing:** We do not share your Instagram or Facebook data with any third parties. We do not access your personal Facebook profile, private messages, or any data beyond what is necessary for business page management.

**Content Ownership:** All photos and content published through Celoria remain your intellectual property. We do not claim ownership of any content you create or publish.

**Revoking Access:** You may disconnect your Instagram or Facebook account at any time from Settings > Connected Accounts. Upon disconnection, we immediately stop accessing your social media data. Previously published posts remain on your social media accounts (we do not delete them). Cached engagement data may be retained for up to 30 days.

**Meta Platform Terms:** Our use of Meta APIs complies with the [Meta Platform Terms](https://developers.facebook.com/terms/) and [Meta Developer Policies](https://developers.facebook.com/devpolicy/).

### 7.3 AI Services (Anthropic Claude)

We use Anthropic's Claude AI to generate content suggestions:

**What We Send to AI:**
- De-identified business context: store name, service types, current promotions
- Review text (for generating review replies)
- No personally identifiable customer information is sent

**What AI Generates:**
- Review reply drafts
- Social media caption suggestions
- Promotional post text

**Human Review:** All AI-generated content is presented to you for review before publishing. You may edit, approve, or reject any AI suggestion. We never auto-publish AI-generated content without your explicit approval (unless you opt into auto-reply for positive reviews).

**Data Retention by AI Provider:** Anthropic processes data under their [Usage Policy](https://www.anthropic.com/policies) and does not train models on API inputs.

---

## 8. Data Retention

| Data Type | Retention Period |
|-----------|-----------------|
| Account information | Duration of account + 30 days after deletion |
| Appointment records | 7 years (tax/legal compliance) |
| Customer contact information | Duration of business relationship + 90 days |
| SMS message logs | 2 years |
| Review solicitation records | 2 years |
| Social media post data | 1 year after publication |
| Competitor snapshot data | 1 year |
| OAuth tokens | Until disconnected + 24 hours |
| Usage logs | 90 days |

You may request early deletion of your data by contacting us (see Section 12).

---

## 9. Cookies

We use essential cookies for:

- **Session Management:** Maintaining your login state
- **Preferences:** Remembering language and display settings

We do not use third-party advertising cookies or tracking pixels.

---

## 10. Your Privacy Rights

Depending on your jurisdiction, you may have the right to:

- **Access:** Request a copy of your personal data
- **Correction:** Request correction of inaccurate data
- **Deletion:** Request deletion of your personal data
- **Portability:** Receive your data in a portable format
- **Opt-Out:** Opt out of marketing communications
- **Restrict Processing:** Request limitation of data processing
- **Withdraw Consent:** Withdraw consent for data processing at any time

To exercise these rights, contact us at privacy@celoria.ai or joey@celoria.ai.

---

## 11. Children's Privacy

The Service is not intended for use by individuals under 16 years of age. We do not knowingly collect personal information from children.

---

## 12. Contact Us

For privacy questions, data requests, or concerns:

**Email:** joey@celoria.ai
**Phone:** +1 (347) 728-3880
**Address:** Celoria, 71 University Pl, New York, NY 10003

---

## 13. Changes to This Policy

We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy on this page and updating the "Last Updated" date. Continued use of the Service after changes constitutes acceptance of the updated policy.
