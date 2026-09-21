import Link from "next/link"
import {
  Lightbulb,
  Cable,
  ShieldCheck,
  Home,
  Sun,
  Plug,
} from "lucide-react"

const categories = [
  { title: "Lighting", description: "LEDs, downlights and modern lighting.", href: "/products?category=lighting", icon: Lightbulb },
  { title: "Cables & Wiring", description: "Reliable cables and professional wiring.", href: "/products?category=cables", icon: Cable },
  { title: "Security", description: "CCTV and modern security solutions.", href: "/products?category=security", icon: ShieldCheck },
  { title: "Smart Home", description: "Modern connected home solutions.", href: "/products?category=smart-home", icon: Home },
  { title: "Solar", description: "Efficient renewable energy solutions.", href: "/products?category=solar", icon: Sun },
  { title: "Accessories", description: "Switches, sockets and accessories.", href: "/products?category=accessories", icon: Plug },
]

export default function Categories() {
  return (
    <section className="section">
      <div className="section-heading">
        <span>WHAT WE OFFER</span>
        <h2>
          Electrical solutions
          <br />
          for every space.
        </h2>
      </div>

      <div className="category-grid">
        {categories.map((category) => {
          const Icon = category.icon

          return (
            <Link href={category.href} key={category.title} className="category-card">
              <div className="category-icon"><Icon size={25} /></div>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              <span className="category-arrow">{"->"}</span>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
