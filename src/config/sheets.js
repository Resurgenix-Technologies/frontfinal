/**
 * Google Sheets Integration Config
 * 
 * HOW TO USE:
 * 1. Create a Google Sheet for each form
 * 2. Go to Extensions > Apps Script in the sheet
 * 3. *Delete all existing code* and Paste exactly this code:
 * 
 *    function doPost(e) {
 *      var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 *      var data = JSON.parse(e.parameter.payload);
 *      var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
 *      
 *      if (headers[0] === '') {
 *        headers = Object.keys(data);
 *        sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
 *      }
 *      
 *      var row = headers.map(function(header) { return data[header] || ''; });
 *      sheet.appendRow(row);
 *      
 *      return ContentService.createTextOutput(JSON.stringify({ status: 'success' }))
 *        .setMimeType(ContentService.MimeType.JSON);
 *    }
 * 
 * 4. Click SAVE (Ctrl+S) !! Extremely important !!
 * 5. Click Deploy > New Deployment (NOT Manage Deployments)
 *    - Type: Web App
 *    - Execute as: Me
 *    - Who has access: Anyone
 *    - Click Deploy
 * 6. Copy the NEW Web App URL and paste it below
 */

// Paste your 4 different Google Apps Script Web App URLs here:
const SHEETS_CONFIG = {
  consultation: 'https://script.google.com/macros/s/AKfycbzklFzvfBlQobExGkHVlSxY7RRtPGeDkLUNjRs1vIMuYT6fyd-sdz4JOL4F9m-uTUWQTQ/exec',
  
  contactPopup: 'https://script.google.com/macros/s/AKfycbw-WUk-OLHCqwwoWLr1hGtcf1fn76MugnpCdDR2lGNi7iQkUHXBLIZ-mqAnl_Kc3qyGbA/exec',
  career: 'https://script.google.com/macros/s/AKfycbyEKOHjfBJDKe6fjdJpIJVWNcGXcngMxQj41QFGnnbNRoh9TTVXw9rwE_BlUHShho8w3g/exec',
};

/**
 * Submit form data to Google Sheets via a hidden iframe.
 * This completely bypasses all CORS browser issues.
 */
export async function submitToSheet(formName, data) {
  const url = SHEETS_CONFIG[formName];

  const payload = {
    timestamp: new Date().toLocaleDateString('en-GB') + ' ' + new Date().toLocaleTimeString('en-US'),
    ...data,
  };

  if (!url || url === '') {
    console.error(`[${formName}] Google Sheet URL is missing in src/config/sheets.js`);
    return false;
  }

  return new Promise((resolve) => {
    try {
      const iframeName = `sheet_iframe_${Date.now()}`;
      
      const iframe = document.createElement('iframe');
      iframe.name = iframeName;
      iframe.style.display = 'none';
      document.body.appendChild(iframe);

      const form = document.createElement('form');
      form.method = 'POST';
      form.action = url;
      form.target = iframeName;
      form.enctype = "application/x-www-form-urlencoded";
      form.style.display = 'none';

      // The payload must be sent as a URL-encoded field named "payload"
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = 'payload';
      input.value = JSON.stringify(payload);
      form.appendChild(input);

      document.body.appendChild(form);
      form.submit();

      console.log(`[${formName}] Dispatched form to Google Sheets!`);

      // Cleanup DOM
      setTimeout(() => {
        form.remove();
        iframe.remove();
      }, 5000);

      resolve(true);
    } catch (err) {
      console.error(`[${formName}] Submission failed:`, err);
      resolve(false);
    }
  });
}

export default SHEETS_CONFIG;
