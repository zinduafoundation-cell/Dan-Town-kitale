import type { Service } from "../types"
import ServiceCard from "./ServiceCard"

export default function ServiceGrid({
  services,
}: {
  services: Service[]
}) {

  return (
    <div className="service-grid">

      {services.map((service) => (
        <ServiceCard
          key={service.id}
          service={service}
        />
      ))}

    </div>
  )
}