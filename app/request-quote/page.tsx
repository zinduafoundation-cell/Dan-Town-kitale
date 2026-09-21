import type { Metadata } from "next"
import { QuoteExperience } from "@/components/corporate/CorporatePages"

export const metadata: Metadata = {
  title: "Get a Quote",
  description: "Request a quotation from Dantown Electrical for solar, electrical, lighting, backup-power, or maintenance work in Kitale.",
}

export default function RequestQuotePage() {
  return <QuoteExperience />
}
