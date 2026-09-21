"use client"

import { FormEvent, useState } from "react"

export default function ContactForm() {

  const [submitted, setSubmitted] =
    useState(false)

  function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault()

    setSubmitted(true)
  }

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
    >

      <div className="form-row">

        <label>
          Name

          <input
            name="name"
            placeholder="Your name"
            required
          />
        </label>

        <label>
          Phone

          <input
            name="phone"
            placeholder="07XX XXX XXX"
            required
          />
        </label>

      </div>

      <label>
        Email

        <input
          type="email"
          name="email"
          placeholder="you@example.com"
        />
      </label>

      <label>
        Service

        <select
          name="service"
          defaultValue=""
          required
        >
          <option value="" disabled>
            Select a service
          </option>

          <option>
            Electrical Installation
          </option>

          <option>
            Lighting
          </option>

          <option>
            Solar Solutions
          </option>

          <option>
            CCTV & Security
          </option>

          <option>
            Smart Home
          </option>
        </select>
      </label>

      <label>
        Message

        <textarea
          name="message"
          rows={6}
          placeholder="How can we help?"
          required
        />
      </label>

      <button type="submit">
        Send Message
      </button>

      {submitted && (
        <p className="form-success">
          Thank you. Your message has
          been received.
        </p>
      )}

    </form>
  )
}