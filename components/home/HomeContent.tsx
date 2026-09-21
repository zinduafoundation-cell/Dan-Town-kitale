import Link from "next/link"
import BlogGrid from "../blog/BlogGrid"
import BrandShowcase from "../brands/BrandShowcase"
import GalleryGrid from "../gallery/GalleryGrid"
import ServiceGrid from "../services/ServiceGrid"
import ProductGrid from "./products/ProductsGrid"
import type { BlogPost, Brand, GalleryItem, Product, Service } from "../types"

const products: Product[] = [
  {
    id: "led-bulb",
    name: "LED Lighting",
    category: "Lighting",
    brand: "Dantown",
    description: "Efficient lighting products for homes, businesses and projects.",
    image: "/image/product/led-bulb.webp",
    featured: true,
  },
  {
    id: "solar-panel",
    name: "Solar Panels",
    category: "Solar",
    brand: "Dantown",
    description: "Solar equipment for reliable renewable energy systems.",
    image: "/image/product/solar-panel.webp",
    featured: true,
  },
  {
    id: "solar-battery",
    name: "Solar Batteries",
    category: "Energy",
    brand: "Powermax",
    description: "Energy storage products for backup and solar applications.",
    image: "/image/product/solar-battery.webp",
    featured: true,
  },
  {
    id: "security-light",
    name: "Security Lighting",
    category: "Security",
    brand: "Dantown",
    description: "Practical lighting for safer homes, businesses and outdoor spaces.",
    image: "/image/product/security-light.webp",
    featured: true,
  },
]

const services: Service[] = [
  {
    id: "electrical-installation",
    number: "01",
    icon: "⚡",
    title: "Electrical Installation",
    description: "Professional electrical materials and support for residential and commercial projects.",
    image: "/image/home/electrical.webp",
    items: ["Wiring materials", "Protection equipment", "Distribution products"],
  },
  {
    id: "lighting",
    number: "02",
    icon: "💡",
    title: "Lighting Solutions",
    description: "Modern lighting products for indoor, outdoor, commercial and security applications.",
    image: "/image/home/lighting.webp",
    items: ["Indoor lighting", "Outdoor lighting", "Security lighting"],
  },
  {
    id: "solar-energy",
    number: "03",
    icon: "☀️",
    title: "Solar & Energy",
    description: "Equipment and guidance for more reliable and efficient energy systems.",
    image: "/image/home/solarcomplet.webp",
    items: ["Solar panels", "Batteries", "Backup power"],
  },
  {
    id: "security",
    number: "04",
    icon: "🛡️",
    title: "Security Systems",
    description: "Security products and lighting solutions for homes, businesses and institutions.",
    image: "/image/home/security.webp",
    items: ["CCTV systems", "Security lighting", "Security accessories"],
  },
]

const brands: Brand[] = [
  { id: "hikvision", name: "Hikvision", logo: "", color: "#e50000", background: "#fff" },
  { id: "havells", name: "Havells", logo: "/image/brands/havells.webp", color: "#ed1c24", background: "#fff" },
  { id: "chint", name: "CHINT", logo: "/image/brands/chint.webp", color: "#e30613", background: "#fff" },
  { id: "powermax", name: "Powermax", logo: "/image/brands/powermax.webp", color: "#ff8c00", background: "#fff" },
]

const gallery: GalleryItem[] = [
  { id: "electrical", title: "Electrical Installation", category: "Electrical", image: "/image/home/electrical.webp" },
  { id: "lighting", title: "Modern Lighting", category: "Lighting", image: "/image/home/lighting.webp" },
  { id: "security", title: "Security Systems", category: "Security", image: "/image/gallery/Security.webp" },
]

const posts: BlogPost[] = [
  { id: "solar-future", slug: "solar-future", title: "The Future of Solar Energy in Kenya", excerpt: "How smarter solar systems and better energy management are changing the way homes and businesses use power.", category: "Solar", image: "/image/blog/smartsolar.webp", date: "08 AUG 2026" },
  { id: "solar-batteries", slug: "solar-batteries", title: "Understanding Solar Batteries", excerpt: "What batteries do, why capacity matters and how storage technology supports your energy system.", category: "Energy", image: "/image/blog/batterytech.webp", date: "01 AUG 2026" },
  { id: "led-lighting", slug: "led-lighting", title: "LED Lighting: Small Change, Big Difference", excerpt: "Modern lighting can improve visibility, atmosphere and energy efficiency at home or in business.", category: "Lighting", image: "/image/blog/lightingtech.webp", date: "29 JUL 2026" },
]

export default function HomeContent() {
  return (
    <>
      <section className="section">
        <div className="container section-header">
          <span className="section-kicker">Featured products</span>
          <h2 className="section-title">The right products for the job.</h2>
          <p className="section-description">Browse practical electrical, lighting, solar and security products selected for real homes, businesses and projects.</p>
        </div>
        <div className="container"><ProductGrid products={products} /></div>
      </section>

      <section className="section bg-black/20">
        <div className="container section-header">
          <span className="section-kicker">Our services</span>
          <h2 className="section-title">Support for every stage of your project.</h2>
        </div>
        <div className="container"><ServiceGrid services={services} /></div>
      </section>

      <section className="section">
        <div className="container"><BrandShowcase brands={brands} /></div>
      </section>

      <section className="section">
        <div className="container section-header">
          <span className="section-kicker">Project gallery</span>
          <h2 className="section-title">See Dantown in action.</h2>
        </div>
        <div className="container"><GalleryGrid items={gallery} /></div>
      </section>

      <section className="section">
        <div className="container section-header">
          <span className="section-kicker">Dantown insights</span>
          <h2 className="section-title">Useful knowledge for better decisions.</h2>
        </div>
        <div className="container"><BlogGrid posts={posts} /></div>
      </section>

      <section className="section">
        <div className="container card card-padding flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <span className="section-kicker">Ready to start?</span>
            <h2 className="section-title">Let&apos;s build something reliable.</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/request-quote" className="btn btn-primary">Request a quote</Link>
            <Link href="/contact" className="btn btn-secondary">Contact Dantown</Link>
          </div>
        </div>
      </section>
    </>
  )
}
