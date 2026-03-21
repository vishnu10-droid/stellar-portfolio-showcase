export default function SkeletonCard() {
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <div className="aspect-[16/10] bg-muted animate-pulse" />
      <div className="p-5 space-y-3">
        <div className="h-4 bg-muted rounded-md w-2/3 animate-pulse" />
        <div className="space-y-2">
          <div className="h-3 bg-muted rounded-md w-full animate-pulse" />
          <div className="h-3 bg-muted rounded-md w-4/5 animate-pulse" />
        </div>
        <div className="flex gap-1.5">
          <div className="h-5 w-14 bg-muted rounded-md animate-pulse" />
          <div className="h-5 w-16 bg-muted rounded-md animate-pulse" />
          <div className="h-5 w-12 bg-muted rounded-md animate-pulse" />
        </div>
      </div>
    </div>
  );
}
