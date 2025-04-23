"use client";

import { useState } from "react";
import { StoryCard } from "./story-card";
import { StoryFilters } from "./story-filters";
import { stories } from "@/lib/data";
import { Plus, CalendarDays, LayoutGrid } from "lucide-react";
import { SearchBar } from "../header/search-bar";

type FilterType = "All" | "Draft" | "Pending" | "Published" | "Archived";

export function StoryGrid() {
  const [filter, setFilter] = useState<FilterType>("All");

  const filteredStories = stories.filter((story) => {
    if (filter === "All") return true;
    return story.status === filter;
  });

  return (
    <div className="p-6 bg-gray-100">
      <div className="flex flex-col gap-3 mb-2 ">
        <div className="flex flex-wrap items-center gap-3 justify-end bg-white p-3 rounded-md">
          <SearchBar />

          <button className="p-2 rounded-md border hover:bg-accent bg-gray-200">
            <CalendarDays  className="h-5 w-5" />
          </button>
          <button className="p-2 rounded-md border hover:bg-accent bg-gray-200">
            <LayoutGrid className="h-5 w-5" />
          </button>
          <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md flex items-center gap-2 shadow-sm hover:bg-primary/90 transition-colors">
            <Plus className="h-4 w-4" />
            <span>Add New Story</span>
          </button>
        </div>

        <StoryFilters onFilterChange={setFilter} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredStories.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>
    </div>
  );
}
