import { SolutionExperience } from "@/components/corporate/CorporatePages"
import type { Metadata } from "next"

export const metadata: Metadata = { title: "Electrical Solutions", description: "Professional electrical installation, lighting, maintenance, and technical support in Kitale." }

export default function ElectricalSolutionsPage() {
  return <SolutionExperience type="electrical" />
}
