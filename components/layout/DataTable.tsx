"use client";
import React from "react";
import { Edit, Trash2 } from "lucide-react";

interface DataTableProps {
  data: any[];
  fields: { key: string; label: string; type: string }[];
  onEdit: (item: any) => void;
  onDelete: (index: number) => void;
}

const DataTable: React.FC<DataTableProps> = ({ data, fields, onEdit, onDelete }) => {
  if (!data || data.length === 0) {
    return <div className="p-6 text-gray-500">Tidak ada data.</div>;
  }

  return (
    <table className="w-full border rounded-lg overflow-hidden">
      <thead className="bg-blue-600 text-white">
        <tr>
          <th className="p-3 text-center">No</th>
          {fields.map((f) => (
            <th key={f.key} className="p-3 text-left">
              {f.label}
            </th>
          ))}
          <th className="p-3 text-center">Aksi</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, i) => (
          <tr key={i} className="border-b hover:bg-gray-50">
            <td className="p-3 text-center">{i + 1}</td>
            {fields.map((f) => (
              <td key={f.key} className="p-3">
                {item[f.key]}
              </td>
            ))}
            <td className="p-3 flex gap-2 justify-center">
              <button
                onClick={() => onEdit(item)}
                className="text-blue-600 hover:text-blue-800"
              >
                <Edit size={16} />
              </button>
              <button
                onClick={() => onDelete(i)}
                className="text-red-600 hover:text-red-800"
              >
                <Trash2 size={16} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
