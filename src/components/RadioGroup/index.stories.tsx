import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { RadioGroup } from "./index";
import type { RadioOption } from "./index";

type Story = StoryObj<typeof RadioGroup>;

const meta: Meta<typeof RadioGroup> = {
  title: "Components/RadioGroup",
  component: RadioGroup,
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
      description: "Array of radio options",
    },
    value: {
      control: "text",
      description: "Currently selected value",
    },
    onValueChange: {
      action: "valueChanged",
      description: "Callback when selection changes",
    },
    name: {
      control: "text",
      description: "Name attribute for the radio group",
    },
    required: {
      control: "boolean",
      description: "Whether selection is required",
    },
    title: {
      control: "text",
      description: "Title above the radio group",
    },
    subtitle: {
      control: "text",
      description: "Subtitle below the title",
    },
  },
};

const InteractiveRadioGroup = ({ options, ...args }: any) => {
  const [selectedValue, setSelectedValue] = useState(args.value || "");

  return (
    <RadioGroup
      {...args}
      options={options}
      value={selectedValue}
      onValueChange={setSelectedValue}
    />
  );
};

const pizzaSizeOptions: RadioOption[] = [
  {
    value: "medium",
    label: "médio",
    price: "R$ 19,90",
    originalPrice: "R$ 22,90",
    hasPromotion: true,
  },
  {
    value: "large",
    label: "grande",
    price: "R$ 28,90",
  },
];

const drinkOptions: RadioOption[] = [
  {
    value: "coca",
    label: "Coca-Cola 350ml",
    price: "R$ 4,50",
  },
  {
    value: "pepsi",
    label: "Pepsi 350ml",
    price: "R$ 4,50",
  },
  {
    value: "guarana",
    label: "Guaraná Antarctica 350ml",
    price: "R$ 4,50",
  },
  {
    value: "agua",
    label: "Água mineral 500ml",
    price: "R$ 2,50",
  },
];

const deliveryOptions: RadioOption[] = [
  {
    value: "standard",
    label: "Entrega padrão",
    description: "30-45 minutos",
    price: "Grátis",
  },
  {
    value: "express",
    label: "Entrega expressa",
    description: "15-20 minutos",
    price: "R$ 5,90",
  },
  {
    value: "scheduled",
    label: "Agendar entrega",
    description: "Escolher horário",
    price: "Grátis",
  },
];

const paymentOptions: RadioOption[] = [
  {
    value: "pix",
    label: "PIX",
    description: "Aprovação instantânea",
  },
  {
    value: "credit",
    label: "Cartão de crédito",
    description: "Visa, Mastercard, Elo",
  },
  {
    value: "debit",
    label: "Cartão de débito",
    description: "Débito na conta",
  },
  {
    value: "money",
    label: "Dinheiro",
    description: "Pagar na entrega",
    disabled: true,
  },
];

export const PizzaSize: Story = {
  render: (args) => <InteractiveRadioGroup {...args} />,
  args: {
    options: pizzaSizeOptions,
    title: "qual o tamanho?",
    subtitle: "escolha 1",
    required: true,
    name: "pizza-size",
    value: "medium",
  },
};

export const DrinkSelection: Story = {
  render: (args) => <InteractiveRadioGroup {...args} />,
  args: {
    options: drinkOptions,
    title: "Bebidas",
    subtitle: "escolha uma opção",
    name: "drinks",
  },
};

export const DeliveryOptions: Story = {
  render: (args) => <InteractiveRadioGroup {...args} />,
  args: {
    options: deliveryOptions,
    title: "Tipo de entrega",
    name: "delivery",
    value: "standard",
  },
};

export const PaymentMethod: Story = {
  render: (args) => <InteractiveRadioGroup {...args} />,
  args: {
    options: paymentOptions,
    title: "Forma de pagamento",
    subtitle: "escolha como pagar",
    required: true,
    name: "payment",
    value: "pix",
  },
};

export const WithoutPrices: Story = {
  render: (args) => <InteractiveRadioGroup {...args} />,
  args: {
    options: [
      {
        value: "delivery",
        label: "Entrega",
        description: "Receber em casa",
      },
      {
        value: "pickup",
        label: "Retirada",
        description: "Buscar no restaurante",
      },
    ],
    title: "Como você quer receber?",
    name: "fulfillment",
    value: "delivery",
  },
};

export const AllVariations: Story = {
  render: (_) => {
    const [selections, setSelections] = useState({
      size: "medium",
      drink: "",
      delivery: "standard",
      payment: "pix",
    });

    const updateSelection = (group: string) => (value: string) => {
      setSelections((prev) => ({ ...prev, [group]: value }));
    };

    return (
      <div className="space-y-l">
        <RadioGroup
          options={pizzaSizeOptions}
          title="qual o tamanho?"
          subtitle="escolha 1 • obrigatório"
          required
          name="size"
          value={selections.size}
          onValueChange={updateSelection("size")}
        />

        <RadioGroup
          options={drinkOptions}
          title="Bebidas"
          subtitle="opcional"
          name="drink"
          value={selections.drink}
          onValueChange={updateSelection("drink")}
        />

        <RadioGroup
          options={deliveryOptions}
          title="Tipo de entrega"
          name="delivery"
          value={selections.delivery}
          onValueChange={updateSelection("delivery")}
        />

        <RadioGroup
          options={paymentOptions}
          title="Forma de pagamento"
          subtitle="escolha como pagar"
          required
          name="payment"
          value={selections.payment}
          onValueChange={updateSelection("payment")}
        />

        <div className="mt-l p-m bg-teal-background rounded-m border border-teal/20">
          <h4 className="text-s font-medium text-teal-text mb-xs">
            Resumo das seleções:
          </h4>
          <div className="space-y-xxs text-xs text-teal-text">
            <p>Tamanho: {selections.size}</p>
            <p>Bebida: {selections.drink || "Nenhuma"}</p>
            <p>Entrega: {selections.delivery}</p>
            <p>Pagamento: {selections.payment}</p>
          </div>
        </div>
      </div>
    );
  },
};

export default meta;
