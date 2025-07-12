"use client";

import { StoreDetails } from "@/types/store-details";

interface ClosedStoreOverlayProps {
  store: StoreDetails;
}

export default function ClosedStoreOverlay({ store }: ClosedStoreOverlayProps) {
  if (store.isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-card p-xl rounded-m mx-m text-center">
        <h2 className="text-text-primary font-bold text-l mb-s">
          Loja Fechada
        </h2>
        <p className="text-text-secondary text-s mb-m">
          {store.name} está fechada no momento.
        </p>
        <p className="text-text-secondary text-s mb-l">
          Horário de funcionamento: até {store.closingTime}
        </p>
        <button
          onClick={() => window.history.back()}
          className="bg-primary text-white px-l py-s rounded-s text-s font-medium hover:bg-primary-dark transition-colors"
        >
          Voltar
        </button>
      </div>
    </div>
  );
}
