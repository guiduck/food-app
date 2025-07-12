import Skeleton from "@/components/Skeleton";

export default function Loading() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <div className="bg-card pb-m">
        <Skeleton className="w-full h-48 mb-m rounded-none" />

        <div className="space-y-s px-m">
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-xxs min-w-0">
              <div className="flex items-center gap-xs">
                <Skeleton className="h-7 w-40 rounded" />
                <Skeleton className="h-5 w-12 rounded" />
              </div>
              <Skeleton className="h-5 w-32 rounded mb-xs" />
              <Skeleton className="h-4 w-full rounded mb-xs" />
              <Skeleton className="h-4 w-3/4 rounded" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-m">
        <div className="flex items-center justify-between px-m mb-m">
          <div>
            <Skeleton className="h-6 w-24 rounded mb-xxs" />
            <Skeleton className="h-5 w-32 rounded" />
          </div>
          <div className="flex items-center gap-s">
            <Skeleton className="h-10 w-32 rounded-s" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-m px-m">
        {[...Array(2)].map((_, i) => (
          <div key={i}>
            <Skeleton className="h-6 w-40 rounded mb-xs" />
            <Skeleton className="h-10 w-full rounded mb-xs" />
            <Skeleton className="h-[2px] w-full bg-border my-[4px]" />
          </div>
        ))}
      </div>

      <div className="bg-card pt-[26px] px-[28px] rounded-m mt-m">
        <Skeleton className="w-full h-16 rounded" />
      </div>
    </div>
  );
}
