import type { Metadata } from "next"
import { LegalExperience } from "@/components/corporate/CorporatePages"

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "Learn how Dantown Electrical handles the information you share through this website.",
}

export default function PrivacyPage() {
  return <LegalExperience type="privacy" />
}
