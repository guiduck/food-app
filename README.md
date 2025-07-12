# 🍕 Food Delivery App

A modern, full-stack food delivery application built with Next.js 15, featuring a sophisticated cart system, authentication, and a comprehensive design system.

## 🚀 Features

### 🛒 Advanced Cart System

- **Persistent Storage**: Cart data saved in cookies for backend API access
- **Complex Customizations**: Support for radio buttons, checkboxes, and quantity selections
- **Automatic Price Calculation**: Real-time price updates based on selected options
- **Multi-Restaurant Support**: Organize orders by restaurant/store
- **Custom Notes**: Add special instructions per item
- **Quantity Management**: Easy increment/decrement controls

### 🔐 Authentication System

- **Role-Based Access**: Separate interfaces for customers and store owners
- **Secure Sessions**: HTTP-only cookies with 24-hour expiration
- **Form Validation**: Comprehensive validation with Zod schemas
- **Auto-Login**: Seamless login after registration
- **Mock API**: Realistic backend simulation with proper error handling

### 🎨 Design System

- **Tailwind CSS v4**: Latest version with native CSS variables
- **shadcn/ui Integration**: Accessible components with custom styling
- **Brazilian Portuguese**: Localized UI text throughout
- **Responsive Design**: Mobile-first approach
- **Design Tokens**: Consistent spacing, colors, and typography

### 📱 Pages & Features

- **Landing Page**: Modern hero section with features showcase
- **Restaurant Browsing**: Browse restaurants and their menus
- **Dish Customization**: Complex dish configuration with options
- **Checkout Flow**: Complete order review and confirmation
- **Location Services**: Address management for delivery
- **Order Tracking**: Delivery status and confirmation

## 🛠️ Tech Stack

### Frontend

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first CSS framework
- **shadcn/ui** - Accessible component library
- **Zustand** - Lightweight state management
- **React Hook Form** - Form handling with validation
- **Zod** - Schema validation
- **Lucide React** - Icon library

### Backend

- **Next.js API Routes** - Server-side API endpoints
- **Nookies** - Cookie management
- **Mock Database** - In-memory data storage for development

### Development Tools

- **Storybook** - Component development environment
- **ESLint** - Code linting
- **TypeScript** - Type checking
- **Jest** - Testing framework

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd food-delivery
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run typecheck    # Run TypeScript type checking
npm run storybook    # Start Storybook development server
npm run build-storybook # Build Storybook for production
```

## 🧪 Testing

### Demo Credentials

```bash
# Store/Restaurant Account
Email: store@food.com
Password: 123456
Role: store

# Customer Account
Email: user@food.com
Password: 123456
Role: customer
```

### API Endpoints

```bash
# User Registration
POST /api/users
{
  "email": "user@example.com",
  "password": "123456",
  "role": "customer" // or "store"
}

# User Login
POST /api/auth/login
{
  "email": "user@example.com",
  "password": "123456"
}

# Create Order
POST /api/tickets
{
  "items": [...],
  "totalPrice": 45.90,
  "totalItems": 3
}
```

## 🏗️ Architecture

### Project Structure

```
food-delivery/
├── src/
│   ├── app/
│   │   ├── (public)/          # Public routes (login, register)
│   │   ├── (private)/         # Protected routes (main app)
│   │   ├── api/               # API routes
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── ui/                # shadcn/ui components
│   │   ├── TicketFooter/      # Cart footer component
│   │   ├── TicketSummary/     # Cart summary component
│   │   └── ...                # Other components
│   ├── stores/
│   │   ├── ticket-store.ts    # Cart state management
│   │   └── dish-store.ts # Dish form state
│   ├── services/              # API service layer
│   ├── hooks/                 # Custom React hooks
│   ├── lib/                   # Utility functions
│   └── types/                 # TypeScript definitions
├── public/                    # Static assets
└── docs/                      # Documentation files
```

### State Management

#### Cart System (`useTicketStore`)

```typescript
// Add item to cart
const { addItem } = useTicketStore();

addItem({
  dishId: dish.id,
  storeSlug: "pizzaria-bella",
  dish: dishData,
  quantity: 2,
  options: selectedOptions,
  notes: "No onions please",
});

// Get cart summary
const { getTotalItems, getTotalPrice } = useTicketStore();
```

#### Form State (`useDishFormStore`)

```typescript
// Manage dish customization form
const { dishQuantity, selectedOptions, setDishQuantity } = useDishFormStore();
```

### Design System Usage

#### Colors

```tsx
// Brand colors
<div className="bg-primary text-primary-foreground">
<div className="bg-teal text-teal-text">
<div className="bg-success text-success-foreground">

// Semantic colors
<p className="text-text-primary">Main content</p>
<p className="text-text-secondary">Secondary content</p>
<span className="text-icons">Icon color</span>
```

#### Spacing

```tsx
// Consistent spacing scale
<div className="p-s m-s gap-s">      // 12px
<div className="p-m m-m gap-m">      // 16px
<div className="p-l m-l gap-l">      // 24px
```

#### Typography

```tsx
// Typography scale
<h1 className="text-xl font-bold">   // 24px
<h2 className="text-l font-medium">  // 20px
<p className="text-m">               // 16px
<span className="text-s">            // 14px
<small className="text-xs">          // 12px
```

## 🎯 Key Features Implementation

### Cart System

- **Persistent Storage**: Uses cookies for server-side access
- **Complex Options**: Handles radio groups, checkboxes, and quantity selectors
- **Price Calculation**: Automatic price updates based on selections
- **Multi-Store Support**: Organizes items by restaurant

### Authentication

- **Role-Based**: Separate customer and store owner accounts
- **Session Management**: Secure HTTP-only cookies
- **Form Validation**: Comprehensive validation with error handling
- **Simplified Flow**: Minimal registration (email, password, role only)

### Design System

- **Tailwind v4**: Modern CSS with native variables
- **Component Library**: shadcn/ui with custom styling
- **Accessibility**: ARIA attributes and keyboard navigation
- **Responsive**: Mobile-first design approach

## 📚 Documentation

- **[Ticket Store Guide](TICKET_STORE_GUIDE.md)** - Complete cart system documentation
- **[Design System](DESIGN_SYSTEM.md)** - Design tokens and component usage
- **[Authentication](AUTH_IMPLEMENTATION.md)** - Auth system implementation
- **[Migration Summary](MIGRATION_SUMMARY.md)** - Component migration details
- **[Role Updates](ROLE_UPDATE_SUMMARY.md)** - Role system changes
- **[Avatar Removal](AVATAR_REMOVAL_SUMMARY.md)** - Simplified registration flow

## 🔧 Configuration

### Environment Variables

```bash
# Optional - defaults to /api for Next.js routes
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api
```

### Tailwind Configuration

The project uses Tailwind CSS v4 with custom design tokens defined in `globals.css`:

```css
@theme {
  --color-primary: #7b1fa2;
  --color-teal: #00a296;
  --color-success: #02a117;
  --spacing-s: 12px;
  --spacing-m: 16px;
  --spacing-l: 24px;
  /* ... more tokens */
}
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
npm run start
```

### Deploy on Vercel

The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [shadcn/ui](https://ui.shadcn.com/) - Component library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Zustand](https://github.com/pmndrs/zustand) - State management
- [Lucide](https://lucide.dev/) - Icon library

---

Made with ❤️ for the food delivery community
