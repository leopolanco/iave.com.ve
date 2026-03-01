import { Users, GraduationCap, FlaskConical, Globe } from "lucide-react"

const highlights = [
  {
    icon: Users,
    title: "50+ Investigadores",
    description: "Cientificos e ingenieros de IA de clase mundial de instituciones lideres.",
  },
  {
    icon: GraduationCap,
    title: "Equipos con Doctorado",
    description: "Cada proyecto es guiado por experiencia de nivel doctoral en IA y ML.",
  },
  {
    icon: FlaskConical,
    title: "I+D Primero",
    description: "Invertimos el 30% de nuestros ingresos en investigacion fundamental de IA.",
  },
  {
    icon: Globe,
    title: "Alcance Global",
    description: "Sirviendo empresas en 15 paises con soluciones de IA localizadas.",
  },
]

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Sobre IAVE
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-pretty">
              Donde la investigacion profunda se encuentra con la realidad empresarial
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Fundado por investigadores de IA y veteranos de la industria, IAVE
              cierra la brecha entre la investigacion de IA de vanguardia y las
              aplicaciones practicas de negocio. No solo implementamos tecnologia
              — diseñamos inteligencia que transforma como operan las organizaciones.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Nuestro enfoque de laboratorio significa que cada solucion es
              rigurosamente probada, validada y optimizada antes de llegar a tu
              entorno de produccion. Creemos que la IA debe ser confiable,
              explicable y genuinamente util.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-card p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground text-background">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-serif text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
