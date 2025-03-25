'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { FaHome, FaHeart, FaFileAlt, FaUsers, FaClock, FaCheckCircle } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Define types for Tabs
interface ProjectTabsProps {
  activeTab: 'content' | 'donors';
  setActiveTab: (tab: 'content' | 'donors') => void;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  image: string;
  currentAmount: number;
  targetAmount: number;
  donorsCount: number;
  status: 'ongoing' | 'completed';
  endDate?: string;
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

const ProjectDetail = () => {
  const params = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'content' | 'donors'>('content');
  const [donationAmount, setDonationAmount] = useState<number>(100000);
  const [showDonationModal, setShowDonationModal] = useState(false);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`/api/projects/${params.id}`);
        const data = await response.json();
        setProject(data);
      } catch (error) {
        console.error('Error fetching project:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [params.id]);

  if (loading) return (
    <div className="fixed inset-0 flex items-center justify-center bg-white">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500"></div>
    </div>
  );
  
  if (!project) return (
    <div className="container mx-auto px-4 py-20 text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Dự án không tìm thấy</h2>
      <p className="text-gray-600 mb-6">Dự án bạn đang tìm kiếm có thể đã bị xóa hoặc không tồn tại.</p>
      <Link href="/projects" className="inline-block bg-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-pink-600 transition">
        Xem các dự án khác
      </Link>
    </div>
  );

  const progress = Math.min((project.currentAmount / project.targetAmount) * 100, 100);
  const progressFormatted = progress.toFixed(1);
  const isCompleted = project.status === 'completed' || progress >= 100;

  return (
    <>
      <Navbar />
      <main className="pt-20 bg-gray-50 min-h-screen">
        {/* Hero section with background image */}
        <div className="relative bg-gray-200 h-60 md:h-72">
          <Image
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c"
            alt="Banner"
            fill
            className="absolute inset-0 object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40" />
          <div className="container mx-auto p-4 relative z-10 h-full flex flex-col justify-center items-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
              {project.title}
            </h1>
            <div className="text-center text-lg font-medium text-white space-x-3">
              <Link href="/" className="text-gray-200 hover:text-white inline-flex items-center">
                <FaHome className="mr-2" />
                Trang chủ
              </Link>
              <span className="mx-2">/</span>
              <Link href="/projects" className="text-gray-200 hover:text-white">
                Dự án
              </Link>
            </div>
          </div>
        </div>

        {/* Main container */}
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-5 gap-8 p-8">
              {/* Left column - Image and project info */}
              <div className="md:col-span-3 space-y-6">
                <div className="relative rounded-xl overflow-hidden shadow-lg h-[400px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="absolute top-4 right-4">
                    {isCompleted ? (
                      <span className="bg-green-500 text-white px-4 py-2 rounded-full font-medium flex items-center">
                        <FaCheckCircle className="mr-2" />
                        Hoàn thành
                      </span>
                    ) : (
                      <span className="bg-pink-500 text-white px-4 py-2 rounded-full font-medium flex items-center">
                        <FaClock className="mr-2" />
                        Đang diễn ra
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full">
                    <FaHeart className="text-pink-500 mr-2" />
                    <span className="font-medium">{project.donorsCount || 0} lượt ủng hộ</span>
                  </div>
                  
                  {project.endDate && (
                    <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full">
                      <FaClock className="text-gray-500 mr-2" />
                      <span className="font-medium">Kết thúc: {project.endDate}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Right column - Donation form */}
              <div className="md:col-span-2 space-y-6">
                <DonationForm 
                  project={project} 
                  donationAmount={donationAmount}
                  setDonationAmount={setDonationAmount}
                  setShowDonationModal={setShowDonationModal}
                />
              </div>
            </div>

            {/* Tabs */}
            <ProjectTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
        </div>
      </main>
      
      {/* Donation Modal */}
      {showDonationModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Thông tin ủng hộ</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Họ và tên</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="Nhập họ và tên của bạn"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Số tiền ủng hộ</label>
                <div className="relative">
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                    value={donationAmount.toLocaleString()}
                    readOnly
                  />
                  <span className="absolute right-4 top-2 text-gray-500">đ</span>
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Lời nhắn (không bắt buộc)</label>
                <textarea 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="Nhập lời nhắn của bạn"
                  rows={3}
                />
              </div>
              <div className="flex gap-4 pt-2">
                <button 
                  type="button" 
                  className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-medium hover:bg-gray-300 transition"
                  onClick={() => setShowDonationModal(false)}
                >
                  Đóng
                </button>
                <button 
                  type="submit" 
                  className="flex-1 bg-pink-500 text-white py-3 rounded-lg font-medium hover:bg-pink-600 transition"
                >
                  Xác nhận
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      
      <Footer />
    </>
  );
};

// Updated DonationForm component
interface DonationFormProps {
  project: Project;
  donationAmount: number;
  setDonationAmount: (amount: number) => void;
  setShowDonationModal: (show: boolean) => void;
}

const DonationForm: React.FC<DonationFormProps> = ({
  project,
  donationAmount,
  setDonationAmount,
  setShowDonationModal
}) => {
  const progress = Math.min((project.currentAmount / project.targetAmount) * 100, 100);
  const progressFormatted = progress.toFixed(1);
  
  const predefinedAmounts = [100000, 200000, 500000, 1000000, 2000000];
  
  return (
    <div className="space-y-6 bg-gray-50 p-6 rounded-xl border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800">Thông tin quyên góp</h2>
      
      <div className="space-y-4">
        <div className="flex justify-between text-sm text-gray-600">
          <span>Đã quyên góp</span>
          <span className="font-medium text-pink-600">{project.currentAmount.toLocaleString()}đ</span>
        </div>
        
        <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="absolute h-full bg-pink-500 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="flex justify-between text-sm">
          <span className="font-medium text-pink-600">{progressFormatted}%</span>
          <span className="font-medium text-gray-700">Mục tiêu: {project.targetAmount.toLocaleString()}đ</span>
        </div>
        
        <div className="pt-4">
          <p className="text-sm text-gray-700 mb-3">Chọn số tiền ủng hộ:</p>
          <div className="grid grid-cols-3 gap-2 mb-4">
            {predefinedAmounts.map((amount) => (
              <button
                key={amount}
                onClick={() => setDonationAmount(amount)}
                className={`py-2 rounded-lg text-sm font-medium transition ${
                  donationAmount === amount
                    ? 'bg-pink-500 text-white'
                    : 'bg-white border border-gray-300 text-gray-700 hover:border-pink-300'
                }`}
              >
                {amount.toLocaleString()}đ
              </button>
            ))}
          </div>
        </div>
        
        <button 
          className="w-full bg-pink-500 text-white py-3 rounded-lg font-medium hover:bg-pink-600 transition flex items-center justify-center"
          onClick={() => setShowDonationModal(true)}
        >
          <FaHeart className="mr-2" />
          Ủng hộ ngay
        </button>
      </div>
    </div>
  );
};

// Project Tabs component
export const ProjectTabs: React.FC<ProjectTabsProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="border-t">
      <div className="flex p-4 border-b">
        <button
          onClick={() => setActiveTab('content')}
          className={`px-6 py-3 font-medium transition-colors flex items-center ${
            activeTab === 'content'
              ? 'border-b-2 border-pink-500 text-pink-500'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <FaFileAlt className="mr-2" />
          Nội dung
        </button>
        <button
          onClick={() => setActiveTab('donors')}
          className={`px-6 py-3 font-medium transition-colors flex items-center ${
            activeTab === 'donors'
              ? 'border-b-2 border-pink-500 text-pink-500'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <FaUsers className="mr-2" />
          Danh sách ủng hộ
        </button>
      </div>

      {/* <div className="p-6">
        {activeTab === 'content' ? <ProjectContent /> : <DonorsList />}
      </div> */}
    </div>
  );
};

// // Project Content component
// export const ProjectContent = () => (
//   <div className="prose max-w-none space-y-6">
//     <h2 className="text-2xl font-bold text-gray-800 flex items-center">
//       <FaChild className="text-pink-500 mr-3" />
//       Hoàn cảnh gia đình
//     </h2>
//     <p className="text-gray-600 leading-relaxed">
//       Bé Lê Huỳnh Gia Khánh sinh non vào tuần thứ 31 của thai kỳ. Khi chào đời, bé chỉ nặng 1.4kg và gặp nhiều vấn đề sức khỏe nghiêm trọng. Gia đình bé thuộc diện khó khăn, bố mẹ làm nghề tự do với thu nhập không ổn định.
//     </p>
    
//     <p className="text-gray-600 leading-relaxed">
//       Hiện tại, bé đang cần được điều trị tại bệnh viện với chi phí rất lớn. Mỗi ngày điều trị tốn khoảng 5 triệu đồng, vượt quá khả năng chi trả của gia đình. Dự kiến bé sẽ phải điều trị trong vòng 2 tháng tới.
//     </p>
    
//     <div className="bg-pink-50 border-l-4 border-pink-500 p-4 rounded-r-lg my-8">
//       <h3 className="text-lg font-semibold text-pink-700 mb-2">Mục đích quyên góp</h3>
//       <p className="text-gray-700">
//         Số tiền quyên góp sẽ được sử dụng để chi trả chi phí điều trị tại bệnh viện, thuốc men, và các xét nghiệm cần thiết cho bé Gia Khánh trong 2 tháng tới.
//       </p>
//     </div>
    
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
//       <div className="bg-gray-50 p-4 rounded-lg">
//         <h4 className="font-medium text-gray-800 mb-2">Thông tin liên hệ gia đình</h4>
//         <p className="text-gray-600">Anh Lê Văn Hải (Bố của bé)</p>
//         <p className="text-gray-600">SĐT: 098xxxxxxx</p>
//       </div>
      
//       <div className="bg-gray-50 p-4 rounded-lg">
//         <h4 className="font-medium text-gray-800 mb-2">Tình trạng của bé</h4>
//         <p className="text-gray-600">Sinh non, cân nặng thấp</p>
//         <p className="text-gray-600">Cần điều trị đặc biệt trong 2 tháng</p>
//       </div>
//     </div>
//   </div>
// );

// Donors List component - now with sample data
export const DonorsList = () => {
  // Sample donors data
  const donors = [
    { id: '1', name: 'Nguyễn Văn A', amount: 500000, message: 'Chúc bé mau khỏe!', createdAt: '2025-03-20T08:30:00Z' },
    { id: '2', name: 'Trần Thị B', amount: 1000000, message: 'Mong bé sớm khỏe mạnh', createdAt: '2025-03-19T14:45:00Z' },
    { id: '3', name: 'Phạm Văn C', amount: 200000, createdAt: '2025-03-18T10:15:00Z' },
    { id: '4', name: 'Ẩn danh', amount: 2000000, message: 'Gửi tặng bé yêu', createdAt: '2025-03-17T16:20:00Z' },
    { id: '5', name: 'Lê Thị D', amount: 100000, createdAt: '2025-03-16T09:10:00Z' },
  ];
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('vi-VN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };
  
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Danh sách ủng hộ ({donors.length})</h2>
      
      {donors.length === 0 ? (
        <p className="text-gray-600 text-center py-8">Chưa có lượt ủng hộ nào. Hãy là người đầu tiên ủng hộ!</p>
      ) : (
        <div className="space-y-4">
          {donors.map((donor) => (
            <div key={donor.id} className="border border-gray-100 rounded-lg p-4 bg-gray-50">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-gray-800">{donor.name}</h4>
                  <p className="text-sm text-gray-500">{formatDate(donor.createdAt)}</p>
                </div>
                <div className="text-pink-600 font-bold">{donor.amount.toLocaleString()}đ</div>
              </div>
              {donor.message && (
                <div className="mt-2 pt-2 border-t text-gray-600">
                  "{donor.message}"
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;