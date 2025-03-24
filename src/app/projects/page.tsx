'use client';

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useProjects } from '@/hooks/useProjects';
import LoadingSpinner from '@/components/LoadingSpinner';

// Định nghĩa interface cho Project
interface Project {
  id: string;
  title: string;
  description: string;
  currentAmount: number;
  targetAmount: number;
  image: string;
}

export default function ProjectsPage() {
  const { projects, loading, error } = useProjects();

  if (loading) return <LoadingSpinner />;
  if (error) return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-600">Error: {error}</p>
      </div>
      <Footer />
    </>
  );

  return (
    <>
      <Navbar />
      <div className="bg-gray-50">
        {/* Hero Section */}
        <div className="relative bg-gray-900 h-64">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c" // Move image to public folder
              alt="Hero background"
              fill
              className="object-cover opacity-50"
              priority
            />
          </div>
          <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Các dự án gây quỹ</h1>
            <p className="text-xl text-gray-200">Hãy cùng chung tay giúp đỡ những hoàn cảnh khó khăn</p>
          </div>
        </div>

        {/* Projects Section */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project: Project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                progress={(project.currentAmount / project.targetAmount) * 100}
                raised={project.currentAmount}
                goal={project.targetAmount}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

// Component dự án
interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  progress: number;
  raised: number;
  goal: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, progress, raised, goal }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition hover:shadow-xl hover:-translate-y-1">
      <div className="relative">
        <Image src={image} alt="Project Image" width={500} height={300} className="w-full h-56 object-cover" />
        <div className="absolute top-4 left-4">
          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">Đang gây quỹ</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>

        <div className="space-y-3">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Đã quyên góp</span>
            <span className="font-medium">{raised.toLocaleString()}đ</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Mục tiêu</span>
            <span className="font-medium">{goal.toLocaleString()}đ</span>
          </div>
          <div className="relative pt-1">
            <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
              <div className="bg-green-500" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
          <button className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition">
            ❤️ Ủng hộ ngay
          </button>
        </div>
      </div>
    </div>
  );
};
