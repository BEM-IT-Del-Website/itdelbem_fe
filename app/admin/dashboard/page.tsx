"use client";

import React, { useState, useEffect } from "react";
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
  Settings,
  Moon,
  Sun,
  Menu,
  X,
  ChevronDown,
  Activity,
  TrendingUp,
  UserCheck,
  Star,
  Filter,
  Download,
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Eye,
  MoreVertical
} from "lucide-react";

export default function ModernDashboard() {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("users");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  // Sample data
  const users = [
    {
      id: 1,
      name: "Budi Santoso",
      email: "budi@example.com",
      role: "Mahasiswa",
      status: "active",
      avatar: "BS",
      phone: "+62 812-3456-7890",
      department: "Teknik Informatika",
      joinDate: "2023-09-15",
      lastActive: "2 jam lalu"
    },
    {
      id: 2,
      name: "Siti Aminah",
      email: "siti@example.com",
      role: "Dosen",
      status: "inactive",
      avatar: "SA",
      phone: "+62 813-9876-5432",
      department: "Sistem Informasi",
      joinDate: "2022-01-20",
      lastActive: "1 hari lalu"
    },
    {
      id: 3,
      name: "Ahmad Rizki",
      email: "ahmad@example.com",
      role: "Admin",
      status: "active",
      avatar: "AR",
      phone: "+62 814-1234-5678",
      department: "IT Support",
      joinDate: "2023-03-10",
      lastActive: "30 menit lalu"
    },
    {
      id: 4,
      name: "Maya Sari",
      email: "maya@example.com",
      role: "Mahasiswa",
      status: "pending",
      avatar: "MS",
      phone: "+62 815-9876-1234",
      department: "Manajemen",
      joinDate: "2024-01-05",
      lastActive: "5 jam lalu"
    }
  ];

  const stats = [
    {
      title: "Total Pengguna",
      value: "1,234",
      change: "+12%",
      trend: "up",
      icon: Users,
      color: "bg-gradient-to-r from-blue-500 to-white",
      bgColor: "bg-blue-50"
    },
    {
      title: "Pengguna Aktif",
      value: "892",
      change: "+8%",
      trend: "up",
      icon: UserCheck,
      color: "bg-gradient-to-r from-green-500 to-green-600",
      bgColor: "bg-green-50"
    },
    {
      title: "Dosen",
      value: "156",
      change: "+3%",
      trend: "up",
      icon: Award,
      color: "bg-gradient-to-r from-purple-500 to-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      title: "Mahasiswa",
      value: "987",
      change: "+15%",
      trend: "up",
      icon: BookOpen,
      color: "bg-gradient-to-r from-orange-500 to-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  const menuItems = [
    { id: "users", label: "Pengguna", icon: Users, active: true },
    { id: "courses", label: "Mata Kuliah", icon: BookOpen },
    { id: "teachers", label: "Dosen", icon: Award },
    { id: "accreditation", label: "Akreditasi", icon: FileText },
    { id: "research", label: "Penelitian", icon: Briefcase },
    { id: "schedule", label: "Jadwal", icon: Calendar },
    { id: "reports", label: "Laporan", icon: BarChart },
    { id: "organization", label: "Organisasi", icon: Building2 },
    { id: "tasks", label: "Tugas", icon: Target },
    { id: "projects", label: "Proyek", icon: Layers }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800 border-green-200";
      case "inactive":
        return "bg-gray-100 text-gray-800 border-gray-200";
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <CheckCircle size={14} className="mr-1" />;
      case "inactive":
        return <XCircle size={14} className="mr-1" />;
      case "pending":
        return <AlertCircle size={14} className="mr-1" />;
      default:
        return <AlertCircle size={14} className="mr-1" />;
    }
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === "all" || user.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className={`flex h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
     <aside
  className={`${
    sidebarOpen ? "translate-x-0" : "-translate-x-full"
  } absolute lg:static inset-y-0 left-0 z-30 w-64 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white transform transition-transform duration-300 ease-in-out lg:translate-x-0 shadow-2xl`}
>
  <div className="flex items-center justify-between p-6 border-b border-slate-700/50">
    <div className="flex items-center space-x-3">
      <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
        <BookOpen size={20} className="text-white" />
      </div>
      <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
        Pakkail
      </h2>
    </div>
    <button
      onClick={() => setSidebarOpen(false)}
      className="lg:hidden p-1 hover:bg-slate-700 rounded-lg transition-colors"
    >
      <X size={20} />
    </button>
  </div>

  <nav className="flex-1 overflow-y-auto py-6">
    <ul className="space-y-2 px-4">
      {menuItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;
        return (
          <li key={item.id}>
            <button
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center w-full px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 group ${
                isActive
                  ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25 scale-105"
                  : "text-slate-300 hover:bg-slate-700/50 hover:text-white hover:scale-105"
              }`}
            >
              <Icon
                size={18}
                className="mr-3 transition-transform group-hover:scale-110"
              />
              {item.label}
              {isActive && (
                <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse" />
              )}
            </button>
          </li>
        );
      })}
    </ul>
  </nav>

  <div className="p-4 border-t border-slate-700/50">
    <button className="flex items-center w-full px-4 py-3 text-sm text-red-300 hover:bg-red-500/10 hover:text-red-200 rounded-xl transition-all duration-200 group">
      <LogOut
        size={18}
        className="mr-3 group-hover:scale-110 transition-transform"
      />
      Keluar
    </button>
  </div>
