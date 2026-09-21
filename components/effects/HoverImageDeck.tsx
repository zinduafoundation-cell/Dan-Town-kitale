"use client"

import Image from "next/image"
import { useState } from "react"

type Props = {
  images: [string, string, string]
  alt: string
  sizes: string
  className?: string
}

export default function HoverImageDeck({ images, alt, sizes, className = "" }: Props) {
  const [activeIndex, setActiveIndex] = useState(0)

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const position = event.nativeEvent.offsetX / event.currentTarget.clientWidth
    setActiveIndex(Math.min(2, Math.max(0, Math.floor(position * 3))))
  }

  return <div className={`hover-image-deck ${className}`} onPointerMove={handlePointerMove} onPointerLeave={() => setActiveIndex(0)}>
    {images.map((image, index) => <Image key={`${image}-${index}-image`} src={image} alt={alt} fill sizes={sizes} className={`hover-image-deck__image ${activeIndex === index ? "is-active" : ""}`} />)}
    <span className="hover-image-deck__hint" aria-hidden="true">Move to explore</span>
    <span className="hover-image-deck__dots" aria-hidden="true">{images.map((image, index) => <i className={activeIndex === index ? "is-active" : ""} key={`${image}-${index}-dot`} />)}</span>
  </div>
}