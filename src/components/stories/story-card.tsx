"use client";

import { Eye, MoreHorizontal, Copy } from "lucide-react";
import { Story } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Image from "next/image";

interface StoryCardProps {
  story: Story;
}

export function StoryCard({ story }: StoryCardProps) {
  //   const [isHovered, setIsHovered] = useState(false);
  const [, setIsHovered] = useState(false);

  return (
    <div
      className="rounded-lg overflow-hidden border bg-card transition-all duration-300 animate-slide-up hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-68">
        <div className="absolute inset-0">
          <Image
            src={story.image || "/placeholder.svg"}
            alt={story.title}
            fill
            priority
            quality={75}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
        <div className="absolute top-3 right-3 flex gap-2">
          <div className="flex items-center gap-1 bg-black/50 text-white px-2 py-1 rounded-md text-xs">
            <Eye className="h-3 w-3" />
            <span>{story.views}</span>
          </div>
          <button className="bg-black/50 text-white p-1 rounded-md">
            <Copy className="h-3 w-3" />
          </button>
        </div>
        <div className="absolute bottom-0 left-0 w-full p-4">
          <h3 className="text-lg font-semibold text-white leading-tight">
            {story.title}
          </h3>
        </div>
      </div>

      <div className="p-3">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-muted-foreground">
              {story.category}
            </span>
            <span className="text-xs text-muted-foreground">
              • {story.date}
            </span>
          </div>
          <div
            className={cn(
              "text-xs px-2 py-1 rounded",
              story.status === "Published" && "bg-green-100 text-green-800",
              story.status === "Draft" && "bg-gray-100 text-gray-800",
              story.status === "Created" && "bg-blue-100 text-blue-800"
            )}
          >
            {story.status}
          </div>
        </div>

        <div className="flex gap-2 mt-4">
          <button className="flex-1 text-center py-2 border rounded-md hover:bg-accent transition-colors bg-violet-100">
            View
          </button>
          <button className="p-2 border rounded-md hover:bg-accent transition-colors">
            <MoreHorizontal className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
