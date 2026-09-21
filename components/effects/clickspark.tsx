"use client"

import {
  ReactNode,
  useEffect,
  useRef,
  useCallback,
} from "react"

type Spark = {
  x: number
  y: number
  angle: number
  startTime: number
}

type Props = {
  children: ReactNode
  sparkColor?: string
  sparkSize?: number
  sparkRadius?: number
  sparkCount?: number
  duration?: number
}

export default function ClickSpark({
  children,
  sparkColor = "#ffad00",
  sparkSize = 8,
  sparkRadius = 18,
  sparkCount = 8,
  duration = 400,
}: Props) {

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sparksRef = useRef<Spark[]>([])

  const ease = useCallback((t: number) => {
    return t * (2 - t)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const parent = canvas.parentElement
    if (!parent) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrame = 0

    const resize = () => {
      const rect = parent.getBoundingClientRect()

      const ratio = window.devicePixelRatio || 1

      canvas.width = rect.width * ratio
      canvas.height = rect.height * ratio

      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`

      ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
    }

    resize()

    const observer = new ResizeObserver(resize)
    observer.observe(parent)

    const draw = (time: number) => {

      const rect = parent.getBoundingClientRect()

      ctx.clearRect(
        0,
        0,
        rect.width,
        rect.height
      )

      sparksRef.current =
        sparksRef.current.filter((spark) => {

          const elapsed =
            time - spark.startTime

          if (elapsed >= duration) {
            return false
          }

          const progress =
            elapsed / duration

          const eased = ease(progress)

          const distance =
            eased * sparkRadius

          const length =
            sparkSize * (1 - eased)

          const x1 =
            spark.x +
            distance *
              Math.cos(spark.angle)

          const y1 =
            spark.y +
            distance *
              Math.sin(spark.angle)

          const x2 =
            spark.x +
            (distance + length) *
              Math.cos(spark.angle)

          const y2 =
            spark.y +
            (distance + length) *
              Math.sin(spark.angle)

          ctx.strokeStyle = sparkColor
          ctx.lineWidth = 2

          ctx.beginPath()
          ctx.moveTo(x1, y1)
          ctx.lineTo(x2, y2)
          ctx.stroke()

          return true
        })

      animationFrame =
        requestAnimationFrame(draw)
    }

    animationFrame =
      requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animationFrame)
      observer.disconnect()
    }
  }, [
    sparkColor,
    sparkSize,
    sparkRadius,
    duration,
    ease,
  ])

  const handleClick = (
    event: React.MouseEvent
  ) => {

    const canvas = canvasRef.current
    if (!canvas) return

    const rect =
      canvas.getBoundingClientRect()

    const x =
      event.clientX - rect.left

    const y =
      event.clientY - rect.top

    const now = performance.now()

    const sparks = Array.from(
      { length: sparkCount },
      (_, index) => ({
        x,
        y,
        angle:
          (Math.PI * 2 * index) /
          sparkCount,
        startTime: now,
      })
    )

    sparksRef.current.push(...sparks)
  }

  return (
    <div
      onClick={handleClick}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 20,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          height: "100%",
        }}
      >
        {children}
      </div>
    </div>
  )
}