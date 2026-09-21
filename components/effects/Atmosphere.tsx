"use client"

import { useEffect, useRef } from "react"

export default function Atmosphere() {
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = document.documentElement
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")

    const handlePointer = (event: MouseEvent | PointerEvent) => {
      if (reducedMotion.matches) return

      const x = (event.clientX / window.innerWidth - 0.5) * 18
      const y = (event.clientY / window.innerHeight - 0.5) * 12
      root.style.setProperty("--scene-shift-x", `${x.toFixed(2)}px`)
      root.style.setProperty("--scene-shift-y", `${y.toFixed(2)}px`)
      root.style.setProperty("--cursor-x", `${event.clientX}px`)
      root.style.setProperty("--cursor-y", `${event.clientY}px`)
    }

    const handleScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`
      }
    }

    window.addEventListener("pointermove", handlePointer, { passive: true })
    window.addEventListener("mousemove", handlePointer, { passive: true })
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener("pointermove", handlePointer)
      window.removeEventListener("mousemove", handlePointer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <div className="site-atmosphere" aria-hidden="true">
        <div className="site-atmosphere-glow" />
        <div className="site-atmosphere-grid" />
      </div>
      <div ref={progressRef} className="scroll-progress" aria-hidden="true" />
    </>
  )
}