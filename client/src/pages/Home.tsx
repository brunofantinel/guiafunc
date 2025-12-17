import { Navigation } from "@/components/Navigation";
import { SectionCard, SectionContent, SectionHeader, SectionImage } from "@/components/SectionCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, HeartHandshake, Lightbulb, ShoppingBag, Sparkles, Store, UserCheck, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/10 selection:text-primary pb-24">
      <Navigation />

      {/* Hero Section */}
      <header id="intro" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 md:pt-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary),0.05),transparent_70%)]" />
        
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-center md:text-left">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-secondary/50 text-secondary-foreground font-semibold text-sm">
                <img src="/images/Logo-Clip-Oficial (1).jpg" alt="CLIP" className="h-6 w-auto" />
                <span>Guia Oficial de Treinamento</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-primary leading-[1.1] tracking-tight">
                Guia de <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-500">
                  Atendimento
                </span> <br/>
                & Vendas
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg mx-auto md:mx-0 leading-relaxed">
                Como atender bem, vender mais e organizar melhor a loja. Um guia prático para o dia a dia na CLIP Porto Alegre.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button 
                  size="lg" 
                  className="rounded-full text-lg px-8 h-14 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all hover:-translate-y-1"
                  onClick={() => document.getElementById('atendimento')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Começar Leitura
                </Button>
              </div>
            </div>
            
            <div className="relative mx-auto md:mr-0 max-w-md md:max-w-full">
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/30 to-primary/5 rounded-full blur-3xl scale-90 animate-pulse" />
              <img 
                src="/images/1.jpg" 
                alt="Atendente CLIP dando boas-vindas" 
                className="relative z-10 w-full drop-shadow-2xl hover:scale-105 transition-transform duration-700 rounded-3xl"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="container px-4 md:px-6 space-y-8">
        
        {/* Seção 2: Importância do Atendimento */}
        <SectionCard id="atendimento" delay={0.1}>
          <SectionHeader 
            number="01"
            title="A Importância do Atendimento" 
            subtitle="O primeiro passo para encantar o cliente e garantir que ele volte."
          />
          <SectionContent>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                A maneira como recebemos o cliente influencia a percepção que ele terá da loja e da marca. Use sempre um tom de voz tranquilo e positivo, evitando frases negativas. Para construir uma relação positiva:
              </p>
              
              <div className="grid gap-4">
                {[
                  { icon: UserCheck, title: "Primeira impressão conta", text: "Cumprimente sempre com um sorriso e um 'Olá, seja bem-vindo!'. Apresente-se pelo nome e, se conhecer o cliente, chame-o pelo nome para criar proximidade." },
                  { icon: HeartHandshake, title: "Postura aberta", text: "Mantenha contato visual, não cruze os braços e demonstre interesse genuíno. Evite parecer apressado ou distraído; o cliente deve sentir que tem seu tempo respeitado." },
                  { icon: Users, title: "Escuta ativa", text: "Ouça mais do que fala. Deixe o cliente explicar o que deseja e faça perguntas abertas. Ao final, resuma o que entendeu para demonstrar que realmente o ouviu." },
                  { icon: Lightbulb, title: "Empatia e respeito", text: "Trate todas as pessoas com atenção, independente do valor da compra. Muitos chegam informados; esteja preparado para esclarecer dúvidas e orientar com segurança." }
                ].map((item, i) => (
                  <Card key={i} className="border-none shadow-sm bg-secondary/10 hover:bg-secondary/20 transition-colors">
                    <CardContent className="p-4 flex gap-4 items-start">
                      <div className="p-2 bg-white rounded-xl shadow-sm text-primary">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.text}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <SectionImage src="/images/3.jpg" alt="Atendimento ao cliente" />
          </SectionContent>
        </SectionCard>

        {/* Seção 3: Como Abordar */}
        <SectionCard id="abordagem">
          <SectionHeader 
            number="02"
            title="Como Abordar o Cliente" 
            subtitle="A abordagem deve ser acolhedora e sem pressão."
          />
          <SectionContent>
            <SectionImage src="/images/3.jpg" alt="Abordagem correta" reverse />
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                <h4 className="font-bold text-primary mb-4 flex items-center gap-2">
                  <span className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">!</span>
                  Dicas de Ouro
                </h4>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                    <span><strong>Saudação educada:</strong> "Olá, tudo bem? Posso ajudar em algo específico?"</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                    <span><strong>Cliente apenas olhando:</strong> "Claro, fique à vontade; qualquer dúvida estou por aqui"</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                    <span><strong>Retomar abordagem:</strong> "Viu algo de que gostou? Posso mostrar outras opções ou cores?"</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                    <span><strong>Respeite o espaço:</strong> Não insista ou siga de perto. Mantenha-se disponível e atento.</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                    <span><strong>Adapte a linguagem:</strong> Seja formal com quem prefere formalidade e mais descontraído com clientes informais.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-foreground">Substitua termos negativos por expressões propositivas</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-red-50 border border-red-100 text-red-700 text-sm">
                    ❌ "Não temos" / "Não pode"
                  </div>
                  <div className="p-4 rounded-xl bg-green-50 border border-green-100 text-green-700 text-sm font-medium">
                    ✅ "Vou verificar a melhor forma de ajudar"
                  </div>
                </div>
              </div>
            </div>
          </SectionContent>
        </SectionCard>

        {/* Seção 4: Técnicas de Venda */}
        <SectionCard id="vendas">
          <SectionHeader 
            number="03"
            title="Técnicas de Venda na Prática" 
            subtitle="Roteiro simples para facilitar a venda e aumentar a satisfação."
          />
          <SectionContent>
            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-primary/20 space-y-8">
                {[
                  { title: "1. Levantamento de Necessidades", text: "Faça perguntas abertas como 'Para quem é o presente?' para descobrir motivações. Escute com atenção e ajude o cliente a definir a melhor solução." },
                  { title: "2. Oferta de Opções", text: "Apresente 2 ou 3 alternativas priorizando sempre o produto mais premium, depois intermediário e se não obtiver éxito apresente o básico. Mantém a escolha dentro da loja e evita comparações externas. Sempre conecte com benefícios." },
                  { title: "3. Benefícios > Características", text: "Exemplo: 'Panela antiaderente permite cozinhar com menos óleo e facilita a limpeza'. Conte casos reais de clientes para criar conexão emocional." },
                  { title: "4. Cross-selling & Upselling", text: "Sugira sempre produtos complementares (pilhas, porta-travesseiros). Indique opção superior apenas quando agregar valor real, respeitando o orçamento." },
                  { title: "5. Fechamento", text: "Explique benefícios diante de objeções. Verifique desconto ou parcelamento. Use 'Posso lhe fornecer a embalagem para presente'. Crie urgência com promoções reais. Finalize agradecendo." }
                ].map((step, i) => (
                  <div key={i} className="relative">
                    <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-white shadow-sm" />
                    <h4 className="font-bold text-lg text-foreground mb-1">{step.title}</h4>
                    <p className="text-muted-foreground">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <SectionImage src="/images/6.jpg" alt="Técnicas de Venda" />
          </SectionContent>
        </SectionCard>

        {/* Seção 5: Organização */}
        <SectionCard id="organizacao">
          <SectionHeader 
            number="04"
            title="Exposição e Organização" 
            subtitle="Um layout bem pensado facilita a navegação e estimula compras."
          />
          <SectionContent>
            <SectionImage src="/images/4.jpg" alt="Organização da Loja" reverse />
            <div className="grid gap-4">
              {[
                { title: "Layout Inteligente", text: "Areas quentes (entrada, caixas, corredores) para lançamentos e itens de alta margem. Areas frias para ilhas temáticas que estimulem circulação." },
                { title: "Setorização Clara", text: "Agrupe por lógica (brinquedos por faixa etária, papelaria por tipo). Use placas visíveis e bem posicionadas." },
                { title: "Vitrines Atrativas", text: "Tema sazonal (volta às aulas, Dia das Crianças), poucos produtos porem variedade, produtos premium com o destaque que merece bem exposto ou vitrine, iluminação excelente, elementos decorativos. Atualize regularmente." },
                { title: "Pontas de Gôndola", text: "Máximo 3 produtos relacionados. Kits e novidades em zonas de maior fluxo. Produtos populares em promoção nas zonas frias." },
                { title: "Comunicação Visual", text: "Cartazes sinalizam ofertas. Etiquetas e cartazes padronizados transmitem profissionalismo e guiam o olhar." }
              ].map((item, i) => (
                <div key={i} className="group p-4 rounded-2xl hover:bg-secondary/30 transition-colors cursor-default">
                  <h4 className="font-bold text-primary mb-1 group-hover:translate-x-1 transition-transform">{item.title}</h4>
                  <p className="text-sm text-muted-foreground" style={{color: '#6e5959'}}>{item.text}</p>
                </div>
              ))}
            </div>
          </SectionContent>
        </SectionCard>

        {/* Seção 6: Merchandising */}
        <SectionCard id="merchandising">
          <SectionHeader 
            number="05"
            title="Merchandising Visual" 
            subtitle="Cuidados diários para uma loja sempre convidativa."
          />
          <SectionContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Prateleiras cheias e frenteadas", desc: "Reponha imediatamente o que acabou. Alinhe embalagens com etiquetas viradas para frente." },
                { title: "Agrupamento coerente", desc: "Agrupe por cor, tipo, marca ou tamanho. Misturar itens distintos confunde o cliente." },
                { title: "Altura dos olhos", desc: "Itens de maior margem entre 1,50m e 1,70m. Produtos infantis acessíveis às crianças." },
                { title: "Etiquetas de preço", desc: "Sempre visíveis, legíveis, padronizadas e atualizadas. Produtos sem preço desanimam o cliente." },
                { title: "Sinalização padronizada", desc: "Cartazes de promoção e placas de setor seguem padrão de cores e fontes. Evita poluição visual." },
                { title: "Limpeza impecável", desc: "Chão, prateleiras, vitrines e banheiros sempre limpos. Itens vencidos ou danificados retirados imediatamente." },
                { title: "Displays temáticos", desc: "Arranjos que incentivam compras combinadas: 'Sugestões de presentes', cama posta com lenchóis e almofadas, brinquedos fora da embalagem." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-2 p-4 bg-white rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <Store className="w-5 h-5 text-secondary-foreground shrink-0 mt-0.5" />
                    <h5 className="font-bold text-sm text-foreground">{item.title}</h5>
                  </div>
                  <p className="text-xs text-muted-foreground ml-8">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-secondary/20 rounded-[2rem] p-8 flex items-center justify-center text-center">
              <div>
                <h4 className="text-2xl font-heading font-bold text-primary mb-2">Ambiente Limpo</h4>
                <p className="text-muted-foreground">Bagunça e sujeira espantam clientes. Mantenha o padrão CLIP de excelência.</p>
              </div>
            </div>
          </SectionContent>
        </SectionCard>

        {/* Seção 7: Comportamento */}
        <SectionCard id="comportamento">
          <SectionHeader 
            number="06"
            title="Comportamento Esperado" 
            subtitle="Os colaboradores são a face da loja."
          />
          <SectionContent>
            <SectionImage src="/images/2.jpg" alt="Comportamento Profissional" reverse />
            <div className="space-y-4">
              <p className="text-lg font-medium text-foreground">Espera-se que todos:</p>
              <ul className="space-y-3">
                {[
                  "Mantenham postura profissional e cordial em todas as interações",
                  "Conheçam bem os produtos e sugiram opções com segurança",
                  "Sejam empáticos, ouçam com atenção e demonstrem interesse genuíno",
                  "Respeitem o espaço do cliente e não insistam de forma agressiva",
                  "Usem técnicas de venda éticas, focadas em valor real",
                  "Reponham mercadorias, alinhem gôndolas e mantenham a limpeza",
                  "Mantenham a calma diante de reclações ou pedidos de desconto",
                  "Acionem o supervisor quando necessário."
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </SectionContent>
        </SectionCard>

        {/* Conclusão */}
        <SectionCard id="conclusao" className="bg-primary text-primary-foreground border-none">
          <div className="text-center space-y-8 py-8">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white">
              Cada interação conta.
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Atender bem, vender mais e organizar melhor a loja não é complexo quando existe um padrão claro e uma equipe comprometida. Ao aplicar este guia, nossos clientes se sentirão acolhidos, encontrarão o que procuram com facilidade e sairão satisfeitos.
            </p>
            
            <div className="flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 max-w-md">
                <p className="text-white font-medium mb-3">
                  Excelência não está em um grande gesto, mas na repetição diária do que é feito da forma certa.
                </p>
                <p className="text-white/90 text-sm">
                  Isso se traduz em mais vendas, fidelização e uma reputação de atendimento diferenciado na Clip Porto Alegre.
                </p>
              </div>
            </div>

            <div className="pt-8">
              <img 
                src="/images/final.jpg" 
                alt="Equipe CLIP Sucesso" 
                className="w-64 h-64 object-contain mx-auto drop-shadow-2xl hover:scale-110 transition-transform duration-500 rounded-2xl" style={{width: '500px'}}
              />
            </div>
          </div>
        </SectionCard>

        {/* Seção Quiz */}
        <SectionCard id="quiz" className="bg-gradient-to-br from-secondary/20 to-primary/5 border-none">
          <div className="text-center space-y-6 mb-8">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary">
              Teste Seu Conhecimento
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Responda o quiz abaixo para avaliar seu entendimento do guia. Você receberá feedback imediato sobre suas respostas.
            </p>
            <a id="startQuizBtn" href="/quiz" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors">
              <Sparkles className="w-5 h-5" />
              Começar Quiz
            </a>
          </div>
        </SectionCard>

      </main>

      <footer className="container text-center py-12 text-muted-foreground text-sm">
        <p>© {new Date().getFullYear()} Loja CLIP Porto Alegre. Material de Treinamento Interno.</p>
      </footer>
    </div>
  );
}
