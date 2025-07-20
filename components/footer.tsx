import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white py-12 animate-fade-in-up">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Image
              src="/logo.png"
              alt="Volterra360"
              width={200}
              height={60}
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-white/80 font-montserrat leading-relaxed">
              Sua parceira de confiança em viagens corporativas e de lazer.
              Cuidamos de cada detalhe para que você viaje tranquilo.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 font-open-sans">CONTATO</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-white/80 font-montserrat">
                  volterratour360@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-white/80 font-montserrat">
                  +55 61 99323-8100
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-white/80 font-montserrat">
                  Brasília, Brasil
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 font-open-sans">SERVIÇOS</h3>
            <ul className="space-y-2 text-white/80 font-montserrat">
              <li>Viagens Corporativas</li>
              <li>Turismo de Lazer</li>
              <li>Passagens Aéreas</li>
              <li>Hospedagem</li>
              <li>Eventos e Congressos</li>
              <li>Consultoria Especializada</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60 font-montserrat">
            © 2025 Volterra360 - Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
