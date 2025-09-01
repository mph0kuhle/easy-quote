
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

  // Email configuration (you'll need to set up your email credentials)
  const transporter = nodemailer.createTransporter({
    service: 'gmail', // or your email service
    auth: {
      user: process.env.EMAIL_USER || 'your-email@gmail.com',
      pass: process.env.EMAIL_PASS || 'your-app-password'
    }
  });

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
    await transporter.sendMail({
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: process.env.BUSINESS_EMAIL || 'business-owner@example.com',
      subject: `New Quote Request from ${name}`,
      text: emailContent
    });

    res.redirect('/thank-you');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Sorry, there was an error sending your request. Please try again.');
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
