"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NeuralNetworkCanvas } from "@/components/neural-network-canvas"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0">
        <NeuralNetworkCanvas />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-center lg:px-8 lg:py-32">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground animate-pulse" />
            Aceptando nuevos socios
          </div>

          <h1 className="font-serif text-5xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-6xl lg:text-8xl text-balance">
            Inteligencia{" "}
            <span className="text-primary">diseñada</span>{" "}
            para tu negocio
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground lg:text-xl">
            IAVE es un laboratorio de IA que ayuda a las empresas a integrar
            inteligencia artificial de vanguardia en sus sistemas existentes.
            Desde la estrategia hasta la implementacion.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="gap-2 px-8 text-base">
              Agendar una Consulta
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 text-base border-border text-foreground hover:bg-secondary"
            >
              Ver Nuestro Trabajo
            </Button>
          </div>
        </div>

        <div className="mx-auto mt-20 grid max-w-3xl grid-cols-2 gap-8 sm:grid-cols-4">
          {[
            { value: "120+", label: "Proyectos Entregados" },
            { value: "98%", label: "Retencion de Clientes" },
            { value: "40+", label: "Clientes Empresariales" },
            { value: "3x", label: "Aumento Promedio de ROI" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-serif text-3xl font-bold text-foreground lg:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
