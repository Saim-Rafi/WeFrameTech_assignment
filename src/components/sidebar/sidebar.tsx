"use client";

import { useState } from "react";
import { 
  LayoutDashboard, 
  FileText, 
  User, 
  CheckSquare, 
  Monitor, 
  BarChart2, 
  Image,
  Settings,
  Bell,
  CreditCard,
  MessageSquare,
  ChevronLeft
} from "lucide-react";
import { SidebarItem } from "./sidebar-item";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={cn(
      "min-h-screen border-r bg-card transition-all duration-300 animate-slide-left",
      collapsed ? "w-16" : "w-60"
    )}>
      <div className="flex flex-col h-full py-4">
        <div className="flex justify-end px-3 mb-6">
          <button 
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded-lg hover:bg-accent"
          >
            <ChevronLeft className={cn("h-5 w-5 transition-transform duration-300", collapsed && "rotate-180")} />
          </button>
        </div>
        
        <div className="space-y-2 px-3">
          <SidebarItem 
            icon={LayoutDashboard} 
            label={collapsed ? "" : "Dashboard"} 
            href="/dashboard" 
          />
          <SidebarItem 
            icon={FileText} 
            label={collapsed ? "" : "Content"} 
            href="/" 
            isActive={true}
          />
          <SidebarItem 
            icon={User} 
            label={collapsed ? "" : "User"} 
            href="/users" 
          />
          <SidebarItem 
            icon={CheckSquare} 
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
            icon={Settings} 
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
        </div>
        
        <div className="mt-auto px-3">
          <SidebarItem 
            icon={MessageSquare} 
            label={collapsed ? "" : "Contact Support"} 
            href="/support" 
          />
        </div>
      </div>
    </div>
  );
}
