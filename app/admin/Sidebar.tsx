"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Sparkles, Home } from "lucide-react";
import React, { useState, useEffect } from "react";
import { menuItems } from "@/constants/data";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={`${
        sidebarOpen ? "w-64" : "w-16"
      } bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 shadow-2xl transition-all duration-500 ease-in-out border-r border-slate-700/50 flex flex-col h-screen relative overflow-hidden group`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Particles */}
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float`}
              style={{
                left: `${20 + i * 10}%`,
                top: `${10 + i * 15}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i * 0.5}s`
              }}
            />
          ))}
        </div>
        
        {/* Glow Effect */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      {/* Fixed Header */}
      <div className="flex-shrink-0 p-4 border-b border-slate-700/50 relative z-10">
        <div className="flex items-center justify-between">
          {sidebarOpen && (
            <div className="flex items-center gap-3 animate-slideInLeft">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg animate-glow">
                <Home size={16} className="text-white" />
              </div>
              <div>
                <h2 className="text-lg font-bold bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent animate-shimmer">
                  Admin Dashboard
                </h2>
                <p className="text-xs text-slate-400 animate-fadeIn">Management System</p>
              </div>
            </div>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 text-slate-300 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-180 group shadow-lg"
            aria-label={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
          >
            <Menu size={18} className="group-hover:animate-spin-once" />
          </button>
        </div>
      </div>

      {/* Non-Scrollable Menu Items - Fixed Height */}
      <div className="flex-1 p-4 relative z-10">
        <nav className="space-y-1 h-full flex flex-col">
          {menuItems.slice(0, 8).map((item, index) => {
            const IconComponent = item.icon;
            const isActive = pathname.startsWith(item.path);
            const isHovered = hoveredItem === item.key;

            return (
              <Link key={item.key} href={item.path}>
                <div
                  className={`relative w-full flex items-center gap-3 p-3.5 rounded-xl cursor-pointer transition-all duration-300 group/item ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/30 scale-105"
                      : "hover:bg-slate-800/60 text-slate-300 hover:text-white hover:scale-105"
                  } ${mounted ? 'animate-slideInRight' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  title={!sidebarOpen ? item.label : undefined}
                  onMouseEnter={() => setHoveredItem(item.key)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {/* Hover Glow Effect */}
                  {(isActive || isHovered) && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl blur-sm animate-pulse-glow" />
                  )}
                  
                  {/* Icon Container */}
                  <div className={`relative flex-shrink-0 p-1 rounded-lg transition-all duration-300 ${
                    isActive 
                      ? "bg-white/20 shadow-inner" 
                      : isHovered 
                        ? "bg-slate-700/50" 
                        : ""
                  }`}>
                    <IconComponent 
                      size={18} 
                      className={`relative z-10 transition-all duration-300 ${
                        isActive 
                          ? 'animate-bounce-gentle drop-shadow-sm' 
                          : isHovered 
                            ? 'scale-110 animate-wiggle' 
                            : 'group-hover/item:scale-110'
                      }`}
                    />
                    
                    {/* Icon Sparkle Effect */}
                    {isActive && (
                      <Sparkles 
                        size={12} 
                        className="absolute -top-1 -right-1 text-yellow-300 animate-ping" 
                      />
                    )}
                  </div>
                  
                  {/* Label */}
                  {sidebarOpen && (
                    <span className={`font-medium truncate relative z-10 transition-all duration-300 ${
                      isActive ? 'font-semibold' : ''
                    }`}>
                      {item.label}
                    </span>
                  )}
                  
                  {/* Active Indicator */}
                  {isActive && (
                    <div className="absolute right-2 w-2 h-2 bg-yellow-300 rounded-full animate-pulse shadow-lg shadow-yellow-300/50" />
                  )}
                  
                  {/* Hover Tooltip for Collapsed State */}
                  {!sidebarOpen && isHovered && (
                    <div className="absolute left-full ml-2 px-3 py-2 bg-slate-800 text-white text-sm rounded-lg shadow-xl border border-slate-600 whitespace-nowrap animate-slideInRight z-50">
                      {item.label}
                      <div className="absolute top-1/2 -left-1 w-2 h-2 bg-slate-800 rotate-45 -translate-y-1/2" />
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
          
          {/* Show "More" indicator if there are more items */}
          {menuItems.length > 8 && (
            <div className="flex items-center justify-center py-2">
              <div className="flex space-x-1">
                {[...Array(3)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            </div>
          )}
        </nav>
      </div>

      {/* Enhanced Footer */}
      <div className="flex-shrink-0 p-4 border-t border-slate-700/50 relative z-10">
        {sidebarOpen ? (
          <div className="text-center animate-fadeIn">
            <div className="text-xs text-slate-400 mb-2 flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              System Online
            </div>
            <div className="text-xs text-slate-500 font-mono">
              © 2025 Admin Panel
            </div>
          </div>
        ) : (
          <div className="space-y-2 animate-fadeIn">
            <div className="w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded animate-shimmer-line" />
            <div className="w-6 h-6 mx-auto bg-gradient-to-r from-green-400 to-green-500 rounded-full animate-pulse flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>
          </div>
        )}
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        @keyframes shimmer-line {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }

        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-3deg); }
          75% { transform: rotate(3deg); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 5px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 15px rgba(59, 130, 246, 0.6); }
        }

        @keyframes spin-once {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-slideInLeft { animation: slideInLeft 0.6s ease-out; }
        .animate-slideInRight { animation: slideInRight 0.4s ease-out; }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out; }
        .animate-shimmer { 
          background-size: 200% 100%; 
          animation: shimmer 2s linear infinite; 
        }
        .animate-shimmer-line { animation: shimmer-line 2s ease-in-out infinite; }
        .animate-bounce-gentle { animation: bounce-gentle 1s ease-in-out infinite; }
        .animate-wiggle { animation: wiggle 0.5s ease-in-out; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 1s ease-in-out infinite; }
        .animate-glow { animation: glow 2s ease-in-out infinite; }
        .animate-spin-once { animation: spin-once 0.5s ease-in-out; }
      `}</style>
    </div>
  );
};

export default Sidebar;