"use client";


// LAYOUT MAKE SIDEBAR LAYY
import React, { useState } from "react";
import Sidebar from "./Sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Konten halaman */}
      <main className="flex-1 p-6 bg-gray-50">
        {children} 
      </main>
    </div>
  );
}
