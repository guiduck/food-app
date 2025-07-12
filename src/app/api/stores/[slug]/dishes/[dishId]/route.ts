import { NextResponse } from "next/server";
import { Dish } from "@/types/store-details";

const mockDish: Dish = {
  id: 1,
  name: "Pizza Margherita Especial",
  description:
    "Nossa clássica pizza margherita com molho de tomate artesanal, mussarela de búfala, manjericão fresco e azeite extra virgem.",
  price: 28.9,
  originalPrice: 35.9,
  image: "/images/dishes/pizza-margherita.jpg",
  warning: {
    spicy: false,
    vegan: false,
    vegetarian: true,
    glutenFree: false,
  },
  available: true,
  options: [
    {
      title: "Tamanho",
      hasOffer: true,
      required: true,
      type: "single",
      ingredients: [
        { title: "Pequena", price: 22.9 },
        { title: "Média", price: 19.9, originalPrice: 28.9 },
        { title: "Grande", price: 32.9, originalPrice: 38.9 },
      ],
    },
    {
      title: "Borda",
      hasOffer: false,
      type: "single",
      ingredients: [
        { title: "Sem borda", price: 0 },
        { title: "Catupiry", price: 5.9 },
        { title: "Cheddar", price: 6.9 },
        { title: "Chocolate", price: 7.9 },
      ],
    },
    {
      title: "Adicionais",
      hasOffer: false,
      type: "multiple",
      ingredients: [
        { title: "Azeitona", price: 3.9 },
        { title: "Palmito", price: 4.9 },
        { title: "Bacon", price: 6.9 },
        { title: "Champignon", price: 5.9 },
      ],
    },
  ],
};

export async function GET(): Promise<
  NextResponse<{ dish: Dish } | { error: string }>
> {
  try {
    const dish = mockDish;

    if (!dish) {
      return NextResponse.json(
        { error: "Prato não encontrado" },
        { status: 404 }
      );
    }

    return NextResponse.json({ dish });
  } catch (error) {
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
