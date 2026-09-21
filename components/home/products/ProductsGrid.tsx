import type { Product } from "./types"
import ProductCard from "./ProductCard"

type Props = {
  products: Product[]
}

export default function ProductGrid({
  products,
}: Props) {

  if (!products.length) {
    return (
      <div className="empty-state">
        <h3>No products found</h3>
        <p>
          Try another category or search term.
        </p>
      </div>
    )
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  )
}