/**
 * Dantown Electrical website form receiver
 *
 * Required Script Properties (Project Settings > Script properties):
 * - SHEET_ID: the Google Sheet ID from its URL
 * - NOTIFICATION_EMAIL: business inbox that receives new-form alerts
 *
 * Optional Script Property:
 * - SHEET_NAME: tab name for submissions (defaults to "Submissions")
 */

const DEFAULT_SHEET_NAME = "Submissions";
const HEADERS = [
  "Timestamp", "Form Type", "Full Name", "Company", "Email", "Phone",
  "Service", "Project Location", "Project Type", "Project Size", "Start Date",
  "Budget", "Message",
];

function doGet() {
  return json_({ success: true, message: "Dantown Electrical form service is online." });
}

function doPost(e) {
  try {
    const submission = parseSubmission_(e);
    validateSubmission_(submission);

    const sheet = getSubmissionSheet_();
    sheet.appendRow([
      new Date(), submission.formType, submission.fullName, submission.company,
      submission.email, submission.phone, submission.service, submission.projectLocation,
      submission.projectType, submission.projectSize, submission.startDate,
      submission.budget, submission.message,
    ]);
    sheet.getRange(sheet.getLastRow(), 1).setNumberFormat("yyyy-mm-dd hh:mm:ss");

    notifyBusiness_(submission);
    return json_({ success: true, message: "Thank you. Your submission has been received." });
  } catch (error) {
    console.error(error);
    return json_({
      success: false,
      message: "We could not record your submission. Please try again or contact us directly.",
    });
  }
}

function parseSubmission_(e) {
  let payload = {};
  if (e && e.postData && e.postData.contents) {
    payload = JSON.parse(e.postData.contents);
  } else if (e && e.parameter) {
    payload = e.parameter;
  }

  return {
    formType: text_(payload.formType),
    fullName: text_(payload.fullName),
    company: text_(payload.company),
    email: text_(payload.email),
    phone: text_(payload.phone),
    service: text_(payload.service),
    projectLocation: text_(payload.projectLocation),
    projectType: text_(payload.projectType),
    projectSize: text_(payload.projectSize),
    startDate: text_(payload.startDate),
    budget: text_(payload.budget),
    message: text_(payload.message),
  };
}

function validateSubmission_(submission) {
  const supportedForms = ["Send an Inquiry", "Get a Quote"];
  if (supportedForms.indexOf(submission.formType) === -1) {
    throw new Error("Unsupported form type");
  }

  ["fullName", "phone", "service", "message"].forEach(function (field) {
    if (!submission[field]) throw new Error("Missing required field: " + field);
  });

  if (submission.formType === "Send an Inquiry" && !submission.email) {
    throw new Error("Email is required for an inquiry");
  }
  if (submission.formType === "Get a Quote" && !submission.projectLocation) {
    throw new Error("Project location is required for a quote");
  }
}

function getSubmissionSheet_() {
  const properties = PropertiesService.getScriptProperties();
  const sheetId = properties.getProperty("SHEET_ID");
  const sheetName = properties.getProperty("SHEET_NAME") || DEFAULT_SHEET_NAME;
  if (!sheetId) throw new Error("SHEET_ID Script Property is not configured");

  const spreadsheet = SpreadsheetApp.openById(sheetId);
  let sheet = spreadsheet.getSheetByName(sheetName);
  if (!sheet) sheet = spreadsheet.insertSheet(sheetName);

  if (sheet.getLastRow() === 0) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    sheet.getRange(1, 1, 1, HEADERS.length)
      .setFontWeight("bold")
      .setBackground("#0B1736")
      .setFontColor("#FFFFFF");
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, HEADERS.length).createFilter();
    sheet.autoResizeColumns(1, HEADERS.length);
  }
  return sheet;
}

function notifyBusiness_(submission) {
  const recipient = PropertiesService.getScriptProperties().getProperty("NOTIFICATION_EMAIL");
  if (!recipient) throw new Error("NOTIFICATION_EMAIL Script Property is not configured");

  const fields = [
    ["Form Type", submission.formType], ["Full Name", submission.fullName],
    ["Company", submission.company], ["Email", submission.email], ["Phone", submission.phone],
    ["Service", submission.service], ["Project Location", submission.projectLocation],
    ["Project Type", submission.projectType], ["Project Size", submission.projectSize],
    ["Start Date", submission.startDate], ["Budget", submission.budget], ["Message", submission.message],
  ];
  const plainBody = fields.filter(function (field) { return field[1]; })
    .map(function (field) { return field[0] + ": " + field[1]; }).join("\n");
  const htmlBody = "<h2>New " + escapeHtml_(submission.formType) + "</h2><table cellpadding=\"8\" cellspacing=\"0\" style=\"border-collapse:collapse\">" +
    fields.map(function (field) {
      if (!field[1]) return "";
      return "<tr><th align=\"left\" style=\"border-bottom:1px solid #dfe5ef\">" + escapeHtml_(field[0]) +
        "</th><td style=\"border-bottom:1px solid #dfe5ef\">" + escapeHtml_(field[1]).replace(/\n/g, "<br>") + "</td></tr>";
    }).join("") + "</table>";

  MailApp.sendEmail({
    to: recipient,
    subject: "New " + submission.formType + " — " + submission.fullName,
    body: plainBody,
    htmlBody: htmlBody,
    name: "Dantown Electrical Website",
  });
}

function text_(value) {
  return value === undefined || value === null ? "" : String(value).trim();
}

function escapeHtml_(value) {
  return text_(value).replace(/&/g, "&amp;").replace(/</g, "&lt;")
    .replace(/>/g, "&gt;").replace(/\"/g, "&quot;").replace(/'/g, "&#039;");
}

function json_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
