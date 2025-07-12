import type { Meta, StoryObj } from "@storybook/react";
import Ingredient from "./index";

type Story = StoryObj<typeof Ingredient>;

const meta: Meta<typeof Ingredient> = {
  title: "Components/Ingredient",
  component: Ingredient,
  parameters: {
    layout: "padded",
  },
  decorators: [
    (Story) => (
      <div className="max-w-md mx-auto border border-border rounded-m p-m">
        <Story />
      </div>
    ),
  ],
};

export const Default: Story = {
  args: {
    name: "Califórnia",
    description: "Kani, pepino e maçã ou manga",
    warning: {
      spicy: false,
      vegan: false,
      vegetarian: false,
    },
    price: 13.99,
  },
};

export const WithPromotion: Story = {
  args: {
    name: "Califórnia",
    description: "Kani, pepino e maçã ou manga",
    warning: {
      spicy: false,
      vegan: false,
      vegetarian: false,
    },
    price: 13.99,
    originalPrice: 17.0,
  },
};

export const Spicy: Story = {
  args: {
    name: "Salmão picante",
    description: "Alga, arroz, salmão fresco, pimenta e cebolinha",
    warning: {
      spicy: true,
      vegan: false,
      vegetarian: false,
    },
    price: 13.99,
  },
};

export const Vegan: Story = {
  args: {
    name: "Mix Vegano",
    description:
      "Escolha 3 ingredientes: shimeji, alface americana, rúcula, pepino, tomate seco",
    warning: {
      spicy: false,
      vegan: true,
      vegetarian: false,
    },
    price: 13.99,
  },
};

export const Vegetarian: Story = {
  args: {
    name: "Filadélfia",
    description: "Arroz, salmão fresco, cream cheese e cebolinha",
    warning: {
      spicy: false,
      vegan: false,
      vegetarian: true,
    },
    price: 13.99,
  },
};

export const GlutenFree: Story = {
  args: {
    name: "Especial Sem Glúten",
    description: "Ingredientes especiais sem glúten",
    warning: {
      spicy: false,
      vegan: false,
      vegetarian: false,
      glutenFree: true,
    },
    price: 15.99,
  },
};

export const MultipleWarnings: Story = {
  args: {
    name: "Mix Especial",
    description: "Combinação especial com múltiplas características",
    warning: {
      spicy: true,
      vegan: true,
      vegetarian: false,
      glutenFree: true,
    },
    price: 16.99,
    originalPrice: 19.99,
  },
};

export const HigherPrice: Story = {
  args: {
    name: "Premium Roll",
    description: "Ingredientes premium selecionados",
    warning: {
      spicy: false,
      vegan: false,
      vegetarian: false,
    },
    price: 28.9,
  },
};

export default meta;
