import type { Meta, StoryObj } from "@storybook/react";
import SearchBar from "./index";

const meta: Meta<typeof SearchBar> = {
  title: "Components/SearchBar",
  component: SearchBar,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Componente de barra de pesquisa com ícone de lupa e placeholder personalizado.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      control: "text",
      description: "Texto do placeholder",
    },
    value: {
      control: "text",
      description: "Valor controlado do input",
    },
    disabled: {
      control: "boolean",
      description: "Estado desabilitado do input",
    },
    onChange: {
      action: "changed",
      description: "Callback chamado quando o valor muda",
    },
    onSubmit: {
      action: "submitted",
      description: "Callback chamado quando o formulário é enviado",
    },
  },
  decorators: [
    (Story) => (
      <div className="w-96 p-m bg-primary">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const CustomPlaceholder: Story = {
  args: {
    placeholder: "Procure por restaurantes, pratos ou ingredientes",
  },
};

export const WithValue: Story = {
  args: {
    value: "Pizza",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "Busca desabilitada",
  },
};

export const OnWhiteBackground: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div className="w-96 p-m bg-neutral-0">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "SearchBar em fundo branco para comparação.",
      },
    },
  },
};
