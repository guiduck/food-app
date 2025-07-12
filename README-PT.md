# 🍕 App de Delivery de Comida

Uma aplicação moderna e completa de delivery de comida construída com Next.js 15, apresentando um sistema sofisticado de carrinho, autenticação e um sistema de design abrangente.

## 🚀 Funcionalidades

### 🛒 Sistema Avançado de Carrinho

- **Armazenamento Persistente**: Dados do carrinho salvos em cookies para acesso da API backend
- **Personalizações Complexas**: Suporte para radio buttons, checkboxes e seleções por quantidade
- **Cálculo Automático de Preços**: Atualizações de preço em tempo real baseadas nas opções selecionadas
- **Suporte Multi-Restaurante**: Organiza pedidos por restaurante/loja
- **Notas Personalizadas**: Adicione instruções especiais por item
- **Gerenciamento de Quantidade**: Controles fáceis de incremento/decremento

### 🔐 Sistema de Autenticação

- **Acesso Baseado em Papéis**: Interfaces separadas para clientes e donos de loja
- **Sessões Seguras**: Cookies HTTP-only com expiração de 24 horas
- **Validação de Formulários**: Validação abrangente com esquemas Zod
- **Login Automático**: Login perfeito após registro
- **API Mock**: Simulação realista de backend com tratamento adequado de erros

### 🎨 Sistema de Design

- **Tailwind CSS v4**: Versão mais recente com variáveis CSS nativas
- **Integração shadcn/ui**: Componentes acessíveis com estilo personalizado
- **Português Brasileiro**: Texto da interface localizado em todo o app
- **Design Responsivo**: Abordagem mobile-first
- **Design Tokens**: Espaçamento, cores e tipografia consistentes

### 📱 Páginas e Funcionalidades

- **Página Inicial**: Seção hero moderna com showcase de funcionalidades
- **Navegação de Restaurantes**: Navegue por restaurantes e seus cardápios
- **Personalização de Pratos**: Configuração complexa de pratos com opções
- **Fluxo de Checkout**: Revisão completa do pedido e confirmação
- **Serviços de Localização**: Gerenciamento de endereços para entrega
- **Rastreamento de Pedidos**: Status de entrega e confirmação

## 🛠️ Stack Tecnológica

### Frontend

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Desenvolvimento type-safe
- **Tailwind CSS v4** - Framework CSS utility-first
- **shadcn/ui** - Biblioteca de componentes acessíveis
- **Zustand** - Gerenciamento de estado leve
- **React Hook Form** - Manipulação de formulários com validação
- **Zod** - Validação de esquemas
- **Lucide React** - Biblioteca de ícones

### Backend

- **Next.js API Routes** - Endpoints de API server-side
- **Nookies** - Gerenciamento de cookies
- **Mock Database** - Armazenamento de dados em memória para desenvolvimento

### Ferramentas de Desenvolvimento

- **Storybook** - Ambiente de desenvolvimento de componentes
- **ESLint** - Linting de código
- **TypeScript** - Verificação de tipos
- **Jest** - Framework de testes

## 🚀 Começando

### Pré-requisitos

- Node.js 18+
- npm, yarn, pnpm ou bun

### Instalação

1. **Clone o repositório**

```bash
git clone <repository-url>
cd food-delivery
```

2. **Instale as dependências**

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. **Execute o servidor de desenvolvimento**

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

