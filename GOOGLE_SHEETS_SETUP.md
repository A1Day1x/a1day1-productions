# Google Sheets Setup Guide

Follow these steps to connect your contact form to Google Sheets:

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "A1 Day1 Contact Form Submissions"
4. In the first row, add these column headers:
   - A1: Timestamp
   - B1: Name
   - C1: Email
   - D1: Phone
   - E1: Project Type
   - F1: Message

## Step 2: Create Google Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code
3. Paste this code:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming data
    var data = JSON.parse(e.postData.contents);
    
    // Add a new row with the form data
    sheet.appendRow([
      data.timestamp,
      data.name,
      data.email,
      data.phone,
      data.projectType,
      data.message
    ]);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'success',
      'message': 'Data added successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click **Save** (disk icon)
5. Name your project "Contact Form Handler"

## Step 3: Deploy the Script

1. Click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web app**
4. Configure:
   - **Description**: Contact Form Handler
   - **Execute as**: Me
   - **Who has access**: Anyone
5. Click **Deploy**
6. Click **Authorize access**
7. Choose your Google account
8. Click **Advanced** → **Go to Contact Form Handler (unsafe)**
9. Click **Allow**
10. **Copy the Web app URL** (it looks like: https://script.google.com/macros/s/XXXXX/exec)

## Step 4: Add URL to Your Website

1. Open your `.env.local` file
2. Replace `your_google_script_url_here` with your Web app URL:
   ```
   GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/XXXXX/exec
   ```
3. Save the file

## Step 5: Test It!

1. Restart your development server
2. Fill out the contact form on your website
3. Check your Google Sheet - you should see the submission!

## For Production (Vercel/Netlify):

When you deploy your site, add the `GOOGLE_SCRIPT_URL` as an environment variable in your hosting platform's settings.

---

That's it! Now all form submissions will automatically save to your Google Sheet, and you'll get notified via email if you set up Google Sheets notifications.
