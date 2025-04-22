"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type FilterType = "All" | "Draft" | "Pending" | "Published" | "Archived";

interface StoryFiltersProps {
  onFilterChange: (filter: FilterType) => void;
}

export function StoryFilters({ onFilterChange }: StoryFiltersProps) {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");
  
  const filters: { label: FilterType; count: number }[] = [
    { label: "All", count: 4500 },
    { label: "Draft", count: 1203 },
    { label: "Pending", count: 890 },
    { label: "Published", count: 2432 },
    { label: "Archived", count: 320 },
  ];
  
  const handleFilterClick = (filter: FilterType) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };
  
  return (
    <div className="flex flex-wrap gap-2 mb-6 animate-fade-in">
      {filters.map((filter) => (
        <button
          key={filter.label}
          className={cn(
            "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
            activeFilter === filter.label
              ? "bg-primary text-primary-foreground "
              : "bg-muted text-muted-foreground hover:bg-muted/80 bg-gray-200 text-black"
          )}
          onClick={() => handleFilterClick(filter.label)}
        >
          {filter.label} ({filter.count})
        </button>
      ))}
    </div>
  );
}
