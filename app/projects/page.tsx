import { ProjectsExperience } from "@/components/corporate/CorporatePages"
import type { Metadata } from "next"

export const metadata: Metadata = { title: "Projects", description: "Explore the solar, electrical, lighting, and power solution projects supported by Dantown Electrical." }

export default function ProjectsPage() {
  return <ProjectsExperience />
}
