"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
  Menu,
  X,
  MessageCircle,
  Phone,
  Mail,
  Zap,
} from "lucide-react"
import { useState } from "react"
import styles from "./DantownNav.module.css"

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Brands", href: "/brands" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Team", href: "/team" },
  { label: "Request Quote", href: "/request-quote" },
]

export default function DantownNav() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>

          <Link href="/" className={styles.logo}>
            <span className={styles.logoMark}>
              <Image src="/image/logo/dantown-kitale.png" alt="Dantown Electrical Kitale" width={38} height={38} priority />
            </span>

            <span className={styles.logoText}>
              <strong>DANTOWN</strong>
              <small>ELECTRICAL KITALE</small>
            </span>
          </Link>

          <nav className={styles.desktopNav}>
            {navigation.map((item) => {
              const active =
                pathname === item.href ||
                (item.href !== "/" &&
                  pathname.startsWith(item.href))

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${styles.navItem} ${
                    active ? styles.active : ""
                  }`}
                >
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </nav>

          <Link
            href="/request-quote"
            className={styles.quoteButton}
          >
            <Zap size={16} />
            <span>Request Quote</span>
          </Link>

          <button
            className={styles.menuButton}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X size={25} />
            ) : (
              <Menu size={25} />
            )}
          </button>

        </div>
      </header>

      {mobileOpen && (
        <div className={styles.mobileMenu}>

          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={styles.mobileItem}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/request-quote"
            className={styles.mobileQuote}
            onClick={() => setMobileOpen(false)}
          >
            Request a Quote
          </Link>

          <div className={styles.mobileContacts}>
            <a href="tel:+254711454914">
              <Phone size={18} />
              Call Dantown
            </a>

            <a href="https://wa.me/254745917655">
              <MessageCircle size={18} />
              WhatsApp
            </a>

            <a href="mailto:dantownelectrical@gmail.com">
              <Mail size={18} />
              Email
            </a>
          </div>

        </div>
      )}
    </>
  )
}