export default function HomePage() {
  return (
    <main className="py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Next.js Boilerplate</h1>

      <p className="mt-3 text-zinc-600 dark:text-zinc-400">
        Edit{' '}
        <code className="rounded bg-zinc-100 px-2 py-1 dark:bg-zinc-900">src/app/page.tsx</code> to
        get started.
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href="https://nextjs.org/docs"
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border px-4 py-2 hover:bg-zinc-50 dark:hover:bg-zinc-900"
        >
          Docs
        </a>

        <a
          href="https://tailwindcss.com/docs"
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border px-4 py-2 hover:bg-zinc-50 dark:hover:bg-zinc-900"
        >
          Tailwind
        </a>
      </div>
    </main>
  );
}
