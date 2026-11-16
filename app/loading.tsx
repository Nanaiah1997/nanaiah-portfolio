export default function Loading() {
  return (
    <div className="px-5 py-32 sm:px-8" aria-hidden>
      <div className="mx-auto w-full max-w-6xl">
        <div className="h-3 w-28 animate-pulse rounded bg-surface motion-reduce:animate-none" />
        <div className="mt-6 h-12 w-full max-w-xl animate-pulse rounded bg-surface motion-reduce:animate-none" />
        <div className="mt-4 h-4 w-full max-w-lg animate-pulse rounded bg-surface motion-reduce:animate-none" />
        <div className="mt-2 h-4 w-full max-w-md animate-pulse rounded bg-surface motion-reduce:animate-none" />
      </div>
    </div>
  );
}
