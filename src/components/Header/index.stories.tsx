import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./index";

const meta = {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    address: {
      control: "text",
      description: "Endereço principal",
    },
    addressLine2: {
      control: "text",
      description: "Texto acima do endereço",
    },
    className: {
      control: "text",
      description: "Classes CSS adicionais",
    },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    address: "Rua Mandaguari, 198",
    addressLine2: "entregando em",
  },
};

export const DifferentAddress: Story = {
  args: {
    address: "Av. Paulista, 1000",
    addressLine2: "entregando em",
  },
};

export const CustomAddressLine: Story = {
  args: {
    address: "Rua das Flores, 456",
    addressLine2: "seu endereço",
  },
};

export const LongAddress: Story = {
  args: {
    address: "Rua Professor João Batista de Lacerda, 1234",
    addressLine2: "entregando em",
  },
};

export const InLayout: Story = {
  args: {
    address: "Rua Mandaguari, 198",
    addressLine2: "entregando em",
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-background">
        <Story />
        <div className="p-l">
          <h1 className="text-xl font-bold text-text-primary mb-m">
            Conteúdo da página
          </h1>
          <p className="text-text-secondary">
            como o header aparece em uma página completa.
          </p>
        </div>
      </div>
    ),
  ],
};
