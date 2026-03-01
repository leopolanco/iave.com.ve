import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section
      id="contact"
      className="border-t border-border bg-secondary/50 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            ¿Listo para integrar IA en tu negocio?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Agenda una consulta gratuita con nuestro equipo para explorar como
            IAVE puede ayudar a transformar tus operaciones con soluciones de IA a medida.
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
              Descargar Casos de Estudio
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            Sin compromiso. Respuesta en 24 horas.
          </p>
        </div>
      </div>
    </section>
  )
}
