"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Semua route yang diawali /admin tidak pakai Navbar & Footer
  const isHiddenLayout = pathname.startsWith("/admin",) || pathname.startsWith("/auth");

  return (
    <div className="min-h-screen flex flex-col">
      {!isHiddenLayout && <Navbar />}
      <main className="flex-grow">{children}</main>
      {!isHiddenLayout && <Footer />}
    </div>
  );
}
