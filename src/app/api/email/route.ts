// pages/api/contact.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';


async function POST(request: NextApiRequest) {
  const transporter = nodemailer.createTransport({
    host: "smtps",
    port: 587,
    secure: false,

    auth: {

        user: process.env.MAIL_ADDRESS,
        pass: process.env.MAIL_PASSWORD
    }
  });

  if (request.method === 'POST') {
    const { name, email, message } = request.body;
    try {
      const info = await transporter.sendMail({
        from: email,
        to: process.env.MAIL_ADDRESS, // your email address to receive messages
        subject: `New Message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
      });
      console.log('Email sent: ' + info.response);
      return NextResponse.json({ success: true, message: 'Message sent successfully.' });
    } catch (error) {
      console.error('Error sending email:', error);
      return NextResponse.json({ success: false, message: 'Failed to send message.' });
    }
  } else {
    return NextResponse.json({ success: false, message: 'Method Not Allowed' });
  }
}


export {POST}