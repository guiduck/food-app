export default function DeliveryPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-l">
      <div className="max-w-md mx-auto text-center space-y-l">
        <div className="w-24 h-24 mx-auto bg-success rounded-full flex items-center justify-center">
          <svg
            className="w-12 h-12 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <div className="space-y-s">
          <h1 className="text-text-primary font-bold text-xl">
            Pedido Confirmado!
          </h1>
          <p className="text-text-secondary text-m">
            Seu pedido foi enviado para o restaurante e está sendo preparado.
          </p>
        </div>

        <div className="bg-teal-background p-l rounded-m space-y-s">
          <h2 className="text-text-primary font-medium text-l">
            Tempo estimado de entrega
          </h2>
          <p className="text-primary font-bold text-xl">30-45 minutos</p>
          <p className="text-text-secondary text-s">
            Você receberá atualizações sobre o status do seu pedido.
          </p>
        </div>

        <div className="space-y-s">
          <a
            href="/lojas"
            className="w-full bg-primary text-white py-m px-l rounded-s text-s font-medium hover:bg-primary-dark transition-colors"
          >
            Fazer Novo Pedido
          </a>
          <a
            href="/"
            className="w-full bg-neutral-100 text-text-primary py-m px-l rounded-s text-s font-medium hover:bg-neutral-200 transition-colors"
          >
            Voltar ao Início
          </a>
        </div>
      </div>
    </div>
  );
}
