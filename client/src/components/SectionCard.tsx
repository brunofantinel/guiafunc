import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionCardProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

export function SectionCard({ children, className, id, delay = 0 }: SectionCardProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={cn(
        "w-full max-w-5xl mx-auto mb-16 md:mb-24 scroll-mt-24",
        "bg-card rounded-[2rem] p-6 md:p-10",
        "shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]",
        "border border-white/50",
        className
      )}
    >
      {children}
    </motion.section>
  );
}

export function SectionHeader({ title, subtitle, number }: { title: string; subtitle?: string; number?: string }) {
  return (
    <div className="mb-8 md:mb-12 relative">
      {number && (
        <span className="absolute -top-10 -left-4 md:-left-8 text-8xl font-heading font-black text-primary/5 select-none pointer-events-none">
          {number}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-3 relative z-10">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground font-medium max-w-2xl relative z-10">
          {subtitle}
        </p>
      )}
      <div className="h-1.5 w-24 bg-secondary rounded-full mt-4" />
    </div>
  );
}

export function SectionContent({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center", className)}>
      {children}
    </div>
  );
}

export function SectionImage({ src, alt, reverse = false }: { src: string; alt: string; reverse?: boolean }) {
  return (
    <div className={cn("relative group", reverse ? "md:order-first" : "md:order-last")}>
      <div className="absolute inset-0 bg-secondary/20 rounded-[2rem] rotate-3 scale-95 transition-transform group-hover:rotate-6 duration-500" />
      <div className="relative bg-white rounded-[2rem] overflow-hidden shadow-sm border border-white/50 aspect-square flex items-center justify-center p-4">
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  );
}
