"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Height of fixed header
      const elementPosition = element.offsetTop - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200 animate-fade-in-up">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="Volterra360 - Agência de Viagem"
              width={200}
              height={60}
              className="h-16 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("home")}
              className="text-primary hover:text-secondary transition-all duration-300 font-medium hover:scale-105"
            >
              HOME
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-primary hover:text-secondary transition-all duration-300 font-medium hover:scale-105"
            >
              SOBRE
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-primary hover:text-secondary transition-all duration-300 font-medium hover:scale-105"
            >
              SERVIÇOS
            </button>
            <button
              onClick={() => scrollToSection("destinos")}
              className="text-primary hover:text-secondary transition-all duration-300 font-medium hover:scale-105"
            >
              DESTINOS
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-primary hover:text-secondary transition-all duration-300 font-medium hover:scale-105"
            >
              CONTATO
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-primary hover:text-secondary transition-all duration-300 font-medium hover:scale-105 text-left"
              >
                HOME
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-primary hover:text-secondary transition-all duration-300 font-medium hover:scale-105 text-left"
              >
                SOBRE
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="text-primary hover:text-secondary transition-all duration-300 font-medium hover:scale-105 text-left"
              >
                SERVIÇOS
              </button>
              <button
                onClick={() => scrollToSection("destinos")}
                className="text-primary hover:text-secondary transition-all duration-300 font-medium hover:scale-105 text-left"
              >
                DESTINOS
              </button>
              <button
                onClick={() => scrollToSection("2")}
                className="text-primary hover:text-secondary transition-all duration-300 font-medium hover:scale-105 text-left"
              >
                CONTATO
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
