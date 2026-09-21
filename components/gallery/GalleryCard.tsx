import type { GalleryItem } from "../types"
import HoverImageDeck from "../effects/HoverImageDeck"

export default function GalleryCard({
  item,
}: {
  item: GalleryItem
}) {

  return (
    <article className="gallery-card">

      <HoverImageDeck images={item.images ?? [item.image, item.image, item.image]} alt={item.title} sizes="(max-width: 768px) 100vw, 33vw" />

      <div className="gallery-overlay">

        <span>
          {item.category}
        </span>

        <h3>
          {item.title}
        </h3>

      </div>

    </article>
  )
}