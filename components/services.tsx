"use client";

import {
  Building2,
  Users,
  Plane,
  MapPin,
  Calendar,
  Headphones,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function Services() {
  const services = [
    {
      icon: Building2,
      title: "Viagens Corporativas",
      description:
        "Soluções completas para empresas com gestão de viagens, relatórios detalhados e controle de custos.",
      features: [
        "Gestão de viagens",
        "Relatórios financeiros",
        "Política de viagens",
        "Suporte 24/7",
      ],
    },
    {
      icon: Users,
      title: "Turismo de Lazer",
      description:
        "Pacotes personalizados para famílias, casais e grupos, com roteiros exclusivos e experiências únicas.",
      features: [
        "Pacotes personalizados",
        "Roteiros exclusivos",
        "Hospedagem premium",
        "Atividades especiais",
      ],
    },
    {
      icon: Plane,
      title: "Passagens Aéreas",
      description:
        "As melhores tarifas do mercado com flexibilidade e opções de pagamento facilitadas.",
      features: [
        "Melhores tarifas",
        "Flexibilidade de datas",
        "Múltiplas formas de pagamento",
        "Remarcação facilitada",
      ],
    },
    {
      icon: MapPin,
      title: "Hospedagem",
      description:
        "Reservas em hotéis, pousadas e resorts selecionados, garantindo conforto e qualidade.",
      features: [
        "Hotéis selecionados",
        "Melhores localizações",
        "Café da manhã incluso",
        "Cancelamento flexível",
      ],
    },
    {
      icon: Calendar,
      title: "Eventos e Congressos",
      description:
        "Organização completa de viagens para eventos corporativos, congressos e feiras.",
      features: [
        "Organização completa",
        "Credenciamento",
        "Transfer incluso",
        "Suporte no local",
      ],
    },
    {
      icon: Headphones,
      title: "Consultoria Especializada",
      description:
        "Consultoria personalizada para otimizar seus investimentos em viagens e maximizar resultados.",
      features: [
        "Análise de gastos",
        "Otimização de rotas",
        "Políticas customizadas",
        "Treinamento de equipes",
      ],
    },
  ];

  return (
    <section id="servicos" className="py-16 bg-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-open-sans">
            NOSSOS SERVIÇOS
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-montserrat">
            Oferecemos soluções completas em turismo, atendendo tanto pessoas
            físicas quanto empresas com excelência e personalização em cada
            serviço.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="shadow-lg transition-all duration-300 border-[1vw] border-secondary/50 transform hover:scale-105 animate-fade-in-up hover:border-secondary/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="bg-secondary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4 hover:bg-secondary/20 transition-colors duration-300 animate-pulse-slow">
                  <service.icon className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-primary font-open-sans">
                  {service.title}
                </CardTitle>
                <CardDescription className="font-montserrat">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-600 font-montserrat"
                    >
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary to-primary/90 rounded-lg p-8 text-white text-center animate-fade-in-up hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-bold mb-4 font-open-sans">
            Precisa de um serviço personalizado?
          </h3>
          <p className="text-lg mb-6 font-montserrat">
            Nossa equipe está pronta para criar soluções sob medida para suas
            necessidades específicas.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById("contato");
              if (element) {
                const headerHeight = 80;
                const elementPosition = element.offsetTop - headerHeight;
                window.scrollTo({
                  top: elementPosition,
                  behavior: "smooth",
                });
              }
            }}
            className="bg-secondary hover:bg-secondary/90 text-primary font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Entre em Contato
          </button>
        </div>
      </div>
    </section>
  );
}
