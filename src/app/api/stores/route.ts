import { NextRequest, NextResponse } from "next/server";
import { Store } from "@/types/store";

const mockStores: Store[] = [
  {
    id: 1,
    name: "Matsuri Concept",
    slug: "matsuri-concept",
    image: "/images/stores/matsuri.png",
    deliveryPrice: 0,
    closingTime: "23:00",
    rating: 4.7,
  },
  {
    id: 2,
    name: "Subway - Avenida center",
    slug: "subway-avenida-center",
    image: "/images/stores/subway.png",
    deliveryPrice: 6.0,
    closingTime: "22:30",
    rating: 4.7,
  },
  {
    id: 3,
    name: "Burger King - Colombo",
    slug: "burger-king-colombo",
    image: "/images/stores/burguer-king.png",
    deliveryPrice: 6.0,
    closingTime: "00:00",
    rating: 4.7,
  },
  {
    id: 4,
    name: "McDonald's - Novo Centro",
    slug: "mcdonalds-novo-centro",
    image: "/images/stores/mcdonalds.png",
    deliveryPrice: 0,
    closingTime: "23:30",
    rating: 4.7,
  },
  {
    id: 5,
    name: "Pizza Hut - Centro",
    slug: "pizza-hut-centro",
    image: "/images/stores/pizza-hut.webp",
    deliveryPrice: 8.0,
    closingTime: "01:00",
    rating: 4.5,
  },
  {
    id: 6,
    name: "KFC - Shopping",
    slug: "kfc-shopping",
    image: "/images/stores/kfc.webp",
    deliveryPrice: 5.0,
    closingTime: "22:00",
    rating: 4.6,
  },
  {
    id: 7,
    name: "Outback Steakhouse",
    slug: "outback-steakhouse",
    image: "/images/stores/outback.webp",
    deliveryPrice: 12.0,
    closingTime: "23:45",
    rating: 4.8,
  },
  {
    id: 8,
    name: "Domino's Pizza",
    slug: "dominos-pizza",
    image: "/images/stores/dominos.webp",
    deliveryPrice: 0,
    closingTime: "01:30",
    rating: 4.4,
  },
  {
    id: 9,
    name: "Burger King - Interlagos",
    slug: "burger-king-interlagos",
    image: "/images/stores/burguer-king.png",
    deliveryPrice: 6.0,
    closingTime: "20:00",
    rating: 4.7,
  },
];

export async function GET(_: NextRequest) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 300));

    return NextResponse.json({
      stores: mockStores,
    });
  } catch (error) {
    console.error("Stores API error:", error);
    return NextResponse.json(
      { message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
