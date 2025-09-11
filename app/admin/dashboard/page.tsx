"use client";

import React, { useState } from "react";
import { Plus, Search, Home, Save } from "lucide-react";
import { staticData, menuItems } from "@/constants/data";

const DashboardPage = () => {
  const [activeModule, setActiveModule] = useState("dashboard");
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState<"add" | "edit">("add");
  const [searchTerm, setSearchTerm] = useState("");

  // ✅ Buat statistik dinamis dari semua data di staticData
  const getDashboardStats = () => {
    return Object.keys(staticData).map((key) => {
      const menuItem = menuItems.find((item) => item.key === key);
      return {
        key,
        label: menuItem?.label || key,
        count: staticData[key as keyof typeof staticData].length,
        icon: menuItem?.icon || Home,
      };
    });
  };

  const handleAdd = (key: string) => {
    setModalMode("add");
    setShowModal(true);
  };

  const handleSave = () => {
    console.log("Save clicked");
    setShowModal(false);
  };

  return (
    <div className="flex-1 overflow-hidden">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="p-6 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {menuItems.find((item) => item.key === activeModule)?.label ||
                "Dashboard"}
            </h1>
            <p className="text-gray-600 mt-1">
              {activeModule === "dashboard"
                ? "Selamat datang di panel administrasi universitas"
                : `Kelola data ${
                    menuItems.find((item) => item.key === activeModule)?.label.toLowerCase() ||
                    activeModule
                  }`}
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={16}
              />
              <input
                type="text"
                placeholder="Cari data..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-64 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>

            {/* Tombol Tambah */}
            {activeModule !== "dashboard" && (
              <button
                onClick={() => handleAdd(activeModule)}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg shadow-blue-200"
              >
                <Plus size={16} />
                Tambah Data
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6 overflow-y-auto">
        {activeModule === "dashboard" ? (
          <div className="space-y-6">
            {/* Welcome Card */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white shadow-lg">
              <h2 className="text-3xl font-bold mb-2">Selamat Datang, Admin!</h2>
              <p className="text-blue-100 text-lg">
                Kelola semua data universitas dengan mudah
              </p>
            </div>

            {/* Statistik */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getDashboardStats().map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.key}
                    onClick={() => setActiveModule(stat.key)}
                    className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md cursor-pointer group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-medium text-gray-600 group-hover:text-blue-600">
                          {stat.label}
                        </h3>
                        <p className="text-3xl font-bold text-blue-600">
                          {stat.count}
                        </p>
                      </div>
                      <Icon size={40} className="text-blue-500" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div>Konten modul {activeModule}</div>
        )}
      </main>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden flex flex-col">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
              {modalMode === "add" ? "Tambah Data" : "Edit Data"}
            </div>
            <div className="p-6 flex-1">Formulir isi data di sini</div>
            <div className="flex justify-end gap-3 border-t border-gray-200 p-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50"
              >
                Batal
              </button>
              <button
                onClick={handleSave}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg"
              >
                <Save size={16} className="inline-block mr-2" />
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
