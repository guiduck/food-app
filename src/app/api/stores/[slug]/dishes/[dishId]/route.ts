import { NextResponse } from "next/server";
import { Dish } from "@/types/store-details";
import { mockStoreDetails } from "../../../data";

const fallbackDish: Dish = {
  id: 999,
  name: "Prato Especial da Casa",
  description:
    "Um delicioso prato preparado com ingredientes frescos e selecionados. Perfeito para qualquer ocasião!",
  price: 25.9,
  originalPrice: 32.9,
  image: "/images/dishes/prato-especial.jpg",
  warning: {
    spicy: false,
    vegan: false,
    vegetarian: false,
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
        { title: "Individual", price: 25.9 },
        { title: "Para Compartilhar", price: 39.9, originalPrice: 49.9 },
      ],
    },
    {
      title: "Acompanhamentos",
      hasOffer: false,
      type: "single",
      ingredients: [
        { title: "Arroz Branco", price: 0 },
        { title: "Batata Frita", price: 6.9 },
        { title: "Salada", price: 8.9 },
      ],
    },
  ],
};

export async function GET(
  _: Request,
  { params }: { params: { slug: string; dishId: string } }
): Promise<NextResponse<{ dish: Dish } | { error: string }>> {
  try {
    const { slug, dishId } = params;
    const dishIdNumber = parseInt(dishId);
    await new Promise((resolve) => setTimeout(resolve, 800));

    const store = mockStoreDetails[slug];
    if (!store) {
      return NextResponse.json({ dish: fallbackDish });
    }

    let foundDish: Dish | undefined;

    for (const category of store.menu) {
      foundDish = category.dishes.find((dish) => dish.id === dishIdNumber);
      if (foundDish) {
        break;
      }
    }

    if (!foundDish) {
      return NextResponse.json({ dish: fallbackDish });
    }

    return NextResponse.json({ dish: foundDish });
  } catch (error) {
    return NextResponse.json({ dish: fallbackDish });
  }
}
