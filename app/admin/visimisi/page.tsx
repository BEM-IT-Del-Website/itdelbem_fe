"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { staticData } from "@/constants/data";
import { fieldConfigs } from "@/constants/field"; // ✅ tambahin import

// ✅ perbaikan import sesuai struktur folder
import DataTable from "@/components/layout/DataTable";
import ModalForm from "@/components/layout/ModalForm";

export default function VisiMisiPage() {
  const [data, setData] = useState(staticData.visiMisi);
  const [showModal, setShowModal] = useState(false);
  const [mode, setMode] = useState<"add" | "edit">("add");
  const [current, setCurrent] = useState<any>({});

  const handleAdd = () => {
    setMode("add");
    setCurrent({});
    setShowModal(true);
  };

  const handleEdit = (item: any) => {
    setMode("edit");
    setCurrent(item);
    setShowModal(true);
  };

  const handleDelete = (id: number) => {
    setData(data.filter((d) => d.id !== id));
  };

  const handleSave = () => {
    if (mode === "add") {
      setData([...data, { ...current, id: Date.now() }]);
    } else {
      setData(data.map((d) => (d.id === current.id ? current : d)));
    }
    setShowModal(false);
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between mb-6">
        <h1 className="font-bold text-2xl">Kelola Visi & Misi</h1>
        <button
          onClick={handleAdd}
          className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg shadow-blue-200"
        >
          <Plus size={16} />
          Tambah
        </button>
      </div>

      {/* Tabel */}
      <DataTable
        data={data}
        fields={fieldConfigs.visiMisi} // ✅ ambil dari constants/field.ts
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {/* Modal */}
      <ModalForm
        show={showModal}
        mode={mode}
        item={current}
        fields={fieldConfigs.visiMisi} // ✅ ambil dari constants/field.ts
        onClose={() => setShowModal(false)}
        onSave={handleSave}
        onChange={(k, v) => setCurrent({ ...current, [k]: v })}
      />
    </div>
  );
}
