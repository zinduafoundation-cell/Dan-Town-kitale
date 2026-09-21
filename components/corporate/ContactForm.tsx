"use client"

import { FormEvent, useState } from "react"
import { CheckCircle2, Send } from "lucide-react"
import { submitToGoogleAppsScript } from "@/lib/googleAppsScript"

const initialValues = { name: "", email: "", phone: "", service: "", message: "" }
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function ContactForm() {
  const [values, setValues] = useState(initialValues)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  function update(field: keyof typeof initialValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }))
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (loading) return

    if (!values.name.trim() || !values.email.trim() || !values.phone.trim() || !values.service || !values.message.trim()) {
      setError("Please complete every field so our team can respond with the right advice.")
      return
    }
    if (!emailPattern.test(values.email.trim())) {
      setError("Please enter a valid email address so our team can reply.")
      return
    }

    setError("")
    setLoading(true)

    try {
      await submitToGoogleAppsScript({
        formType: "Send an Inquiry",
        fullName: values.name.trim(),
        email: values.email.trim(),
        phone: values.phone.trim(),
        service: values.service,
        message: values.message.trim(),
      })
      setSubmitted(true)
      setValues(initialValues)
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : "We could not send your inquiry. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return <div className="form-success" role="status" aria-live="polite"><CheckCircle2 size={34} /><h3>Thank you — your inquiry has been sent.</h3><p>Our team will review the details and get back to you soon.</p><button type="button" className="text-button" onClick={() => setSubmitted(false)}>Send another inquiry</button></div>
  }

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <div className="form-grid">
        <label>Full name<input name="fullName" required value={values.name} onChange={(event) => update("name", event.target.value)} autoComplete="name" /></label>
        <label>Email address<input name="email" required type="email" value={values.email} onChange={(event) => update("email", event.target.value)} autoComplete="email" /></label>
        <label>Phone number<input name="phone" required type="tel" value={values.phone} onChange={(event) => update("phone", event.target.value)} autoComplete="tel" /></label>
        <label>Service interested in<select name="service" required value={values.service} onChange={(event) => update("service", event.target.value)}><option value="">Select a service</option><option>Solar solutions</option><option>Electrical installation</option><option>Lighting</option><option>Power backup</option><option>Maintenance</option><option>Consultation</option><option>Other</option></select></label>
      </div>
      <label>Tell us a little about your project<textarea name="message" required rows={5} value={values.message} onChange={(event) => update("message", event.target.value)} /></label>
      {error && <p className="form-error" role="alert">{error}</p>}
      <button type="submit" className="button button--blue" disabled={loading} aria-busy={loading}>{loading ? "Sending inquiry..." : <>Send inquiry <Send size={16} /></>}</button>
    </form>
  )
}
