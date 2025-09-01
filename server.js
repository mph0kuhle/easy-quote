
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

// Serve HTML files
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/thank-you', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'thank-you.html'));
});

// Health check route
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    port: PORT,
    emailConfigured: !!(process.env.EMAIL_USER && process.env.EMAIL_PASS)
  });
});

// Handle quote request submission
app.post('/submit-quote', async (req, res) => {
  const {
    name,
    email,
    phone,
    projectType,
    description,
    timeline,
    budget
  } = req.body;

  // Email configuration
  let transporter;
  
  if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
  } else {
    console.log('⚠️  Email not configured. Set EMAIL_USER and EMAIL_PASS in Secrets.');
  }

  const emailContent = `
Hey [Business Owner Name],

Someone's looking for your expertise! Here's what they need:

${name} wants ${projectType}.
They said: "${description}"

Timeline: ${timeline}
Budget range: ${budget}
Contact: ${email} | ${phone}

Worth a quick call? Fast responses usually win the deal.

Best regards,
Easy Quote System
  `;

  try {
    if (transporter) {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.BUSINESS_EMAIL || process.env.EMAIL_USER,
        subject: `New Quote Request from ${name}`,
        text: emailContent
      });
      console.log(`✅ Quote request sent from ${name} (${email})`);
    } else {
      console.log(`📝 Quote request received from ${name} (${email}) - Email not configured`);
      console.log('Form data:', { name, email, phone, projectType, description, timeline, budget });
    }

    res.redirect('/thank-you');
  } catch (error) {
    console.error('❌ Error sending email:', error.message);
    // Still redirect to thank you page to avoid user frustration
    res.redirect('/thank-you');
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Quote System server running on port ${PORT}`);
  console.log(`📧 Email notifications configured for: ${process.env.BUSINESS_EMAIL || 'business-owner@example.com'}`);
  console.log(`🌐 Visit your app at: https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co`);
});
