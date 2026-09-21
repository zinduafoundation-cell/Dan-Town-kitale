import { ServicesExperience } from "@/components/corporate/CorporatePages"
import type { Metadata } from "next"

export const metadata: Metadata = { title: "Electrical & Solar Services", description: "Explore solar energy, electrical installation, backup power, lighting, maintenance, and consultation services in Kitale." }

export default function ServicesPage() {
  return <ServicesExperience />
}
