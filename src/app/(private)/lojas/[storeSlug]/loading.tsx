import Skeleton from "@/components/Skeleton";

export default function Loading() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <div className="bg-card px-m py-l">
        <div className="flex items-start gap-m mb-[4px]">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-xs mb-s">
              <Skeleton className="size-9 rounded-m flex-shrink-0" />
              <Skeleton className="h-6 w-40 rounded" />
            </div>
            <div className="flex items-center gap-s mb-xxs">
              <Skeleton className="h-6 w-6 rounded-full" />
              <Skeleton className="h-6 w-6 rounded-full" />
            </div>
            <div className="flex items-center gap-xxs mb-xs">
              <Skeleton className="h-4 w-16 rounded" />
              <Skeleton className="h-4 w-4 rounded" />
              <Skeleton className="h-4 w-20 rounded" />
              <Skeleton className="h-4 w-4 rounded" />
              <Skeleton className="h-4 w-10 rounded" />
            </div>
          </div>

          <Skeleton className="h-6 w-16 rounded-s" />
        </div>

        <div className="flex items-center gap-xxs">
          <Skeleton className="h-4 w-20 rounded" />
          <Skeleton className="h-4 w-4 rounded" />
          <Skeleton className="h-4 w-16 rounded" />
        </div>
        <Skeleton className="h-4 w-32 rounded mt-xs" />
      </div>

      <div className="pb-l">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="mb-m">
            <div>
              {[...Array(3)].map((_, j) => (
                <Skeleton key={j} className="h-14 w-full rounded mb-s" />
              ))}
            </div>

            {i !== 1 && (
              <Skeleton className="h-[2px] w-full bg-border my-[4px]" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
