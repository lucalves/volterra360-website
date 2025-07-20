"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { submitContactForm } from "@/app/actions";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phone, setPhone] = useState("");
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  function formatPhone(value: string) {
    value = value.replace(/\D/g, "");

    if (value.length <= 10) {
      return value.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
    } else {
      return value.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const formatted = formatPhone(e.target.value);
    setPhone(formatted);
  }

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await submitContactForm(formData);
      setSubmitStatus("success");
      // Reset form
      const form = document.getElementById("contact-form") as HTMLFormElement;
      form?.reset();
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contato" className="py-16 bg-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-open-sans">
            ENTRE EM CONTATO
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-montserrat">
            Estamos prontos para ajudar você a planejar sua próxima viagem.
            Entre em contato conosco e receba um atendimento personalizado.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 animate-fade-in-left">
            <Card className="h-fit shadow-lg border-[1vw] border-secondary/50 transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-primary font-open-sans">
                  Informações de Contato
                </CardTitle>
                <CardDescription className="font-montserrat">
                  Entre em contato através dos canais abaixo
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-3 hover:bg-gray-100 border-secondary/50 p-2 rounded-md transition-colors duration-200">
                  <Mail className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-primary font-open-sans">
                      E-mail
                    </p>
                    <p className="text-gray-600 font-montserrat">
                      volterratour360@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 hover:bg-gray-100 p-2 rounded-md transition-colors duration-200">
                  <Phone className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-primary font-open-sans">
                      WhatsApp
                    </p>
                    <p className="text-gray-600 font-montserrat">
                      +55 61 99323-8100
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 hover:bg-gray-100 p-2 rounded-md transition-colors duration-200">
                  <MapPin className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-primary font-open-sans">
                      Localização
                    </p>
                    <p className="text-gray-600 font-montserrat">
                      Brasília, DF
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 hover:bg-gray-100 p-2 rounded-md transition-colors duration-200">
                  <Clock className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-primary font-open-sans">
                      Horário de Atendimento
                    </p>
                    <p className="text-gray-600 font-montserrat">
                      Segunda a Sexta: 8h às 18h
                      <br />
                      Sábado: 9h às 16h
                      <br />
                      Domingo: 10h às 14h
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-fade-in-right">
            <Card className="border-secondary/50 border-[1vw] shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-primary font-open-sans">
                  Solicite seu Orçamento
                </CardTitle>
                <CardDescription className="font-montserrat">
                  Preencha o formulário abaixo e nossa equipe entrará em contato
                  em até 24 horas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form
                  id="contact-form"
                  action={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="font-montserrat">
                        Nome Completo *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder="Seu nome completo"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="font-montserrat">
                        E-mail *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="seu@email.com"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone" className="font-montserrat">
                        Telefone/WhatsApp *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        required
                        placeholder="(11) 99999-9999"
                        className="mt-1"
                        value={phone}
                        maxLength={15}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="company" className="font-montserrat">
                        Empresa (opcional)
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Nome da empresa"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label className="font-montserrat">Tipo de Cliente *</Label>
                    <RadioGroup
                      name="clientType"
                      defaultValue="pessoa-fisica"
                      className="mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="pessoa-fisica"
                          id="pessoa-fisica"
                        />
                        <Label
                          htmlFor="pessoa-fisica"
                          className="font-montserrat"
                        >
                          Pessoa Física
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="pessoa-juridica"
                          id="pessoa-juridica"
                        />
                        <Label
                          htmlFor="pessoa-juridica"
                          className="font-montserrat"
                        >
                          Pessoa Jurídica
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label htmlFor="service" className="font-montserrat">
                      Serviço de Interesse
                    </Label>
                    <select
                      id="service"
                      name="service"
                      className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Selecione um serviço</option>
                      <option value="viagens-corporativas">
                        Viagens Corporativas
                      </option>
                      <option value="turismo-lazer">Turismo de Lazer</option>
                      <option value="passagens-aereas">Passagens Aéreas</option>
                      <option value="hospedagem">Hospedagem</option>
                      <option value="eventos-congressos">
                        Eventos e Congressos
                      </option>
                      <option value="consultoria">
                        Consultoria Especializada
                      </option>
                      <option value="outros">Outros</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="font-montserrat">
                      Mensagem *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Conte-nos mais sobre sua necessidade de viagem..."
                      className="mt-1 min-h-[120px]"
                    />
                  </div>

                  {submitStatus === "success" && (
                    <div className="bg-green-50 border border-green-200 rounded-md p-4">
                      <p className="text-green-800 font-montserrat">
                        ✅ Mensagem enviada com sucesso! Entraremos em contato
                        em breve.
                      </p>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="bg-red-50 border border-red-200 rounded-md p-4">
                      <p className="text-red-800 font-montserrat">
                        ❌ Erro ao enviar mensagem. Tente novamente ou entre em
                        contato pelo WhatsApp.
                      </p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3"
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
