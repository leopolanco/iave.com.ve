import {
  Cpu,
  Database,
  Globe,
  BarChart3,
  Shield,
  Zap,
} from "lucide-react"

const logos = [
  { icon: Cpu, name: "NeuraTech" },
  { icon: Database, name: "DataCore" },
  { icon: Globe, name: "GlobalSys" },
  { icon: BarChart3, name: "AnalyticsPro" },
  { icon: Shield, name: "SecureAI" },
  { icon: Zap, name: "FlashML" },
]

export function LogosBar() {
  return (
    <section className="border-y border-border bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Con la confianza de lideres de la industria
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center gap-2 text-muted-foreground/60 transition-colors hover:text-muted-foreground"
            >
              <logo.icon className="h-5 w-5" />
              <span className="font-serif text-lg font-semibold tracking-tight">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
