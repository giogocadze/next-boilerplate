'use client';

import { useTheme } from 'next-themes';
import { useSyncExternalStore } from 'react';

function useIsClient() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

export default function ThemeToggle() {
  const isClient = useIsClient();
  const { theme, setTheme, systemTheme } = useTheme();

  if (!isClient) return null;

  const current = theme === 'system' ? systemTheme : theme;
  const isDark = current === 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="rounded-lg border px-3 py-2 text-sm hover:bg-zinc-50 dark:hover:bg-zinc-900"
      aria-label="Toggle theme"
    >
      {isDark ? 'Light' : 'Dark'}
    </button>
  );
}
