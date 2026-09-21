import { ContactExperience } from "@/components/corporate/CorporatePages"
import type { Metadata } from "next"

export const metadata: Metadata = { title: "Contact us", description: "Contact Dantown Electrical in Kitale for a solar, electrical, lighting, or power solution inquiry." }

export default function ContactPage() {
  return <ContactExperience />
}
