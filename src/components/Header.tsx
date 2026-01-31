'use client';

import ThemeToggle from '@/components/ThemeToggle';

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b px-6 py-4">
      <div className="font-semibold">Header</div>
      <ThemeToggle />
    </header>
  );
}
