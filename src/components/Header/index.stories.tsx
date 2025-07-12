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
    className: {
      control: "text",
      description: "Classes CSS adicionais",
    },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
export const InLayout: Story = {
  args: {},
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
