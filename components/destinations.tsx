"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function Destinations() {
  const destinations = [
    {
      name: "Orlando",
      country: "EUA",
      image: "/images/orlando.webp",
      description:
        "A capital mundial dos parques temáticos, lar da Disney World e Universal Studios. Diversão garantida para toda a família com atrações mágicas e experiências inesquecíveis.",
    },
    {
      name: "Buenos Aires",
      country: "Argentina",
      image: "/images/buenos-aires.jpg",
      description:
        "A Paris da América do Sul, famosa pelo tango, arquitetura europeia e gastronomia excepcional. Uma cidade vibrante que combina tradição e modernidade.",
    },
    {
      name: "Santiago",
      country: "Chile",
      image: "/images/santiago.jpg",
      description:
        "Cercada pela majestosa Cordilheira dos Andes, oferece vinícolas mundialmente famosas, centros de esqui e uma rica cultura andina em cenários deslumbrantes.",
    },
    {
      name: "Fernando de Noronha",
      country: "Brasil",
      image: "/images/fernando-de-noronha.jpg",
      description:
        "Paraíso ecológico com as praias mais belas do Brasil. Águas cristalinas, vida marinha exuberante e paisagens que são Patrimônio Mundial da UNESCO.",
    },
    {
      name: "Maceió",
      country: "Brasil",
      image: "/images/maceio.jpeg",
      description:
        "Capital alagoana conhecida pelas praias de águas verde-esmeralda, piscinas naturais e o famoso passeio de jangada. O Caribe brasileiro te espera.",
    },
    {
      name: "Gramado",
      country: "Brasil",
      image: "/images/gramado.jpg",
      description:
        "Charme europeu no coração da Serra Gaúcha. Famosa pelo Festival de Cinema, arquitetura alemã, chocolates artesanais e o clima romântico da montanha.",
    },
    {
      name: "Lençóis Maranhenses",
      country: "Brasil",
      image: "/images/lencois-maranhenses.avif",
      description:
        "Um dos cenários mais surreais do Brasil, com dunas de areia branca e lagoas de água doce cristalina. Um deserto único que se transforma em oásis durante a época das chuvas.",
    },
    {
      name: "Porto",
      country: "Portugal",
      image: "/images/porto.jpg",
      description:
        "Cidade histórica às margens do Rio Douro, famosa pelo vinho do Porto, arquitetura medieval e azulejos tradicionais. Patrimônio Mundial da UNESCO com charme inigualável.",
    },
    {
      name: "Foz do Iguaçu",
      country: "Brasil",
      image: "/images/foz-do-iguacu.webp",
      description:
        "Lar das majestosas Cataratas do Iguaçu, uma das Sete Maravilhas Naturais do Mundo. Natureza exuberante e espetáculo visual que emociona visitantes do mundo inteiro.",
    },
  ];

  return (
    <section id="destinos" className="py-16 bg-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-open-sans">
            DESTINOS INCRÍVEIS
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-montserrat">
            Descubra alguns dos destinos mais procurados pelos nossos clientes.
            Cada lugar oferece experiências únicas e momentos inesquecíveis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
          {destinations.map((destination, index) => (
            <Card
              key={index}
              className="overflow-hidden shadow-xl border-secondary/50 border-[1vw] pb-12 transition-all duration-300 transform hover:scale-105 animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={destination.image || "/placeholder.svg"}
                  alt={`${destination.name}, ${destination.country}`}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  crossOrigin="anonymous"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-montserrat">
                    Explore este destino conosco!
                  </p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-primary font-open-sans">
                    {destination.name}
                  </h3>
                  <p className="text-secondary font-medium font-montserrat">
                    {destination.country}
                  </p>
                </div>
                <p className="text-gray-600 font-montserrat text-sm leading-relaxed">
                  {destination.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center animate-fade-in-up">
          <div className="bg-primary rounded-lg shadow-md p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4 font-open-sans">
              Não encontrou seu destino dos sonhos?
            </h3>
            <p className="text-white mb-6 font-montserrat">
              Trabalhamos com destinos em todo o mundo. Nossa equipe
              especializada pode criar o roteiro perfeito para qualquer lugar
              que você sonha em conhecer.
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
              Consulte Outros Destinos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
