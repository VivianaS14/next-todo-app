"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function Navigation() {
  const router = useRouter();

  return (
    <header className="flex justify-between p-4 sticky top-0 bg-slate-900 mb-4">
      <Link href="/">
        <h1 className="text-lg">Task App</h1>
      </Link>

      <div>
        <button
          type="button"
          className="bg-emerald-300 text-black px-4 py-1 rounded-md"
          onClick={() => router.push("/new")}
        >
          Add Task
        </button>
      </div>
    </header>
  );
}
