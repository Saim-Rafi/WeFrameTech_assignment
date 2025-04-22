"use client";

import { ChevronLeft } from "lucide-react";
// import { ChevronLeft, Calendar, LayoutGrid } from "lucide-react";
// import { SearchBar } from "./search-bar";
import Link from "next/link";

export function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-4 border-b animate-fade-in">
      <div className="flex items-center gap-3">
        <Link href="/" className="flex items-center gap-2 text-lg font-medium">
          <ChevronLeft className="h-5 w-5" />
          <span>Stories</span>
        </Link>
      </div>

      {/* <div className="flex-1 mx-4">
        <SearchBar />
      </div> */}

      <div className="flex items-center gap-4">
        {/* <button className="p-2 rounded-md hover:bg-accent">
          <Calendar className="h-5 w-5" />
        </button>
        <button className="p-2 rounded-md hover:bg-accent">
          <LayoutGrid className="h-5 w-5" />
        </button> */}
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-end">
            <span className="text-sm font-medium">Welcome back</span>
            <span className="text-xs text-muted-foreground">Akshita Patel</span>
          </div>
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
            AP
          </div>
          <button className="text-muted-foreground">
            <ChevronLeft className="h-4 w-4 rotate-90" />
          </button>
        </div>
      </div>
    </header>
  );
}
