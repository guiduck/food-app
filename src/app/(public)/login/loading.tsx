import Skeleton from "@/components/Skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-teal-background border-b border-dividers p-m">
        <div className="max-w-sm mx-auto text-center">
          <Skeleton className="h-6 w-36 rounded mx-auto mb-1" />
          <Skeleton className="h-4 w-48 rounded mx-auto" />
        </div>
      </div>

      <div className="flex items-center justify-center p-l">
        <div className="w-full max-w-sm">
          <div className="bg-card border border-border rounded-m p-l space-y-l mt-xl">
            <div className="flex justify-end mb-4">
              <Skeleton className="h-8 w-8 rounded-full" />
            </div>

            <div className="text-center space-y-s">
              <Skeleton className="h-7 w-48 rounded mx-auto" />
              <Skeleton className="h-4 w-56 rounded mx-auto" />
            </div>

            <div className="space-y-m">
              <div className="space-y-xs">
                <Skeleton className="h-5 w-12 rounded" />
                <Skeleton className="h-10 w-full rounded" />
              </div>
              <div className="space-y-xs">
                <Skeleton className="h-5 w-14 rounded" />
                <Skeleton className="h-10 w-full rounded" />
              </div>
              <Skeleton className="h-12 w-full rounded" />
            </div>
          </div>

          <div className="text-center mt-m">
            <Skeleton className="h-4 w-32 rounded mx-auto mb-xs" />
            <Skeleton className="h-4 w-24 rounded mx-auto" />
          </div>

          <div className="mt-l p-m bg-neutral-50 rounded-m">
            <Skeleton className="h-5 w-40 rounded mb-s" />
            <div className="space-y-xs">
              <Skeleton className="h-4 w-full rounded" />
              <Skeleton className="h-4 w-full rounded" />
              <Skeleton className="h-4 w-full rounded" />
              <Skeleton className="h-4 w-full rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
