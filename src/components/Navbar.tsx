import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-pink-500">
          <i className="fas fa-heart mr-2"></i>GiveNow
        </div>

        {/* Menu chính */}
        <div className="hidden md:flex space-x-6">
          <a href="http://localhost:3003/about" className="hover:text-pink-500 transition-colors">
            <i className="fas fa-home mr-1"></i>Trang chủ
          </a>
          <a href="#" className="hover:text-pink-500 transition-colors">
            <i className="fas fa-project-diagram mr-1"></i>Dự án
          </a>
          <a href="#" className="hover:text-pink-500 transition-colors">
            <i className="fas fa-info-circle mr-1"></i>Về chúng tôi
          </a>
          <a href="#" className="hover:text-pink-500 transition-colors">
            <i className="fas fa-book mr-1"></i>Hướng dẫn
          </a>
        </div>

        {/* Nút hành động */}
        <div className="flex items-center space-x-4">
          <button className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-colors">
            <i className="fas fa-hand-holding-heart mr-2"></i>Ủng hộ ngay
          </button>
          <button className="border-2 border-pink-500 text-pink-500 px-6 py-2 rounded-full hover:bg-pink-50 transition-colors">
            <i className="fas fa-user mr-2"></i>Đăng ký
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
