"use client";

import {
  Users,
  BookOpen,
  Award,
  FileText,
  Briefcase,
  Calendar,
  BarChart,
  Bell,
  LogOut,
  Plus,
  Search,
  Edit,
  Trash2,
  Building2,
  Target,
  Layers,
} from "lucide-react";

export default function DashboardUI() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="bg-gradient-to-b from-blue-700 to-blue-900 text-white w-64 flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-blue-600">
          <h2 className="text-xl font-bold tracking-wide">EduManage</h2>
        </div>
        <nav className="flex-1 overflow-y-auto">
          <ul className="space-y-1 py-4">
            <li>
              <button className="flex items-center w-full px-4 py-2.5 text-sm font-medium bg-blue-800">
                <Users size={18} className="mr-3" /> Pengguna
              </button>
            </li>
            <li>
              <button className="flex items-center w-full px-4 py-2.5 text-sm text-blue-100 hover:bg-blue-800/50">
                <BookOpen size={18} className="mr-3" /> Mata Kuliah
              </button>
            </li>
            <li>
              <button className="flex items-center w-full px-4 py-2.5 text-sm text-blue-100 hover:bg-blue-800/50">
                <Award size={18} className="mr-3" /> Dosen
              </button>
            </li>
            <li>
              <button className="flex items-center w-full px-4 py-2.5 text-sm text-blue-100 hover:bg-blue-800/50">
                <FileText size={18} className="mr-3" /> Akreditasi
              </button>
            </li>
            <li>
              <button className="flex items-center w-full px-4 py-2.5 text-sm text-blue-100 hover:bg-blue-800/50">
                <Briefcase size={18} className="mr-3" /> Penelitian
              </button>
            </li>
            <li>
              <button className="flex items-center w-full px-4 py-2.5 text-sm text-blue-100 hover:bg-blue-800/50">
                <Calendar size={18} className="mr-3" /> Jadwal
              </button>
            </li>
            <li>
              <button className="flex items-center w-full px-4 py-2.5 text-sm text-blue-100 hover:bg-blue-800/50">
                <BarChart size={18} className="mr-3" /> Laporan
              </button>
            </li>
            <li>
              <button className="flex items-center w-full px-4 py-2.5 text-sm text-blue-100 hover:bg-blue-800/50">
                <Building2 size={18} className="mr-3" /> Organisasi
              </button>
            </li>
            <li>
              <button className="flex items-center w-full px-4 py-2.5 text-sm text-blue-100 hover:bg-blue-800/50">
                <Target size={18} className="mr-3" /> Tugas
              </button>
            </li>
            <li>
              <button className="flex items-center w-full px-4 py-2.5 text-sm text-blue-100 hover:bg-blue-800/50">
                <Layers size={18} className="mr-3" /> Proyek
              </button>
            </li>
          </ul>
        </nav>
        <div className="p-4 border-t border-blue-600">
          <button className="flex items-center w-full px-4 py-2 text-sm text-red-200 hover:bg-blue-800 rounded-lg">
            <LogOut size={18} className="mr-3" />
            Keluar
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between px-6 py-4">
            <h1 className="text-xl font-semibold text-gray-800">Pengguna</h1>
            <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Cari..."
                  className="pl-10 pr-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
                />
                <Search
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
              </div>
              <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                <Bell size={18} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          {/* Button Tambah */}
          <div className="flex justify-end mb-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Plus size={16} /> Tambah Data
            </button>
          </div>

          {/* Tabel Data */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                    <th className="px-6 py-4 text-left text-sm font-semibold">No</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Nama</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Email</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Peran</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">1</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Budi Santoso</td>
                    <td className="px-6 py-4 text-sm text-gray-700">budi@example.com</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Mahasiswa</td>
                    <td className="px-6 py-4 text-sm">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border bg-green-100 text-green-800 border-green-200">
                        Aktif
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex justify-center gap-2">
                        <button className="text-blue-600 hover:text-blue-800 hover:bg-blue-100 p-2 rounded-lg transition-colors">
                          <Edit size={16} />
                        </button>
                        <button className="text-red-600 hover:text-red-800 hover:bg-red-100 p-2 rounded-lg transition-colors">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">2</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Siti Aminah</td>
                    <td className="px-6 py-4 text-sm text-gray-700">siti@example.com</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Dosen</td>
                    <td className="px-6 py-4 text-sm">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border bg-gray-100 text-gray-800 border-gray-200">
                        Nonaktif
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex justify-center gap-2">
                        <button className="text-blue-600 hover:text-blue-800 hover:bg-blue-100 p-2 rounded-lg transition-colors">
                          <Edit size={16} />
                        </button>
                        <button className="text-red-600 hover:text-red-800 hover:bg-red-100 p-2 rounded-lg transition-colors">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
