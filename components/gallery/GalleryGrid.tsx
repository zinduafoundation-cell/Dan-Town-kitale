import type { GalleryItem } from "../types"
import GalleryCard from "./GalleryCard"

export default function GalleryGrid({
  items,
}: {
  items: GalleryItem[]
}) {

  return (
    <div className="gallery-grid">

      {items.map((item) => (
        <GalleryCard
          key={item.id}
          item={item}
        />
      ))}

    </div>
  )
}