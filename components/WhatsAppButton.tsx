"use client";

import { ArrowUpRight, MessageCircle } from "lucide-react"

export default function WhatsAppButton() {
  const phone = "254745917655"

  const message = encodeURIComponent(
    "Hello Dantown Electrical Kitale. I would like to inquire about your products and services.",
  )

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Chat with Dantown Electrical on WhatsApp"
    >
      <span className="floating-whatsapp__pulse" aria-hidden="true" />
      <span className="floating-whatsapp__icon"><MessageCircle size={20} strokeWidth={2.1} /></span>
      <span className="floating-whatsapp__copy"><small>Quick response</small><strong>Chat on WhatsApp</strong></span>
      <ArrowUpRight className="floating-whatsapp__arrow" size={17} aria-hidden="true" />
    </a>
  )
}