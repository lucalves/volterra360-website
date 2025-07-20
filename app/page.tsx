import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Destinations } from "@/components/destinations"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { GoogleAnalytics } from "@/components/google-analytics"

export default function Home() {
  return (
    <main className="min-h-screen">
      <GoogleAnalytics />
      <Header />
      <Hero />
      <About />
      <Services />
      <Destinations />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
