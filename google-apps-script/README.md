# Google Apps Script form backend

The browser only uses a public Apps Script Web App URL. The Google Sheet ID and notification email remain private in Apps Script Script Properties.

## 1. Create the Google Sheet

1. Create a Google Sheet in Google Drive, for example **Dantown Website Submissions**.
2. Copy its Sheet ID: the text between `/d/` and `/edit` in the Sheet URL.
3. Headers do not need to be entered manually. `Code.gs` creates the **Submissions** tab and its headers on the first successful submission.

## 2. Add the Apps Script

1. In the Sheet, open **Extensions → Apps Script**.
2. Replace the default `Code.gs` contents with the complete code in [Code.gs](./Code.gs).
3. Save the project.

## 3. Store private configuration

Open **Project Settings** (gear icon) → **Script properties**, then add:

| Property | Value |
| --- | --- |
| `SHEET_ID` | The Sheet ID from step 1 |
| `NOTIFICATION_EMAIL` | The business inbox that receives submission alerts |
| `SHEET_NAME` *(optional)* | `Submissions`, or another tab name |

These values must not be added to frontend JavaScript or `.env.local`.

## 4. Deploy the Web App

1. Select **Deploy → New deployment**.
2. Click the gear icon and choose **Web app**.
3. Set **Execute as** to **Me**.
4. Set **Who has access** to **Anyone** (or the equivalent public-access option available in your Google Workspace). Visitors to a public website must not need a Google login.
5. Click **Deploy**, complete the one-time Google authorization request, and copy the Web App URL ending in `/exec`.

Use `/exec` in the site. `/dev` is only for script editors and will not work for visitors.

## 5. Add the Web App URL to the website

1. Copy `.env.example` to `.env.local` in the repository root.
2. Set this one public, frontend-facing value:

```env
NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_WEB_APP_URL=https://script.google.com/macros/s/DEPLOYMENT_ID/exec
```

3. Restart the Next.js development server or rebuild and redeploy the website.

`GOOGLE_APPS_SCRIPT_WEB_APP_URL` in `lib/googleAppsScript.ts` is the one easy-to-find JavaScript configuration variable. `NEXT_PUBLIC_` is necessary because the browser submits to the Web App; it exposes only the public endpoint, never the Sheet ID or notification email.

## 6. Test both forms

1. Open `/contact`, fill **Send an Inquiry**, and submit.
2. Confirm the success state, a Sheet row with **Send an Inquiry** as Form Type, and the email alert.
3. Open `/request-quote`, fill **Get a Quote**, and submit.
4. Confirm the Sheet row has **Get a Quote** as Form Type. Fields absent from one form remain blank by design.
5. Temporarily remove the Web App URL or disconnect from the network to test the clear retry error state. Restore it when finished.

If `Code.gs` changes later, use **Deploy → Manage deployments** to create and deploy a new version so the `/exec` URL uses the latest code.
