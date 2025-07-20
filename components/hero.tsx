"use client";

import { Button } from "@/components/ui/button";
import { Plane, Globe, Users } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="pt-20 pb-16 bg-gradient-to-br from-primary to-primary/90 text-white overflow-hidden"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl mt-12 font-bold mb-6 font-open-sans animate-fade-in-up">
            VIAJAR BEM COMEÇA COM A ESCOLHA CERTA
          </h1>
          <p
            className="text-xl md:text-2xl mb-8 text-white/90 font-montserrat animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            A Volterra360 é sua parceira completa em viagens corporativas e de
            lazer. Oferecemos soluções personalizadas para tornar cada viagem
            inesquecível.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-primary font-semibold transform hover:scale-105 transition-all duration-300"
              onClick={scrollToContact}
            >
              Solicitar Orçamento
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent transform hover:scale-105 transition-all duration-300"
              onClick={() => {
                const element = document.getElementById("sobre");
                if (element) {
                  const headerHeight = 80;
                  const elementPosition = element.offsetTop - headerHeight;
                  window.scrollTo({
                    top: elementPosition,
                    behavior: "smooth",
                  });
                }
              }}
            >
              Conheça Nossa História
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div
              className="text-center animate-fade-in-left"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="bg-secondary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 hover:bg-secondary/30 transition-all duration-300 animate-bounce-gentle">
                <Plane className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-open-sans">
                Viagens Corporativas
              </h3>
              <p className="text-white/80 font-montserrat">
                Soluções completas para empresas
              </p>
            </div>
            <div
              className="text-center animate-fade-in-up"
              style={{ animationDelay: "0.8s" }}
            >
              <div
                className="bg-secondary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 hover:bg-secondary/30 transition-all duration-300 animate-bounce-gentle"
                style={{ animationDelay: "0.5s" }}
              >
                <Globe className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-open-sans">
                Turismo Internacional
              </h3>
              <p className="text-white/80 font-montserrat">
                Destinos ao redor do mundo
              </p>
            </div>
            <div
              className="text-center animate-fade-in-right"
              style={{ animationDelay: "1s" }}
            >
              <div
                className="bg-secondary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 hover:bg-secondary/30 transition-all duration-300 animate-bounce-gentle"
                style={{ animationDelay: "1s" }}
              >
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-open-sans">
                Atendimento Personalizado
              </h3>
              <p className="text-white/80 font-montserrat">
                Suporte 24/7 para nossos clientes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
