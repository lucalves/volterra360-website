import { Award, Clock, Heart, Shield } from "lucide-react";

export function About() {
  return (
    <section id="sobre" className="py-16 bg-gray-200">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-open-sans">
              NOSSA HISTÓRIA
            </h2>
            <p className="text-xl text-gray-600 font-montserrat">
              Conectando você aos seus destinos dos sonhos com confiança e
              dedicação
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-fade-in-left">
              <h3 className="text-2xl font-bold text-primary mb-6 font-open-sans">
                A Volterra360 nasceu da paixão por viagens
              </h3>
              <p className="text-gray-600 mb-4 font-montserrat leading-relaxed">
                Fundada em 2025, a Volterra360 surgiu com o objetivo de
                revolucionar o mercado de turismo, oferecendo experiências
                únicas e personalizadas para cada cliente. Nossa missão é
                transformar sonhos em realidade através de viagens
                inesquecíveis.
              </p>
              <p className="text-gray-600 mb-4 font-montserrat leading-relaxed">
                Ao longo dos anos, construímos uma sólida reputação baseada na
                confiança, qualidade e excelência no atendimento. Atendemos
                tanto pessoas físicas quanto empresas, sempre com o mesmo
                compromisso: proporcionar as melhores experiências de viagem.
              </p>
              <p className="text-gray-600 font-montserrat leading-relaxed">
                Hoje, somos referência no mercado de turismo, com uma equipe
                especializada e parcerias estratégicas que nos permitem oferecer
                as melhores condições e destinos para nossos clientes.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 animate-fade-in-right hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-xl font-bold text-primary mb-6 font-open-sans">
                Por que escolher a Volterra360?
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 hover:bg-gray-50 p-2 rounded-lg transition-colors duration-300">
                  <Award className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-primary font-open-sans">
                      Experiência Comprovada
                    </h5>
                    <p className="text-gray-600 text-sm font-montserrat">
                      Profissionais capacitados com experiência no mercado
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 hover:bg-gray-50 p-2 rounded-lg transition-colors duration-300">
                  <Clock className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-primary font-open-sans">
                      Atendimento 24/7
                    </h5>
                    <p className="text-gray-600 text-sm font-montserrat">
                      Suporte completo durante toda sua viagem
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 hover:bg-gray-50 p-2 rounded-lg transition-colors duration-300">
                  <Heart className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-primary font-open-sans">
                      Atendimento Personalizado
                    </h5>
                    <p className="text-gray-600 text-sm font-montserrat">
                      Cada cliente é único e especial para nós
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 hover:bg-gray-50 p-2 rounded-lg transition-colors duration-300">
                  <Shield className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-primary font-open-sans">
                      Segurança e Confiança
                    </h5>
                    <p className="text-gray-600 text-sm font-montserrat">
                      Parcerias com as melhores empresas do setor
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
