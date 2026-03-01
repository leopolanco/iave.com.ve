const steps = [
  {
    number: "01",
    title: "Descubrimiento y Evaluacion",
    description:
      "Analizamos tus sistemas actuales, infraestructura de datos y objetivos de negocio para identificar las oportunidades de mayor impacto para la integracion de IA.",
  },
  {
    number: "02",
    title: "Estrategia y Arquitectura",
    description:
      "Nuestro equipo diseña una hoja de ruta de IA personalizada y una arquitectura tecnica que se alinea con tu stack tecnologico existente y escala con tu crecimiento.",
  },
  {
    number: "03",
    title: "Desarrollo y Entrenamiento",
    description:
      "Construimos, entrenamos y probamos rigurosamente modelos de IA personalizados utilizando tus datos propietarios, asegurando precision y fiabilidad en condiciones reales.",
  },
  {
    number: "04",
    title: "Implementacion y Optimizacion",
    description:
      "Integracion fluida en tu entorno de produccion con monitoreo continuo, ajuste de rendimiento y mejoras iterativas.",
  },
]

export function Process() {
  return (
    <section id="process" className="border-t border-border bg-secondary/50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Como trabajamos
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Un proceso probado para la transformacion con IA
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Nuestra metodologia ha sido refinada en mas de 120 proyectos
            empresariales para entregar soluciones de IA confiables y de alto impacto.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="relative">
            <div className="absolute left-8 top-0 hidden h-full w-px bg-border lg:block" />
            <div className="flex flex-col gap-12">
              {steps.map((step) => (
                <div key={step.number} className="relative flex gap-8">
                  <div className="relative z-10 hidden lg:block">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-border bg-foreground text-background">
                      <span className="font-serif text-lg font-bold">{step.number}</span>
                    </div>
                  </div>
                  <div className="flex-1 rounded-xl border border-border bg-background p-8">
                    <div className="flex items-center gap-3">
                      <span className="font-serif text-sm font-bold text-foreground lg:hidden">
                        {step.number}
                      </span>
                      <h3 className="font-serif text-xl font-semibold text-foreground">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
