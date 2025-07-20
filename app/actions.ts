"use server";

import { Resend } from "resend";

// Crie a instância da Resend com seu API token
const resend = new Resend("re_LbyWDrqu_J138tZrzWKNhFzGmcFRXKQbA");

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const company = formData.get("company") as string;
  const clientType = formData.get("clientType") as string;
  const service = formData.get("service") as string;
  const message = formData.get("message") as string;

  const emailContent = `
    Nova solicitação de Contato via Formulário - Volterra360
    
    Nome: ${name}
    E-mail: ${email}
    Telefone: ${phone}
    Empresa: ${company || "Não informado"}
    Tipo de Cliente: ${clientType}
    Serviço de Interesse: ${service || "Não especificado"}
    
    Mensagem:
    ${message}
    
    -
    Enviado através do site da www.volterra360.com.br
  `;

  // Enviar e-mail usando Resend
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "volterratour360@gmail.com",
    subject: "Nova solicitação de contato - Volterra360",
    text: emailContent,
  });

  return { success: true };
}
