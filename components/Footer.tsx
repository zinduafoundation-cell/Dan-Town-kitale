import Link from "next/link"
import Image from "next/image"

const navigation = [
	["About", "/about"],
	["Products", "/products"],
	["Services", "/services"],
	["Brands", "/brands"],
	["Gallery", "/gallery"],
	["Blog", "/blog"],
	["Contact", "/contact"],
	["Team", "/team"],
] as const

export default function Footer() {
	return (
		<footer className="footer">
			<div className="container footer-grid">
				<div>
					<div className="footer-logo">
						<Image src="/image/logo/dantown-kitale.png" alt="Dantown Electrical Kitale" width={150} height={52} />
					</div>
					<p className="mt-5 max-w-sm">
						Electrical products and practical energy solutions for homes,
						businesses and projects.
					</p>
				</div>

				<div>
					<h2 className="footer-title">Navigation</h2>
					<nav className="footer-links" aria-label="Footer navigation">
						{navigation.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
					</nav>
				</div>

				<div>
					<h2 className="footer-title">Start Here</h2>
					<nav className="footer-links">
						<Link href="/request-quote">Request Quote</Link>
						<Link href="/contact">Contact Dantown</Link>
					</nav>
				</div>

				<div>
					<h2 className="footer-title">Contact</h2>
					<div className="footer-links">
						<a href="tel:+254745917655">07 4591 7655</a>
						<a href="mailto:dantownelectrical@gmail.com">dantownelectrical@gmail.com</a>
						<span>Kitale, Kenya</span>
					</div>
				</div>
			</div>

			<div className="container footer-bottom">
				<span>Dantown Electrical Kitale</span>
				<span>Electrical solutions, thoughtfully supplied.</span>
			</div>
		</footer>
	)
}
