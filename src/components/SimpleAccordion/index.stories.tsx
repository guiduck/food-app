import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import SimpleAccordion from "./index";
import { RadioGroup, RadioOption } from "../RadioGroup";

type Story = StoryObj<typeof SimpleAccordion>;

const meta: Meta<typeof SimpleAccordion> = {
  title: "Components/SimpleAccordion",
  component: SimpleAccordion,
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
    title: {
      control: "text",
      description: "The accordion header title",
    },
    children: {
      control: false,
      description: "Content inside the accordion",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
};

export const Default: Story = {
  args: {
    children: (
      <p className="text-s text-text-secondary">
        Escolha uma opção para personalizar seu pedido.
      </p>
    ),
    title: "Bebidas",
  },
};

export const Sobremesas: Story = {
  args: {
    title: "Sobremesas",
    children: (
      <p className="text-s text-text-secondary">
        Adicione uma sobremesa deliciosa ao seu pedido.
      </p>
    ),
  },
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
  },
  {
    value: "pepsi",
    label: "Pepsi 350ml",
  },
  {
    value: "guarana",
    label: "Guaraná Antarctica 350ml",
  },
  {
    value: "agua",
    label: "Água mineral 500ml",
  },
];

const sobremesaOptions: RadioOption[] = [
  {
    value: "pudim",
    label: "Pudim de leite",
  },
  {
    value: "mousse",
    label: "Mousse de chocolate",
  },
];

export const PizzaSize: Story = {
  args: {
    title: "qual o tamanho?",
    children: (
      <div className="space-y-s">
        <p className="text-xs text-text-secondary mb-s">escolha 1</p>
        <RadioGroup options={pizzaSizeOptions} name="pizza-size" />
      </div>
    ),
  },
};

export const DrinkOptions: Story = {
  args: {
    title: "Bebidas",
    children: (
      <div className="space-y-s">
        <RadioGroup options={drinkOptions} name="drinks" required />
      </div>
    ),
  },
};

export const Multiple: Story = {
  render: (_) => {
    const [selections, setSelections] = useState({
      size: "medium",
      drink: "",
      sobremesa: "",
    });

    const updateSelection = (group: string) => (value: string) => {
      setSelections((prev) => ({ ...prev, [group]: value }));
    };

    return (
      <div className="space-y-s">
        <SimpleAccordion title="qual o tamanho?">
          <div className="space-y-s">
            <p className="text-xs text-text-secondary mb-s">
              escolha 1 • obrigatório
            </p>
            <RadioGroup
              options={pizzaSizeOptions}
              name="size"
              value={selections.size}
              onValueChange={updateSelection("size")}
            />
          </div>
        </SimpleAccordion>

        <SimpleAccordion title="Bebidas">
          <div className="space-y-s">
            <RadioGroup
              options={drinkOptions}
              name="drink"
              value={selections.drink}
              onValueChange={updateSelection("drink")}
            />
          </div>
        </SimpleAccordion>

        <SimpleAccordion title="Sobremesas">
          <div className="space-y-s">
            <RadioGroup
              options={sobremesaOptions}
              name="sobremesa"
              value={selections.sobremesa}
              onValueChange={updateSelection("sobremesa")}
            />
          </div>
        </SimpleAccordion>
      </div>
    );
  },
};

export default meta;
