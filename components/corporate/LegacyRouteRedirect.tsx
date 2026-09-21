import { permanentRedirect } from "next/navigation"

export default function LegacyRouteRedirect({ href }: { href: string }) {
  permanentRedirect(href)
  return null
}
