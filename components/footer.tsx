import Link from "next/link"
import { MapPin } from "lucide-react"

const footerLinks = {
  Servicios: [
    "Modelos de IA Personalizados",
    "IA Conversacional",
    "Analitica Predictiva",
    "Vision por Computadora",
    "Automatizacion de Procesos",
    "Gobernanza de IA",
  ],
  Empresa: [
    "Nosotros",
    "Carreras",
    "Investigacion",
    "Blog",
    "Contacto",
  ],
  Recursos: [
    "Casos de Estudio",
    "Documentacion",
    "Referencia API",
    "Comunidad",
  ],
  Legal: [
    "Politica de Privacidad",
    "Terminos de Servicio",
    "Politica de Cookies",
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <span className="font-serif text-sm font-bold text-primary-foreground">IA</span>
              </div>
              <span className="font-serif text-xl font-bold tracking-tight text-foreground">
                IAVE
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Diseñando inteligencia para las empresas del mañana.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-foreground">{category}</h4>
              <ul className="mt-4 flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

          <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} IAVE Laboratorio. Todos los derechos reservados.
          </p>
          <p className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5" />
            Venezuela
          </p>
        </div>
      </div>
    </footer>
  )
}
