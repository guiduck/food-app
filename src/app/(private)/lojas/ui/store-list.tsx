"use client";

import { Store } from "@/types/store";
import { useSearchStore } from "@/stores/search-store";
import { useMemo } from "react";
import StoreCard from "@/components/StoreCard";
import Link from "next/link";

interface StoreListProps {
  stores: Store[];
}

export default function StoreList({ stores }: StoreListProps) {
  const { searchTerm } = useSearchStore();

  const { openStores, closedStores } = useMemo(() => {
    const filteredStores = stores.filter((store) => {
      if (!searchTerm) return true;

      const searchLower = searchTerm.toLowerCase();
      return store.name.toLowerCase().includes(searchLower);
    });

    const open = filteredStores.filter((store) => store.isOpen);
    const closed = filteredStores.filter((store) => !store.isOpen);

    return {
      openStores: open,
      closedStores: closed,
    };
  }, [stores, searchTerm]);

  if (searchTerm && openStores.length === 0 && closedStores.length === 0) {
    return (
      <div className="text-center py-xl">
        <p className="text-text-secondary text-m">
          Nenhuma loja encontrada para "{searchTerm}"
        </p>
        <p className="text-text-secondary text-s mt-xs">
          Tente pesquisar por outro termo
        </p>
      </div>
    );
  }

  const renderStores = (stores: Store[]) => {
    if (stores.length === 0) {
      return (
        <div className="text-center py-xl">
          <p className="text-text-secondary text-m">
            Nenhuma loja encontrada para "{searchTerm}"
          </p>
        </div>
      );
    }

    return (
      <div className="mb-m">
        {stores.map((store) => (
          <Link key={store.id} href={`/lojas/${store.slug}`}>
            <StoreCard
              name={store.name}
              rating={store.rating}
              deliveryFee={store.deliveryPrice}
              imageUrl={store.image}
              isOpen={store.isOpen}
            />
          </Link>
        ))}
      </div>
    );
  };

  return (
    <div>
      <section>
        <h2 className="text-primary font-extrabold text-l leading-[27px] mb-m">
          abertos
          {searchTerm && (
            <span className="text-text-secondary font-normal text-m ml-xs">
              ({openStores.length} resultado
              {openStores.length !== 1 ? "s" : ""})
            </span>
          )}
        </h2>
        {renderStores(openStores)}
      </section>

      <section className="mt-9">
        <h2 className="text-primary font-extrabold text-l leading-[27px] mb-m">
          fechados
          {searchTerm && (
            <span className="text-text-secondary font-normal text-m ml-xs">
              ({closedStores.length} resultado
              {closedStores.length !== 1 ? "s" : ""})
            </span>
          )}
        </h2>
        {renderStores(closedStores)}
      </section>

      {!searchTerm && openStores.length === 0 && closedStores.length > 0 && (
        <div className="text-center py-m mb-l">
          <p className="text-text-secondary text-m">
            Todas as lojas estão fechadas no momento
          </p>
          <p className="text-text-secondary text-s mt-xs">
            Confira os horários abaixo
          </p>
        </div>
      )}
    </div>
  );
}
