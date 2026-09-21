import Image from "next/image"
import type { Brand } from "../types"

type Props = {
  brand: Brand
}

export default function BrandCard({
  brand,
}: Props) {

  return (
    <article
      className="brand-card"
      style={{
        "--brand-color": brand.color,
        "--brand-background": brand.background,
      } as React.CSSProperties}
    >

      <div className="brand-logo">

        {brand.logo ? (
          <Image
            src={brand.logo}
            alt={`${brand.name} logo`}
            fill
            sizes="180px"
          />
        ) : (
          <strong>
            {brand.name}
          </strong>
        )}

      </div>

      <div className="brand-name">
        {brand.name}
      </div>

    </article>
  )
}