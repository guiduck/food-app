import Skeleton from "@/components/Skeleton";

export default function Loading() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <div className="max-w-md mx-auto">
        <div className="bg-white p-m border-b border-dividers">
          <div className="flex items-center gap-s">
            <Skeleton className="size-9 rounded-m flex-shrink-0" />
            <div>
              <Skeleton className="h-4 w-24 rounded mb-xxs" />
              <Skeleton className="h-5 w-32 rounded" />
            </div>
          </div>
        </div>
        <div className="bg-white">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="p-m border-b border-neutral-100">
              <div className="flex items-center justify-between mb-xxs">
                <Skeleton className="h-4 w-32 rounded" />
                <Skeleton className="h-4 w-16 rounded" />
              </div>
              <div className="flex gap-l mb-xxs justify-end">
                <Skeleton className="h-5 w-16 rounded" />
                <Skeleton className="h-8 w-20 rounded" />
              </div>
              <Skeleton className="h-4 w-40 rounded mb-xxs" />
              <Skeleton className="h-4 w-32 rounded ml-s" />
              <Skeleton className="h-4 w-48 rounded mt-xxs" />
            </div>
          ))}
        </div>
        <div className="fixed bottom-0 left-0 right-0 bg-white flex justify-between border-t items-center border-dividers py-m px-xl shadow-md max-w-md mx-auto">
          <div className="flex flex-col gap-[2px] min-w-100 items-center justify-between">
            <Skeleton className="h-4 w-16 rounded mb-xxs" />
            <Skeleton className="h-6 w-24 rounded" />
          </div>
          <Skeleton className="h-10 w-40 rounded-m ml-m" />
        </div>
      </div>
    </div>
  );
}
