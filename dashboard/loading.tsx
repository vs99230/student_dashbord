export default function Loading() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white flex">

      {/* Sidebar Skeleton */}
      <aside className="hidden md:flex w-64 border-r border-zinc-800 bg-zinc-900 p-4 flex-col gap-4">
        <div className="h-8 w-32 rounded-xl bg-zinc-800 animate-pulse" />

        <div className="space-y-3 mt-6">
          <div className="h-12 rounded-2xl bg-zinc-800 animate-pulse" />
          <div className="h-12 rounded-2xl bg-zinc-800 animate-pulse" />
          <div className="h-12 rounded-2xl bg-zinc-800 animate-pulse" />
        </div>
      </aside>

      {/* Main Skeleton */}
      <section className="flex-1 p-4 md:p-6 lg:p-8">
        <div className="grid grid-cols-12 gap-6">

          {/* Hero Skeleton */}
          <div className="col-span-12 lg:col-span-8">
            <div className="rounded-3xl bg-zinc-900 border border-zinc-800 min-h-[220px] animate-pulse p-6">
              <div className="h-4 w-28 bg-zinc-800 rounded mb-4" />
              <div className="h-10 w-72 bg-zinc-800 rounded mb-8" />
              <div className="h-4 w-40 bg-zinc-800 rounded" />
            </div>
          </div>

          {/* Activity Skeleton */}
          <div className="col-span-12 lg:col-span-4">
            <div className="rounded-3xl bg-zinc-900 border border-zinc-800 min-h-[220px] animate-pulse" />
          </div>

          {/* Course Skeletons */}
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="col-span-12 md:col-span-6 lg:col-span-4"
            >
              <div className="rounded-3xl bg-zinc-900 border border-zinc-800 p-6 animate-pulse min-h-[180px]">
                <div className="h-8 w-8 rounded bg-zinc-800 mb-4" />
                <div className="h-5 w-40 rounded bg-zinc-800 mb-6" />
                <div className="h-2 rounded-full bg-zinc-800" />
              </div>
            </div>
          ))}

        </div>
      </section>
    </main>
  );
}