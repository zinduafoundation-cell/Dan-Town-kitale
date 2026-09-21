import type { Metadata } from "next"
import { LegalExperience } from "@/components/corporate/CorporatePages"

export const metadata: Metadata = {
  title: "Terms of use",
  description: "Terms for use of the Dantown Electrical website and quotation requests.",
}

export default function TermsPage() {
  return <LegalExperience type="terms" />
}
