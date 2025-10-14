import { Card, CardContent } from "@/components/ui/card";
import { Clock, TrendingUp, Zap } from "lucide-react";
import icon247 from "@/assets/icon-24-7.jpg";
import iconSales from "@/assets/icon-sales.jpg";
import iconAutomation from "@/assets/icon-automation.jpg";

const features = [
  {
    icon: icon247,
    title: "Atendimento 24/7",
    description: "Nunca perca uma venda. Nossa IA responde seus clientes a qualquer hora do dia ou da noite, mesmo quando você está dormindo.",
    iconComponent: Clock,
  },
  {
    icon: iconSales,
    title: "Aumente 25% das Vendas",
    description: "Respostas rápidas geram mais conversões. Clientes atendidos em segundos compram 25% mais que aqueles que esperam.",
    iconComponent: TrendingUp,
  },
  {
    icon: iconAutomation,
    title: "100% Automatizado",
    description: "Configure uma vez e esqueça. Nossa IA aprende com suas interações e melhora continuamente o atendimento.",
    iconComponent: Zap,
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Por que escolher nossa <span className="text-primary">IA</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A solução completa para revolucionar seu atendimento no Mercado Livre
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.iconComponent;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 hover:border-primary/20"
              >
                <CardContent className="p-8 space-y-4">
                  <div className="relative">
                    <img 
                      src={feature.icon} 
                      alt={feature.title}
                      className="w-20 h-20 rounded-xl shadow-md group-hover:shadow-lg transition-shadow"
                    />
                    <div className="absolute -top-2 -right-2 bg-primary rounded-full p-2 shadow-md">
                      <Icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
