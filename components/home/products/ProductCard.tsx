import Link from "next/link"
import { ArrowUpRight, MessageCircle } from "lucide-react"
import type { Product } from "./types"
import HoverImageDeck from "../../effects/HoverImageDeck"

type Props = {
  product: Product
}

export default function ProductCard({
  product,
}: Props) {
  const whatsappMessage = encodeURIComponent(
    `Hello Dantown Electrical Kitale. I would like the current price for ${product.name}.`,
  )

  return (
    <article className="product-card">

      <Link
        href={`/request-quote?product=${product.id}`}
        className="product-image"
      >
        <HoverImageDeck images={product.images ?? [product.image, product.image, product.image]} alt={product.name} sizes="(max-width: 768px) 100vw, 25vw" />

        <span className="product-arrow">
          <ArrowUpRight size={18} />
        </span>
      </Link>

      <div className="product-info">

        <span className="product-brand">
          {product.brand}
        </span>

        <h3>
          {product.name}
        </h3>

        <strong className="product-price">
          {product.priceLabel ?? (product.price ? `KES ${product.price.toLocaleString()}` : "Price on request")}
        </strong>

        <p>
          {product.description}
        </p>

        <div className="product-bottom">

          <span>
            {product.category}
          </span>

          <Link
            href={`/request-quote?product=${product.id}`}
          >
            Request Quote
          </Link>

          <a
            href={`https://wa.me/254745917655?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="product-whatsapp"
            aria-label={`Ask for the price of ${product.name} on WhatsApp`}
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>

        </div>

      </div>

    </article>
  )
}