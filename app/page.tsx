"use client";
import { useEffect, useState } from "react";
import HeroSection from '@/components/ui/hero-section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, Award, Megaphone, ArrowRight, Star, Target } from 'lucide-react';

export default function HomePage() {
  const [himpunans, setHimpunans] = useState<any[]>([]);
  const [ukms, setUkms] = useState<any[]>([]);

  useEffect(() => {
    // ambil data himpunan
    fetch("http://localhost:8080/api/association")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") setHimpunans(data.data);
      })
      .catch((err) => console.error(err));

    // ambil data UKM
    fetch("http://localhost:8080/api/club")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") setUkms(data.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const features = [
    {
      icon: <Users className="w-8 h-8 text-[#3B82F6]" />,
      title: "Student Representation",
      description: "Representing student interests and fostering academic excellence through collaborative initiatives."
    },
    {
      icon: <Award className="w-8 h-8 text-[#3B82F6]" />,
      title: "Achievement Programs",
      description: "Developing programs that enhance student skills and academic performance across all departments."
    },
    {
      icon: <Megaphone className="w-8 h-8 text-[#3B82F6]" />,
      title: "Communication Hub",
      description: "Bridging communication between students, faculty, and administration for better campus life."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* ... features, vision & mission, departemen ... */}

      {/* Himpunan Mahasiswa Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1E3A8A] mb-4">Himpunan Mahasiswa</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organisasi mahasiswa berdasarkan program studi di Institut Teknologi Del
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {himpunans.map((hmj, index) => (
              <Card key={index} className="flex items-center p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex-shrink-0">
                  <img
                    src={`http://localhost:8080/associations/${hmj.image}`}
                    alt={hmj.name}
                    className="w-20 h-20 rounded-full object-contain"
                  />
                </div>
                <div className="ml-6 flex-1">
                  <CardTitle className="text-xl font-semibold mb-2">{hmj.name}</CardTitle>
                  <CardDescription className="text-base text-gray-600 mb-4">{hmj.vision}</CardDescription>
                  <Button className="bg-[#3B82F6] hover:bg-blue-600 text-white">Info Lengkap</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* UKM Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1E3A8A] mb-4">Unit Kegiatan Mahasiswa</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wadah pengembangan minat dan bakat mahasiswa di berbagai bidang
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ukms.map((ukm, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-20 h-20 mx-auto mb-4">
                    <img
                      src={`http://localhost:8080/clubs/${ukm.image}`}
                      alt={ukm.name}
                      className="w-full h-full object-contain rounded-full"
                    />
                  </div>
                  <CardTitle className="text-xl font-semibold">{ukm.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed mb-4">
                    {ukm.description}
                  </CardDescription>
                  <Button className="bg-[#2563EB] hover:bg-blue-600 text-white">Bergabung</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
