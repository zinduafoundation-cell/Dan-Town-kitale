"use client"

import { FormEvent, useState } from "react"
import { submitToGoogleAppsScript } from "@/lib/googleAppsScript"

export default function QuoteForm() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (loading) return

    const formElement = event.currentTarget
    const form = new FormData(formElement)
    const name = String(form.get("name") || "").trim()
    const phone = String(form.get("phone") || "").trim()
    const email = String(form.get("email") || "").trim()
    const product = String(form.get("product") || "").trim()
    const quantity = String(form.get("quantity") || "").trim()
    const location = String(form.get("location") || "").trim()
    const budget = String(form.get("budget") || "").trim()
    const message = String(form.get("message") || "").trim()

    if (!name || !phone || !product || !location || !message) {
      setError("Please complete all required fields before requesting a quote.")
      return
    }

    setError("")
    setSuccess(false)
    setLoading(true)

    try {
      await submitToGoogleAppsScript({
        formType: "Get a Quote",
        fullName: name,
        email,
        phone,
        service: product,
        projectLocation: location,
        projectType: product,
        projectSize: quantity,
        budget,
        message,
      })
      formElement.reset()
      setSuccess(true)
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : "We could not send your quote request. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className="quote-form" onSubmit={submit}>
      <div className="form-row">
        <label>Full Name<input name="name" required autoComplete="name" /></label>
        <label>Phone Number<input name="phone" required type="tel" autoComplete="tel" /></label>
      </div>

      <div className="form-row">
        <label>Email<input type="email" name="email" autoComplete="email" /></label>
        <label>Product / Service<input name="product" required /></label>
      </div>

      <div className="form-row">
        <label>Quantity<input type="number" min="1" name="quantity" defaultValue="1" /></label>
        <label>Location<input name="location" placeholder="Kitale" required /></label>
      </div>

      <label>Estimated Budget<input name="budget" placeholder="KES" /></label>
      <label>Project Details<textarea name="message" rows={7} placeholder="Tell us what you need..." required /></label>

      {error && <p className="form-error" role="alert">{error}</p>}
      <button type="submit" disabled={loading} aria-busy={loading}>{loading ? "Sending..." : "Request Quote"}</button>

      {success && <div className="form-success" role="status" aria-live="polite">Your quote request has been received. Dantown will contact you shortly.</div>}
    </form>
  )
}
