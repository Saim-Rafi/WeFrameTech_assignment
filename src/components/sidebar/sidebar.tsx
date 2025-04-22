"use client";

import { useState } from "react";
import {
  House,
  FileText,
  User,
  Users,
  Monitor,
  BarChart2,
  Image,
  Settings,
  Bell,
  CreditCard,
  Expand,
  Headphones,
  AlignJustify,
} from "lucide-react";
import { SidebarItem } from "./sidebar-item";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const sidebarContent = (
    <div
      className={cn(
        "min-h-screen border-r bg-card transition-all duration-300 animate-slide-left",
        collapsed ? "w-16" : "w-60"
      )}
    >
      <div className="flex flex-col h-full py-2">
        <div className="flex justify-end px-3 mb-6">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded-lg hover:bg-accent"
          >
            <AlignJustify
              className={cn(
                "h-5 w-5 transition-transform duration-300",
                collapsed && "rotate-180"
              )}
            />
          </button>
        </div>

        <div className="space-y-2 px-5">
          <SidebarItem
            icon={House}
            label={collapsed ? "" : "Dashboard"}
            href="/dashboard"
          />
          <SidebarItem
            icon={FileText}
            label={collapsed ? "" : "Content"}
            href="/"
            isActive
          />
          <SidebarItem
            icon={User}
            label={collapsed ? "" : "User"}
            href="/users"
          />
          <SidebarItem
            icon={Users}
            label={collapsed ? "" : "Task"}
            href="/tasks"
          />
          <SidebarItem
            icon={Monitor}
            label={collapsed ? "" : "App/Web"}
            href="/apps"
          />
          <SidebarItem
            icon={BarChart2}
            label={collapsed ? "" : "Analytics"}
            href="/analytics"
          />
          <SidebarItem
            icon={Image}
            label={collapsed ? "" : "Media"}
            href="/media"
          />
          <SidebarItem
            icon={Expand}
            label={collapsed ? "" : "Customize"}
            href="/customize"
          />
          <SidebarItem
            icon={Bell}
            label={collapsed ? "" : "Notifications"}
            href="/notifications"
          />
          <SidebarItem
            icon={CreditCard}
            label={collapsed ? "" : "Subscription"}
            href="/subscription"
          />
          <SidebarItem
            icon={Settings}
            label={collapsed ? "" : "Settings"}
            href="/settings"
          />
          <div className="py-2 bg-violet-100 rounded-md">
            <SidebarItem
              icon={Headphones}
              label={collapsed ? "" : "Contact Support"}
              href="/support"
            />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:block">{sidebarContent}</div>

      {/* Mobile Sidebar via Sheet */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button className="p-2 m-2 rounded-md border">
              <AlignJustify className="h-5 w-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-60">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            {sidebarContent}
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
