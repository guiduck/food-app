import Skeleton from "@/components/Skeleton";

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-l">
      <div className="max-w-md mx-auto text-center space-y-l">
        <Skeleton className="w-24 h-24 rounded-full mx-auto" />

        <div className="space-y-s">
          <Skeleton className="h-7 w-48 rounded mx-auto" />
          <Skeleton className="h-4 w-full rounded mx-auto" />
          <Skeleton className="h-4 w-3/4 rounded mx-auto" />
        </div>

        <div className="bg-neutral-50 p-l rounded-m space-y-s">
          <Skeleton className="h-6 w-52 rounded mx-auto" />
          <Skeleton className="h-8 w-32 rounded mx-auto" />
          <Skeleton className="h-4 w-full rounded mx-auto" />
          <Skeleton className="h-4 w-2/3 rounded mx-auto" />
        </div>

        <div className="space-y-s">
          <Skeleton className="w-full h-12 rounded-s" />
          <Skeleton className="w-full h-12 rounded-s" />
        </div>
      </div>
    </div>
  );
}
