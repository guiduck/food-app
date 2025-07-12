# Food Delivery App

Um aplicativo web completo de delivery de comida, desenvolvido com Next.js 15, focado em arquitetura robusta, experiência do usuário excepcional e sistema de design escalável.

## 🚀 Características Principais

- **Autenticação Completa**: Sistema de login/registro com proteção de rotas
- **Localização**: Usuários definem sua localização antes de navegar pelas lojas
- **Navegação de Lojas**: Explore restaurantes e estabelecimentos por localização
- **Catálogo de Produtos**: Navegue produtos por categoria com imagens, preços e avaliações
- **Carrinho de Compras**: Adicione e gerencie itens no ticket (carrinho)
- **Processo de Checkout**: Fluxo completo de pedido com confirmação
- **Rastreamento de Entrega**: Tela de acompanhamento do pedido
- **Persistência Local**: Dados do carrinho persistem entre sessões usando cookies
- **Design System**: Interface moderna e responsiva com tema personalizável

## 🛠️ Stack Tecnológica

- **Framework**: Next.js 15 (App Router)
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Componentes UI**: Radix UI
- **Gerenciamento de Estado**: Zustand
- **Validação**: Zod + React Hook Form
- **Temas**: Next Themes
- **Notificações**: Sonner
- **Desenvolvimento**: Storybook
- **Linting**: ESLint

## 📁 Estrutura do Projeto

```
food-delivery/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (public)/          # Rotas públicas (sem autenticação)
│   │   │   ├── landing/       # Página inicial
│   │   │   ├── login/         # Login do usuário
│   │   │   └── register/      # Registro de usuário
│   │   ├── (private)/         # Rotas privadas (requer autenticação)
│   │   │   ├── localizacao/   # Definir localização
│   │   │   ├── lojas/         # Listagem de lojas
│   │   │   ├── checkout/      # Processo de checkout
│   │   │   ├── delivery/      # Acompanhamento de entrega
│   │   │   └── design-system/ # Documentação do design system
│   │   ├── api/               # API Routes
│   │   │   ├── auth/          # Autenticação
│   │   │   ├── banners/       # Banners promocionais
│   │   │   ├── checkout/      # Processamento de pedidos
│   │   │   ├── stores/        # Dados das lojas
│   │   │   ├── tickets/       # Gerenciamento de tickets
│   │   │   └── users/         # Gerenciamento de usuários
│   │   ├── globals.css        # Estilos globais e tokens do design system
│   │   └── layout.tsx         # Layout principal
│   ├── components/            # Componentes reutilizáveis
│   ├────── **/**.stories.tsx  # Storybook dos componentes
│   │   ├── ui/                # Componentes base (Radix UI)
│   │   ├── Banner/            # Componente de banner
│   │   ├── DishCard/          # Card de produto/prato
│   │   ├── Header/            # Cabeçalho da aplicação
│   │   ├── Footer/            # Rodapé
│   │   ├── MenuItem/          # Item de menu
│   │   ├── SearchBar/         # Barra de pesquisa
│   │   ├── StoreCard/         # Card de loja
│   │   ├── TicketFooter/      # Rodapé do ticket
│   │   └── QuantityGroup/     # Controle de quantidade
│   ├── stores/                # Gerenciamento de estado (Zustand)
│   │   ├── dish-store.tsx     # Estado dos pratos/produtos
│   │   ├── ticket-store.ts    # Estado do carrinho
│   │   └── search-store.ts    # Estado da busca
│   ├── actions/               # Server Actions
│   ├── services/              # Serviços e API clients
│   ├── hooks/                 # Hooks customizados
│   ├── lib/                   # Utilitários e configurações
│   ├── types/                 # Definições TypeScript
│   └── middleware.ts          # Middleware de autenticação
├── public/                    # Assets estáticos
│   ├── images/
│   │   ├── banners/          # Imagens de banners
│   │   ├── dishes/           # Imagens de pratos
│   │   └── stores/           # Imagens de lojas
│   └── favicon.svg
├── .storybook/               # Configuração do Storybook
```

## 🎨 Design System

O projeto implementa um design system completo com:

