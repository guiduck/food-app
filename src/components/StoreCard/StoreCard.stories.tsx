import type { Meta, StoryObj } from "@storybook/react";
import StoreCard from "./index";

const meta: Meta<typeof StoreCard> = {
  title: "Components/StoreCard",
  component: StoreCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    rating: {
      control: { type: "range", min: 0, max: 5, step: 0.1 },
    },
    deliveryFee: {
      control: { type: "number", min: 0, step: 0.5 },
    },
    isOpen: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const MatsuriOpen: Story = {
  args: {
    name: "Matsuri Concept",
    rating: 4.7,
    deliveryFee: 0,
    imageUrl: "/images/stores/matsuri.jpg",
    isOpen: true,
    closingTime: "23:00",
  },
};

export const SubwayClosed: Story = {
  args: {
    name: "Subway - Avenida center",
    rating: 4.7,
    deliveryFee: 6.0,
    imageUrl: "/images/stores/subway.jpg",
    isOpen: false,
    closingTime: "22:30",
  },
};

export const BurgerKingPromotional: Story = {
  args: {
    name: "Burger King - Colombo",
    rating: 4.7,
    deliveryFee: 6.0,
    imageUrl: "/images/stores/burger-king.jpg",
    isOpen: true,
    closingTime: "00:00",
  },
};

export const McDonaldsFreeDelivery: Story = {
  args: {
    name: "McDonald's - Novo Centro",
    rating: 4.7,
    deliveryFee: 0,
    imageUrl: "/images/stores/mcdonalds.jpg",
    isOpen: true,
    closingTime: "23:30",
  },
};
