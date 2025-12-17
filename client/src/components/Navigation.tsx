import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Link } from "wouter";

const SECTIONS = [
  { id: "intro", label: "Início" },
  { id: "atendimento", label: "Atendimento" },
  { id: "abordagem", label: "Abordagem" },
  { id: "vendas", label: "Técnicas de Venda" },
  { id: "organizacao", label: "Organização" },
  { id: "merchandising", label: "Merchandising" },
  { id: "comportamento", label: "Comportamento" },
  { id: "conclusao", label: "Conclusão" },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("intro");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = SECTIONS.map(s => document.getElementById(s.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Mobile Navigation Bar */}
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border/50 transition-all duration-300 md:hidden",
        scrolled ? "shadow-sm py-3" : "py-4"
      )}>
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/images/Logo-Clip-Oficial (1).jpg" alt="CLIP Logo" className="h-8 w-auto" />
            <span className="font-heading font-bold text-primary text-sm">Treinamento</span>
          </div>
          <div className="text-xs font-medium text-muted-foreground">Guia Prático</div>
        </div>
      </nav>

      {/* Desktop Sidebar Navigation */}
      <nav className="hidden md:flex fixed right-8 top-1/2 -translate-y-1/2 z-50 flex-col gap-4">
        {SECTIONS.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group flex items-center justify-end gap-3 pl-8 py-1"
          >
            <span className={cn(
              "text-sm font-medium transition-all duration-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0",
              activeSection === section.id ? "text-primary font-bold opacity-100 translate-x-0" : "text-muted-foreground"
            )}>
              {section.label}
            </span>
            <div className={cn(
              "w-3 h-3 rounded-full border-2 transition-all duration-300",
              activeSection === section.id 
                ? "bg-primary border-primary scale-125" 
                : "bg-transparent border-muted-foreground/50 group-hover:border-primary/50"
            )} />
          </button>
        ))}
      </nav>
    </>
  );
}
