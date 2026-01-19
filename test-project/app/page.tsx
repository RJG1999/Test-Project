"use client";

import { useEffect, useState } from "react";

function formatTime(d: Date) {
  return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function formatDate(d: Date) {
  return d.toLocaleDateString([], {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function Home() {
  const [now, setNow] = useState<Date>(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-3xl px-6 py-10">
        <header className="mb-10">
          <h1 className="text-xl font-semibold tracking-tight">Dashboard</h1>
          <p className="mt-1 text-sm text-zinc-400">Minimal personal workspace</p>
        </header>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 shadow-sm">
          <div className="text-sm text-zinc-400">Right now</div>
          <div className="mt-2 text-3xl font-semibold">{formatTime(now)}</div>
          <div className="mt-2 text-sm text-zinc-300">{formatDate(now)}</div>
        </div>
      </div>
    </main>
  );
}