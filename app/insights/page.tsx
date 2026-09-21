import { InsightsExperience } from "@/components/corporate/CorporatePages"
import type { Metadata } from "next"

export const metadata: Metadata = { title: "Energy & Electrical Insights", description: "Practical guides from Dantown Electrical on solar energy, electrical safety, and smarter power choices." }

export default function InsightsPage() {
  return <InsightsExperience />
}
