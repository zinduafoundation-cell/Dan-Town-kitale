import HomeExperience from "@/components/corporate/HomeExperience"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Solar & Electrical Solutions in Kitale",
  description: "Dantown Electrical provides professional solar, electrical, lighting, and power solutions for homes and businesses in Kitale, Kenya.",
}

export default function HomePage() {
  return <HomeExperience />
}
