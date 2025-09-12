"use client";
import { useState } from "react";
import DataTable from "@/components/layout/DataTable";
import { staticData, menuItems } from "@/constants/data";
import { fieldConfigs } from "@/constants/field";
import { Plus, Search, Home, Save } from "lucide-react";

export default function MahasiswaPage() {
  const [data, setData] = useState(staticData.mahasiswa);
  const [activeModule, setActiveModule] = useState("dashboard");
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState<"add" | "edit">("add");
  const [searchTerm, setSearchTerm] = useState("");

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

  const handleEdit = (item: any) => {
    console.log("Edit mahasiswa:", item);
    // TODO: nanti bisa buka modal form edit
  };

  const handleAdd = (key: string) => {
    setModalMode("add");
    setShowModal(true);
  };

  const handleSave = () => {
    console.log("Save clicked");
    setShowModal(false);
  };

  const handleDelete = (index: number) => {
    setData(data.filter((_, i) => i !== index)); // hapus berdasarkan index
  };

  return (
    <div className="">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="p-6 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {menuItems.find((item) => item.key === activeModule)?.label ||
                "Data Mahasiswa"}
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
            <button
              onClick={() => handleAdd(activeModule)}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg shadow-blue-200"
            >
              <Plus size={16} />
              Tambah Data
            </button>
          </div>
        </div>
      </header>
      <h1 className="text-2xl font-bold mb-4">Mahasiswa</h1>
      <DataTable
        data={data}
        fields={fieldConfigs.mahasiswa}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}
