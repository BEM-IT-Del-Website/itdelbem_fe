"use client";
import { useState } from "react";
import DataTable from "@/components/layout/DataTable";
import { staticData } from "@/constants/data";
import { fieldConfigs } from "@/constants/field";

export default function HimpunanPage() {
  const [data, setData] = useState(staticData.himpunan);

  const handleEdit = (item: any) => {
    console.log("Edit item:", item);
    // TODO: buka modal form edit
  };

  const handleDelete = (index: number) => {
    setData(data.filter((_, i) => i !== index)); // hapus berdasarkan index
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Himpunan Mahasiswa</h1>
      <DataTable
        data={data}
        fields={fieldConfigs.himpunan}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}
