"use client"

import { useEffect, useRef } from "react"

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
}

export function NeuralNetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let nodes: Node[] = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const initNodes = () => {
      const count = Math.min(80, Math.floor((window.innerWidth * window.innerHeight) / 15000))
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.5 + 0.5,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]
        a.x += a.vx
        a.y += a.vy

        if (a.x < 0 || a.x > canvas.width) a.vx *= -1
        if (a.y < 0 || a.y > canvas.height) a.vy *= -1

        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 180) {
            const alpha = (1 - dist / 180) * 0.15
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(0, 0, 0, ${alpha})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }

        ctx.beginPath()
        ctx.arc(a.x, a.y, a.radius, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(0, 0, 0, 0.3)"
        ctx.fill()
      }

      animationId = requestAnimationFrame(draw)
    }

    resize()
    initNodes()
    draw()

    window.addEventListener("resize", () => {
      resize()
      initNodes()
    })

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  )
}
