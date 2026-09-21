import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Facebook, Instagram, Linkedin, MapPin, Phone, Send } from "lucide-react"
import { navigation } from "./data"
import PowerGroupMark from "./PowerGroupMark"

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-top">
        <div className="footer-intro">
          <Image src="/image/logo/dantown-kitale.png" alt="Dantown Electrical" width={172} height={59} />
          <p>Powering Kitale, one home at a time with smart electrical solutions, clean energy, and reliable support.</p>
          <PowerGroupMark />
          <div className="social-links" aria-label="Social links">
            <a href="#" aria-label="Facebook"><Facebook size={17} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={17} /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin size={17} /></a>
            <a href="https://wa.me/254745917655" aria-label="WhatsApp"><Send size={16} /></a>
          </div>
        </div>
        <div className="footer-column">
          <h2>Company</h2>
          {navigation.filter(({ label }) => !["Home", "Solar solutions", "Electrical solutions"].includes(label)).map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
        </div>
        <div className="footer-column">
          <h2>Solutions</h2>
          <Link href="/solar-solutions">Solar energy</Link>
          <Link href="/electrical-solutions">Electrical installation</Link>
          <Link href="/electrical-solutions#lighting">Lighting solutions</Link>
          <Link href="/solar-solutions#backup">Power backup</Link>
          <Link href="/electrical-solutions#maintenance">Maintenance</Link>
        </div>
        <div className="footer-column footer-contact">
          <h2>Contact</h2>
          <a href="https://maps.google.com/?q=Kitale%2C+Kenya" target="_blank" rel="noreferrer"><MapPin size={16} /> Kitale, Kenya</a>
          <a href="tel:+254745917655"><Phone size={16} /> +254 745 917 655</a>
          <a href="mailto:dantownelectrical@gmail.com"><ArrowUpRight size={16} /> dantownelectrical@gmail.com</a>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© 2026 Dantown Electrical. All rights reserved.</span>
        <PowerGroupMark />
        <span><Link href="/privacy">Privacy policy</Link><Link href="/terms">Terms of use</Link></span>
      </div>
    </footer>
  )
}
