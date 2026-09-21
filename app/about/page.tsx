import { AboutExperience } from "@/components/corporate/CorporatePages"
import type { Metadata } from "next"

export const metadata: Metadata = { title: "About us", description: "Learn about Dantown Electrical's commitment to reliable energy solutions in Kitale." }

export default function AboutPage() {
  return <AboutExperience />
}
