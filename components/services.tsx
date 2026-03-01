import {
  Brain,
  MessageSquare,
  BarChart3,
  Eye,
  Workflow,
  ShieldCheck,
  ArrowRight,
} from "lucide-react"

const services = [
  {
    icon: Brain,
    title: "Modelos de IA Personalizados",
    description:
      "Diseñamos, entrenamos e implementamos modelos de aprendizaje automatico a medida, adaptados a los desafios especificos de tu negocio y panorama de datos.",
  },
  {
    icon: MessageSquare,
    title: "IA Conversacional",
    description:
      "Construye chatbots inteligentes y asistentes virtuales que entienden el contexto, manejan consultas complejas e impulsan interacciones significativas con los clientes.",
  },
  {
    icon: BarChart3,
    title: "Analitica Predictiva",
    description:
      "Aprovecha tus datos para pronosticar tendencias, optimizar operaciones y tomar decisiones basadas en datos con modelado predictivo avanzado.",
  },
  {
    icon: Eye,
    title: "Vision por Computadora",
    description:
      "Implementa sistemas de reconocimiento de imagenes, deteccion de objetos e inspeccion visual que automatizan el control de calidad y desbloquean datos visuales.",
  },
  {
    icon: Workflow,
    title: "Automatizacion de Procesos",
    description:
      "Optimiza flujos de trabajo repetitivos con automatizacion inteligente que aprende, se adapta y mejora con el tiempo, liberando a tu equipo para trabajo de alto valor.",
  },
  {
    icon: ShieldCheck,
    title: "Gobernanza de IA",
    description:
      "Asegura que tus sistemas de IA sean eticos, transparentes y conformes. Construimos marcos de IA responsable alineados con estandares regulatorios.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Lo que hacemos
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Servicios de integracion de IA de extremo a extremo
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Nuestra coleccion de servicios de IA abarca cada etapa del proceso
            de transformacion. Desde la estrategia y el desarrollo hasta la
            implementacion y el monitoreo.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative rounded-xl border border-border bg-card p-8 transition-all hover:border-foreground/20 hover:bg-secondary/80"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-foreground text-background">
                <service.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-serif text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <div className="mt-5 flex items-center gap-1 text-sm font-medium text-foreground opacity-0 transition-opacity group-hover:opacity-100">
                Saber mas
                <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
