import type { Meta, StoryObj } from "@storybook/react";

import { CheckboxGroup } from "./index";
import type { CheckboxOption } from "./index";

const mockOnValueChange = (value: string[]) => {
  // Handle value change
};

type Story = StoryObj<typeof CheckboxGroup>;

const meta: Meta<typeof CheckboxGroup> = {
  title: "Components/CheckboxGroup",
  component: CheckboxGroup,
  decorators: [
    (Story) => (
      <div
        style={{
          width: "350px",
          margin: "20px auto",
          backgroundColor: "#ffffff",
          padding: "16px",
          borderRadius: "8px",
        }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {
    options: {
      control: false,
      description: "Array of checkbox options",
    },
    value: {
      control: false,
      description: "Currently selected values array",
    },
    onValueChange: {
      description: "Callback when selection changes",
    },
    name: {
      control: "text",
      description: "Name attribute for the checkbox group",
    },
    required: {
      control: "boolean",
      description: "Whether selection is required",
    },
    title: {
      control: "text",
      description: "Title above the checkbox group",
    },
    subtitle: {
      control: "text",
      description: "Subtitle below the title",
    },
  },
  parameters: {
    layout: "centered",
  },
};

const accompanimentOptions: CheckboxOption[] = [
  {
    value: "shoyu",
    label: "shoyu",
  },
  {
    value: "gengibre",
    label: "gengibre",
  },
  {
    value: "wasabi",
    label: "wasabi",
  },
  {
    value: "none",
    label: "sem acompanhamentos",
  },
];

const extrasOptions: CheckboxOption[] = [
  {
    value: "biscoito",
    label: "biscoito da sorte",
    price: "+R$ 2,00",
  },
  {
    value: "rolinho",
    label: "rolinho primavera",
    price: "+R$ 8,00",
  },
  {
    value: "gyoza",
    label: "gyoza",
    price: "+R$ 6,00",
  },
];

const pizzaToppingsOptions: CheckboxOption[] = [
  {
    value: "extra-cheese",
    label: "Queijo extra",
    price: "+R$ 3,50",
  },
  {
    value: "bacon",
    label: "Bacon",
    price: "+R$ 4,00",
  },
  {
    value: "mushroom",
    label: "Cogumelos",
    price: "+R$ 2,50",
  },
  {
    value: "olives",
    label: "Azeitonas",
    price: "+R$ 2,00",
  },
  {
    value: "pepperoni",
    label: "Pepperoni",
    price: "+R$ 4,50",
    disabled: true,
  },
];

const drinkExtrasOptions: CheckboxOption[] = [
  {
    value: "ice",
    label: "Gelo extra",
    description: "Mais gelo na bebida",
  },
  {
    value: "lemon",
    label: "Fatia de limão",
    description: "Limão siciliano",
    price: "+R$ 0,50",
  },
  {
    value: "straw",
    label: "Canudo biodegradável",
    description: "Canudo ecológico",
  },
];

const promotionalExtrasOptions: CheckboxOption[] = [
  {
    value: "combo-drink",
    label: "Refrigerante 350ml",
    price: "+R$ 2,50",
    originalPrice: "+R$ 4,50",
    hasPromotion: true,
  },
  {
    value: "combo-dessert",
    label: "Sobremesa do dia",
    price: "+R$ 5,00",
    originalPrice: "+R$ 8,00",
    hasPromotion: true,
  },
  {
    value: "combo-side",
    label: "Batata frita pequena",
    price: "+R$ 3,00",
  },
];

export const Accompaniments: Story = {
  args: {
    options: accompanimentOptions,
    title: "acompanhamentos",
    subtitle: "escolha de 1 a 2",
    name: "accompaniments",
    value: ["shoyu"],
    onValueChange: mockOnValueChange,
  },
};

export const Extras: Story = {
  args: {
    options: extrasOptions,
    title: "mais alguma coisa?",
    subtitle: "escolha até 2",
    name: "extras",
    value: [],
    onValueChange: mockOnValueChange,
  },
};

export const PizzaToppings: Story = {
  args: {
    options: pizzaToppingsOptions,
    title: "Ingredientes extras",
    subtitle: "personalize sua pizza",
    name: "toppings",
    value: ["extra-cheese", "bacon"],
    onValueChange: mockOnValueChange,
  },
};

export const DrinkExtras: Story = {
  args: {
    options: drinkExtrasOptions,
    title: "Personalizar bebida",
    name: "drink-extras",
    value: ["ice"],
    onValueChange: mockOnValueChange,
  },
};

export const PromotionalExtras: Story = {
  args: {
    options: promotionalExtrasOptions,
    title: "Aproveite nossas promoções",
    subtitle: "ofertas especiais",
    name: "promo-extras",
    value: ["combo-drink"],
    onValueChange: mockOnValueChange,
  },
};

export const WithoutPrices: Story = {
  args: {
    options: [
      {
        value: "newsletter",
        label: "Receber newsletter",
        description: "Ofertas e novidades por email",
      },
      {
        value: "whatsapp",
        label: "Notificações WhatsApp",
        description: "Status do pedido via WhatsApp",
      },
      {
        value: "sms",
        label: "SMS",
        description: "Confirmação por SMS",
        disabled: true,
      },
    ],
    title: "Preferências de comunicação",
    name: "communications",
    value: ["newsletter"],
    onValueChange: mockOnValueChange,
  },
};

export const Required: Story = {
  args: {
    options: [
      {
        value: "terms",
        label: "Aceito os termos de uso",
        description: "Li e concordo com os termos",
      },
      {
        value: "privacy",
        label: "Política de privacidade",
        description: "Autorizo uso dos meus dados",
      },
    ],
    title: "Termos e condições",
    required: true,
    name: "legal",
    value: [],
    onValueChange: mockOnValueChange,
  },
};

export default meta;
