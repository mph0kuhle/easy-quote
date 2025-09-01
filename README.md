# easy-quote
# Easy Quote - Friendly Quote Request System 🌟

A warm, conversational quote request system built with Node.js and Express. Features a personality-driven frontend with smooth animations and a humanized approach to collecting project requirements.

## ✨ Features

- **Conversational UI**: Friendly form labels that feel like a conversation
- **Smooth Animations**: Progress bars, hover effects, and transitions
- **Mobile-Friendly**: Responsive design that works on all devices
- **Email Notifications**: Automated emails to business owners with quote requests
- **Yellow/Black/White Theme**: Clean, professional color scheme
- **Progress Tracking**: Visual progress bar as users fill out the form

## 🚀 Quick Start

### Prerequisites
- Node.js (included in Replit environment)
- A Gmail account or other email service for notifications

### Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Set Up Environment Variables**
   - Go to the Secrets tab in Replit
   - Add the following secrets:
     - `EMAIL_USER`: Your Gmail address (e.g., yourname@gmail.com)
     - `EMAIL_PASS`: Your Gmail app password (not your regular password)
     - `BUSINESS_EMAIL`: The email where quote requests should be sent

3. **Run the Application**
   ```bash
   npm start
   ```

   The app will run on port 5000 and be accessible via the Replit preview.

### Setting Up Gmail App Password

1. Go to your Google Account settings
2. Enable 2-Factor Authentication
3. Go to Security → 2-Step Verification → App passwords
4. Generate an app password for "Mail"
5. Use this password in the `EMAIL_PASS` secret

## 📁 Project Structure

```
easy-quote/
├── server.js              # Express server and email handling
├── package.json           # Dependencies and scripts
├── public/
│   ├── index.html         # Main quote request form
│   ├── thank-you.html     # Success page
│   ├── styles.css         # CSS with animations
│   └── script.js          # Frontend interactions
└── README.md              # This file
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Yellow (#FFD700)
- **Secondary**: Orange (#FFA500) 
- **Accent**: Black (#333)
- **Background**: White with subtle gradients

### Animations
- Fade-in animations for page load
- Progress bar that fills as form is completed
- Hover effects on form fields
- Smooth transitions throughout
- Success animations on the thank you page

### Form Personality
- "What should we call you?" instead of "Name"
- "Best number to reach you?" instead of "Phone"
- Encouraging placeholder text
- Emoji accents for visual appeal

## 📧 Email Template

The system sends humanized emails to business owners:

```
Hey [Business Owner Name],

Someone's looking for your expertise! Here's what they need:

[Client Name] wants [project type].
They said: "[description]"

Timeline: [timeline]
Budget range: [budget]
Contact: [email] | [phone]

Worth a quick call? Fast responses usually win the deal.
```

## 🔧 Customization

### Update Business Information
Edit the email content in `server.js` to match your business name and tone.

### Modify Form Fields
Add or remove fields by updating both `index.html` and the server-side handling in `server.js`.

### Change Colors
Update the CSS variables in `styles.css` to match your brand colors.

## 🚀 Deployment

To deploy on Replit:
1. Click the **Deploy** button in the workspace
2. Choose **Autoscale** deployment
3. Set build command: `npm install` (optional)
4. Set run command: `npm start`
5. Configure your custom domain

## 📱 Mobile Support

The design is fully responsive and includes:
- Touch-friendly button sizes
- Optimized typography for mobile screens
- Smooth scrolling and animations
- Accessible form controls

## 🛠️ Tech Stack

- **Backend**: Node.js + Express
- **Frontend**: Vanilla HTML/CSS/JavaScript
- **Email**: Nodemailer
- **Styling**: Custom CSS with animations
- **Deployment**: Replit

## 📞 Support

For questions or customization help, feel free to reach out or modify the code to fit your specific needs!

---

Built with ❤️ for businesses who want to make quote requests feel more human.
