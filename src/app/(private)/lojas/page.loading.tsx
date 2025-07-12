import Skeleton from "@/components/Skeleton";

export default function Loading() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <div className="bg-primary dark:bg-primary-dark px-m pb-m">
        <Skeleton className="w-full h-10 rounded-m mt-m mb-m" />
      </div>
      <div className="container">
        <section className="mb-l">
          <Skeleton className="w-full h-32 rounded-m" />
        </section>
        <section className="pb-l">
          <h2 className="text-primary font-extrabold text-l leading-[27px] mb-m">
            abertos{" "}
            <Skeleton className="inline-block align-middle ml-xs w-12 h-6 rounded" />
          </h2>
          <div className="mb-m space-y-s">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="w-full h-[72px] rounded-m" />
            ))}
          </div>
          <h2 className="text-primary font-extrabold text-l leading-[27px] mb-m mt-9">
            fechados{" "}
            <Skeleton className="inline-block align-middle ml-xs w-12 h-6 rounded" />
          </h2>
          <div className="mb-m space-y-s">
            {[...Array(2)].map((_, i) => (
              <Skeleton key={i} className="w-full h-[72px] rounded-m" />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
