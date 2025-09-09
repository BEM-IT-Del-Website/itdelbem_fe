'use client';

import React, { useState, useEffect } from 'react';
import {
  Plus,
  Edit,
  Trash2,
  Eye,
  Search,
  Home,
  Users,
  Building,
  Image,
  Newspaper,
  Megaphone,
  BookOpen,
  Briefcase,
  GraduationCap,
  Target,
  Menu,
  X,
  Save,
  Camera
} from 'lucide-react';

const AdminDashboard = () => {
  const [activeModule, setActiveModule] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState('add');
  const [currentItem, setCurrentItem] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  // Static data
  const staticData = {
    visiMisi: [
      { id: 1, type: 'Visi', content: 'Menjadi universitas terdepan dalam pendidikan dan penelitian yang menghasilkan lulusan berkualitas dan berdaya saing global', createdAt: '2024-01-15' },
      { id: 2, type: 'Misi', content: 'Menyelenggarakan pendidikan tinggi berkualitas dengan mengintegrasikan nilai-nilai kearifan lokal dan teknologi modern', createdAt: '2024-01-15' },
      { id: 3, type: 'Misi', content: 'Mengembangkan penelitian dan pengabdian masyarakat yang inovatif dan berkelanjutan', createdAt: '2024-01-15' },
      { id: 4, type: 'Misi', content: 'Membangun kerjasama strategis dengan berbagai pihak untuk meningkatkan kualitas pendidikan', createdAt: '2024-01-15' }
    ],
    profile: [
      { id: 1, nama: 'Prof. Dr. Ahmad Budiman, M.Eng', jabatan: 'Rektor', email: 'rektor@universitas.ac.id', telp: '021-7654321' },
      { id: 2, nama: 'Dr. Siti Nurhaliza, S.T., M.T.', jabatan: 'Wakil Rektor I Bidang Akademik', email: 'warek1@universitas.ac.id', telp: '021-7654322' },
      { id: 3, nama: 'Prof. Dr. Ir. Budi Santoso, M.Sc.', jabatan: 'Wakil Rektor II Bidang Kemahasiswaan', email: 'warek2@universitas.ac.id', telp: '021-7654323' },
      { id: 4, nama: 'Dr. Maya Indira, S.E., M.M.', jabatan: 'Wakil Rektor III Bidang Kerjasama', email: 'warek3@universitas.ac.id', telp: '021-7654324' }
    ],
    organisasi: [
      { id: 1, nama: 'Fakultas Teknik', deskripsi: 'Fakultas yang menyelenggarakan pendidikan di bidang teknik dan teknologi', ketua: 'Dr. Rudi Hartono, S.T., M.T.', jumlahProdi: 5 },
      { id: 2, nama: 'Fakultas Ekonomi dan Bisnis', deskripsi: 'Fakultas yang menyelenggarakan pendidikan di bidang ekonomi dan bisnis', ketua: 'Prof. Dr. Lisa Marlina, S.E., M.M.', jumlahProdi: 3 },
      { id: 3, nama: 'Fakultas Ilmu Komputer', deskripsi: 'Fakultas yang menyelenggarakan pendidikan di bidang teknologi informasi', ketua: 'Dr. Andi Pratama, S.Kom., M.T.', jumlahProdi: 4 },
      { id: 4, nama: 'Fakultas Sains dan Matematika', deskripsi: 'Fakultas yang menyelenggarakan pendidikan di bidang sains dan matematika', ketua: 'Prof. Dr. Sarah Johnson, M.Sc.', jumlahProdi: 3 }
    ],
    galeri: [
      { id: 1, judul: 'Wisuda Periode I Tahun 2024', deskripsi: 'Prosesi wisuda sarjana dan magister periode pertama tahun akademik 2023/2024', kategori: 'Akademik', tanggal: '2024-03-15' },
      { id: 2, judul: 'Seminar Nasional Teknologi Digital', deskripsi: 'Seminar nasional tentang perkembangan teknologi digital dan AI', kategori: 'Seminar', tanggal: '2024-02-20' },
      { id: 3, judul: 'Kompetisi Programming Mahasiswa', deskripsi: 'Kompetisi programming tingkat nasional yang diikuti mahasiswa IT', kategori: 'Kompetisi', tanggal: '2024-01-25' },
      { id: 4, judul: 'Kunjungan Industri', deskripsi: 'Kegiatan kunjungan industri mahasiswa ke perusahaan teknologi terkemuka', kategori: 'Industri', tanggal: '2024-01-10' }
    ],
    berita: [
      { id: 1, judul: 'Mahasiswa Teknik Informatika Raih Juara 1 Kompetisi Programming Nasional', konten: 'Tim mahasiswa Teknik Informatika berhasil meraih juara pertama dalam kompetisi programming tingkat nasional', penulis: 'Humas Universitas', tanggal: '2024-03-10', status: 'Published', kategori: 'Prestasi' },
      { id: 2, judul: 'Universitas Menjalin Kerjasama Internasional dengan Universitas di Jepang', konten: 'Penandatanganan MoU kerjasama bidang penelitian dan pertukaran mahasiswa', penulis: 'Bagian Kerjasama', tanggal: '2024-03-08', status: 'Published', kategori: 'Kerjasama' },
      { id: 3, judul: 'Pembukaan Program Beasiswa untuk Mahasiswa Berprestasi', konten: 'Program beasiswa penuh untuk mahasiswa dengan prestasi akademik dan non-akademik terbaik', penulis: 'Bagian Kemahasiswaan', tanggal: '2024-03-05', status: 'Draft', kategori: 'Beasiswa' },
      { id: 4, judul: 'Seminar Nasional: Masa Depan Teknologi AI di Indonesia', konten: 'Seminar yang menghadirkan pakar AI terkemuka membahas perkembangan teknologi AI', penulis: 'Fakultas Teknik', tanggal: '2024-02-28', status: 'Published', kategori: 'Event' }
    ],
    pengumuman: [
      { id: 1, judul: 'Pendaftaran Mahasiswa Baru Tahun Akademik 2024/2025', konten: 'Pembukaan pendaftaran mahasiswa baru untuk semua program studi. Periode pendaftaran: 1 Maret - 30 April 2024', tanggal: '2024-03-01', prioritas: 'Tinggi', kategori: 'Pendaftaran' },
      { id: 2, judul: 'Jadwal Ujian Tengah Semester Genap 2023/2024', konten: 'Pengumuman jadwal UTS untuk semua fakultas. Pelaksanaan: 15-26 April 2024', tanggal: '2024-03-12', prioritas: 'Tinggi', kategori: 'Akademik' },
      { id: 3, judul: 'Libur Semester dan Hari Raya', konten: 'Pengumuman libur semester genap dan libur hari raya. Kuliah dimulai kembali: 6 Mei 2024', tanggal: '2024-03-12', prioritas: 'Sedang', kategori: 'Libur' },
      { id: 4, judul: 'Pembayaran SPP Semester Genap 2023/2024', konten: 'Batas akhir pembayaran SPP: 31 Maret 2024. Dapat dibayar melalui bank partner atau virtual account', tanggal: '2024-02-15', prioritas: 'Tinggi', kategori: 'Pembayaran' }
    ],
    ukm: [
      { id: 1, nama: 'UKM Basket Universitas', pembina: 'Drs. Andi Setiawan, M.Pd.', anggota: 45, deskripsi: 'Unit kegiatan mahasiswa yang bergerak di bidang olahraga bola basket', prestasi: 'Juara 1 Liga Basket Antar Universitas 2023' },
      { id: 2, nama: 'UKM Paduan Suara Mahasiswa', pembina: 'Dra. Sarah Melati, M.Sn.', anggota: 35, deskripsi: 'Unit kegiatan mahasiswa di bidang seni musik vokal dan paduan suara', prestasi: 'Juara 2 Festival Paduan Suara Nasional 2023' },
      { id: 3, nama: 'UKM Fotografi dan Sinematografi', pembina: 'Budi Prasetyo, S.Sn., M.Ds.', anggota: 28, deskripsi: 'UKM yang mengembangkan bakat mahasiswa di bidang fotografi dan videografi', prestasi: 'Best Documentary Film Festival 2023' },
      { id: 4, nama: 'UKM Pecinta Alam dan Lingkungan', pembina: 'Dr. Ir. Eko Susanto, M.Si.', anggota: 52, deskripsi: 'UKM yang fokus pada kegiatan alam bebas dan pelestarian lingkungan', prestasi: 'Program Konservasi Terbaik se-Jawa 2023' }
    ],
    departemen: [
      { id: 1, nama: 'Teknik Informatika', ketua: 'Dr. Rudi Hartono, S.T., M.T.', mahasiswa: 450, dosen: 15, akreditasi: 'A' },
      { id: 2, nama: 'Sistem Informasi', ketua: 'Dr. Maya Sari, S.Kom., M.T.', mahasiswa: 320, dosen: 12, akreditasi: 'A' },
      { id: 3, nama: 'Teknik Elektro', ketua: 'Prof. Dr. Ir. Bambang Susilo, M.T.', mahasiswa: 280, dosen: 18, akreditasi: 'A' },
      { id: 4, nama: 'Manajemen', ketua: 'Dr. Sinta Dewi, S.E., M.M.', mahasiswa: 380, dosen: 14, akreditasi: 'A' },
      { id: 5, nama: 'Akuntansi', ketua: 'Prof. Dr. Hadi Purnomo, S.E., M.Ak.', mahasiswa: 350, dosen: 13, akreditasi: 'A' }
    ],
    himpunan: [
      { id: 1, nama: 'HIMATIF (Himpunan Mahasiswa Teknik Informatika)', departemen: 'Teknik Informatika', ketua: 'Andi Pratama', anggota: 200, kegiatan: 'Seminar IT, Workshop Programming, IT Competition' },
      { id: 2, nama: 'HIMASIS (Himpunan Mahasiswa Sistem Informasi)', departemen: 'Sistem Informasi', ketua: 'Dina Marlina', anggota: 150, kegiatan: 'Business Plan Competition, System Analysis Workshop' },
      { id: 3, nama: 'HME (Himpunan Mahasiswa Elektro)', departemen: 'Teknik Elektro', ketua: 'Rizky Adiputra', anggota: 180, kegiatan: 'Robotics Competition, Electronics Workshop, Smart City Seminar' },
      { id: 4, nama: 'HIMMA (Himpunan Mahasiswa Manajemen)', departemen: 'Manajemen', ketua: 'Lisa Anggraini', anggota: 220, kegiatan: 'Management Case Study, Leadership Training, Entrepreneurship Seminar' },
      { id: 5, nama: 'HIMA (Himpunan Mahasiswa Akuntansi)', departemen: 'Akuntansi', ketua: 'Fauzan Malik', anggota: 190, kegiatan: 'TaMenuWorkshop, Accounting Competition, Financial Literacy Seminar' }
    ]
  };

  // Sidebar menu items
  const menuItems = [
    { key: 'dashboard', label: 'Dashboard', icon: Home },
    { key: 'visiMisi', label: 'Visi & Misi', icon: Target },
    { key: 'profile', label: 'Profile', icon: Users },
    { key: 'organisasi', label: 'Organisasi', icon: Building },
    { key: 'galeri', label: 'Galeri', icon: Image },
    { key: 'berita', label: 'Berita', icon: Newspaper },
    { key: 'pengumuman', label: 'Pengumuman', icon: Megaphone },
    { key: 'ukm', label: 'UKM', icon: BookOpen },
    { key: 'departemen', label: 'Departemen', icon: Briefcase },
    { key: 'himpunan', label: 'Himpunan Mahasiswa', icon: GraduationCap }
  ];

  // Field configurations for each module
  const fieldConfigs = {
    visiMisi: [
      { key: 'type', label: 'Jenis', type: 'select', options: ['Visi', 'Misi'] },
      { key: 'content', label: 'Konten', type: 'textarea' }
    ],
    profile: [
      { key: 'nama', label: 'Nama Lengkap', type: 'text' },
      { key: 'jabatan', label: 'Jabatan', type: 'text' },
      { key: 'email', label: 'Email', type: 'email' },
      { key: 'telp', label: 'Telepon', type: 'text' }
    ],
    organisasi: [
      { key: 'nama', label: 'Nama Organisasi', type: 'text' },
      { key: 'deskripsi', label: 'Deskripsi', type: 'textarea' },
      { key: 'ketua', label: 'Ketua', type: 'text' },
      { key: 'jumlahProdi', label: 'Jumlah Program Studi', type: 'number' }
    ],
    galeri: [
      { key: 'judul', label: 'Judul', type: 'text' },
      { key: 'deskripsi', label: 'Deskripsi', type: 'textarea' },
      { key: 'kategori', label: 'Kategori', type: 'select', options: ['Akademik', 'Seminar', 'Kompetisi', 'Industri'] },
      { key: 'tanggal', label: 'Tanggal', type: 'date' }
    ],
    berita: [
      { key: 'judul', label: 'Judul Berita', type: 'text' },
      { key: 'konten', label: 'Konten', type: 'textarea' },
      { key: 'penulis', label: 'Penulis', type: 'text' },
      { key: 'tanggal', label: 'Tanggal', type: 'date' },
      { key: 'status', label: 'Status', type: 'select', options: ['Draft', 'Published'] },
      { key: 'kategori', label: 'Kategori', type: 'select', options: ['Prestasi', 'Kerjasama', 'Beasiswa', 'Event'] }
    ],
    pengumuman: [
      { key: 'judul', label: 'Judul Pengumuman', type: 'text' },
      { key: 'konten', label: 'Konten', type: 'textarea' },
      { key: 'tanggal', label: 'Tanggal', type: 'date' },
      { key: 'prioritas', label: 'Prioritas', type: 'select', options: ['Rendah', 'Sedang', 'Tinggi'] },
      { key: 'kategori', label: 'Kategori', type: 'select', options: ['Pendaftaran', 'Akademik', 'Libur', 'Pembayaran'] }
    ],
    ukm: [
      { key: 'nama', label: 'Nama UKM', type: 'text' },
      { key: 'pembina', label: 'Pembina', type: 'text' },
      { key: 'anggota', label: 'Jumlah Anggota', type: 'number' },
      { key: 'deskripsi', label: 'Deskripsi', type: 'textarea' },
      { key: 'prestasi', label: 'Prestasi', type: 'text' }
    ],
    departemen: [
      { key: 'nama', label: 'Nama Departemen', type: 'text' },
      { key: 'ketua', label: 'Ketua Departemen', type: 'text' },
      { key: 'mahasiswa', label: 'Jumlah Mahasiswa', type: 'number' },
      { key: 'dosen', label: 'Jumlah Dosen', type: 'number' },
      { key: 'akreditasi', label: 'Akreditasi', type: 'select', options: ['A', 'B', 'C'] }
    ],
    himpunan: [
      { key: 'nama', label: 'Nama Himpunan', type: 'text' },
      { key: 'departemen', label: 'Departemen', type: 'text' },
      { key: 'ketua', label: 'Ketua', type: 'text' },
      { key: 'anggota', label: 'Jumlah Anggota', type: 'number' },
      { key: 'kegiatan', label: 'Kegiatan', type: 'textarea' }
    ]
  };

  // Mock functions for demo purposes
  const handleAdd = (module) => {
    setModalMode('add');
    setCurrentItem({});
    setShowModal(true);
  };

  const handleEdit = (module, item) => {
    setModalMode('edit');
    setCurrentItem(item);
    setShowModal(true);
  };

  const handleDelete = (module, id) => {
    alert(`Fungsi hapus untuk ID: ${id} (Demo Mode)`);
  };

  const handleSave = () => {
    alert('Data berhasil disimpan! (Demo Mode)');
    setShowModal(false);
    setCurrentItem({});
  };

  // Filter data based on search term
  const getFilteredData = (module) => {
    if (!staticData[module] || !searchTerm) return staticData[module] || [];

    return staticData[module].filter(item =>
      Object.values(item).some(value =>
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  // Render form field
  const renderFormField = (field) => {
    const value = currentItem[field.key] || '';

    switch (field.type) {
      case 'select':
        return (
          <select
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            value={value}
            onChange={(e) => setCurrentItem(prev => ({ ...prev, [field.key]: e.target.value }))}
          >
            <option value="">Pilih {field.label}</option>
            {field.options.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        );
      case 'textarea':
        return (
          <textarea
            className="w-full p-3 border border-gray-300 rounded-lg h-24 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
            value={value}
            onChange={(e) => setCurrentItem(prev => ({ ...prev, [field.key]: e.target.value }))}
            placeholder={`Masukkan ${field.label.toLowerCase()}`}
          />
        );
      case 'file':
        return (
          <div className="flex items-center gap-2">
            <input
              type="file"
              className="hidden"
              id={field.key}
              onChange={(e) => {
                setCurrentItem(prev => ({ ...prev, [field.key]: 'file-selected.jpg' }));
              }}
            />
            <label htmlFor={field.key} className="flex items-center gap-2 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 transition-colors">
              <Camera size={16} className="text-blue-600" />
              Pilih File
            </label>
            {value && <span className="text-sm text-gray-600">✓ File dipilih</span>}
          </div>
        );
      default:
        return (
          <input
            type={field.type}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            value={value}
            onChange={(e) => setCurrentItem(prev => ({ ...prev, [field.key]: e.target.value }))}
            placeholder={`Masukkan ${field.label.toLowerCase()}`}
          />
        );
    }
  };

  // Get status badge color
  const getStatusColor = (status, type = 'status') => {
    if (type === 'priority') {
      switch (status?.toLowerCase()) {
        case 'tinggi': return 'bg-red-100 text-red-800 border-red-200';
        case 'sedang': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
        case 'rendah': return 'bg-green-100 text-green-800 border-green-200';
        default: return 'bg-gray-100 text-gray-800 border-gray-200';
      }
    } else {
      switch (status?.toLowerCase()) {
        case 'published': return 'bg-green-100 text-green-800 border-green-200';
        case 'draft': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
        case 'a': return 'bg-green-100 text-green-800 border-green-200';
        case 'b': return 'bg-blue-100 text-blue-800 border-blue-200';
        case 'c': return 'bg-orange-100 text-orange-800 border-orange-200';
        default: return 'bg-gray-100 text-gray-800 border-gray-200';
      }
    }
  };

  // Render data table
  const renderDataTable = (module) => {
    const filteredData = getFilteredData(module);
    if (!filteredData.length) return (
      <div className="text-center py-16">
        <div className="text-gray-400 text-6xl mb-4">📋</div>
        <div className="text-gray-500 text-lg">Tidak ada data tersedia</div>
      </div>
    );

    const fields = fieldConfigs[module] || [];
    const displayFields = fields.slice(0, 4);

    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <th className="px-6 py-4 text-left text-sm font-semibold">No</th>
                {displayFields.map(field => (
                  <th key={field.key} className="px-6 py-4 text-left text-sm font-semibold">
                    {field.label}
                  </th>
                ))}
                <th className="px-6 py-4 text-center text-sm font-semibold">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredData.map((item, index) => (
                <tr key={item.id} className="hover:bg-blue-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {index + 1}
                  </td>
                  {displayFields.map(field => (
                    <td key={field.key} className="px-6 py-4 text-sm text-gray-700">
                      {field.type === 'textarea' ? (
                        <div className="max-w-xs">
                          <div className="truncate" title={item[field.key]}>
                            {item[field.key]}
                          </div>
                        </div>
                      ) : (field.key === 'status' || field.key === 'prioritas' || field.key === 'akreditasi') ? (
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(item[field.key], field.key === 'prioritas' ? 'priority' : 'status')}`}>
                          {item[field.key]}
                        </span>
                      ) : (
                        item[field.key]
                      )}
                    </td>
                  ))}
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => handleEdit(module, item)}
                        className="text-blue-600 hover:text-blue-800 hover:bg-blue-100 p-2 rounded-lg transition-colors"
                        title="Edit"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(module, item.id)}
                        className="text-red-600 hover:text-red-800 hover:bg-red-100 p-2 rounded-lg transition-colors"
                        title="Hapus"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  // Dashboard stats
  const getDashboardStats = () => {
    return menuItems.slice(1).map(item => ({
      ...item,
      count: staticData[item.key]?.length || 0
    }));
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-16'} bg-white shadow-lg transition-all duration-300 border-r border-gray-200`}>
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            {sidebarOpen && (
              <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Admin Dashboard
              </h2>
            )}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg hover:bg-blue-50 text-blue-600 transition-colors"
            >
              {sidebarOpen ? <Menu size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        <nav className="p-4 space-y-2">
          {menuItems.map(item => {
            const IconComponent = item.icon;
            return (
              <button
                key={item.key}
                onClick={() => setActiveModule(item.key)}
                className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${activeModule === item.key
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-200'
                    : 'hover:bg-blue-50 text-gray-700 hover:text-blue-600'
                  }`}
              >
                <IconComponent size={20} />
                {sidebarOpen && <span className="font-medium">{item.label}</span>}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="p-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {menuItems.find(item => item.key === activeModule)?.label || 'Dashboard'}
                </h1>
                <p className="text-gray-600 mt-1">
                  {activeModule === 'dashboard'
                    ? 'Selamat datang di panel administrasi universitas'
                    : `Kelola data ${menuItems.find(item => item.key === activeModule)?.label.toLowerCase()}`}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <input
                    type="text"
                    placeholder="Cari data..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-64 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>
                {activeModule !== 'dashboard' && (
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
          </div>
        </header>

        <main className="p-6 overflow-y-auto">
          {activeModule === 'dashboard' ? (
            <div className="space-y-6">
              {/* Welcome Card */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">Selamat Datang, Admin!</h2>
                    <p className="text-blue-100 text-lg">Kelola semua data universitas dengan mudah dan efisien</p>
                    <div className="mt-4 flex items-center gap-4 text-blue-100">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span>Sistem Online</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span>Mode Demo</span>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block opacity-20">
                    <Home size={120} />
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {getDashboardStats().map(stat => {
                  const IconComponent = stat.icon;
                  return (
                    <div
                      key={stat.key}
                      className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md hover:border-blue-200 transition-all duration-200 cursor-pointer group"
                      onClick={() => setActiveModule(stat.key)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="text-sm font-medium text-gray-600 mb-1 group-hover:text-blue-600 transition-colors">
                            {stat.label}
                          </h3>
                          <p className="text-3xl font-bold text-blue-600 mb-2">{stat.count}</p>
                          <span className="text-blue-600 hover:text-blue-800 font-medium text-sm group-hover:underline">
                            Kelola Data →
                          </span>
                        </div>
                        <div className="text-blue-500 group-hover:text-blue-600 transition-colors">
                          <IconComponent size={40} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Quick Stats Summary */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Ringkasan Data</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <div className="text-2xl font-bold text-blue-600">{staticData.departemen?.length || 0}</div>
                    <div className="text-sm text-gray-600">Total Departemen</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg border border-green-100">
                    <div className="text-2xl font-bold text-green-600">
                      {staticData.departemen?.reduce((sum, dept) => sum + (dept.mahasiswa || 0), 0) || 0}
                    </div>
                    <div className="text-sm text-gray-600">Total Mahasiswa</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-100">
                    <div className="text-2xl font-bold text-purple-600">
                      {staticData.departemen?.reduce((sum, dept) => sum + (dept.dosen || 0), 0) || 0}
                    </div>
                    <div className="text-sm text-gray-600">Total Dosen</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg border border-orange-100">
                    <div className="text-2xl font-bold text-orange-600">{staticData.ukm?.length || 0}</div>
                    <div className="text-sm text-gray-600">Total UKM</div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {renderDataTable(activeModule)}
            </div>
          )}
        </main>
      </div>

      {/* Modal */}
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md max-h-[90vh] overflow-hidden flex flex-col">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
              <h3 className="text-lg font-semibold text-white">
                {modalMode === 'add' ? 'Tambah Data' : 'Edit Data'} {menuItems.find(item => item.key === activeModule)?.label}
              </h3>
            </div>

            {/* Form */}
            <div className="p-6 overflow-y-auto flex-1 space-y-4">
              {fieldConfigs[activeModule]?.map(field => (
                <div key={field.key}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {field.label}
                  </label>
                  {renderFormField(field)}
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="flex justify-end gap-3 border-t border-gray-200 p-4">
              <button
                onClick={() => {
                  setShowModal(false);
                  setCurrentItem({});
                }}
                className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                Batal
              </button>
              <button
                onClick={handleSave}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md"
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

export default AdminDashboard;