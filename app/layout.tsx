import type { Metadata } from "next"
import type { ReactNode } from "react"
import "./globals.css"
import SiteFooter from "@/components/corporate/SiteFooter"
import SiteHeader from "@/components/corporate/SiteHeader"
import WhatsAppButton from "@/components/WhatsAppButton"

export const metadata: Metadata = {
  metadataBase: new URL("https://dantown.co.ke"),
  title: { default: "Dantown Electrical | Solar & Electrical Solutions in Kitale", template: "%s | Dantown Electrical" },
  description: "Professional solar energy, electrical installation, lighting, and power solutions for homes and businesses in Kitale, Kenya.",
  keywords: ["Dantown Electrical Kitale", "Electrical Services Kitale", "Solar Installation Kitale", "Solar Energy Kenya", "Electrical Contractors Kitale"],
  openGraph: { title: "Dantown Electrical", description: "Smart electrical solutions. Clean energy. Reliable power.", type: "website", locale: "en_KE" },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en"><body><SiteHeader />{children}<SiteFooter /><WhatsAppButton /></body></html>
}
