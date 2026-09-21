export const GOOGLE_APPS_SCRIPT_WEB_APP_URL = (
  process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_WEB_APP_URL ?? ""
).trim()

export type GoogleAppsScriptSubmission = {
  formType: "Send an Inquiry" | "Get a Quote"
  fullName: string
  company?: string
  email?: string
  phone: string
  service: string
  projectLocation?: string
  projectType?: string
  projectSize?: string
  startDate?: string
  budget?: string
  message: string
}

type AppsScriptResponse = { success?: boolean; message?: string }

const REQUEST_TIMEOUT_MS = 20_000

/** Sends form data to the public Apps Script Web App; private settings stay in Apps Script. */
export async function submitToGoogleAppsScript(submission: GoogleAppsScriptSubmission): Promise<AppsScriptResponse> {
  if (!GOOGLE_APPS_SCRIPT_WEB_APP_URL) {
    throw new Error("The inquiry service has not been configured yet. Please try again later or contact us by phone.")
  }

  const controller = new AbortController()
  const timeout = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)

  try {
    // text/plain keeps this request CORS-safelisted for Apps Script Web Apps.
    const response = await fetch(GOOGLE_APPS_SCRIPT_WEB_APP_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(submission),
      signal: controller.signal,
      credentials: "omit",
    })
    const responseText = await response.text()
    let result: AppsScriptResponse

    try {
      result = JSON.parse(responseText) as AppsScriptResponse
    } catch {
      throw new Error("The inquiry service returned an unexpected response. Please try again.")
    }

    if (!response.ok || !result.success) {
      throw new Error(result.message || "We could not send your submission. Please try again.")
    }

    return result
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      throw new Error("The request took too long. Please check your connection and try again.")
    }
    throw error instanceof Error ? error : new Error("We could not send your submission. Please try again.")
  } finally {
    window.clearTimeout(timeout)
  }
}
