"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DataTable from "@/components/layout/DataTable";

interface UKM {
  id: number;
  nama_ukm: string;
  kategori: string;
  pembina: string;
  ketua: string;
  anggota_aktif: number;
  tahun_berdiri: number;
  status: 'Aktif' | 'Tidak Aktif' | 'Hiatus';
  deskripsi: string;
}

interface ApiResponse {
  status: string;
  message: string;
  metadata: {
    current_page: number;
    per_page: number;
    total_items: number;
    total_pages: number;
    links: {
      first: string;
      last: string;
    };
  };
  data: UKM[];
}

const UKMContainer: React.FC = () => {
  const router = useRouter();
  const [data, setData] = useState<UKM[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);

  const fields = [
    { key: "nama_ukm", label: "Nama UKM", type: "string" },
    { key: "kategori", label: "Kategori", type: "string" },
    { key: "pembina", label: "Pembina", type: "string" },
    { key: "ketua", label: "Ketua", type: "string" },
    { key: "anggota_aktif", label: "Anggota Aktif", type: "number" },
    { key: "tahun_berdiri", label: "Tahun Berdiri", type: "number" },
    { key: "status", label: "Status", type: "string" },
  ];

  // Filter states
  const [searchNama, setSearchNama] = useState("");
  const [searchKategori, setSearchKategori] = useState("");
  const [searchStatus, setSearchStatus] = useState("");

  // Sample data untuk UKM
  const sampleUKMData: UKM[] = [
    {
      id: 1,
      nama_ukm: "UKM Basket",
      kategori: "Olahraga",
      pembina: "Dr. John Situmorang",
      ketua: "Michael Panjaitan",
      anggota_aktif: 25,
      tahun_berdiri: 2010,
      status: "Aktif",
      deskripsi: "Unit Kegiatan Mahasiswa yang bergerak di bidang olahraga basket"
    },
    {
      id: 2,
      nama_ukm: "UKM Musik Batak",
      kategori: "Seni & Budaya",
      pembina: "Prof. Maria Simbolon",
      ketua: "Sarah Siahaan",
      anggota_aktif: 18,
      tahun_berdiri: 2008,
      status: "Aktif",
      deskripsi: "UKM yang melestarikan dan mengembangkan musik tradisional Batak"
    },
    {
      id: 3,
      nama_ukm: "UKM Paduan Suara",
      kategori: "Seni & Budaya",
      pembina: "Dra. Ruth Tampubolon",
      ketua: "David Simanjuntak",
      anggota_aktif: 30,
      tahun_berdiri: 2005,
      status: "Aktif",
      deskripsi: "Paduan suara mahasiswa Institut Teknologi Del"
    },
    {
      id: 4,
      nama_ukm: "UKM Futsal",
      kategori: "Olahraga",
      pembina: "Ir. Parlin Hutasoit",
      ketua: "Joni Simatupang",
      anggota_aktif: 22,
      tahun_berdiri: 2012,
      status: "Aktif",
      deskripsi: "Unit kegiatan mahasiswa untuk olahraga futsal"
    },
    {
      id: 5,
      nama_ukm: "UKM Fotografi",
      kategori: "Teknologi & Media",
      pembina: "M.Kom. Agus Lumban Gaol",
      ketua: "Rina Hutabarat",
      anggota_aktif: 15,
      tahun_berdiri: 2015,
      status: "Aktif",
      deskripsi: "UKM yang mengembangkan minat dan bakat di bidang fotografi"
    },
    {
      id: 6,
      nama_ukm: "UKM Tari Tradisional",
      kategori: "Seni & Budaya",
      pembina: "Dra. Betty Simangunsong",
      ketua: "Angel Sirait",
      anggota_aktif: 12,
      tahun_berdiri: 2009,
      status: "Aktif",
      deskripsi: "UKM yang melestarikan tari-tarian tradisional Batak"
    },
    {
      id: 7,
      nama_ukm: "UKM Badminton",
      kategori: "Olahraga",
      pembina: "Dr. Eng. Togi Tampubolon",
      ketua: "Bobby Sinaga",
      anggota_aktif: 20,
      tahun_berdiri: 2011,
      status: "Aktif",
      deskripsi: "Unit kegiatan mahasiswa untuk olahraga badminton"
    },
    {
      id: 8,
      nama_ukm: "UKM Robotika",
      kategori: "Teknologi & Media",
      pembina: "Dr. Ir. Samuel Manurung",
      ketua: "Denny Hutagalung",
      anggota_aktif: 16,
      tahun_berdiri: 2018,
      status: "Aktif",
      deskripsi: "UKM yang mengembangkan teknologi robotika dan AI"
    },
    {
      id: 9,
      nama_ukm: "UKM Literasi",
      kategori: "Akademik",
      pembina: "Prof. Dr. Ingrid Nainggolan",
      ketua: "Grace Sitorus",
      anggota_aktif: 14,
      tahun_berdiri: 2016,
      status: "Aktif",
      deskripsi: "UKM yang mengembangkan budaya membaca dan menulis"
    },
    {
      id: 10,
      nama_ukm: "UKM Drama",
      kategori: "Seni & Budaya",
      pembina: "M.A. Robi Simamora",
      ketua: "Kevin Saragih",
      anggota_aktif: 8,
      tahun_berdiri: 2013,
      status: "Hiatus",
      deskripsi: "UKM yang bergerak di bidang seni peran dan teater"
    }
  ];

  const fetchData = async (pageNumber: number) => {
    setLoading(true);
    
    try {
      // Simulasi API call dengan sample data
      let filteredData = sampleUKMData;

      // Apply filters
      if (searchNama.trim()) {
        filteredData = filteredData.filter(ukm => 
          ukm.nama_ukm.toLowerCase().includes(searchNama.toLowerCase())
        );
      }
      if (searchKategori.trim()) {
        filteredData = filteredData.filter(ukm => 
          ukm.kategori.toLowerCase().includes(searchKategori.toLowerCase())
        );
      }
      if (searchStatus.trim()) {
        filteredData = filteredData.filter(ukm => 
          ukm.status.toLowerCase().includes(searchStatus.toLowerCase())
        );
      }

      // Pagination
      const perPage = 10;
      const startIndex = (pageNumber - 1) * perPage;
      const endIndex = startIndex + perPage;
      const paginatedData = filteredData.slice(startIndex, endIndex);

      setData(paginatedData);
      setTotalItems(filteredData.length);
      setTotalPages(Math.ceil(filteredData.length / perPage));
      
    } catch (error) {
      console.error("Error fetching UKM data:", error);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const handleSearch = () => {
    setPage(1);
    fetchData(1);
  };

  // Handle Enter key press for search
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // Handle search with debounce
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setPage(1); // Reset to first page when searching
      fetchData(1);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchNama, searchKategori, searchStatus]);

  // Clear all filters
  const clearFilters = () => {
    setSearchNama("");
    setSearchKategori("");
    setSearchStatus("");
    setPage(1);
  };

  // Check if any filter is active
  const hasActiveFilters = searchNama.trim() || searchKategori.trim() || searchStatus.trim();

  // Improved pagination logic
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const delta = 2; // Show 2 pages before and after current page

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      // Always show first page
      pages.push(1);

      // Show ellipsis if current page is far from start
      if (page > delta + 2) pages.push("...");

      // Show pages around current page
      const start = Math.max(2, page - delta);
      const end = Math.min(totalPages - 1, page + delta);
      
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      // Show ellipsis if current page is far from end
      if (page < totalPages - delta - 1) pages.push("...");

      // Always show last page
      if (totalPages > 1) pages.push(totalPages);
    }
    return pages;
  };

  const LoadingState = () => (
    <div className="min-h-96 flex items-center justify-center bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full animate-spin">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
          </div>
        </div>
        <p className="text-gray-600 font-medium">Memuat data UKM...</p>
        <div className="flex justify-center space-x-1">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );

  if (loading) return <LoadingState />;

  return (
    <div className="space-y-6 p-6 bg-gradient-to-br from-gray-50 to-white min-h-screen">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Data Unit Kegiatan Mahasiswa (UKM)</h1>
            <p className="text-gray-600">Kelola informasi UKM di Institut Teknologi Del</p>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => {
                router.push('/admin/ukm/create');
              }}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-green-500 to-green-600 rounded-lg hover:from-green-600 hover:to-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
              Tambah UKM
            </button>
            <button
              onClick={handleSearch}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg hover:from-blue-600 hover:to-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Cari
            </button>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                Hapus Filter
              </button>
            )}
          </div>
        </div>

        {/* Enhanced Search Filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Nama UKM</label>
            <input
              type="text"
              value={searchNama}
              onChange={(e) => setSearchNama(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Cari nama UKM..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
            />
          </div>
        </div>

      </div>
    

      {/* Table Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <DataTable
          data={data}
          fields={fields}
          onEdit={(item) => console.log("Edit UKM:", item)}
          currentPage={page}
          perPage={10}
        />
      </div>

      {/* Enhanced Pagination */}
      {totalPages > 1 && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            {/* Pagination Info */}
            <div className="text-sm text-gray-600">
              Menampilkan <span className="font-medium text-gray-900">{(page - 1) * 10 + 1}</span> - 
              <span className="font-medium text-gray-900">{Math.min(page * 10, totalItems)}</span> dari 
              <span className="font-medium text-gray-900"> {totalItems}</span> UKM
              {hasActiveFilters && <span className="text-blue-600"> (terfilter)</span>}
            </div>

            {/* Pagination Controls */}
            <nav className="flex items-center space-x-1">
              {/* Previous Button */}
              <button
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:shadow-sm"
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
                Previous
              </button>

              {/* Page Numbers */}
              <div className="hidden sm:flex items-center space-x-1">
                {getPageNumbers().map((num, idx) =>
                  typeof num === "number" ? (
                    <button
                      key={idx}
                      onClick={() => setPage(num)}
                      className={`inline-flex items-center justify-center w-10 h-10 text-sm font-medium rounded-lg transition-all duration-200 ${
                        num === page
                          ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transform scale-105"
                          : "text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 hover:shadow-sm"
                      }`}
                    >
                      {num}
                    </button>
                  ) : (
                    <span key={idx} className="inline-flex items-center justify-center w-10 h-10 text-gray-400">
                      {num}
                    </span>
                  )
                )}
              </div>

              {/* Mobile page indicator */}
              <div className="sm:hidden px-4 py-2 text-sm text-gray-600 bg-gray-50 rounded-lg">
                {page} / {totalPages}
              </div>

              {/* Next Button */}
              <button
                disabled={page === totalPages}
                onClick={() => setPage(page + 1)}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:shadow-sm"
              >
                Next
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default UKMContainer;