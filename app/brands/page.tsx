import type { Metadata } from "next"
import { BrandsExperience } from "@/components/corporate/CorporatePages"

export const metadata: Metadata = {
  title: "Brands & Quality",
  description: "Explore electrical, lighting, power, and security product brands available through Dantown Electrical in Kitale.",
}

export default function BrandsPage() {
  return <BrandsExperience />
}
