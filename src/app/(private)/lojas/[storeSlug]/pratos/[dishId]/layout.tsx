import TicketFooter from "@/components/TicketFooter";
import { getStoreDetails } from "@/services/stores/store-details";
import { notFound } from "next/navigation";

interface TicketLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    storeSlug: string;
    dishId: string;
  }>;
}

export default async function TicketLayout({
  children,
  params,
}: TicketLayoutProps) {
  const { storeSlug } = await params;

  const storeResult = await getStoreDetails(storeSlug);

  if (storeResult.error || !storeResult.data) {
    notFound();
  }

  const store = storeResult.data.store;

  return (
    <div>
      {children}
      <TicketFooter store={{ ...store }} />
    </div>
  );
}
