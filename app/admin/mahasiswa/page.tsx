"use client";
import React, { useEffect, useState } from "react";
import DataTable from "@/components/layout/DataTable";

interface Mahasiswa {
  id: number;
  nim: string;
  full_name: string;
  study_program: string;
  year_enrolled: number;
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
  data: Mahasiswa[];
}

const TableContainer: React.FC = () => {
  const [data, setData] = useState<Mahasiswa[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);

  const fields = [
    { key: "nim", label: "NIM", type: "string" },
    { key: "full_name", label: "Nama", type: "string" },
    { key: "study_program", label: "Prodi", type: "string" },
    { key: "year_enrolled", label: "Angkatan", type: "number" },
  ];

  // Filter states
  const [searchName, setSearchName] = useState("");
  const [searchProdi, setSearchProdi] = useState("");
  const [searchAngkatan, setSearchAngkatan] = useState("");

  const fetchData = async (pageNumber: number) => {
    setLoading(true);
    const token = sessionStorage.getItem("token");

    try {
      // Build query parameters
      const params = new URLSearchParams();
      params.append('page', pageNumber.toString());
      params.append('per_page', '10');
      
      if (searchName.trim()) {
        params.append('name', searchName.trim());
      }
      if (searchProdi.trim()) {
        params.append('study_program', searchProdi.trim());
      }
      if (searchAngkatan.trim()) {
        params.append('year_enrolled', searchAngkatan.trim());
      }

      let res = await fetch(
        `http://localhost:8080/api/admin/students?${params.toString()}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

      let json: ApiResponse = await res.json();
      setData(json.data);
      setTotalPages(json.metadata.total_pages);
      setTotalItems(json.metadata.total_items);
      setPage(json.metadata.current_page);
    } catch (err) {
      console.error("Gagal fetch data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  // Handle manual search
  const handleSearch = () => {
    setPage(1); // Reset to first page when searching
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
  }, [searchName, searchProdi, searchAngkatan]);

  // Clear all filters
  const clearFilters = () => {
    setSearchName("");
    setSearchProdi("");
    setSearchAngkatan("");
    setPage(1);
  };

  // Check if any filter is active
  const hasActiveFilters = searchName.trim() || searchProdi.trim() || searchAngkatan.trim();

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
        <p className="text-gray-600 font-medium">Memuat data mahasiswa...</p>
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
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Data Mahasiswa Aktif</h1>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={handleSearch}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg hover:from-blue-600 hover:to-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Cari
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search by NIM
          <div className="relative">
            <label htmlFor="searchName" className="block text-sm font-medium text-gray-700 mb-2">
              NIM
            </label>
            <div className="relative">
              <input
                id="searchName"
                type="text"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="NIM"
                className="w-full pl-10 pr-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
          </div> */}

          {/* Search by Name */}
          <div className="relative">
            <label htmlFor="searchName" className="block text-sm font-medium text-gray-700 mb-2">
              Nama
            </label>
            <div className="relative">
              <input
                id="searchName"
                type="text"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Nama"
                className="w-full pl-10 pr-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Search by Study Program */}
          <div className="relative">
            <label htmlFor="searchProdi" className="block text-sm font-medium text-gray-700 mb-2">
              Program Studi
            </label>
            <div className="relative">
              <input
                id="searchProdi"
                type="text"
                value={searchProdi}
                onChange={(e) => setSearchProdi(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Program Studi"
                className="w-full pl-10 pr-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
            </div>
          </div>

          {/* Search by Year */}
          <div className="relative">
            <label htmlFor="searchAngkatan" className="block text-sm font-medium text-gray-700 mb-2">
              Angkatan
            </label>
            <div className="relative">
              <input
                id="searchAngkatan"
                type="number"
                value={searchAngkatan}
                onChange={(e) => setSearchAngkatan(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Angkatan"
                min="2019"
                max="2025"
                className="w-full pl-10 pr-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <DataTable
          data={data}
          fields={fields}
          onEdit={(item) => console.log(item)}
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
              <span className="font-medium text-gray-900"> {totalItems}</span> data
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

export default TableContainer;