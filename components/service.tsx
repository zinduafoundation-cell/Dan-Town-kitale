import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { Service } from "./types"

type Props = {
  service: Service
}

export default function ServiceCard({
  service,
}: Props) {

  return (
    <article className="service-card">

      <div className="service-image">

        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        <div className="service-overlay" />

      </div>

      <div className="service-content">

        <h3>
          {service.title}
        </h3>

        <p>
          {service.description}
        </p>

        <Link href={`/services/${service.id}`}>
          Learn More
          <ArrowRight size={16} />
        </Link>

      </div>

    </article>
  )
}