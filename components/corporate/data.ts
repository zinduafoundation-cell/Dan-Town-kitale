import type { LucideIcon } from "lucide-react"
import {
  BatteryCharging,
  Cable,
  Lightbulb,
  Settings2,
  ShieldCheck,
  SunMedium,
  Wrench,
  Zap,
} from "lucide-react"

export type Service = {
  title: string
  description: string
  href: string
  icon: LucideIcon
  image: string
  includes: string[]
}

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Brands", href: "/brands" },
  { label: "Solar solutions", href: "/solar-solutions" },
  { label: "Electrical solutions", href: "/electrical-solutions" },
  { label: "Projects", href: "/projects" },
  { label: "Insights", href: "/insights" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
]

export const services: Service[] = [
  {
    title: "Solar energy solutions",
    description: "Solar systems designed for dependable, efficient power at home, at work, and in the field.",
    href: "/solar-solutions",
    icon: SunMedium,
    image: "/image/home/solarcomplet.webp",
    includes: ["System design", "Panel installation", "Battery storage", "Solar maintenance"],
  },
  {
    title: "Electrical installation",
    description: "Safe, practical electrical installations for residential, commercial, and institutional spaces.",
    href: "/electrical-solutions",
    icon: Zap,
    image: "/image/home/electrical.webp",
    includes: ["Wiring", "Distribution boards", "Electrical fittings", "Safety inspections"],
  },
  {
    title: "Power backup",
    description: "Reliable backup systems that protect the comfort, productivity, and continuity of your space.",
    href: "/solar-solutions#backup",
    icon: BatteryCharging,
    image: "/image/product/inverter.webp",
    includes: ["Inverters", "Battery systems", "UPS systems", "Power management"],
  },
  {
    title: "Lighting solutions",
    description: "Modern indoor, outdoor, commercial, and security lighting that works beautifully and efficiently.",
    href: "/electrical-solutions#lighting",
    icon: Lightbulb,
    image: "/image/home/lighting.webp",
    includes: ["Indoor lighting", "Outdoor lighting", "LED upgrades", "Security lighting"],
  },
  {
    title: "Electrical maintenance",
    description: "Clear diagnostics, proactive maintenance, and upgrades that keep important systems operating safely.",
    href: "/electrical-solutions#maintenance",
    icon: Wrench,
    image: "/image/gallery/Electrical.webp",
    includes: ["Repairs", "Fault diagnosis", "System upgrades", "Safety checks"],
  },
  {
    title: "Consultation & support",
    description: "Straightforward technical guidance to help you select the right system before work begins.",
    href: "/contact",
    icon: Settings2,
    image: "/image/service/service1.jpeg",
    includes: ["Site assessment", "Energy planning", "Technical advice", "After-service support"],
  },
]

export const solarCategories = [
  { title: "Home solar systems", icon: SunMedium },
  { title: "Business solar", icon: Zap },
  { title: "Solar water pumping", icon: Settings2 },
  { title: "Battery storage", icon: BatteryCharging },
  { title: "Professional installation", icon: Wrench },
  { title: "Care & maintenance", icon: ShieldCheck },
]

export const electricalCategories = [
  { title: "New installations", icon: Cable },
  { title: "Distribution & protection", icon: ShieldCheck },
  { title: "Lighting design", icon: Lightbulb },
  { title: "Power backup", icon: BatteryCharging },
  { title: "Inspection & maintenance", icon: Wrench },
  { title: "Technical consultation", icon: Settings2 },
]

export type Project = {
  title: string
  category: "Solar" | "Electrical" | "Lighting" | "Commercial" | "Residential"
  location: string
  description: string
  image: string
}

export const projects: Project[] = [
  {
    title: "Residential solar installation",
    category: "Solar",
    location: "Kitale, Kenya",
    description: "A dependable household solar system planned around day-to-day energy needs and future flexibility.",
    image: "/image/gallery/Solar.webp",
  },
  {
    title: "Commercial electrical installation",
    category: "Commercial",
    location: "Trans-Nzoia County",
    description: "A practical electrical installation that supports a growing work environment with safer distribution.",
    image: "/image/gallery/Commercial.webp",
  },
  {
    title: "Backup power installation",
    category: "Electrical",
    location: "Kitale, Kenya",
    description: "A backup power approach focused on keeping essential appliances and operations running confidently.",
    image: "/image/product/solar-battery.webp",
  },
  {
    title: "Modern lighting project",
    category: "Lighting",
    location: "Western Kenya",
    description: "Energy-conscious lighting selected to improve comfort, visibility, and the character of a space.",
    image: "/image/gallery/Lighting.webp",
  },
  {
    title: "Building electrical wiring",
    category: "Residential",
    location: "Kitale, Kenya",
    description: "Safe electrical wiring and fittings planned carefully around the way a new home will be lived in.",
    image: "/image/gallery/Electrical.webp",
  },
  {
    title: "Solar water pumping",
    category: "Solar",
    location: "Trans-Nzoia County",
    description: "A solar pumping solution designed to make everyday water access more independent and efficient.",
    image: "/image/gallery/WaterPump.webp",
  },
]

export const insights = [
  {
    title: "How solar energy works for your home",
    description: "A simple guide to the panels, inverter, batteries, and careful planning behind a dependable solar system.",
    category: "Solar guide",
    readingTime: "5 min read",
    image: "/image/blog/blog1.webp",
  },
  {
    title: "Choosing the right solar system",
    description: "The questions that help turn your household needs into a solar solution that makes practical sense.",
    category: "Planning",
    readingTime: "6 min read",
    image: "/image/blog/solarpackage.webp",
  },
  {
    title: "Everyday electrical safety essentials",
    description: "Small electrical checks that can help make homes, businesses, and teams safer every day.",
    category: "Electrical safety",
    readingTime: "4 min read",
    image: "/image/blog/wiringtyp.webp",
  },
]

export const brands = [
  { name: "ABB", image: "/image/brands/abb.webp", focus: "Protection & control" },
  { name: "Schneider Electric", image: "/image/brands/schneider.webp", focus: "Energy management" },
  { name: "Siemens", image: "/image/brands/siemens.webp", focus: "Electrical systems" },
  { name: "Philips", image: "/image/brands/philips.webp", focus: "Lighting" },
  { name: "Havells", image: "/image/brands/havells.webp", focus: "Home electrical" },
  { name: "Chint", image: "/image/brands/chint.webp", focus: "Power distribution" },
  { name: "Hikvision", image: "/image/brands/hikvision.webp", focus: "Security solutions" },
  { name: "Osram", image: "/image/brands/osram.webp", focus: "Lighting technology" },
  { name: "Panasonic", image: "/image/brands/panasonic.webp", focus: "Electrical solutions" },
  { name: "MK", image: "/image/brands/mk.webp", focus: "Wiring accessories" },
  { name: "Windsor", image: "/image/brands/windsor.webp", focus: "Cables & fittings" },
  { name: "Tronic", image: "/image/brands/tronic.webp", focus: "Power products" },
]
