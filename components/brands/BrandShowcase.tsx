import type { Brand } from "../types"
import BrandCard from "./BrandCard"

export default function BrandShowcase({
  brands,
}: {
  brands: Brand[]
}) {

  return (
    <section className="brands-section">

      <div className="section-heading">

        <span>TRUSTED BRANDS</span>

        <h2>
          QUALITY YOU
          <br />
          CAN TRUST
        </h2>

        <p>
          We work with recognized electrical,
          security and energy brands to deliver
          dependable products.
        </p>

      </div>

      <div className="brand-grid">

        {brands.map((brand) => (
          <BrandCard
            key={brand.id}
            brand={brand}
          />
        ))}

      </div>

    </section>
  )
}