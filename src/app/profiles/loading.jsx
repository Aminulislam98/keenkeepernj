export default function ProfileLoading() {
  return (
    <div className="max-w-[1400px] mx-auto px-8 pt-10">
      {/* Skeleton matching the actual layout */}
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-12 lg:col-span-4">
          <div className="aspect-[4/5] rounded-sm bg-ink-900 border border-line animate-pulse" />
        </div>
        <div className="col-span-12 lg:col-span-8 space-y-4">
          <div className="h-3 w-48 bg-ink-800 rounded animate-pulse" />
          <div className="h-20 w-3/4 bg-ink-800 rounded animate-pulse" />
          <div className="h-4 w-full max-w-md bg-ink-800 rounded animate-pulse" />
          <div className="h-4 w-5/6 max-w-md bg-ink-800 rounded animate-pulse" />
        </div>
      </div>
      {/* Tiny top-of-page loading bar */}
      <div className="flex items-center gap-3 mb-10">
        <span className="font-mono text-[11px] tracking-tiny uppercase text-cream-dim">
          Fetching
        </span>
        <div className="flex gap-1">
          <span className="w-1 h-1 rounded-full bg-gold animate-bounce [animation-delay:0s]" />
          <span className="w-1 h-1 rounded-full bg-gold animate-bounce [animation-delay:0.15s]" />
          <span className="w-1 h-1 rounded-full bg-gold animate-bounce [animation-delay:0.3s]" />
        </div>
      </div>
      Loading...
    </div>
  );
}
