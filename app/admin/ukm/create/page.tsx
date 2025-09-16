"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Users, Type, Target, Upload, Save, ArrowLeft, Building2, Image, CheckCircle2, Info, Star, Zap, Activity } from "lucide-react";

export default function UKMCreatePage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nama: "",
    namaSingkat: "",
    visi: "",
    misi: "",
    gambar: null as File | null,
  });

  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleChange = (key: string, value: string | File | null) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    
    // Handle image preview
    if (key === "gambar" && value instanceof File) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(e.target?.result as string);
      };
      reader.readAsDataURL(value);
    } else if (key === "gambar" && !value) {
      setPreviewImage(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Data UKM:", formData);
    alert("Data UKM berhasil ditambahkan!");
    router.push("/admin/ukm");
  };

  const handleBack = () => {
    router.push("/admin/ukm");
  };

  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6 transition-colors group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Kembali ke Data UKM</span>
          </button>
          
          <div className="flex items-center gap-4 mb-2">
            <div className="relative">
              <div className="p-4 bg-green-600 rounded-2xl shadow-lg">
                <Activity className="text-white" size={32} />
              </div>
              <div className="absolute -top-1 -right-1 p-1 bg-white rounded-full shadow-md">
                <Star size={16} className="text-green-600" />
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-green-900">Tambah Data UKM</h1>
              <p className="text-green-600">Buat data Unit Kegiatan Mahasiswa baru</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-2xl border-2 border-green-100 overflow-hidden">
              <div className="bg-blue-600 p-6">
                <h2 className="text-xl font-bold text-white flex items-center gap-3">
                  <Activity size={24} />
                  Informasi UKM
                </h2>
              </div>
              
              <div className="p-8 space-y-8">
                {/* Nama */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-bold text-green-900">
                    <Activity size={18} className="text-green-600" />
                    Nama Lengkap UKM
                  </label>
                  <input
                    type="text"
                    className="w-full border-2 border-blue-200 rounded-xl px-4 py-4 focus:border-blue-500 focus:ring-4 focus:ring-green-100 transition-all outline-none bg-green-50 text-green-900 font-medium"
                    value={formData.nama}
                    onChange={(e) => handleChange("nama", e.target.value)}
                    placeholder="🏆 Contoh: Paduan Suara Mahasiswa"
                    required
                  />
                </div>

                {/* Nama Singkat */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-bold text-green-900">
                    <Type size={18} className="text-green-600" />
                    Nama Singkat / Akronim
                  </label>
                  <input
                    type="text"
                    className="w-full border-2 border-green-200 rounded-xl px-4 py-4 focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all outline-none bg-green-50 text-green-900 font-medium"
                    value={formData.namaSingkat}
                    onChange={(e) => handleChange("namaSingkat", e.target.value)}
                    placeholder="🎯 Contoh: PSM"
                    required
                  />
                </div>

                {/* Visi */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-bold text-green-900">
                    <Target size={18} className="text-green-600" />
                    Visi
                  </label>
                  <textarea
                    className="w-full border-2 border-green-200 rounded-xl px-4 py-4 focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all outline-none resize-none bg-green-50 text-green-900"
                    rows={4}
                    value={formData.visi}
                    onChange={(e) => handleChange("visi", e.target.value)}
                    placeholder="🌟 Tulis visi UKM yang inspiratif dan motivatif..."
                    required
                  />
                  
                  {/* Character Counter for Visi */}
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-green-600">
                      {formData.visi.length > 0 && (
                        <span className="font-medium">{formData.visi.length} karakter</span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      {formData.visi.length > 200 && <CheckCircle2 size={16} className="text-green-500" />}
                      <span className={formData.visi.length > 200 ? "text-green-600 font-medium" : "text-green-500"}>
                        {formData.visi.length > 200 ? "✅ Panjang yang baik" : "Minimal  karakter"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Misi */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-bold text-green-900">
                    <Target size={18} className="text-green-600" />
                    Misi
                  </label>
                  <textarea
                    className="w-full border-2 border-green-200 rounded-xl px-4 py-4 focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all outline-none resize-none bg-green-50 text-green-900"
                    rows={6}
                    value={formData.misi}
                    onChange={(e) => handleChange("misi", e.target.value)}
                    placeholder="🎯 Tulis misi UKM yang konkret dan dapat diukur..."
                    required
                  />
                  
                  {/* Character Counter for Misi */}
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-green-600">
                      {formData.misi.length > 0 && (
                        <span className="font-medium">{formData.misi.length} karakter</span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      {formData.misi.length > 100 && <CheckCircle2 size={16} className="text-green-500" />}
                      <span className={formData.misi.length > 100 ? "text-green-600 font-medium" : "text-green-500"}>
                        {formData.misi.length > 100 ? "✅ Panjang yang baik" : "Minimal 100 karakter"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* File Upload */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-bold text-green-900">
                    <Upload size={18} className="text-green-600" />
                    Upload Logo UKM
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      accept="image/*"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      onChange={(e) =>
                        handleChange("gambar", e.target.files ? e.target.files[0] : null)
                      }
                    />
                    <div className="border-2 border-dashed border-green-300 rounded-xl p-8 text-center hover:border-green-500 hover:bg-green-50 transition-all cursor-pointer bg-white">
                      {previewImage ? (
                        <div className="space-y-4">
                          <img
                            src={previewImage}
                            alt="Preview"
                            className="w-28 h-28 object-cover rounded-xl mx-auto border-2 border-green-200 shadow-md"
                          />
                          <p className="text-green-600 font-medium">
                            📁 {formData.gambar?.name}
                          </p>
                        </div>
                      ) : (
                        <div>
                          <Image size={48} className="mx-auto text-green-400 mb-3" />
                          <p className="text-green-600 font-medium">
                            📸 Klik untuk upload logo atau drag & drop
                            <br />
                            <span className="text-sm text-green-500">PNG, JPG, atau GIF maksimal 5MB</span>
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6 border-t-2 border-green-100">
                  <button
                    onClick={handleSubmit}
                    disabled={!formData.nama || !formData.namaSingkat || !formData.visi || !formData.misi}
                    className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 hover:shadow-xl transform hover:scale-105 transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                  >
                    <Save size={20} />
                    💾 Simpan Data UKM
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Preview Card */}
            {(formData.nama || formData.namaSingkat) && (
              <div className="bg-white rounded-2xl shadow-lg border-2 border-green-100 overflow-hidden">
                <div className="bg-green-600 p-4">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <CheckCircle2 size={20} />
                    👀 Preview
                  </h3>
                </div>
                <div className="p-6 space-y-4">
                  {previewImage && (
                    <div className="text-center">
                      <img
                        src={previewImage}
                        alt="Logo Preview"
                        className="w-24 h-24 object-cover rounded-xl mx-auto border-2 border-green-200 shadow-md"
                      />
                    </div>
                  )}
                  {formData.nama && (
                    <div className="text-center">
                      <h4 className="font-bold text-green-900 text-lg">{formData.nama}</h4>
                      {formData.namaSingkat && (
                        <p className="text-green-600 font-medium text-sm mt-1">({formData.namaSingkat})</p>
                      )}
                    </div>
                  )}
                  {formData.visi && (
                    <div className="bg-green-50 rounded-lg p-4">
                      <h5 className="font-semibold text-green-800 text-sm mb-2">Visi:</h5>
                      <p className="text-green-700 text-sm leading-relaxed">
                        {formData.visi.length > 100 
                          ? formData.visi.substring(0, 100) + "..."
                          : formData.visi}
                      </p>
                    </div>
                  )}
                  {formData.misi && (
                    <div className="bg-green-50 rounded-lg p-4">
                      <h5 className="font-semibold text-green-800 text-sm mb-2">Misi:</h5>
                      <p className="text-green-700 text-sm leading-relaxed">
                        {formData.misi.length > 120 
                          ? formData.misi.substring(0, 120) + "..."
                          : formData.misi}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Progress Card */}
            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6">
              <h3 className="font-bold text-green-900 mb-4 flex items-center gap-2">
                <Activity size={18} className="text-green-600" />
                📊 Progress Pengisian
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-green-700">Nama Lengkap</span>
                  <CheckCircle2 size={16} className={formData.nama ? "text-green-500" : "text-green-300"} />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-green-700">Nama Singkat</span>
                  <CheckCircle2 size={16} className={formData.namaSingkat ? "text-green-500" : "text-green-300"} />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-green-700">Visi</span>
                  <CheckCircle2 size={16} className={formData.visi ? "text-green-500" : "text-green-300"} />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-green-700">Misi</span>
                  <CheckCircle2 size={16} className={formData.misi ? "text-green-500" : "text-green-300"} />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-green-700">Logo</span>
                  <CheckCircle2 size={16} className={formData.gambar ? "text-green-500" : "text-green-300"} />
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="mt-4">
                <div className="flex justify-between text-xs text-green-600 mb-1">
                  <span>Kelengkapan</span>
                  <span>{Math.round((
                    (formData.nama ? 1 : 0) +
                    (formData.namaSingkat ? 1 : 0) +
                    (formData.visi ? 1 : 0) +
                    (formData.misi ? 1 : 0) +
                    (formData.gambar ? 1 : 0)
                  ) / 5 * 100)}%</span>
                </div>
                <div className="w-full bg-green-200 rounded-full h-2">
                  <div 
                    className="bg-green-600 h-2 rounded-full transition-all duration-300"
                    style={{
                      width: `${((
                        (formData.nama ? 1 : 0) +
                        (formData.namaSingkat ? 1 : 0) +
                        (formData.visi ? 1 : 0) +
                        (formData.misi ? 1 : 0) +
                        (formData.gambar ? 1 : 0)
                      ) / 5) * 100}%`
                    }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Tips Card */}
            <div className="bg-white border-2 border-green-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Info size={20} className="text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-green-900 mb-2">💡 Tips Mengisi Data UKM</h3>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>🏆 Gunakan nama resmi UKM yang lengkap</li>
                    <li>⚡ Singkatan harus mudah diingat dan dikenal</li>
                    <li>🌟 Visi harus mencerminkan tujuan jangka panjang</li>
                    <li>🎯 Misi harus konkret dan dapat diukur</li>
                    <li>🖼️ Logo sebaiknya format PNG dengan resolusi tinggi</li>
                    <li>✅ Periksa kembali semua informasi sebelum menyimpan</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Activity Types Card */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Star size={20} className="text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-green-900 mb-2">🎨 Kategori UKM</h3>
                  <div className="text-sm text-green-700 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>Olahraga (Basket, Futsal, Badminton)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span>Seni & Budaya (Tari, Musik, Teater)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      <span>Akademik (Debat, Riset, Olimpiade)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      <span>Keagamaan & Spiritual</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
