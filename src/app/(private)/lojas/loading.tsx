import Skeleton from "@/components/Skeleton";

export default function Loading() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <div className="bg-primary dark:bg-primary-dark px-m pb-m">
        <Skeleton className="w-full h-10 rounded-m mb-m" />
      </div>

      <div className="container">
        <section className="mb-l">
          <Skeleton className="w-full h-32 rounded-m" />
        </section>

        <section className="pb-l px-m">
          <div className="mb-m">
            <div className="flex items-center gap-xs mb-m">
              <Skeleton className="h-6 w-16 rounded" />
              <Skeleton className="h-6 w-8 rounded" />
            </div>
            <div className="space-y-s">
              {[...Array(8)].map((_, i) => (
                <Skeleton key={i} className="w-full h-[72px] rounded-m" />
              ))}
            </div>
          </div>

          <div className="mb-m">
            <div className="flex items-center gap-xs mb-m mt-9">
              <Skeleton className="h-6 w-20 rounded" />
              <Skeleton className="h-6 w-8 rounded" />
            </div>
            <div className="space-y-s">
              {[...Array(2)].map((_, i) => (
                <Skeleton key={i + 1} className="w-full h-[72px] rounded-m" />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
