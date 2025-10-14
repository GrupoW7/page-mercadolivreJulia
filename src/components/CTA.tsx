import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-accent opacity-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,230,0,0.15),transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
            <Sparkles className="h-4 w-4" />
            <span>Oferta Especial para Novos Clientes</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            O melhor investimento para sua{" "}
            <span className="text-primary">operação</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Junte-se a centenas de vendedores que já aumentaram suas vendas com IA
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button variant="hero" size="xl" className="group">
              Começar Gratuitamente
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl">
              Falar com Especialista
            </Button>
          </div>
          
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span>Sem cartão de crédito</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-secondary" />
              <span>Cancele quando quiser</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span>Suporte em português</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
