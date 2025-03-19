import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "@/components/Footer";
const About: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto my-12 bg-white shadow-lg rounded-lg overflow-hidden p-8">
        <h1 className="text-3xl font-bold text-green-600 mb-6">Về GiveNow</h1>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-700 mb-4">
              GiveNow là nền tảng gây quỹ cộng đồng phi lợi nhuận, ra đời với sứ mệnh kết nối những tấm lòng hảo tâm với những hoàn cảnh khó khăn trên khắp Việt Nam.
            </p>
            <p className="text-gray-700 mb-4">
              Chúng tôi tin rằng mỗi đóng góp dù nhỏ đều có thể tạo nên những thay đổi lớn lao. Từ việc hỗ trợ y tế, giáo dục đến các chương trình phát triển cộng đồng, GiveNow luôn đồng hành cùng những mục tiêu nhân văn.
            </p>
            <p className="text-gray-700">
              Với sự minh bạch, tin cậy và kết nối cộng đồng, chúng tôi mong muốn góp phần xây dựng một xã hội nhân ái, quan tâm và hỗ trợ lẫn nhau.
            </p>
          </div>
          
        </div>
      </div>

      {/* Đối Tác & Tổ Chức */}
      <div className="container mx-auto my-12 bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-green-600 text-center mb-8">Đối Tác & Tổ Chức</h2>
        <div className="grid grid-cols-5 gap-8 justify-items-center">
          {Array(16)
            .fill(null)
            .map((_, index) => (
              <img
                key={index}
                src="https://givenow.vn/wp-content/uploads/2023/03/Huy-hieu-Doan-copy-1.jpg"
                alt={`Partner ${index + 1}`}
                className="h-15 grayscale hover:grayscale-0 transition"
              />
            ))}
        </div>
      </div>

      {/* Đội Ngũ Sáng Lập */}
      <div className="container mx-auto my-12 bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-green-600 text-center mb-8">Đội Ngũ Sáng Lập</h2>
        <div className="grid grid-cols-5 gap-6">
          {["Nguyễn Văn A", "Trần Thị B", "Lê Văn C", "Phạm Thị D", "Hoàng Văn E"].map((name, index) => (
            <div className="text-center" key={index}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqvIGHJMlsT-Rb9XtJQTPEW-brPyVFw-LO8Q&s.jpg"
                alt={`Founder ${index + 1}`}
                className="w-full rounded-lg mb-4 shadow-md"
              />
              <h3 className="font-semibold text-gray-800">{name}</h3>
              <p className="text-sm text-gray-600">{["Chủ tịch", "Giám đốc Điều hành", "Giám đốc Kỹ thuật", "Giám đốc Truyền thông", "Giám đốc Quan hệ Đối tác"][index]}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Messenger Icon */}
      <div className="fixed bottom-4 right-4 bg-purple-500 text-white p-3 rounded-full shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </div>
      <Footer />
    </>
  );
};

export default About;
