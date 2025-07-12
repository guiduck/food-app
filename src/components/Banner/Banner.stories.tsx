import type { Meta, StoryObj } from "@storybook/react";
import Banner from "./index";

const meta: Meta<typeof Banner> = {
  title: "Components/Banner",
  component: Banner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    banner: {
      id: 1,
      title: "Frango Baratô no dia das crianças",
      image: "/images/banners/frango-barato-banner.jpg",
      link: "/stores/frango-barato",
    },
  },
};
