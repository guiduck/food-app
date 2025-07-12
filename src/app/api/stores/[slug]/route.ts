import { NextRequest, NextResponse } from "next/server";
import { StoreDetails } from "@/types/store-details";
import { isStoreOpen } from "@/services/stores";

const mockStoreDetails: Record<string, StoreDetails> = {
  "matsuri-concept": {
    id: 1,
    name: "Matsuri Concept",
    slug: "matsuri-concept",
    image: "/images/stores/matsuri.png",
    deliveryFee: 0,
    deliveryTime: "30-40 min",
    distanceFromUser: "5.2km",
    closingTime: "23:00",
    rating: 4.5,
    isOpen: true,
    promotion: {
      type: "free_delivery",
      description: "entrega grátis acima de R$ 35,00",
      minOrderValue: 35.0,
    },
    minimumOrder: 15.0,
    menu: [
      {
        id: 1,
        title: "Niguiris",
        description: "arroz temperado coberto com fatias de peixe fresco",
        hasOffer: true,
        dishes: [
          {
            id: 1,
            name: "Niguiri de Salmão",
            description: "Fatia de salmão fresco sobre arroz temperado",
            price: 8.5,
            originalPrice: 12.0,
            image: "/images/dishes/niguiri-salmao.jpg",
            warning: {
              spicy: false,
              vegan: false,
              vegetarian: false,
              glutenFree: true,
            },
            available: true,
          },
          {
            id: 2,
            name: "Niguiri de Atum",
            description: "Fatia de atum fresco sobre arroz temperado",
            price: 9.0,
            originalPrice: 13.0,
            image: "/images/dishes/niguiri-atum.jpg",
            warning: {
              spicy: false,
              vegan: false,
              vegetarian: false,
              glutenFree: true,
            },
            available: true,
          },
          {
            id: 3,
            name: "Niguiri de Camarão",
            description: "Camarão cozido sobre arroz temperado",
            price: 7.5,
            originalPrice: 10.0,
            image: "/images/dishes/niguiri-camarao.jpg",
            warning: {
              spicy: false,
              vegan: false,
              vegetarian: false,
              glutenFree: true,
            },
            available: true,
          },
        ],
      },
      {
        id: 2,
        title: "Ceviches",
        description:
          "um prato super refrescante de peixe fatiado e marinado com limão",
        hasOffer: false,
        dishes: [
          {
            id: 4,
            name: "Ceviche de Peixe",
            description: "Peixe fresco marinado com limão e cebola roxa",
            price: 28.0,
            image: "/images/dishes/ceviche-peixe.jpg",
            warning: {
              spicy: true,
              vegan: false,
              vegetarian: false,
              glutenFree: true,
            },
            available: true,
          },
          {
            id: 5,
            name: "Ceviche Misto",
            description:
              "Mix de frutos do mar marinados com limão e especiarias",
            price: 35.0,
            image: "/images/dishes/ceviche-misto.jpg",
            warning: {
              spicy: true,
              vegan: false,
              vegetarian: false,
              glutenFree: true,
            },
            available: true,
          },
        ],
      },
      {
        id: 3,
        title: "Temakis",
        description: "sushi em forma de cone com salmão e cream cheese",
        hasOffer: false,
        dishes: [
          {
            id: 6,
            name: "Temaki de Salmão",
            description: "Cone de alga com salmão, cream cheese e pepino",
            price: 12.0,
            image: "/images/dishes/temaki-salmao.jpg",
            warning: {
              spicy: false,
              vegan: false,
              vegetarian: false,
              glutenFree: false,
            },
            available: true,
          },
          {
            id: 7,
            name: "Temaki Especial",
            description:
              "Cone de alga com salmão grelhado, cream cheese e cebolinha",
            price: 15.0,
            image: "/images/dishes/temaki-especial.jpg",
            warning: {
              spicy: false,
              vegan: false,
              vegetarian: false,
              glutenFree: false,
            },
            available: true,
          },
        ],
      },
      {
        id: 4,
        title: "Bebidas",
        hasOffer: false,
        dishes: [
          {
            id: 8,
            name: "Refrigerante Lata",
            description: "Coca-Cola, Pepsi, Guaraná ou Fanta",
            price: 4.5,
            image: "/images/dishes/refrigerante.jpg",
            warning: {
              spicy: false,
              vegan: true,
              vegetarian: true,
              glutenFree: true,
            },
            available: true,
          },
          {
            id: 9,
            name: "Suco Natural",
            description: "Laranja, limão ou maracujá",
            price: 6.0,
            image: "/images/dishes/suco-natural.jpg",
            warning: {
              spicy: false,
              vegan: true,
              vegetarian: true,
              glutenFree: true,
            },
            available: true,
          },
        ],
      },
      {
        id: 5,
        title: "Sobremesas",
        description: "doces tradicionais japoneses para finalizar sua refeição",
        hasOffer: false,
        dishes: [
          {
            id: 10,
            name: "Mochi de Morango",
            description: "Doce japonês com recheio de morango",
            price: 8.0,
            image: "/images/dishes/mochi-morango.jpg",
            warning: {
              spicy: false,
              vegan: false,
              vegetarian: true,
              glutenFree: true,
            },
            available: true,
          },
          {
            id: 11,
            name: "Dorayaki",
            description: "Panqueca japonesa com recheio de doce de feijão",
            price: 10.0,
            image: "/images/dishes/dorayaki.jpg",
            warning: {
              spicy: false,
              vegan: false,
              vegetarian: true,
              glutenFree: false,
            },
            available: false,
          },
        ],
      },
    ],
  },
  "subway-avenida-center": {
    id: 2,
    name: "Subway - Avenida center",
    slug: "subway-avenida-center",
    image: "/images/stores/subway.png",
    deliveryFee: 6.0,
    deliveryTime: "25-35 min",
    distanceFromUser: "3.8km",
    closingTime: "22:30",
    rating: 4.7,
    isOpen: true,
    minimumOrder: 20.0,
    menu: [
      {
        id: 1,
        title: "Sanduíches 15cm",
        description: "sanduíches frescos no tamanho individual",
        hasOffer: true,
        dishes: [
          {
            id: 1,
            name: "Frango Teriyaki",
            description: "Peito de frango grelhado com molho teriyaki",
            price: 12.9,
            originalPrice: 15.9,
            image: "/images/dishes/subway-frango-teriyaki.jpg",
            warning: {
              spicy: false,
              vegan: false,
              vegetarian: false,
              glutenFree: false,
            },
            available: true,
          },
          {
            id: 2,
            name: "Atum",
            description: "Atum com maionese e vegetais frescos",
            price: 13.9,
            originalPrice: 16.9,
            image: "/images/dishes/subway-atum.jpg",
            warning: {
              spicy: false,
              vegan: false,
              vegetarian: false,
              glutenFree: false,
            },
            available: true,
          },
        ],
      },
      {
        id: 2,
        title: "Sanduíches 30cm",
        hasOffer: false,
        dishes: [
          {
            id: 3,
            name: "Frango Teriyaki 30cm",
            description:
              "Peito de frango grelhado com molho teriyaki - tamanho grande",
            price: 22.9,
            image: "/images/dishes/subway-frango-teriyaki-30.jpg",
            warning: {
              spicy: false,
              vegan: false,
              vegetarian: false,
              glutenFree: false,
            },
            available: true,
          },
        ],
      },
      {
        id: 3,
        title: "Bebidas",
        hasOffer: false,
        dishes: [
          {
            id: 4,
            name: "Refrigerante 500ml",
            description: "Coca-Cola, Pepsi ou Guaraná",
            price: 5.5,
            image: "/images/dishes/refrigerante-500ml.jpg",
            warning: {
              spicy: false,
              vegan: true,
              vegetarian: true,
              glutenFree: true,
            },
            available: true,
          },
        ],
      },
    ],
  },
};

export async function GET(
  _: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 400));

    const { slug } = await params;
    const storeData = mockStoreDetails[slug];

    if (!storeData) {
      return NextResponse.json(
        { message: "Loja não encontrada" },
        { status: 404 }
      );
    }

    const storeWithOpenStatus = {
      ...storeData,
      isOpen: isStoreOpen({ closingTime: storeData.closingTime } as any),
    };

    return NextResponse.json({
      store: storeWithOpenStatus,
    });
  } catch (error) {
    console.error("Store details API error:", error);
    return NextResponse.json(
      { message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
