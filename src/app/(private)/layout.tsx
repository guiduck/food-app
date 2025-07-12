import { Header } from "@/components/Header";
import { getLocationFromCookies } from "@/actions/location";
import TicketFooter from "@/components/TicketFooter";

export default async function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userLocation = await getLocationFromCookies();

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        address={userLocation?.address || "Rua Mandaguari, 198"}
        addressLine2="entregando em"
      />
      <main className="flex-grow pb-20">{children}</main>
    </div>
  );
}
