import Skeleton from "@/components/Skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto p-l space-y-l">
        <Skeleton className="h-8 w-40 rounded mb-l" />
        <div>
          <Skeleton className="h-8 w-48 rounded mb-xs" />
          <Skeleton className="h-4 w-64 rounded" />
        </div>
        <div className="bg-card border border-border rounded-m p-l space-y-l">
          <div className="text-center space-y-s">
            <Skeleton className="h-7 w-56 rounded mx-auto" />
            <Skeleton className="h-4 w-80 rounded mx-auto" />
          </div>
          <div className="space-y-s">
            <Skeleton className="h-6 w-40 rounded mb-2" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-s">
              {[...Array(4)].map((_, i) => (
                <Skeleton key={i} className="h-16 w-full rounded-s" />
              ))}
            </div>
            <div className="bg-neutral-100 p-m rounded-s space-y-xs">
              {[...Array(3)].map((_, i) => (
                <Skeleton key={i} className="h-4 w-40 rounded" />
              ))}
            </div>
          </div>
          <div className="space-y-s">
            <Skeleton className="h-6 w-40 rounded mb-2" />
            <div className="bg-neutral-100 p-m rounded-s space-y-s">
              {[...Array(5)].map((_, i) => (
                <Skeleton key={i} className="h-4 w-48 rounded" />
              ))}
            </div>
          </div>
          <div className="space-y-s">
            <Skeleton className="h-6 w-40 rounded mb-2" />
            <div className="space-y-s">
              {[...Array(5)].map((_, i) => (
                <Skeleton key={i} className="h-6 w-48 rounded" />
              ))}
            </div>
          </div>
          <div className="space-y-s">
            <Skeleton className="h-6 w-40 rounded mb-2" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-s">
              {[...Array(4)].map((_, i) => (
                <Skeleton key={i} className="h-16 w-full rounded-s" />
              ))}
            </div>
          </div>
          <div className="space-y-s">
            <Skeleton className="h-6 w-40 rounded mb-2" />
            <div className="bg-neutral-100 p-l rounded-s space-y-m max-w-2xl">
              <Skeleton className="h-5 w-32 rounded mb-1" />
              <Skeleton className="h-10 w-full rounded mb-1" />
              <div className="flex items-center space-x-s">
                <Skeleton className="h-5 w-5 rounded" />
                <Skeleton className="h-5 w-32 rounded" />
              </div>
              <div className="flex flex-wrap gap-s">
                {[...Array(4)].map((_, i) => (
                  <Skeleton key={i} className="h-10 w-32 rounded" />
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-s">
            <Skeleton className="h-6 w-40 rounded mb-2" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-m">
              {[...Array(2)].map((_, i) => (
                <Skeleton key={i} className="h-32 w-full rounded-m" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
