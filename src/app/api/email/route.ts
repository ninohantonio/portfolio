// pages/api/contact.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';


async function POST(request: NextRequest) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {

        user: process.env.MAIL_ADDRESS,
        pass: process.env.MAIL_PASSWORD
    }
  });

  if (request.method === 'POST') {
    const body = await request.text(); // Read the body as a string
      const parsedBody = JSON.parse(body); // Parse the string as JSON
    try {
      const info = await transporter.sendMail({
        from: parsedBody.email,
        to: process.env.MAIL_ADDRESS, // your email address to receive messages
        subject: `New Message from ${parsedBody.name}`,
        text: `Name: ${parsedBody.name}\nEmail: ${parsedBody.email}\nMessage: ${parsedBody.message}`
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