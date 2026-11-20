import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonBars() {
  return (
    <div className="flex w-fit items-center gap-2">
      <div className="grid justify-items-end gap-2">
        <Skeleton className="h-3 w-40" />
        <Skeleton className="h-3 w-25" />
      </div>
      {/* <Skeleton className="size-8 shrink-0 rounded-full" /> */}
    </div>
  );
}
