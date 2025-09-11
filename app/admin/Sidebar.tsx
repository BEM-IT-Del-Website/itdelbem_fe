"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import React from "react";
import { menuItems } from "@/constants/data";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const pathname = usePathname();

  return (
    <div
      className={`${
        sidebarOpen ? "w-64" : "w-16"
      } bg-white shadow-lg transition-all duration-300 border-r border-gray-200`}
    >
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          {sidebarOpen && (
            <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Admin Dashboard
            </h2>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg hover:bg-blue-50 text-blue-600 transition-colors"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      {/* Menu Items */}
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = pathname.startsWith(item.path);

          return (
            <Link key={item.key} href={item.path}>
              <div
                className={`w-full flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-200"
                    : "hover:bg-blue-50 text-gray-700 hover:text-blue-600"
                }`}
              >
                <IconComponent size={20} />
                {sidebarOpen && <span className="font-medium">{item.label}</span>}
              </div>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
