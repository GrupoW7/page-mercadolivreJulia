import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, TrendingUp, Clock, Zap, CheckCircle2, MessageCircle, Bot, Settings, ArrowRight, Sparkles, Star, Quote } from "lucide-react";
import logo from "@/assets/logo.png";
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

const testimonials = [
  {
    name: "Carlos Silva",
    role: "Vendedor Premium - Eletrônicos",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos",
    content: "Minha taxa de conversão aumentou 28% desde que comecei a usar a IA. Os clientes recebem respostas instantâneas mesmo de madrugada, e isso fez toda a diferença nas minhas vendas.",
    rating: 5,
  },
  {
    name: "Mariana Costa",
    role: "Loja de Moda - 5 anos no ML",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mariana",
    content: "Antes eu perdia muitas vendas por não conseguir responder rápido. Agora a IA cuida de tudo e eu só preciso focar em enviar os produtos. Meu faturamento dobrou em 3 meses!",
    rating: 5,
  },
  {
    name: "Roberto Oliveira",
    role: "Importados - Platinum",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Roberto",
    content: "A melhor decisão que tomei para meu negócio. A IA responde com tanta qualidade que os clientes nem percebem que não sou eu. E o melhor: funciona 24 horas por dia!",
    rating: 5,
  },
];

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

const Index = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-secondary/5" aria-label="Seção principal de apresentação">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,230,0,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(52,131,250,0.1),transparent_50%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <header className="flex justify-center mb-8 pt-8">
            <img src={logo} alt="IA Mercado Livre - Atendimento automatizado com inteligência artificial" className="h-12 md:h-16" />
          </header>
          <div className="flex justify-center items-center">
            <div className="text-center space-y-8 animate-in fade-in duration-1000 max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
                <MessageSquare className="h-4 w-4" />
                <span>Atendimento Inteligente 24/7</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Aumente suas vendas do{" "}
                <span className="text-primary">Mercado Livre</span> com{" "}
                <span className="text-secondary">IA</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                Atenda seus clientes em tempo real e aumente suas vendas. 
                O melhor investimento para sua operação.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="hero" 
                  size="xl" 
                  className="group"
                  asChild
                >
                  <a href="https://www.hellojulia.com.br/formulario" target="_blank" rel="noopener noreferrer">
                    Testar Agora
                    <TrendingUp className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="xl"
                  asChild
                >
                  <a href="https://wa.me/5519989728022?text=Quero%20conhecer%20mais%20sobre%20a%20solu%C3%A7%C3%A3o" target="_blank" rel="noopener noreferrer">
                    Ver Demonstração
                  </a>
                </Button>
              </div>
              
              <div className="flex items-center gap-8 justify-center pt-4">
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
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/30" aria-label="Principais benefícios e recursos">
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
                        alt={`Ícone representando ${feature.title} - ${feature.description}`}
                        className="w-20 h-20 rounded-xl shadow-md group-hover:shadow-lg transition-shadow"
                        loading="lazy"
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

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 relative overflow-hidden" aria-label="Estatísticas e resultados comprovados">
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

      {/* Testimonials Section */}
      <section className="py-24 bg-background" aria-label="Depoimentos de clientes satisfeitos">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
              <Star className="h-4 w-4 fill-primary" />
              <span>Depoimentos Reais</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              O que nossos <span className="text-primary">clientes</span> dizem
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Vendedores reais compartilhando resultados reais
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-primary/20 relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="h-16 w-16 text-primary" />
                </div>
                
                <CardContent className="p-8 space-y-6 relative z-10">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center gap-4 pt-4 border-t">
                    <img 
                      src={testimonial.image} 
                      alt={`Foto de perfil de ${testimonial.name}`}
                      className="w-14 h-14 rounded-full border-2 border-primary/20 shadow-md"
                      loading="lazy"
                    />
                    <div>
                      <div className="font-bold text-lg">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Junte-se a centenas de vendedores satisfeitos</p>
            <div className="flex items-center justify-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background overflow-hidden">
                    <img 
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=User${i}`} 
                      alt={`Avatar de usuário ${i}`}
                      className="w-full h-full"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
              <span className="text-sm font-semibold">+500 vendedores ativos</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/30" aria-label="Como funciona o processo de implementação">
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

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden" aria-label="Chamada para ação - Comece agora">
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
              <Button 
                variant="hero" 
                size="xl" 
                className="group"
                asChild
              >
                <a href="https://www.hellojulia.com.br/formulario" target="_blank" rel="noopener noreferrer">
                  Testar Gratuitamente
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                asChild
              >
                <a href="https://wa.me/5519989728022?text=Quero%20conhecer%20mais%20sobre%20a%20solu%C3%A7%C3%A3o" target="_blank" rel="noopener noreferrer">
                  Falar com Especialista
                </a>
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
    </main>
  );
};

export default Index;
