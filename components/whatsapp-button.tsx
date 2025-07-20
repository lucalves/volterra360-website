"use client";

import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppButton() {
  const phoneNumber = "5561993238100";

  const message = `Oiê! Seja super bem-vindo(a) à Volterra 360 — aqui a gente cuida da sua viagem com carinho, criatividade e zero estresse!

Pra te atender melhor, me conta rapidinho:
- Qual o destino dos sonhos?
- De onde você vai embarcar?
- Já tem datas em mente ou é flexível?
- Vai sozinho(a) ou acompanhado(a)?
- Tem criança menor de 2 aninhos no grupo?

Com essas infos, consigo montar uma proposta perfeita pra você!
Enquanto isso, vai sonhando com o próximo rolê… o resto deixa com a gente!

Nosso horário de atendimento:
• seg a sex: 8h às 18h
• sáb: 9h às 16h
• dom: 10h às 14h`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 z-50 animate-bounce-gentle hover:shadow-xl"
      aria-label="Contato via WhatsApp"
    >
      <FaWhatsapp className="h-6 w-6" />
    </a>
  );
}
