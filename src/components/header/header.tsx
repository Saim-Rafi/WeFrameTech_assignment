"use client";

import { MoveLeft } from "lucide-react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-1 border-b animate-fade-in">
      <div className="flex items-center gap-3">
        <Link href="/" className="flex items-center gap-2 text-lg font-medium">
          <MoveLeft className="h-5 w-5" />
          <span>Stories</span>
        </Link>
      </div>

      <div className="flex items-center gap-4 border-2 p-2 rounded-md">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground">
            AP
          </div>
          <div className="flex flex-col items-start">
            <span className="text-sm font-medium">Welcome back</span>
            <span className="text-xs text-muted-foreground">Akshita Patel</span>
          </div>
          <button className="text-muted-foreground pl-12">
            <ChevronDown className="h-4 w-4 " />
          </button>
        </div>
      </div>
    </header>
  );
}
