"use client";

import { useState } from "react";
import { Target, Eye, List, Save, X, ArrowLeft, CheckCircle2, Lightbulb, Star, Compass } from "lucide-react";

export default function VisiMisiCreatePage() {
  const [formData, setFormData] = useState({ type: "", content: "" });

  const handleChange = (key: string, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    console.log("Data Baru Visi/Misi:", formData);
    alert("Visi/Misi berhasil ditambahkan!");
    // router.push("/admin/visimisi");
  };

  const handleBack = () => {
    // router.push("/admin/visimisi");
    console.log("Navigate back");
  };

  const getTypeIcon = () => {
    if (formData.type === "Visi") return <Eye size={20} className="text-white" />;
    if (formData.type === "Misi") return <Target size={20} className="text-white" />;
    return <List size={20} className="text-white" />;
  };

  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6 transition-colors group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Kembali ke Visi & Misi</span>
          </button>
          
          <div className="flex items-center gap-4 mb-2">
            <div className="relative">
              <div className="p-4 bg-blue-600 rounded-2xl shadow-lg">
                <Compass className="text-white" size={32} />
              </div>
              <div className="absolute -top-1 -right-1 p-1 bg-white rounded-full shadow-md">
                <Star size={16} className="text-blue-600" />
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-blue-900">Tambah Visi & Misi</h1>
              <p className="text-blue-600">Buat pernyataan visi atau misi baru untuk organisasi</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-2xl border-2 border-blue-100 overflow-hidden">
              <div className="bg-blue-600 p-6">
                <h2 className="text-xl font-semibold text-white flex items-center gap-3">
                  <Lightbulb size={24} />
                  Detail Visi & Misi
                </h2>
              </div>
              
              <div className="p-8 space-y-8">
                {/* Type Selection */}
                <div className="space-y-3">
                  <label className="flex items-center gap-2 text-sm font-bold text-blue-900">
                    <List size={18} className="text-blue-600" />
                    Jenis
                  </label>
                  <div className="relative">
                    <select
                      value={formData.type}
                      onChange={(e) => handleChange("type", e.target.value)}
                      className="w-full border-2 border-blue-200 rounded-xl px-4 py-4 pr-12 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none appearance-none bg-blue-50 text-blue-900 font-medium"
                    >
                      <option value="">-- Pilih Jenis --</option>
                      <option value="Visi">🎯 Visi</option>
                      <option value="Misi">🚀 Misi</option>
                    </select>
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <List size={20} className="text-blue-400" />
                    </div>
                  </div>
                  
                  {/* Type Preview Badge */}
                  {formData.type && (
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full border border-blue-200">
                      {getTypeIcon()}
                      <span className="text-blue-800 font-medium text-sm">
                        {formData.type === "Visi" ? "Pernyataan Visi" : "Pernyataan Misi"} dipilih
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <label className="flex items-center gap-2 text-sm font-bold text-blue-900">
                    {formData.type === "Visi" ? <Eye size={18} className="text-blue-600" /> : <Target size={18} className="text-blue-600" />}
                    Konten {formData.type || "Visi/Misi"}
                  </label>
                  <div className="relative">
                    <textarea
                      value={formData.content}
                      onChange={(e) => handleChange("content", e.target.value)}
                      rows={8}
                      className="w-full border-2 border-blue-200 rounded-xl px-4 py-4 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none resize-none bg-blue-50 text-blue-900"
                      placeholder={
                        formData.type === "Visi" 
                          ? "✨ Tulis pernyataan visi yang menginspirasi dan menggambarkan masa depan yang diinginkan..."
                          : formData.type === "Misi"
                          ? "🎯 Tulis pernyataan misi yang menjelaskan tujuan dan cara pencapaian visi..."
                          : "💭 Tulis konten visi atau misi di sini..."
                      }
                    />
                  </div>
                  
                  {/* Character Counter */}
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-blue-600">
                      {formData.content.length > 0 && (
                        <span className="font-medium">{formData.content.length} karakter</span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      {formData.content.length > 50 && <CheckCircle2 size={16} className="text-green-500" />}
                      <span className={formData.content.length > 50 ? "text-green-600 font-medium" : "text-blue-500"}>
                        {formData.content.length > 50 ? "✅ Panjang yang baik" : "Minimal 50 karakter"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-6 border-t-2 border-blue-100 flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleSave}
                    disabled={!formData.type || !formData.content || formData.content.length < 10}
                    className="flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 hover:shadow-xl transform hover:scale-105 transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                  >
                    <Save size={20} />
                    Simpan {formData.type || "Visi/Misi"}
                  </button>
                  
                  <button
                    onClick={handleBack}
                    className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-blue-600 font-bold rounded-xl border-2 border-blue-600 hover:bg-blue-50 transition-all duration-200"
                  >
                    <X size={20} />
                    Batal
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Preview Section */}
            {formData.type && formData.content && (
              <div className="bg-white rounded-2xl shadow-lg border-2 border-blue-100 overflow-hidden">
                <div className="bg-blue-600 p-4">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <CheckCircle2 size={20} />
                    Preview {formData.type}
                  </h3>
                </div>
                <div className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="p-3 bg-blue-100 rounded-xl">
                      {formData.type === "Visi" ? <Eye size={24} className="text-blue-600" /> : <Target size={24} className="text-blue-600" />}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-blue-900 mb-2 text-lg">{formData.type}</h4>
                      <p className="text-blue-700 leading-relaxed">{formData.content}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tips Cards */}
            <div className="space-y-4">
              {/* Visi Tips */}
              <div className="bg-white border-2 border-blue-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Eye size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-900 mb-2">Tips Membuat Visi</h3>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>🌟 Gambarkan masa depan yang ideal</li>
                      <li>💫 Gunakan bahasa yang inspiratif</li>
                      <li>⚡ Buat singkat namun bermakna</li>
                      <li>🎯 Fokus pada aspirasi jangka panjang</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Misi Tips */}
              <div className="bg-white border-2 border-blue-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Target size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-900 mb-2">Tips Membuat Misi</h3>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>🎯 Jelaskan tujuan organisasi</li>
                      <li>🚀 Sertakan cara pencapaian visi</li>
                      <li>📋 Buat spesifik dan actionable</li>
                      <li>💎 Fokus pada value yang diberikan</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Card */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
              <h3 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
                <Compass size={18} className="text-blue-600" />
                Progress Pengisian
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-blue-700">Pilih Jenis</span>
                  <CheckCircle2 size={16} className={formData.type ? "text-green-500" : "text-blue-300"} />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-blue-700">Isi Konten</span>
                  <CheckCircle2 size={16} className={formData.content ? "text-green-500" : "text-blue-300"} />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-blue-700">Minimal 50 Karakter</span>
                  <CheckCircle2 size={16} className={formData.content.length >= 50 ? "text-green-500" : "text-blue-300"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}