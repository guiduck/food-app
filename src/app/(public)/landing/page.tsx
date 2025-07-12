import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-dark">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-l py-xxl">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-l">
              Sua fome, nossa
              <span className="block text-yellow-300">prioridade</span>
            </h1>
            <p className="text-xl md:text-2xl mb-xl opacity-90 max-w-3xl mx-auto">
              Descubra os melhores restaurantes da sua cidade e receba seu
              pedido em minutos. Comida deliciosa está a apenas alguns cliques
              de distância! 🍕
            </p>

            <div className="flex flex-col sm:flex-row gap-m justify-center items-center">
              <Link
                href="/localizacao"
                className="bg-yellow-400 hover:bg-yellow-500 text-black px-xl py-l rounded-l font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Pedir Agora
              </Link>
              <Link
                href="/lojas"
                className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-xl py-l rounded-l font-medium text-lg transition-all duration-300 border-2 border-white border-opacity-30"
              >
                Explorar Restaurantes
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute top-20 left-10 text-6xl opacity-20">🍔</div>
        <div className="absolute top-40 right-20 text-4xl opacity-20">🍕</div>
        <div className="absolute bottom-20 left-20 text-5xl opacity-20">🍜</div>
        <div className="absolute bottom-40 right-10 text-3xl opacity-20">
          🥗
        </div>
      </section>

      <section className="py-xxl bg-white">
        <div className="max-w-7xl mx-auto px-l">
          <div className="text-center mb-xxl">
            <h2 className="text-4xl font-bold text-text-primary mb-m">
              Por que escolher o AiqFome?
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Conectamos você aos melhores sabores da cidade com praticidade e
              rapidez
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-xl">
            <div className="text-center group">
              <div className="bg-primary bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-l group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <svg
                  className="w-10 h-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-m">
                Entrega Rápida
              </h3>
              <p className="text-text-secondary">
                Receba seu pedido em média 30 minutos. Acompanhe em tempo real
                pelo app.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-primary bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-l group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <svg
                  className="w-10 h-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-m">
                Qualidade Garantida
              </h3>
              <p className="text-text-secondary">
                Restaurantes selecionados com avaliações reais de clientes
                satisfeitos.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-primary bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-l group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <svg
                  className="w-10 h-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-m">
                Pagamento Seguro
              </h3>
              <p className="text-text-secondary">
                Múltiplas formas de pagamento com total segurança e praticidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-xxl bg-neutral-50">
        <div className="max-w-7xl mx-auto px-l">
          <div className="text-center mb-xxl">
            <h2 className="text-4xl font-bold text-text-primary mb-m">
              Categorias Populares
            </h2>
            <p className="text-xl text-text-secondary">
              Explore os sabores mais pedidos na sua região
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-l">
            {[
              { emoji: "🍕", name: "Pizza", color: "bg-red-500" },
              { emoji: "🍔", name: "Burger", color: "bg-yellow-500" },
              { emoji: "🍜", name: "Asiática", color: "bg-orange-500" },
              { emoji: "🥗", name: "Saudável", color: "bg-green-500" },
              { emoji: "🍰", name: "Doces", color: "bg-pink-500" },
              { emoji: "🌮", name: "Mexicana", color: "bg-red-600" },
              { emoji: "🍛", name: "Brasileira", color: "bg-blue-500" },
              { emoji: "☕", name: "Bebidas", color: "bg-amber-600" },
            ].map((category, index) => (
              <div key={category.name} className="group cursor-pointer">
                <div className="bg-white rounded-xl p-l text-center shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div
                    className={`${category.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-m`}
                  >
                    <span className="text-3xl">{category.emoji}</span>
                  </div>
                  <h3 className="font-bold text-text-primary group-hover:text-primary">
                    {category.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-xxl bg-primary text-white">
        <div className="max-w-7xl mx-auto px-l">
          <div className="grid md:grid-cols-4 gap-xl text-center">
            <div>
              <div className="text-5xl font-bold mb-s">500+</div>
              <div className="text-xl opacity-90">Restaurantes Parceiros</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-s">50k+</div>
              <div className="text-xl opacity-90">Pedidos Entregues</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-s">4.8★</div>
              <div className="text-xl opacity-90">Avaliação Média</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-s">25min</div>
              <div className="text-xl opacity-90">Tempo Médio</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-xxl bg-gradient-to-r from-yellow-400 to-orange-500">
        <div className="max-w-4xl mx-auto px-l text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-l">
            Pronto para saborear?
          </h2>
          <p className="text-xl text-black text-opacity-80 mb-xl">
            Junte-se a milhares de pessoas que já descobriram a praticidade do
            AiqFome
          </p>

          <div className="flex flex-col sm:flex-row gap-m justify-center">
            <Link
              href="/localizacao"
              className="bg-black hover:bg-gray-800 text-white px-xl py-l rounded-l font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Começar Agora
            </Link>
            <Link
              href="/lojas"
              className="bg-white hover:bg-gray-100 text-black px-xl py-l rounded-l font-medium text-lg transition-all duration-300 shadow-lg"
            >
              Ver Restaurantes
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