- **Tokens de Design**: Cores, tipografia, espaçamento e border-radius definidos como CSS Custom Properties
- **Componentes Base**: Utilizando Radix UI para acessibilidade e funcionalidade
- **Temas**: Suporte a tema claro/escuro com Next Themes
- **Responsividade**: Design mobile-first com breakpoints otimizados
- **Fonte**: Nunito como fonte principal da interface

### Tokens CSS (globals.css)

```css
:root {
  --bg-primary: #...;
  --text-primary: #...;
  /* ... outros tokens */
}
```

## 🔐 Autenticação e Roteamento

O aplicativo utiliza um sistema de autenticação baseado em cookies com middleware do Next.js:

- **Rotas Públicas**: `/login`, `/register`, `/landing`
- **Rotas Privadas**: Todas as outras rotas requerem autenticação
- **Redirecionamento**: Usuários não autenticados são redirecionados para `/login`
- **Fluxo de Localização**: Usuários autenticados devem definir localização antes de acessar as lojas

## 📱 Funcionalidades Principais

### 1. Autenticação

- Sistema de login/registro
- Proteção de rotas via middleware
- Persistência de sessão com cookies

### 2. Localização

- Definição obrigatória de localização
- Filtro de lojas por região

### 3. Navegação de Lojas

- Listagem de restaurantes disponíveis
- Filtros e busca
- Informações detalhadas de cada loja

### 4. Catálogo de Produtos

- Produtos organizados por categoria
- Imagens, preços e descrições
- Sistema de avaliações

### 5. Carrinho (Ticket)

- Adição/remoção de itens
- Controle de quantidade
- Persistência entre sessões
- Cálculo automático de totais

### 6. Checkout

- Processo de finalização de pedido
- Integração com API de pagamento
- Confirmação de pedido

### 7. Acompanhamento

- Status de entrega em tempo real
- Notificações de progresso

## 🚀 Como Executar

1. **Instalar dependências:**

   ```bash
   npm install
   ```

2. **Executar em desenvolvimento:**

   ```bash
   npm run dev
   ```

3. **Executar Storybook:**

   ```bash
   npm run storybook
   ```

4. **Build para produção:**

   ```bash
   npm run build
   npm start
   ```

5. **Verificar tipos:**

```bash
   npm run typecheck
```

## 🧪 Desenvolvimento

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run start` - Inicia servidor de produção
- `npm run lint` - Executa linting
- `npm run typecheck` - Verifica tipos TypeScript
- `npm run storybook` - Inicia Storybook
- `npm run build-storybook` - Gera build do Storybook

### Estrutura de Componentes

Cada componente segue a estrutura:

```
ComponentName/
├── index.tsx           # Exportação principal
├── Component-name.tsx   # Implementação
├── Component-name.stories.tsx  # Stories do Storybook
└── Component-name.module.css   # Estilos específicos (se necessário)
```

## 🏗️ Arquitetura

### Estado Global (Zustand)

- **dish-store**: Gerencia produtos/pratos selecionados
- **ticket-store**: Gerencia carrinho de compras
- **search-store**: Gerencia estado da busca

### API Routes

- Estrutura RESTful com endpoints para todas as funcionalidades
- Validação com Zod
- Tratamento de erros consistente

### Middleware

- Proteção de rotas
- Redirecionamento baseado em autenticação
- Validação de tokens

### Componentes

- Design system baseado em Radix UI
- Componentes reutilizáveis e modulares
- Documentação via Storybook

## 🌟 Características Técnicas

- **Performance**: Server Components por padrão, Client Components apenas quando necessário
- **SEO**: Otimização para mecanismos de busca
- **Acessibilidade**: Componentes acessíveis via Radix UI
- **Type Safety**: TypeScript em todo o projeto
- **Responsividade**: Design mobile-first

## 🔧 Configuração

### Variáveis de Ambiente

```env
# Adicione suas variáveis de ambiente aqui
NEXT_PUBLIC_API_URL=...
```

### Tailwind CSS

Configurado para usar tokens CSS customizados definidos em `globals.css`, proporcionando máxima flexibilidade e manutenibilidade.

---

**Desenvolvido com ❤️**
