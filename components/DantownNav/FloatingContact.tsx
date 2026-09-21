import {
  MessageCircle,
  Phone,
  Mail,
} from "lucide-react"

export default function FloatingContact() {

  return (
    <div className="floating-contact">

      <a
        href="https://wa.me/254745917655"
        aria-label="WhatsApp Dantown"
        className="whatsapp"
      >
        <MessageCircle size={19} />
      </a>

      <a
        href="tel:+254711454914"
        aria-label="Call Dantown"
      >
        <Phone size={18} />
      </a>

      <a
        href="mailto:dantownelectrical@gmail.com"
        aria-label="Email Dantown"
      >
        <Mail size={18} />
      </a>

    </div>
  )
}