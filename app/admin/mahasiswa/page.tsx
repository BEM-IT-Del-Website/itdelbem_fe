"use client";
import { useState } from "react";
import DataTable from "@/components/layout/DataTable";
import { staticData } from "@/constants/data";
import { fieldConfigs } from "@/constants/field";

export default function MahasiswaPage() {
  const [data, setData] = useState(staticData.mahasiswa);

  const handleEdit = (item: any) => {
    console.log("Edit mahasiswa:", item);
    // TODO: nanti bisa buka modal form edit
  };

  const handleDelete = (index: number) => {
    setData(data.filter((_, i) => i !== index)); // hapus berdasarkan index
  };

  return (
    <div className="p-6">
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
