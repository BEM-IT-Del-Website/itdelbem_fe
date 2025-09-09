'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from "@/components/ui/progress";
import { Users, Target, Calendar, Award, Briefcase, User, Star, Sparkles } from 'lucide-react';
import { Viga } from "next/font/google";
import { motion } from "framer-motion";

const viga = Viga({
  weight: "400",
  subsets: ["latin"],
});

export default function OrganizationPage() {
  const himpunan = [
    {
      name: "HIMASTI",
      description: "Himpunan Mahasiswa Teknik Informatika",
      details: "Wadah pengembangan akademik dan non-akademik mahasiswa Teknik Informatika",
      icon: <Users className="w-10 h-10" />,
    },
    {
      name: "HIMSI",
      description: "Himpunan Mahasiswa Sistem Informasi",
      details: "Wadah pengembangan akademik dan non-akademik mahasiswa Sistem Informasi",
      icon: <Calendar className="w-10 h-10" />,
    },
    {
      name: "HME",
      description: "Himpunan Mahasiswa Teknik Elektro",
      details: "Wadah pengembangan akademik mahasiswa teknik elektro sesuai perkembangan teknologi modern",
      icon: <Target className="w-10 h-10" />,
    },
    {
      name: "HIMATERA",
      description: "Himpunan Mahasiswa TPL",
      details: "Wadah pengembangan mahasiswa Teknologi Pengolahan Lahan",
      icon: <Star className="w-10 h-10" />,
    },
    {
      name: "HIMATEK",
      description: "Himpunan Mahasiswa Teknologi Komputer",
      details: "Wadah mahasiswa Teknologi Komputer untuk meningkatkan akademik dan non-akademik",
      icon: <Sparkles className="w-10 h-10" />,
    },
    {
      name: "HIMATIF",
      description: "Himpunan Mahasiswa Teknologi Informasi",
      details: "Wadah pengembangan mahasiswa Teknologi Informasi",
      icon: <Briefcase className="w-10 h-10" />,
    },
    {
      name: "HIMAMERA",
      description: "Himpunan Mahasiswa Manajemen Rekayasa",
      details: "Wadah mahasiswa Manajemen Rekayasa dalam bidang akademik & non-akademik",
      icon: <User className="w-10 h-10" />,
    },
    {
      name: "HIMAMETAL",
      description: "Himpunan Mahasiswa Teknik Material",
      details: "Wadah mahasiswa Teknik Material untuk pengembangan keilmuan & kegiatan",
      icon: <Award className="w-10 h-10" />,
    }
  ];

  return (
    <div className="text-center mb-16">
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative min-h-[60vh] bg-gradient-to-br from-[#1c46b9] via-[#2563eb] to-[#3b82f6] overflow-hidden py-16"
      >
        <div className="absolute inset-0">
          {/* Large circles */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-20 w-48 h-48 bg-white/5 rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-white/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 right-10 w-24 h-24 bg-[#ffe444]/20 rounded-full"></div>

          {/* Gradient overlays for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1c46b9]/20 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        </div>

        {/* Main content */}
        <div className="relative z-10 flex items-center justify-center min-h-[60vh] text-center px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative z-10">
              <div className="inline-flex items-center bg-white rounded-full shadow-md">
                {/* Icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center bg-white rounded-full shadow-md px-6 py-3 mb-6"
                >
                  <div className="w-11 h-11 rounded-full flex items-center justify-center mr-3">
                    <img src="./del.png" alt="" />
                  </div>
                  {/* Text */}
                  <span className="text-[1.2em] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                    Institut Teknologi Bandung
                  </span>
                </motion.div>
              </div>
            </div>
            <div className='flex flex-col items-center '>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className={`${viga.className} text-[3.5em] font-bold text-white`}
              >
                Organisasi Mahasiswa
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className={`${viga.className} text-[3.5em] font-bold text-white`}
              >
                HIMPUNAN MAHASISWA
              </motion.h1>
              <div className="w-40 h-1 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 shadow-[0_0_15px_rgba(0,200,255,0.8)] mt-3"></div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className={`${viga.className} mt-6 w-[40em] text-xl text-white mb-[6em]`}
              >
                Wadah pengembangan akademik dan non-akademik mahasiswa sesuai dengan bidang keahlian masing-masing program studi di Institut Teknologi Del
              </motion.p>
            </div>
          </div>
        </div>
      </motion.section>

      <div className="relative min-h-[60vh] bg-gradient-to-r from-[#F9FBFF] to-[#E9F5FF] overflow-hidden px-16 py-16 mb-[-4em]">
        {/* Blur Circles */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute top-32 left-1/3 w-48 h-48 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-20 right-10 w-20 h-20 bg-cyan-300 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-pulse"></div>
        <div className="absolute top-20 right-10 w-20 h-20 bg-cyan-300 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-pulse"></div>

        <div className='flex flex-col items-center'>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`${viga.className} text-[3.5em] font-bold text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-800 to-blue-400`}
          >
            Himpunan Mahasiswa
          </motion.h1>
          <p className='mt-4 w-[30em] text-xl mb-6'>Organisasi mahasiswa berdasarkan program studi untuk pengembangan akademik dan non-akademik</p>
          <div className="w-40 h-1 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 shadow-[0_0_15px_rgba(0,200,255,0.8)] mb-[6em]"></div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {himpunan.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                key={idx}
                className="shadow-lg hover:shadow-2xl transition duration-300 rounded-2xl bg-white border border-gray-100"
              >
                <CardHeader className="flex flex-col items-center">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="p-4 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-600 mb-4 shadow-lg shadow-blue-300/50 flex items-center justify-center"
                  >
                    {item.icon}
                  </motion.div>
                  <CardTitle className="text-xl font-bold text-xl">{item.name}</CardTitle>
                  <CardDescription className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">{item.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 text-sm mb-4">{item.details}</p>
                  <Progress className="mb-4 w-[7em] h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 shadow-[0_0_15px_rgba(0,200,255,0.8)]" />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-2 px-4 bg-gradient-to-r from-cyan-400 to-blue-600 text-white rounded-lg font-semibold shadow-md hover:shadow-lg transition"
                  >
                    Lihat Detail
                  </motion.button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
