"use client";

import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <div className="relative max-w-md w-full">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
        <Search className="h-4 w-4 text-muted-foreground" />
      </div>
      <input
        className="w-full pl-10 pr-4 py-2 bg-background border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
        type="text"
        placeholder="Search"
      />
    </div>
  );
}