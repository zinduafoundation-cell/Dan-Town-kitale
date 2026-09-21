import { SolutionExperience } from "@/components/corporate/CorporatePages"
import type { Metadata } from "next"

export const metadata: Metadata = { title: "Solar Solutions", description: "Solar installation, battery storage, backup power, and maintenance solutions in Kitale, Kenya." }

export default function SolarSolutionsPage() {
  return <SolutionExperience type="solar" />
}
