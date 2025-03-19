import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaHome, FaHeart, FaChild, FaFileAlt, FaUsers } from 'react-icons/fa';

// Định nghĩa kiểu dữ liệu cho Tabs
interface ProjectTabsProps {
  activeTab: 'content' | 'donors';
  setActiveTab: (tab: 'content' | 'donors') => void;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  currentAmount: number;
  targetAmount: number;
  donorsCount: number;
  status: 'ongoing' | 'completed';
}

export interface Donor {
  id: string;
  name: string;
  amount: number;
  message?: string;
  createdAt: string;
}

export interface DonationData {
  amount: number;
  name: string;
  message?: string;
}

const DetailProject = () => {
  const [activeTab, setActiveTab] = useState<'content' | 'donors'>('content');

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-green-600">
                Từ Thiện Online
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Breadcrumb với hình ảnh nền */}
      <main className="pt-20">
        <div className="relative bg-gray-200 h-40">
          <Image
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c"
            alt="Banner"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/75 to-gray-900/25" />
          <div className="container mx-auto p-4 relative z-10 h-full flex justify-center items-center">
            <div className="text-center text-2xl font-medium text-white space-x-3">
              <FaHome className="inline-block" />
              <Link href="/" className="text-gray-200 hover:text-white">
                Trang chủ
              </Link>
              <span className="mx-2">/</span>
              <Link href="/ListProject" className="text-gray-200 hover:text-white">
                Dự án
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white font-bold">
                Chung tay cứu lấy đôi mắt bé Lê Huỳnh Gia Khánh
              </span>
            </div>
          </div>
        </div>

        {/* Container chính */}
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              {/* Cột trái - Hình ảnh */}
              <div className="space-y-4">
                <div className="relative rounded-xl overflow-hidden shadow-lg h-[400px]">
                  <Image
                    src="/project-image.jpg"
                    alt="Bé Lê Huỳnh Gia Khánh"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <div className="text-white flex items-center">
                      <FaHeart className="mr-2" />
                      <span>255 lượt ủng hộ</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cột phải - Form quyên góp */}
              <div className="space-y-6">
                <DonationForm />
              </div>
            </div>

            {/* Tabs */}
            <ProjectTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-12">
        <div className="container mx-auto px-4 py-8 text-center">
          <p>&copy; 2025 GiveNow. Tất cả quyền được bảo lưu.</p>
        </div>
      </footer>
    </div>
  );
};

// Component: Form quyên góp
const DonationForm: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">
        Chung tay cứu lấy đôi mắt bé Lê Huỳnh Gia Khánh
      </h1>
      <div className="space-y-4">
        <div className="flex justify-between text-sm text-gray-600">
          <span>Đã quyên góp</span>
          <span className="font-medium">15,000,000đ</span>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>Mục tiêu</span>
          <span className="font-medium">50,000,000đ</span>
        </div>
        <button className="w-full bg-pink-500 text-white py-3 rounded-lg font-medium hover:bg-pink-600 transition">
          ❤️ Ủng hộ ngay
        </button>
      </div>
    </div>
  );
};

// Component: Tabs hiển thị nội dung
export const ProjectTabs: React.FC<ProjectTabsProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="border-t">
      <div className="flex p-4 border-b">
        <button
          onClick={() => setActiveTab('content')}
          className={`px-6 py-3 font-medium transition-colors ${
            activeTab === 'content'
              ? 'border-b-2 border-pink-500 text-pink-500'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <FaFileAlt className="inline-block mr-2" />
          Nội dung
        </button>
        <button
          onClick={() => setActiveTab('donors')}
          className={`px-6 py-3 font-medium transition-colors ${
            activeTab === 'donors'
              ? 'border-b-2 border-pink-500 text-pink-500'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <FaUsers className="inline-block mr-2" />
          Danh sách ủng hộ
        </button>
      </div>

      <div className="p-6">
        {activeTab === 'content' ? <ProjectContent /> : <DonorsList />}
      </div>
    </div>
  );
};

// Component: Nội dung chi tiết
export const ProjectContent = () => (
  <div className="prose max-w-none space-y-6">
    <h2 className="text-2xl font-bold text-gray-800">Hoàn cảnh gia đình</h2>
    <p className="text-gray-600 leading-relaxed">
      Bé Lê Huỳnh Gia Khánh sinh non vào tuần thứ 31 của thai kỳ...
    </p>
  </div>
);

// Component: Danh sách người ủng hộ
export const DonorsList: React.FC = () => <p className="text-gray-600">Danh sách ủng hộ sẽ hiển thị ở đây.</p>;

export default DetailProject;
