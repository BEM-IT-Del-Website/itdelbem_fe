// app/admin/visimisi/create/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function VisiMisiCreatePage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ type: "", content: "" });

  const handleChange = (key: string, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    console.log("Data Baru Visi/Misi:", formData);
    router.push("/admin/visimisi");
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-6">Tambah Visi & Misi</h1>
      <div className="flex flex-col gap-4">
        <label>Jenis</label>
        <select
          value={formData.type}
          onChange={(e) => handleChange("type", e.target.value)}
          className="border rounded px-3 py-2"
        >
          <option value="">-- Pilih Jenis --</option>
          <option value="Visi">Visi</option>
          <option value="Misi">Misi</option>
        </select>

        <label>Konten</label>
        <textarea
          value={formData.content}
          onChange={(e) => handleChange("content", e.target.value)}
          rows={5}
          className="border rounded px-3 py-2"
        />

        <div className="flex gap-2 mt-4">
          <button
            onClick={handleSave}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Simpan
          </button>
          <button
            onClick={() => router.push("/admin/visimisi")}
            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
          >
            Batal
          </button>
        </div>
      </div>
    </div>
  );
}