4. **Abra seu navegador**
   Navegue para [http://localhost:3000](http://localhost:3000)

### Scripts Disponíveis

```bash
npm run dev          # Iniciar servidor de desenvolvimento
npm run build        # Build para produção
npm run start        # Iniciar servidor de produção
npm run lint         # Executar ESLint
npm run typecheck    # Executar verificação de tipos TypeScript
npm run storybook    # Iniciar servidor de desenvolvimento Storybook
npm run build-storybook # Build Storybook para produção
```

## 🧪 Testes

### Credenciais de Demonstração

```bash
# Conta de Loja/Restaurante
Email: store@food.com
Senha: 123456
Papel: store

# Conta de Cliente
Email: user@food.com
Senha: 123456
Papel: customer
```

### Endpoints da API

```bash
# Registro de Usuário
POST /api/users
{
  "email": "user@example.com",
  "password": "123456",
  "role": "customer" // ou "store"
}

# Login de Usuário
POST /api/auth/login
{
  "email": "user@example.com",
  "password": "123456"
}

# Criar Pedido
POST /api/tickets
{
  "items": [...],
  "totalPrice": 45.90,
  "totalItems": 3
}
```

## 🏗️ Arquitetura

### Estrutura do Projeto

```
food-delivery/
├── src/
│   ├── app/
│   │   ├── (public)/          # Rotas públicas (login, registro)
│   │   ├── (private)/         # Rotas protegidas (app principal)
│   │   ├── api/               # Rotas da API
│   │   └── globals.css        # Estilos globais
│   ├── components/
│   │   ├── ui/                # Componentes shadcn/ui
│   │   ├── TicketFooter/      # Componente de rodapé do carrinho
│   │   ├── TicketSummary/     # Componente de resumo do carrinho
│   │   └── ...                # Outros componentes
│   ├── stores/
│   │   ├── ticket-store.ts    # Gerenciamento de estado do carrinho
│   │   └── dish-form-store.ts # Estado do formulário de pratos
│   ├── services/              # Camada de serviços da API
│   ├── hooks/                 # Hooks personalizados do React
│   ├── lib/                   # Funções utilitárias
│   └── types/                 # Definições TypeScript
├── public/                    # Assets estáticos
└── docs/                      # Arquivos de documentação
```

### Gerenciamento de Estado

#### Sistema de Carrinho (`useTicketStore`)

```typescript
// Adicionar item ao carrinho
const { addItem } = useTicketStore();

addItem({
  dishId: dish.id,
  storeSlug: "pizzaria-bella",
  dish: dishData,
  quantity: 2,
  options: selectedOptions,
  notes: "Sem cebola, por favor",
});

// Obter resumo do carrinho
const { getTotalItems, getTotalPrice } = useTicketStore();
```

#### Estado do Formulário (`useDishFormStore`)

```typescript
// Gerenciar formulário de personalização de pratos
const { dishQuantity, selectedOptions, setDishQuantity } = useDishFormStore();
```

### Uso do Sistema de Design

#### Cores

```tsx
// Cores da marca
<div className="bg-primary text-primary-foreground">
<div className="bg-teal text-teal-text">
<div className="bg-success text-success-foreground">

// Cores semânticas
<p className="text-text-primary">Conteúdo principal</p>
<p className="text-text-secondary">Conteúdo secundário</p>
<span className="text-icons">Cor do ícone</span>
```

#### Espaçamento

```tsx
// Escala de espaçamento consistente
<div className="p-s m-s gap-s">      // 12px
<div className="p-m m-m gap-m">      // 16px
<div className="p-l m-l gap-l">      // 24px
```

#### Tipografia

```tsx
// Escala tipográfica
<h1 className="text-xl font-bold">   // 24px
<h2 className="text-l font-medium">  // 20px
<p className="text-m">               // 16px
<span className="text-s">            // 14px
<small className="text-xs">          // 12px
```

## 🎯 Implementação de Funcionalidades Principais

### Sistema de Carrinho

- **Armazenamento Persistente**: Usa cookies para acesso server-side
- **Opções Complexas**: Manipula radio groups, checkboxes e seletores de quantidade
- **Cálculo de Preços**: Atualizações automáticas de preço baseadas nas seleções
- **Suporte Multi-Loja**: Organiza itens por restaurante

### Autenticação

- **Baseado em Papéis**: Contas separadas para clientes e donos de loja
- **Gerenciamento de Sessão**: Cookies HTTP-only seguros
- **Validação de Formulários**: Validação abrangente com tratamento de erros
- **Fluxo Simplificado**: Registro mínimo (apenas email, senha, papel)

### Sistema de Design

- **Tailwind v4**: CSS moderno com variáveis nativas
- **Biblioteca de Componentes**: shadcn/ui com estilo personalizado
- **Acessibilidade**: Atributos ARIA e navegação por teclado
- **Responsivo**: Abordagem mobile-first

## 📚 Documentação

- **[Guia do Ticket Store](TICKET_STORE_GUIDE.md)** - Documentação completa do sistema de carrinho
- **[Sistema de Design](DESIGN_SYSTEM.md)** - Tokens de design e uso de componentes
- **[Autenticação](AUTH_IMPLEMENTATION.md)** - Implementação do sistema de autenticação
- **[Resumo de Migração](MIGRATION_SUMMARY.md)** - Detalhes da migração de componentes
- **[Atualizações de Papel](ROLE_UPDATE_SUMMARY.md)** - Mudanças no sistema de papéis
- **[Remoção de Avatar](AVATAR_REMOVAL_SUMMARY.md)** - Fluxo de registro simplificado

## 🔧 Configuração

### Variáveis de Ambiente

```bash
# Opcional - padrão para /api para rotas Next.js
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api
```

### Configuração do Tailwind

O projeto usa Tailwind CSS v4 com tokens de design personalizados definidos em `globals.css`:

```css
@theme {
  --color-primary: #7b1fa2;
  --color-teal: #00a296;
  --color-success: #02a117;
  --spacing-s: 12px;
  --spacing-m: 16px;
  --spacing-l: 24px;
  /* ... mais tokens */
}
```

## 🚀 Deploy

### Build para Produção

```bash
npm run build
npm run start
```

### Deploy na Vercel

A maneira mais fácil de fazer deploy é usando a [Plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Confira a [documentação de deploy do Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para mais detalhes.

## 🤝 Contribuindo

1. Faça um fork do repositório
2. Crie uma branch de feature (`git checkout -b feature/funcionalidade-incrivel`)
3. Commit suas mudanças (`git commit -m 'Adiciona funcionalidade incrível'`)
4. Push para a branch (`git push origin feature/funcionalidade-incrivel`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 🙏 Agradecimentos

- [Next.js](https://nextjs.org/) - Framework React
- [shadcn/ui](https://ui.shadcn.com/) - Biblioteca de componentes
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Zustand](https://github.com/pmndrs/zustand) - Gerenciamento de estado
- [Lucide](https://lucide.dev/) - Biblioteca de ícones

---

Feito com ❤️ para a comunidade de delivery de comida
