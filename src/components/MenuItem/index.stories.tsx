import type { Meta, StoryObj } from "@storybook/react";
import MenuItem from "./index";
import { MenuSection } from "@/types/store-details";

type Story = StoryObj<typeof MenuItem>;

const meta: Meta<typeof MenuItem> = {
  title: "Components/MenuItem",
  component: MenuItem,
  parameters: {
    layout: "padded",
  },
  decorators: [
    (Story) => (
      <div className="max-w-md mx-auto">
        <Story />
      </div>
    ),
  ],
};

const mockMenuSection: MenuSection = {
  id: 1,
  title: "Ceviches",
  hasOffer: true,
  dishes: [
    {
      id: 1,
      name: "Ceviche Tradicional",
      description:
        "um prato super refrescante de peixe fatiado e marinado com limão",
      price: 28.9,
      originalPrice: 32.9,
      image: "/api/placeholder/200/120",
      warning: {
        spicy: false,
        vegan: false,
        vegetarian: false,
      },
      available: true,
    },
    {
      id: 2,
      name: "Ceviche Especial",
      description: "nossa versão especial com ingredientes selecionados",
      price: 35.9,
      image: "/api/placeholder/200/120",
      warning: {
        spicy: true,
        vegan: false,
        vegetarian: false,
      },
      available: true,
    },
  ],
};

const mockMenuSectionNoOffer: MenuSection = {
  id: 2,
  title: "Temakis",
  hasOffer: false,
  dishes: [
    {
      id: 3,
      name: "Temaki Salmão",
      description: "sushi em forma de cone com salmão e cream cheese",
      price: 18.9,
      image: "/api/placeholder/200/120",
      warning: {
        spicy: false,
        vegan: false,
        vegetarian: false,
      },
      available: true,
    },
  ],
};

export const Default: Story = {
  args: {
    section: mockMenuSection,
  },
};

export const WithoutOffer: Story = {
  args: {
    section: mockMenuSectionNoOffer,
  },
};

export const SingleDish: Story = {
  args: {
    section: {
      ...mockMenuSectionNoOffer,
      dishes: [mockMenuSectionNoOffer.dishes[0]],
    },
  },
};

export default meta;
