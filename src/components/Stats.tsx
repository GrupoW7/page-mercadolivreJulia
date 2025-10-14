import { Card } from "@/components/ui/card";
import { CheckCircle2, Clock, MessageSquare, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "25%",
    label: "Aumento em Vendas",
    color: "text-primary",
  },
  {
    icon: Clock,
    value: "<1min",
    label: "Tempo de Resposta",
    color: "text-secondary",
  },
  {
    icon: MessageSquare,
    value: "1000+",
    label: "Mensagens/Dia",
    color: "text-primary",
  },
  {
    icon: CheckCircle2,
    value: "98%",
    label: "Satisfação",
    color: "text-secondary",
  },
];

export const Stats = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Resultados que <span className="text-primary">impressionam</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Números reais de quem já usa nossa solução
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card 
                key={index}
                className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card/80 backdrop-blur-sm border-2"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-accent p-3 rounded-full shadow-md">
                    <Icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </div>
                <div className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
