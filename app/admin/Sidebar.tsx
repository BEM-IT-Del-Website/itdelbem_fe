"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ChevronRight, Sparkles } from "lucide-react";
import React, { useState } from "react";
import { menuItems } from "@/constants/data";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div
      className={`${
        sidebarOpen ? "w-60" : "w-16"
      } bg-gradient-to-b from-white to-blue-50 border-r border-blue-200 shadow-xl transition-all duration-500 ease-in-out flex flex-col h-screen relative`}
    >
      {/* Background effect */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 -left-4 w-60 h-60 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 -right-4 w-60 h-60 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-12 w-60 h-60 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 flex-shrink-0 p-4 border-b border-blue-200/50 flex items-center justify-between backdrop-blur-sm">
        {sidebarOpen && (
          <div className="flex items-center gap-2">
            <div className="relative">
              <Sparkles className="w-7 h-7 text-blue-600 animate-spin-slow" />
              <div className="absolute inset-0 bg-blue-400 rounded-full blur-md opacity-30 animate-pulse"></div>
            </div>
            <h2 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Admin
            </h2>
          </div>
        )}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="relative p-2 rounded-lg bg-blue-100 hover:bg-blue-200 transition-all duration-300 group hover:shadow-md hover:scale-105"
        >
          <Menu
            size={18}
            className={`text-blue-600 transition-transform duration-300 ${
              sidebarOpen ? "rotate-180" : "rotate-0"
            }`}
          />
          <div className="absolute inset-0 bg-blue-300 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </button>
      </div>

      {/* Content (menu + footer) */}
      {/* Menu */}
<div className="relative z-10 flex-1 p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-blue-100">
  <nav className="space-y-4">
    {menuItems.map((item, index) => {
      const IconComponent = item.icon;
      const isActive = pathname.startsWith(item.path);
      const isHovered = hoveredItem === item.key;

      return (
        <Link key={item.key} href={item.path}>
          <div
            className={`relative flex items-center gap-4 px-4 py-4 rounded-2xl cursor-pointer transition-all duration-300 group overflow-hidden
              ${
                isActive
                  ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg transform scale-105"
                  : "hover:bg-blue-100 text-gray-700 hover:text-blue-600 hover:shadow-md hover:scale-105"
              }`}
            onMouseEnter={() => setHoveredItem(item.key)}
            onMouseLeave={() => setHoveredItem(null)}
            style={{
              animationDelay: `${index * 100}ms`
            }}
          >
            {/* Animated background for active item */}
            {isActive && (
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 opacity-20 animate-pulse"></div>
            )}

            {/* Hover effect */}
            <div
              className={`absolute inset-0 bg-blue-200 opacity-0 transition-opacity duration-300 rounded-2xl ${
                isHovered && !isActive ? "opacity-30" : "opacity-0"
              }`}
            ></div>

            <div className="relative flex items-center gap-4 w-full">
              <div
                className={`relative transition-all duration-300 ${
                  isActive
                    ? "scale-110"
                    : isHovered
                    ? "scale-105"
                    : "scale-100"
                }`}
              >
                <IconComponent
                  size={22}
                  className={`transition-all duration-300 ${
                    isActive
                      ? "text-white drop-shadow-lg"
                      : "text-blue-500"
                  }`}
                />
                {isActive && (
                  <div className="absolute inset-0 bg-white rounded-full blur-md opacity-50 animate-ping"></div>
                )}
              </div>

              {sidebarOpen && (
                <div className="flex items-center justify-between w-full">
                  <span
                    className={`font-medium transition-all duration-300 ${
                      isActive ? "text-white" : "text-gray-700"
                    }`}
                  >
                    {item.label}
                  </span>
                  <ChevronRight
                    size={16}
                    className={`transition-all duration-300 ${
                      isActive
                        ? "text-white opacity-100 translate-x-0"
                        : "text-blue-400 opacity-0 -translate-x-2"
                    } ${
                      isHovered && !isActive
                        ? "opacity-60 translate-x-0"
                        : ""
                    }`}
                  />
                </div>
              )}
            </div>
          </div>
        </Link>
      );
    })}
  </nav>


         <div className="flex-shrink-0 p-3 border-t border-blue-200/70 bg-gradient-to-r from-blue-50/80 to-indigo-50/80 backdrop-blur-sm">
           <div className="w-full">
            {sidebarOpen ? (
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-sm"></div>
                  <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse animation-delay-200 shadow-sm"></div>
                  <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse animation-delay-400 shadow-sm"></div>
                </div>
                <div className="text-center">
                  <p className="text-xs font-semibold text-blue-700 drop-shadow-sm">
                    © 2025 Admin Panel
                  </p>
                  <p className="text-[10px] text-blue-500 mt-0.5 opacity-75">
                    v1.0.0
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-1">
                <div className="flex justify-center gap-0.5">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse shadow-sm"></div>
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full animate-pulse animation-delay-200 shadow-sm"></div>
                </div>
                <p className="text-[10px] text-blue-600 font-medium">©</p>
              </div>
            )}
          </div>
        </div>

</div>


      {/* Extra CSS */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        .animation-delay-400 {
          animation-delay: 400ms;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }

        /* Custom Scrollbar Styles */
        .scrollbar-thin {
          scrollbar-width: thin;
        }
        .scrollbar-thumb-blue-300::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-thumb-blue-300::-webkit-scrollbar-track {
          background: rgba(219, 234, 254, 0.5);
          border-radius: 3px;
        }
        .scrollbar-thumb-blue-300::-webkit-scrollbar-thumb {
          background: rgba(147, 197, 253, 0.8);
          border-radius: 3px;
          transition: background-color 0.2s ease;
        }
        .scrollbar-thumb-blue-300::-webkit-scrollbar-thumb:hover {
          background: rgba(96, 165, 250, 0.9);
        }
        .scrollbar-track-blue-100::-webkit-scrollbar-track {
          background: rgba(219, 234, 254, 0.3);
        }
      `}</style>
    </div>
  );
};

export default Sidebar;

//  {/* Footer */}
//         <div className="flex-shrink-0 p-3 border-t border-blue-200/70 bg-gradient-to-r from-blue-50/80 to-indigo-50/80 backdrop-blur-sm">
//           <div className="w-full">
//             {sidebarOpen ? (
//               <div className="space-y-2">
//                 <div className="flex items-center justify-center gap-1">
//                   <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-sm"></div>
//                   <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse animation-delay-200 shadow-sm"></div>
//                   <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse animation-delay-400 shadow-sm"></div>
//                 </div>
//                 <div className="text-center">
//                   <p className="text-xs font-semibold text-blue-700 drop-shadow-sm">
//                     © 2025 Admin Panel
//                   </p>
//                   <p className="text-[10px] text-blue-500 mt-0.5 opacity-75">
//                     v1.0.0
//                   </p>
//                 </div>
//               </div>
//             ) : (
//               <div className="flex flex-col items-center gap-1">
//                 <div className="flex justify-center gap-0.5">
//                   <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse shadow-sm"></div>
//                   <div className="w-1.5 h-1.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full animate-pulse animation-delay-200 shadow-sm"></div>
//                 </div>
//                 <p className="text-[10px] text-blue-600 font-medium">©</p>
//               </div>
//             )}
//           </div>
//         </div>
