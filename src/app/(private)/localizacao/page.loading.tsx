import Skeleton from "@/components/Skeleton";

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6">
      <div className="w-full max-w-md space-y-6">
        <div className="flex justify-end items-center mb-4">
          <Skeleton className="h-8 w-8 rounded-full" />
        </div>
        <div className="text-center space-y-2">
          <Skeleton className="h-8 w-40 rounded mx-auto" />
          <Skeleton className="h-4 w-64 rounded mx-auto" />
        </div>
        <div className="space-y-6">
          <Skeleton className="h-6 w-56 rounded mb-2" />
          <div className="space-y-2">
            <Skeleton className="h-5 w-40 rounded mb-1" />
            <Skeleton className="h-10 w-full rounded mb-1" />
          </div>
          <Skeleton className="h-12 w-full rounded-lg mt-4" />
        </div>
      </div>
    </div>
  );
}
