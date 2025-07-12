import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import QuantityGroup from "./index";

type Story = StoryObj<typeof QuantityGroup>;

const meta: Meta<typeof QuantityGroup> = {
  title: "Components/QuantityGroup",
  component: QuantityGroup,
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

const drinkOptions = [
  {
    value: "agua-sem-gas",
    label: "água sem gás",
    price: "+R$ 3,00",
  },
  {
    value: "agua-com-gas",
    label: "água com gás",
    price: "+R$ 3,50",
  },
  {
    value: "refrigerante",
    label: "refrigerante",
    price: "+R$ 4,50",
    hasPromotion: true,
    originalPrice: "+R$ 5,00",
  },
  {
    value: "suco-natural",
    label: "suco natural",
    price: "+R$ 6,00",
    description: "laranja, maçã ou uva",
  },
];

export const Default: Story = {
  render: () => {
    const [quantities, setQuantities] = useState<Record<string, number>>({});

    const handleQuantityChange = (value: string, quantity: number) => {
      setQuantities((prev) => ({
        ...prev,
        [value]: quantity,
      }));
    };

    return (
      <QuantityGroup
        title="Bebidas"
        subtitle="adicione quantas quiser"
        options={drinkOptions}
        quantities={quantities}
        onQuantityChange={handleQuantityChange}
      />
    );
  },
};

export const Required: Story = {
  render: () => {
    const [quantities, setQuantities] = useState<Record<string, number>>({});

    const handleQuantityChange = (value: string, quantity: number) => {
      setQuantities((prev) => ({
        ...prev,
        [value]: quantity,
      }));
    };

    return (
      <QuantityGroup
        title="Adicionais"
        subtitle="selecione os extras"
        required
        options={drinkOptions}
        quantities={quantities}
        onQuantityChange={handleQuantityChange}
      />
    );
  },
};

export const WithInitialQuantities: Story = {
  render: () => {
    const [quantities, setQuantities] = useState<Record<string, number>>({
      "agua-sem-gas": 2,
      refrigerante: 1,
    });

    const handleQuantityChange = (value: string, quantity: number) => {
      setQuantities((prev) => ({
        ...prev,
        [value]: quantity,
      }));
    };

    return (
      <QuantityGroup
        title="Bebidas selecionadas"
        options={drinkOptions}
        quantities={quantities}
        onQuantityChange={handleQuantityChange}
      />
    );
  },
};

export const WithDisabledOptions: Story = {
  render: () => {
    const [quantities, setQuantities] = useState<Record<string, number>>({});

    const disabledOptions = drinkOptions.map((option, index) => ({
      ...option,
      disabled: index === 1,
    }));

    const handleQuantityChange = (value: string, quantity: number) => {
      setQuantities((prev) => ({
        ...prev,
        [value]: quantity,
      }));
    };

    return (
      <QuantityGroup
        title="Bebidas (algumas indisponíveis)"
        options={disabledOptions}
        quantities={quantities}
        onQuantityChange={handleQuantityChange}
      />
    );
  },
};

export const WithMaxQuantity: Story = {
  render: () => {
    const [quantities, setQuantities] = useState<Record<string, number>>({});

    const limitedOptions = drinkOptions.map((option) => ({
      ...option,
      maxQuantity: 3,
    }));

    const handleQuantityChange = (value: string, quantity: number) => {
      setQuantities((prev) => ({
        ...prev,
        [value]: quantity,
      }));
    };

    return (
      <QuantityGroup
        title="Bebidas (máximo 3 de cada)"
        options={limitedOptions}
        quantities={quantities}
        onQuantityChange={handleQuantityChange}
      />
    );
  },
};

export const MultipleGroups: Story = {
  render: () => {
    const [drinkQuantities, setDrinkQuantities] = useState<
      Record<string, number>
    >({});
    const [dessertQuantities, setDessertQuantities] = useState<
      Record<string, number>
    >({});

    const dessertOptions = [
      {
        value: "pudim",
        label: "pudim de leite",
        price: "+R$ 8,00",
      },
      {
        value: "mousse",
        label: "mousse de chocolate",
        price: "+R$ 7,50",
        hasPromotion: true,
        originalPrice: "+R$ 9,00",
      },
    ];

    return (
      <div className="space-y-xl">
        <QuantityGroup
          title="Bebidas"
          subtitle="adicione quantas quiser"
          options={drinkOptions}
          quantities={drinkQuantities}
          onQuantityChange={(value, quantity) =>
            setDrinkQuantities((prev) => ({ ...prev, [value]: quantity }))
          }
        />

        <QuantityGroup
          title="Sobremesas"
          subtitle="finalize com algo doce"
          options={dessertOptions}
          quantities={dessertQuantities}
          onQuantityChange={(value, quantity) =>
            setDessertQuantities((prev) => ({ ...prev, [value]: quantity }))
          }
        />
      </div>
    );
  },
};

export default meta;