</aside>


      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} shadow-sm border-b backdrop-blur-sm`}>
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                <Menu size={20} />
              </button>
              <div>
                <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} flex items-center`}>
                  <Users size={24} className="mr-2 text-blue-500" />
                  Pengguna
                  <span className="ml-3 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                    {filteredUsers.length}
                  </span>
                </h1>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>
                  Kelola semua pengguna sistem
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Cari pengguna..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`pl-10 pr-4 py-2.5 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-80 transition-all duration-200 ${
                    darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300'
                  }`}
                />
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>
              
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2.5 rounded-xl transition-colors ${
                  darkMode ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              
              <button className="relative p-2.5 text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors">
                <Bell size={18} />
                <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                </span>
              </button>
            </div>
          </div>
        </header>

        {/* Stats Cards */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-2xl border p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group cursor-pointer`}
              >
                <div className="flex items-center justify-between">
                  <div className={`p-3 ${stat.bgColor} rounded-xl group-hover:scale-110 transition-transform`}>
                    <Icon size={24} className="text-gray-700" />
                  </div>
                  <div className={`flex items-center text-sm font-medium ${
                    stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    <TrendingUp size={16} className="mr-1" />
                    {stat.change}
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} group-hover:text-blue-600 transition-colors`}>
                    {stat.value}
                  </h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>
                    {stat.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          {/* Action Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-colors ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white hover:bg-gray-600' 
                    : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Filter size={16} />
                Filter
                <ChevronDown size={16} className={`transition-transform ${showFilters ? 'rotate-180' : ''}`} />
              </button>
              
              {showFilters && (
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className={`px-3 py-2 rounded-xl border transition-colors ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300'
                  }`}
                >
                  <option value="all">Semua Status</option>
                  <option value="active">Aktif</option>
                  <option value="inactive">Nonaktif</option>
                  <option value="pending">Pending</option>
                </select>
              )}
            </div>
            
            <div className="flex items-center space-x-3">
              <button className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-colors ${
                darkMode 
                  ? 'bg-gray-700 border-gray-600 text-white hover:bg-gray-600' 
                  : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}>
                <Download size={16} />
                Export
              </button>
              
              <button className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200">
                <Plus size={16} />
                Tambah Pengguna
              </button>
            </div>
          </div>

          {/* Enhanced Table */}
          <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-2xl shadow-xl border overflow-hidden`}>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-slate-700 to-slate-800 text-white">
                    <th className="px-6 py-4 text-left text-sm font-semibold">Pengguna</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Kontak</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Departemen</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Aktivitas</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">Aksi</th>
                  </tr>
                </thead>
                <tbody className={`divide-y ${darkMode ? 'divide-gray-700' : 'divide-gray-200'}`}>
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className={`hover:${darkMode ? 'bg-gray-700' : 'bg-blue-50'} transition-colors group`}>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                            {user.avatar}
                          </div>
                          <div>
                            <div className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                              {user.name}
                            </div>
                            <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} flex items-center mt-1`}>
                              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                                {user.role}
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="space-y-1">
                          <div className={`text-sm flex items-center ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            <Mail size={14} className="mr-2 text-gray-400" />
                            {user.email}
                          </div>
                          <div className={`text-sm flex items-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            <Phone size={14} className="mr-2 text-gray-400" />
                            {user.phone}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'} flex items-center`}>
                          <Building2 size={14} className="mr-2 text-gray-400" />
                          {user.department}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium border transition-all hover:scale-105 ${getStatusColor(user.status)}`}>
                          {getStatusIcon(user.status)}
                          {user.status === 'active' ? 'Aktif' : user.status === 'inactive' ? 'Nonaktif' : 'Pending'}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="space-y-1">
                          <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'} flex items-center`}>
                            <Clock size={14} className="mr-2 text-gray-400" />
                            {user.lastActive}
                          </div>
                          <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            Bergabung: {user.joinDate}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex justify-center items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="text-blue-600 hover:text-blue-800 hover:bg-blue-100 p-2.5 rounded-xl transition-all hover:scale-110">
                            <Eye size={16} />
                          </button>
                          <button className="text-green-600 hover:text-green-800 hover:bg-green-100 p-2.5 rounded-xl transition-all hover:scale-110">
                            <Edit size={16} />
                          </button>
                          <button className="text-red-600 hover:text-red-800 hover:bg-red-100 p-2.5 rounded-xl transition-all hover:scale-110">
                            <Trash2 size={16} />
                          </button>
                          <button className="text-gray-600 hover:text-gray-800 hover:bg-gray-100 p-2.5 rounded-xl transition-all hover:scale-110">
                            <MoreVertical size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-6">
            <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Menampilkan {filteredUsers.length} dari {users.length} pengguna
            </div>
            <div className="flex items-center space-x-2">
              <button className={`px-4 py-2 rounded-xl border transition-colors ${
                darkMode 
                  ? 'bg-gray-700 border-gray-600 text-white hover:bg-gray-600' 
                  : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}>
                Sebelumnya
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
                1
              </button>
              <button className={`px-4 py-2 rounded-xl border transition-colors ${
                darkMode 
                  ? 'bg-gray-700 border-gray-600 text-white hover:bg-gray-600' 
                  : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}>
                2
              </button>
              <button className={`px-4 py-2 rounded-xl border transition-colors ${
                darkMode 
                  ? 'bg-gray-700 border-gray-600 text-white hover:bg-gray-600' 
                  : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}>
                Selanjutnya
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}