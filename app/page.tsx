import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { LogosBar } from "@/components/logos-bar"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { About } from "@/components/about"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <LogosBar />
      <Services />
      <Process />
      <About />
      <CTA />
      <Footer />
    </main>
  )
}
