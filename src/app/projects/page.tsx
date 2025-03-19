import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "@/components/Footer";
export default function DuAn() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50">
        {/* Hero Section */}
        <div className="relative bg-gray-900 h-64">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c"
              alt="Hero background"
              layout="fill"
              objectFit="cover"
              className="opacity-50"
            />
          </div>
          <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Các dự án gây quỹ</h1>
            <p className="text-xl text-gray-200">Hãy cùng chung tay giúp đỡ những hoàn cảnh khó khăn</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="container mx-auto px-4 -mt-8">
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex justify-center space-x-8 mb-8">
              <button className="px-6 py-3 text-lg font-medium border-b-2 border-green-600 text-green-600">
                🕒 Dự án đang gây quỹ
              </button>
              <button className="px-6 py-3 text-lg font-medium text-gray-500 hover:text-gray-700">
                ✅ Dự án đã hoàn thành
              </button>
            </div>

            {/* Dự án đang gây quỹ */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="Bông Đọt Chỉ Lần Thứ 18"
                description="Chương trình hỗ trợ trẻ em nghèo vùng cao..."
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKnztg682JnegzGmHiCEJ4AXvBTWgi01w4sQ&s"
                progress={13.75}
                raised={2750000}
                goal={20000000}
              />
              <ProjectCard
                title="Xây Cầu Dân Sinh Tại Trà Vinh"
                description="Hỗ trợ xây dựng cầu dân sinh..."
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKnztg682JnegzGmHiCEJ4AXvBTWgi01w4sQ&s"
                progress={56.25}
                raised={45000000}
                goal={80000000}
              />
            </div>
          </div>
        </div>

        {/* Floating Button */}
        <button className="fixed bottom-8 right-8 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition">
          💬
        </button>
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
