// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";

// Exemplo usando Resend API (instale a lib @resend/client se quiser)
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Extrair dados do formulário
    const { name, email, phone, company, clientType, service, message } = data;

    // Validar campos obrigatórios (exemplo simples)
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Campos obrigatórios faltando" },
        { status: 400 }
      );
    }

    // Montar o conteúdo do email
    const emailContent = `
      Nome: ${name}
      E-mail: ${email}
      Telefone: ${phone}
      Empresa: ${company || "Não informada"}
      Tipo de Cliente: ${clientType}
      Serviço: ${service || "Não informado"}
      Mensagem: ${message}
    `;

    // Disparar o e-mail via Resend
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "volterratour360@gmail.com",
      subject: "Novo contato do site",
      text: emailContent,
    });

    return NextResponse.json({ message: "Email enviado com sucesso" });
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return NextResponse.json(
      { error: "Erro interno ao enviar email" },
      { status: 500 }
    );
  }
}
