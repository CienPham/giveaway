'use client';

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaHeart, FaSearch, FaFilter, FaRegCalendarAlt, FaRegClock } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useProjects } from '@/hooks/useProjects';
import LoadingSpinner from '@/components/LoadingSpinner';

// Define interface for Project
interface Project {
  id: string;
  title: string;
  description: string;
  currentAmount: number;
  targetAmount: number;
  image: string;
  donorsCount?: number;
  endDate?: string;
  category?: string;
}

export default function ProjectsPage() {
  const { projects, loading, error } = useProjects();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  // Categories for filter tabs
  const categories = [
    { id: "all", name: "Tất cả" },
    { id: "children", name: "Trẻ em" },
    { id: "education", name: "Giáo dục" },
    { id: "healthcare", name: "Y tế" },
    { id: "disaster", name: "Thiên tai" },
  ];

  // Filter projects based on search and category
  const filteredProjects = projects
    .filter((project: Project) => 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      project.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((project: Project) => 
      activeFilter === "all" || project.category === activeFilter
    );

  if (loading) return <LoadingSpinner />;
  if (error) return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md text-center">
          <div className="text-red-500 text-5xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Có lỗi xảy ra</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition"
          >
            Thử lại
          </button>
        </div>
      </div>
      <Footer />
    </>
  );

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <div className="relative bg-gray-900 h-72">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c"
              alt="Hero background"
              fill
              className="object-cover opacity-50"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40" />
          <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Các dự án gây quỹ</h1>
            <p className="text-xl text-gray-200 mb-8">Hãy cùng chung tay giúp đỡ những hoàn cảnh khó khăn</p>
            
            {/* Search bar */}
            <div className="relative max-w-md w-full">
              <input
                type="text"
                placeholder="Tìm kiếm dự án..."
                className="w-full py-3 px-5 pl-12 rounded-full bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FaSearch className="absolute left-4 top-4 text-gray-500" />
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center mb-4">
            <FaFilter className="text-gray-500 mr-2" />
            <h2 className="text-lg font-medium text-gray-700">Lọc dự án:</h2>
          </div>
          
          <div className="flex overflow-x-auto pb-2 space-x-2 mb-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition ${
                  activeFilter === category.id
                    ? "bg-pink-500 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="container mx-auto px-4 pb-16">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-2xl font-medium text-gray-700 mb-2">Không tìm thấy dự án nào</h3>
              <p className="text-gray-500 mb-6">Vui lòng thử tìm kiếm với từ khóa khác</p>
              <button 
                onClick={() => {setSearchQuery(""); setActiveFilter("all")}}
                className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition"
              >
                Xem tất cả dự án
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project: Project) => (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  progress={(project.currentAmount / project.targetAmount) * 100}
                  raised={project.currentAmount}
                  goal={project.targetAmount}
                  donorsCount={project.donorsCount || 0}
                  endDate={project.endDate}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

// Project Card Component
interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  progress: number;
  raised: number;
  goal: number;
  donorsCount: number;
  endDate?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  id, 
  title, 
  description, 
  image, 
  progress, 
  raised, 
  goal,
  donorsCount,
  endDate
}) => {
  // Format progress percentage
  const progressFormatted = Math.min(progress, 100).toFixed(1);
  const isCompleted = progress >= 100;
  
  // Truncate description
  const truncateDescription = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
  };

  return (
    <Link href={`/projects/${id}`}>
      <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition hover:shadow-xl hover:-translate-y-1 h-full flex flex-col">
        <div className="relative">
          <Image 
            src={image} 
            alt={title} 
            width={500} 
            height={300} 
            className="w-full h-56 object-cover" 
          />
          <div className="absolute top-4 left-4">
            {isCompleted ? (
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Hoàn thành
              </span>
            ) : (
              <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Đang gây quỹ
              </span>
            )}
          </div>
        </div>
        
        <div className="p-6 flex-grow flex flex-col">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 mb-4 flex-grow">
            {truncateDescription(description, 120)}
          </p>

          <div className="mt-auto space-y-4">
            <div className="flex justify-between text-sm text-gray-600 items-center">
              <div className="flex items-center">
                <FaHeart className="text-pink-500 mr-2" />
                <span>{donorsCount} ủng hộ</span>
              </div>
              {endDate && (
                <div className="flex items-center">
                  <FaRegCalendarAlt className="text-gray-400 mr-1" />
                  <span className="text-gray-500">{endDate}</span>
                </div>
              )}
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-gray-600">
                <span className="font-medium text-pink-600">{progressFormatted}%</span>
                <span className="font-medium">{raised.toLocaleString()}đ / {goal.toLocaleString()}đ</span>
              </div>
              <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className={`absolute h-full ${isCompleted ? 'bg-green-500' : 'bg-pink-500'} rounded-full`} 
                  style={{ width: `${progressFormatted}%` }}
                ></div>
              </div>
            </div>
            
            <button className="w-full bg-pink-500 text-white py-3 rounded-lg font-medium hover:bg-pink-600 transition flex items-center justify-center">
              <FaHeart className="mr-2" />
              Ủng hộ ngay
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}