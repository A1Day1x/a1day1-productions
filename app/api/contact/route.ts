import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, projectType, message } = body;

    // Send data to Google Sheets via Google Apps Script Web App
    const googleScriptUrl = process.env.GOOGLE_SCRIPT_URL;
    
    if (!googleScriptUrl) {
      console.error('Google Script URL not configured');
      return NextResponse.json({ success: false, message: 'Configuration error' }, { status: 500 });
    }

    const response = await fetch(googleScriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        phone: phone || 'Not provided',
        projectType,
        message,
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to submit to Google Sheets');
    }

    return NextResponse.json({ success: true, message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json({ success: false, message: 'Error submitting form' }, { status: 500 });
  }
}
