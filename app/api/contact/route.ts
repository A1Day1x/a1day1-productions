import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, projectType, message } = body;

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'A1 Day1 Productions <onboarding@resend.dev>', // You'll need to verify your domain to use info@a1day1productions.com
      to: ['info@a1day1productions.com'],
      replyTo: email,
      subject: `New Consultation Request from ${name}`,
      html: `
        <h2>New Free Consultation Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p><small>This form was submitted from a1day1productions.com</small></p>
      `,
    });

    if (error) {
      console.error('Error sending email:', error);
      return NextResponse.json({ success: false, message: 'Error sending email' }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Form submitted successfully', data });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json({ success: false, message: 'Error submitting form' }, { status: 500 });
  }
}
