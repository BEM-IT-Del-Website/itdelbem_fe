import React from "react";

export default function NewsDetail() {
  // Dummy data for demonstration, replace with dynamic data from router/query
  const news = {
    title: "DelConnect bukan hanya aplikasi biasa, ini adalah revolusi digital yang akan mengubah cara mahasiswa IT Del berinteraksi dan mengakses layanan kampus.",
    quoteAuthor: "Ketua HIMATIF 2024",
    description:
      "Acara peluncuran yang diselenggarakan di Auditorium Utama Institut Teknologi Del, HIMATIF (Himpunan Mahasiswa Teknik Informatika) memperkenalkan inovasi terbaru mereka: aplikasi mobile DelConnect. Aplikasi ini dikembangkan selama 8 bulan oleh tim mahasiswa terbaik dari berbagai angkatan dengan dukungan penuh dari fakultas dan pihak kampus.",
    features: [
      {
        icon: "🎓",
        title: "Akademik Terintegrasi",
        desc:
          "Akses jadwal kuliah, nilai, tugas, dan pengumuman akademik dalam satu platform. Fitur reminder otomatis membantu mahasiswa tidak melewatkan deadline penting.",
      },
      {
        icon: "👥",
        title: "Jejaring Sosial Kampus",
        desc:
          "Platform sosial khusus mahasiswa IT Del untuk berbagi informasi, diskusi akademik, dan membangun koneksi antar mahasiswa dari berbagai jurusan.",
      },
      {
        icon: "💻",
        title: "Layanan Kampus Digital",
        desc:
          "Booking ruangan, pendaftaran kegiatan, layanan perpustakaan, dan berbagai layanan kampus lainnya dapat diakses dengan mudah melalui aplikasi.",
      },
    ],
    impact: {
      downloads: "1,200+",
      rating: "4.8/5",
      features: "15+",
    },
    roadmap: [
      {
        icon: "📱",
        title: "Android",
        desc: "Tersedia di Google Play Store",
      },
      {
        icon: "🍎",
        title: "iOS",
        desc: "Tersedia di App Store",
      },
      {
        icon: "🌐",
        title: "Web",
        desc: "delconnect.itdel.ac.id",
      },
    ],
    tags: ["#DelConnect", "#HIMATIF", "#ITDel", "#InovasiMahasiswa", "#TeknologiKampus"],
    related: {
      title: "HIMATIF Workshop",
      desc: "Workshop Advanced React Development untuk Mahasiswa IT Del",
      org: "HIMATIF",
      time: "3 hari yang lalu",
      tags: ["#Workshop", "#React", "#Programming"],
      views: 245,
      comments: 18,
    },
  };

  return (
    <div className="bg-[#f6f8fc] min-h-screen pb-0">
      <div className="max-w-2xl mx-auto pt-8 pb-0 px-4">
        {/* Quote Box */}
        <div className="bg-white border border-[#dbeafe] rounded-xl p-5 mb-6">
          <div className="text-[#2563eb] text-sm font-semibold mb-2">"{news.title}"</div>
          <div className="text-xs text-gray-500">- {news.quoteAuthor}</div>
        </div>
        {/* Description */}
        <div className="text-gray-700 text-sm mb-8 leading-relaxed">
          {news.description}
        </div>
        {/* Features */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-[#2563eb] mb-4">Fitur Unggulan DelConnect</h2>
          <div className="space-y-4">
            {news.features.map((f, i) => (
              <div key={i} className="flex items-start bg-white rounded-xl border border-[#e0e7ff] p-4 gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-[#e0e7ff] rounded-lg text-xl">{f.icon}</div>
                <div>
                  <div className="font-semibold text-[#2563eb] text-sm mb-1">{f.title}</div>
                  <div className="text-xs text-gray-600">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Impact */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-[#2563eb] mb-4">Dampak dan Antusiasme Mahasiswa</h2>
          <div className="flex gap-4 bg-[#2563eb] rounded-xl text-white p-6 items-center justify-between">
            <div className="text-center flex-1">
              <div className="text-xs font-semibold mb-1">Download Hari Pertama</div>
              <div className="text-2xl font-bold">{news.impact.downloads}</div>
            </div>
            <div className="text-center flex-1">
              <div className="text-xs font-semibold mb-1">Rating Pengguna</div>
              <div className="text-2xl font-bold">{news.impact.rating}</div>
            </div>
            <div className="text-center flex-1">
              <div className="text-xs font-semibold mb-1">Fitur Utama</div>
              <div className="text-2xl font-bold">{news.impact.features}</div>
            </div>
          </div>
        </div>
        {/* Roadmap */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-[#2563eb] mb-4">Rencana Pengembangan Masa Depan</h2>
          <div className="bg-white border border-[#dbeafe] rounded-xl p-5 mb-4">
            <div className="font-semibold text-[#2563eb] text-sm mb-2">Cara Download DelConnect</div>
            <ul className="text-xs text-gray-700 space-y-1">
              {news.roadmap.map((r, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span>{r.icon}</span>
                  <span className="font-semibold">{r.title}:</span>
                  <span>{r.desc}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-xs text-gray-600 mb-2">
            Peluncuran DelConnect menandai era baru digitalisasi kampus IT Del dan menjadi inspirasi bagi institusi pendidikan lain untuk mengembangkan solusi teknologi serupa. Dengan semangat inovasi dan kolaborasi, mahasiswa IT Del sekali lagi membuktikan kemampuan mereka dalam menciptakan teknologi yang berdampak positif.
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {news.tags.map((tag, i) => (
              <span key={i} className="bg-[#e0e7ff] text-[#2563eb] px-3 py-1 rounded-full text-xs font-medium">{tag}</span>
            ))}
          </div>
          <div className="flex gap-2 mb-8">
            <button className="bg-[#2563eb] text-white px-4 py-1 rounded-full text-xs font-semibold">Facebook</button>
            <button className="bg-[#2563eb] text-white px-4 py-1 rounded-full text-xs font-semibold">Twitter</button>
            <button className="bg-[#2563eb] text-white px-4 py-1 rounded-full text-xs font-semibold">LinkedIn</button>
            <button className="bg-[#22c55e] text-white px-4 py-1 rounded-full text-xs font-semibold">WhatsApp</button>
          </div>
        </div>
        {/* Related News */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-[#2563eb] mb-4">Berita Terkait</h2>
          <div className="bg-white rounded-xl border border-[#e0e7ff] p-0 overflow-hidden">
            <div className="bg-[#2563eb] text-white text-2xl font-bold px-6 py-8">{news.related.title}</div>
            <div className="flex items-center gap-2 px-6 py-2 text-xs text-gray-500">
              <span>{news.related.org}</span>
              <span>•</span>
              <span>{news.related.time}</span>
            </div>
            <div className="px-6 py-4">
              <div className="font-semibold text-[#2563eb] mb-2">{news.related.desc}</div>
              <div className="text-xs text-gray-600 mb-2">
                HIMATIF mengadakan workshop intensif React development dengan mentor dari industri teknologi terkemuka untuk meningkatkan skill programming mahasiswa.
              </div>
              <div className="flex flex-wrap gap-2 mb-2">
                {news.related.tags.map((tag, i) => (
                  <span key={i} className="bg-[#e0e7ff] text-[#2563eb] px-3 py-1 rounded-full text-xs font-medium">{tag}</span>
                ))}
              </div>
              <div className="flex gap-4 text-xs text-gray-400 mt-2">
                <span>👁 {news.related.views}</span>
                <span>💬 {news.related.comments}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
