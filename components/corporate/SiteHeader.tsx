"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Menu, Phone, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { navigation } from "./data"

export default function SiteHeader() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const primaryLinks = navigation.filter(({ label }) => ["Home", "About us", "Contact"].includes(label))
  const solutionLinks = navigation.filter(({ label }) => ["Services", "Solar solutions", "Electrical solutions"].includes(label))
  const exploreLinks = navigation.filter(({ label }) => ["Products", "Brands", "Projects", "Insights", "Team"].includes(label))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setOpenDropdown(null)
  }, [pathname])

  const isActive = (href: string) => href === "/" ? pathname === href : pathname.startsWith(href)

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <div className="site-header__inner">
        <Link href="/" className="brand" aria-label="Dantown Electrical home">
          <Image src="/image/logo/dantown-kitale.png" alt="Dantown Electrical" width={160} height={55} priority />
        </Link>

        <nav className="site-nav" aria-label="Primary navigation">
          {primaryLinks.slice(0, 2).map((item) => (
            <Link className={isActive(item.href) ? "is-active" : ""} href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
          <div className={`site-nav__dropdown ${openDropdown === "solutions" ? "is-open" : ""}`}>
            <button className={solutionLinks.some((item) => isActive(item.href)) ? "is-active" : ""} type="button" aria-expanded={openDropdown === "solutions"} onClick={() => setOpenDropdown(openDropdown === "solutions" ? null : "solutions")}>
              Solutions <ChevronDown size={14} />
            </button>
            <div className="site-nav__menu">{solutionLinks.map((item) => <Link className={isActive(item.href) ? "is-active" : ""} href={item.href} key={item.href}>{item.label}</Link>)}</div>
          </div>
          <div className={`site-nav__dropdown ${openDropdown === "explore" ? "is-open" : ""}`}>
            <button className={exploreLinks.some((item) => isActive(item.href)) ? "is-active" : ""} type="button" aria-expanded={openDropdown === "explore"} onClick={() => setOpenDropdown(openDropdown === "explore" ? null : "explore")}>
              Explore <ChevronDown size={14} />
            </button>
            <div className="site-nav__menu">{exploreLinks.map((item) => <Link className={isActive(item.href) ? "is-active" : ""} href={item.href} key={item.href}>{item.label}</Link>)}</div>
          </div>
          <Link className={isActive("/contact") ? "is-active" : ""} href="/contact">Contact</Link>
        </nav>

        <div className="site-header__actions">
          <Link className="header-phone" href="tel:+254745917655" aria-label="Call Dantown Electrical">
            <Phone size={16} />
          </Link>
          <Link className="button button--lime button--small" href="/request-quote">Get a quote</Link>
          <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="mobile-nav" aria-label="Toggle navigation menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <div className={`mobile-nav ${menuOpen ? "mobile-nav--open" : ""}`} id="mobile-nav">
        <nav aria-label="Mobile navigation">
          {primaryLinks.slice(0, 2).map((item) => (
            <Link className={isActive(item.href) ? "is-active" : ""} href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
          <span className="mobile-nav__label">Solutions</span>
          {solutionLinks.map((item) => <Link className={isActive(item.href) ? "is-active" : ""} href={item.href} key={item.href}>{item.label}</Link>)}
          <span className="mobile-nav__label">Explore</span>
          {exploreLinks.map((item) => <Link className={isActive(item.href) ? "is-active" : ""} href={item.href} key={item.href}>{item.label}</Link>)}
          <Link className={isActive("/contact") ? "is-active" : ""} href="/contact">Contact</Link>
          <Link className="button button--lime" href="/request-quote">Get a quote</Link>
        </nav>
      </div>
    </header>
  )
}
