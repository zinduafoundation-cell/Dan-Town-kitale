import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react"

const contacts = [
  {
    title: "Call Us",
    text: "Speak directly with our team.",
    href: "tel:+254711454914",
    icon: Phone,
  },
  {
    title: "WhatsApp",
    text: "Chat with Dantown.",
    href: "https://wa.me/254745917655",
    icon: MessageCircle,
  },
  {
    title: "Email",
    text: "Send us an enquiry.",
    href: "mailto:dantownelectrical@gmail.com",
    icon: Mail,
  },
  {
    title: "Visit Us",
    text: "Kitale, Kenya.",
    href: "#contact-location",
    icon: MapPin,
  },
]

export default function ContactCards() {

  return (
    <div className="contact-grid">

      {contacts.map((contact) => {

        const Icon = contact.icon

        return (
          <a
            key={contact.title}
            href={contact.href}
            className="contact-card"
          >

            <div className="contact-icon">
              <Icon size={22} />
            </div>

            <div>
              <h3>
                {contact.title}
              </h3>

              <p>
                {contact.text}
              </p>
            </div>

          </a>
        )
      })}

    </div>
  )
}