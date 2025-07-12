import { StoreCard } from "@/components/StoreCard";
import { ThemeDebugger } from "@/components/ThemeDebugger";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Metadata } from "next";
import SearchBar from "@/components/SearchBar";

export const metadata: Metadata = {
  title: "Design system | aiqfome",
  description:
    "Easter egg: Explore nossa implementação completa do design system com Tailwind CSS v3 e design tokens personalizados.",
};

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto p-l space-y-l">
        <ThemeDebugger />

        <div>
          <h1 className="text-xl font-bold text-text-primary">
            🎨 Design system
          </h1>
          <p className="text-text-secondary text-s mt-xs">
            Easter egg! Explore nossa implementação completa do sistema de
            design
          </p>
        </div>

        <div className="bg-card border border-border rounded-m p-l space-y-l">
          <div className="text-center space-y-s">
            <h2 className="text-text-primary font-bold text-xl">
              🚀 Tailwind CSS v3 + Design system
            </h2>
            <p className="text-text-secondary text-m max-w-2xl mx-auto">
              Esta página demonstra nossa implementação completa do sistema de
              design com troca de temas, espaçamento personalizado, tipografia e
              estilização de componentes.
            </p>
          </div>

          <div className="space-y-s">
            <h3 className="text-text-primary font-semibold text-l">
              🎨 Cores da Marca
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-s">
              <div className="bg-primary text-primary-foreground p-m rounded-s text-center">
                <div className="font-semibold">Primária</div>
                <div className="text-xs opacity-90">#7b1fa2</div>
              </div>
              <div className="bg-teal text-primary-foreground p-m rounded-s text-center">
                <div className="font-semibold">Teal</div>
                <div className="text-xs opacity-90">#00a296</div>
              </div>
              <div className="bg-success text-success-foreground p-m rounded-s text-center">
                <div className="font-semibold">Sucesso</div>
                <div className="text-xs opacity-90">#02a117</div>
              </div>
              <div className="bg-warning text-warning-foreground p-m rounded-s text-center">
                <div className="font-semibold">Aviso</div>
                <div className="text-xs opacity-90">#ffb300</div>
              </div>
            </div>

            <div className="bg-neutral-100 p-m rounded-s space-y-xs">
              <h4 className="text-text-primary font-medium">
                Hierarquia de Texto
              </h4>
              <p className="text-text-primary">
                Texto primário - Conteúdo principal
              </p>
              <p className="text-text-medium">
                Texto médio - Conteúdo secundário
              </p>
              <p className="text-text-secondary">
                Texto secundário - Informações sutis
              </p>
            </div>
          </div>

          <div className="space-y-s">
            <h3 className="text-text-primary font-semibold text-l">
              📝 Escala Tipográfica
            </h3>
            <div className="bg-neutral-100 p-m rounded-s space-y-s">
              <div className="text-xl font-bold">
                Extra Grande (24px) - Títulos
              </div>
              <div className="text-l font-semibold">
                Grande (20px) - Títulos de seção
              </div>
              <div className="text-m">Médio (16px) - Texto do corpo</div>
              <div className="text-s">Pequeno (14px) - Rótulos e legendas</div>
              <div className="text-xs">Extra Pequeno (12px) - Texto fino</div>
            </div>
          </div>

          <div className="space-y-s">
            <h3 className="text-text-primary font-semibold text-l">
              📏 Sistema de Espaçamento
            </h3>
            <div className="space-y-s">
              <div className="bg-teal-background border-l-4 border-teal p-xxs rounded-s">
                <span className="text-teal-text font-mono text-xs">p-xxs</span>{" "}
                - 6px padding
              </div>
              <div className="bg-teal-background border-l-4 border-teal p-xs rounded-s">
                <span className="text-teal-text font-mono text-xs">p-xs</span> -
                8px padding
              </div>
              <div className="bg-teal-background border-l-4 border-teal p-s rounded-s">
                <span className="text-teal-text font-mono text-xs">p-s</span> -
                12px padding
              </div>
              <div className="bg-teal-background border-l-4 border-teal p-m rounded-s">
                <span className="text-teal-text font-mono text-xs">p-m</span> -
                16px padding
              </div>
              <div className="bg-teal-background border-l-4 border-teal p-l rounded-s">
                <span className="text-teal-text font-mono text-xs">p-l</span> -
                24px padding
              </div>
            </div>
          </div>

          <div className="space-y-s">
            <h3 className="text-text-primary font-semibold text-l">
              🔘 Raio da Borda
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-s">
              <div className="bg-primary text-primary-foreground p-m rounded-s text-center">
                <div className="font-semibold">Pequeno</div>
                <div className="text-xs opacity-90">4px</div>
              </div>
              <div className="bg-primary text-primary-foreground p-m rounded-m text-center">
                <div className="font-semibold">Médio</div>
                <div className="text-xs opacity-90">8px</div>
              </div>
              <div className="bg-primary text-primary-foreground p-m rounded-l text-center">
                <div className="font-semibold">Grande</div>
                <div className="text-xs opacity-90">12px</div>
              </div>
              <div className="bg-primary text-primary-foreground p-m rounded-xl text-center">
                <div className="font-semibold">Extra Grande</div>
                <div className="text-xs opacity-90">16px</div>
              </div>
            </div>
          </div>

          <div className="space-y-s">
            <h3 className="text-text-primary font-semibold text-l">
              🎛️ Componentes de Formulário
            </h3>
            <div className="bg-neutral-100 p-l rounded-s space-y-m max-w-2xl">
              <div className="space-y-s">
                <label className="text-text-primary font-medium text-s">
                  Barra de Pesquisa
                </label>
                <div className="bg-primary p-m rounded-s">
                  <SearchBar />
                </div>
              </div>

              <div className="space-y-s">
                <label className="text-text-primary font-medium text-s">
                  Campo de Entrada
                </label>
                <Input placeholder="Campo de entrada do design system com raio de borda adequado" />
              </div>

              <div className="flex items-center space-x-s">
                <Checkbox id="design-checkbox" />
                <label htmlFor="design-checkbox" className="text-text-primary">
                  Checkbox com estilização consistente
                </label>
              </div>

              <div className="flex flex-wrap gap-s">
                <Button variant="default">Botão Primário</Button>
                <Button variant="outline">Botão Contornado</Button>
                <Button variant="destructive">Botão Destrutivo</Button>
                <Button variant="secondary">Botão Secundário</Button>
              </div>
            </div>
          </div>

          <div className="space-y-s">
            <h3 className="text-text-primary font-semibold text-l">
              🧩 Exemplos de Componentes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-m">
              <StoreCard
                name="Matsuri Concept"
                rating={4.7}
                deliveryFee={0}
                imageUrl="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iOCIgZmlsbD0iI0ZGNTcyMiIvPgo8dGV4dCB4PSIzMiIgeT0iMzgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IndoaXRlIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCI+bWF0c3VyaTwvdGV4dD4KPC9zdmc+"
              />
              <StoreCard
                name="Subway - Avenida center"
                rating={4.7}
                deliveryFee={6.0}
                imageUrl="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iOCIgZmlsbD0iIzAwOTY0MyIvPgo8dGV4dCB4PSIzMiIgeT0iMzgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IndoaXRlIiBmb250LXNpemU9IjEwIiBmb250LXdlaWdodD0iYm9sZCI+U1VCV0FZPC90ZXh0Pgo8L3N2Zz4="
              />
            </div>
          </div>

          <div className="space-y-s">
            <h3 className="text-text-primary font-semibold text-l">
              ⚙️ Implementação Técnica
            </h3>
            <div className="bg-neutral-900 text-neutral-0 p-l rounded-s">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-l text-s">
                <div>
                  <h4 className="text-success font-semibold mb-s">
                    ✅ O que está funcionando
                  </h4>
                  <ul className="space-y-xs text-neutral-400">
                    <li>• Configuração do Tailwind CSS v3</li>
                    <li>• Tokens do design system personalizado</li>
                    <li>• Troca de temas perfeita</li>
                    <li>• Estilização consistente de componentes</li>
                    <li>• Raio de borda adequado em todos os elementos</li>
                    <li>• Integração com shadcn/ui</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-primary font-semibold mb-s">
                    🎨 Design system
                  </h4>
                  <ul className="space-y-xs text-neutral-400">
                    <li>• Escala de espaçamento personalizada (xxs a xxl)</li>
                    <li>• Hierarquia tipográfica (xs a xl)</li>
                    <li>• Paleta de cores da marca</li>
                    <li>• Nomenclatura semântica de cores</li>
                    <li>• Variáveis CSS para temas</li>
                    <li>• Família de fontes Nunito</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
