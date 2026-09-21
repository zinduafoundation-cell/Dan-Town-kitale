export type TeamProfile = {
  slug: string
  number: string
  title: string
  label: string
  summary: string
  responsibilities: string[]
  image: string
  accent: string
}

export const teamProfiles: TeamProfile[] = [
  {
    slug: "leadership",
    number: "01",
    title: "Dantown Leadership",
    label: "CEO & BUSINESS LEADERSHIP",
    summary: "The leadership level sets the direction for Dantown Electrical Kitale, protects the quality standard and keeps the customer experience at the centre of every decision.",
    responsibilities: ["Business direction", "Customer trust", "Quality standards", "Partnership decisions"],
    image: "/image/team/management.png",
    accent: "orange",
  },
  {
    slug: "operations",
    number: "02",
    title: "Operations & Project Leads",
    label: "PLANNING & COORDINATION",
    summary: "Operations turns customer requirements into clear next steps, organised quotations and coordinated project support.",
    responsibilities: ["Requirement planning", "Quotation coordination", "Material organisation", "Project communication"],
    image: "/image/home/electrical.webp",
    accent: "yellow",
  },
  {
    slug: "technical",
    number: "03",
    title: "Technical Specialists",
    label: "ELECTRICAL, SOLAR & SECURITY",
    summary: "The technical team helps customers understand electrical, solar, lighting and security products in the context of their project.",
    responsibilities: ["Product guidance", "Electrical materials", "Solar and energy support", "Lighting and security"],
    image: "/image/gallery/Solar.webp",
    accent: "blue",
  },
  {
    slug: "customer-support",
    number: "04",
    title: "Customer Support",
    label: "AVAILABILITY & FOLLOW-UP",
    summary: "Customer support keeps conversations clear, follows up on requirements and helps connect each enquiry to the right Dantown team.",
    responsibilities: ["Enquiry handling", "Availability checks", "Customer updates", "Follow-up"],
    image: "/image/about/shop.webp",
    accent: "green",
  },
  {
    slug: "field",
    number: "05",
    title: "Field & Installation Support",
    label: "PRACTICAL DELIVERY",
    summary: "Field support helps translate plans and product decisions into practical work for homes, businesses and projects.",
    responsibilities: ["Site support", "Installation coordination", "Practical requirements", "Project feedback"],
    image: "/image/gallery/Commercial.webp",
    accent: "orange",
  },
  {
    slug: "supply",
    number: "06",
    title: "Supply & Distribution",
    label: "PRODUCTS & PROJECT MATERIALS",
    summary: "Supply and distribution keeps products organised for individual customers, contractors, retailers and project teams.",
    responsibilities: ["Product preparation", "Bulk requirements", "Collection support", "Distribution coordination"],
    image: "/image/product/inverter.webp",
    accent: "yellow",
  },
  {
    slug: "partners",
    number: "07",
    title: "Partners & Contractors",
    label: "COLLABORATION NETWORK",
    summary: "Dantown works alongside customers, contractors and trusted project partners to help electrical and energy work move forward.",
    responsibilities: ["Project collaboration", "Shared requirements", "Professional communication", "Reliable handovers"],
    image: "/image/brands/Product.webp",
    accent: "blue",
  },
]
