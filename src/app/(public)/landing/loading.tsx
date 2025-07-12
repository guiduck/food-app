import Skeleton from "@/components/Skeleton";

export default function Loading() {
  return (
    <main className="min-h-screen bg-background">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-dark">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-l py-xxl">
          <div className="text-center text-white">
            <Skeleton className="h-16 w-96 rounded mx-auto mb-l bg-white bg-opacity-20" />
            <Skeleton className="h-6 w-full max-w-3xl rounded mx-auto mb-xl bg-white bg-opacity-20" />
            <Skeleton className="h-4 w-2/3 rounded mx-auto mb-xl bg-white bg-opacity-20" />

            <div className="flex flex-col sm:flex-row gap-m justify-center items-center">
              <Skeleton className="h-14 w-40 rounded-l bg-white bg-opacity-20" />
              <Skeleton className="h-14 w-48 rounded-l bg-white bg-opacity-20" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-xxl bg-white">
        <div className="max-w-7xl mx-auto px-l">
          <div className="text-center mb-xxl">
            <Skeleton className="h-10 w-96 rounded mx-auto mb-m" />
            <Skeleton className="h-5 w-full max-w-2xl rounded mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-xl">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="text-center">
                <Skeleton className="w-20 h-20 rounded-full mx-auto mb-l" />
                <Skeleton className="h-7 w-32 rounded mx-auto mb-m" />
                <Skeleton className="h-4 w-full rounded mb-2" />
                <Skeleton className="h-4 w-3/4 rounded mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-xxl bg-neutral-50">
        <div className="max-w-7xl mx-auto px-l">
          <div className="text-center mb-xxl">
            <Skeleton className="h-10 w-80 rounded mx-auto mb-m" />
            <Skeleton className="h-5 w-72 rounded mx-auto" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-l">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="bg-white rounded-xl p-l text-center shadow-sm">
                  <Skeleton className="w-16 h-16 rounded-full mx-auto mb-m" />
                  <Skeleton className="h-5 w-20 rounded mx-auto" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-xxl bg-primary text-white">
        <div className="max-w-7xl mx-auto px-l">
          <div className="grid md:grid-cols-4 gap-xl text-center">
            {[...Array(4)].map((_, i) => (
              <div key={i}>
                <Skeleton className="h-12 w-24 rounded mx-auto mb-s bg-white bg-opacity-20" />
                <Skeleton className="h-5 w-32 rounded mx-auto bg-white bg-opacity-20" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-xxl bg-gradient-to-r from-yellow-400 to-orange-500">
        <div className="max-w-4xl mx-auto px-l text-center">
          <Skeleton className="h-12 w-96 rounded mx-auto mb-l bg-black bg-opacity-20" />
          <Skeleton className="h-5 w-full max-w-lg rounded mx-auto mb-xl bg-black bg-opacity-20" />

          <div className="flex flex-col sm:flex-row gap-m justify-center">
            <Skeleton className="h-14 w-40 rounded-l bg-black bg-opacity-20" />
            <Skeleton className="h-14 w-48 rounded-l bg-black bg-opacity-20" />
          </div>
        </div>
      </section>
    </main>
  );
}
