import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Bot, MessageCircle, Settings } from "lucide-react";

const steps = [
  {
    icon: Settings,
    title: "1. Configure",
    description: "Integre em minutos com sua conta do Mercado Livre. Sem código, sem complicação.",
  },
  {
    icon: Bot,
    title: "2. Treine",
    description: "Nossa IA aprende sobre seus produtos e seu estilo de atendimento automaticamente.",
  },
  {
    icon: MessageCircle,
    title: "3. Venda Mais",
    description: "Deixe a IA atender seus clientes 24/7 enquanto você foca em crescer seu negócio.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Como <span className="text-secondary">funciona</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Três passos simples para transformar seu atendimento
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary/30">
                  <CardContent className="p-8 space-y-4 text-center">
                    <div className="flex justify-center">
                      <div className="bg-gradient-blue p-4 rounded-2xl shadow-blue">
                        <Icon className="h-10 w-10 text-secondary-foreground" />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-8 w-8 text-primary animate-pulse" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
