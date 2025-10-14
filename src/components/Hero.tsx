import { Button } from "@/components/ui/button";
import { MessageSquare, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-ai-chat.jpg";
import logo from "@/assets/logo.png";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,230,0,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(52,131,250,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center lg:justify-start mb-8 pt-8">
          <img src={logo} alt="Logo" className="h-12 md:h-16" />
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
              <MessageSquare className="h-4 w-4" />
              <span>Atendimento Inteligente 24/7</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Aumente suas vendas do{" "}
              <span className="text-primary">Mercado Livre</span> com{" "}
              <span className="text-secondary">IA</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
              Atenda seus clientes em tempo real e aumente suas vendas. 
              O melhor investimento para sua operação.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" className="group">
                Começar Agora
                <TrendingUp className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl">
                Ver Demonstração
              </Button>
            </div>
            
            <div className="flex items-center gap-8 justify-center lg:justify-start pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">25%</div>
                <div className="text-sm text-muted-foreground">Aumento em Vendas</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">24/7</div>
                <div className="text-sm text-muted-foreground">Atendimento</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Automático</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-in fade-in slide-in-from-right duration-1000 delay-300">
            <div className="relative z-10 animate-float">
              <img
                src={heroImage}
                alt="IA Chatbot para Mercado Livre - Atendimento automatizado"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-accent opacity-20 blur-3xl animate-pulse-slow" />
          </div>
        </div>
      </div>
    </section>
  );
};
