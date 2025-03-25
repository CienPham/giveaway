import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "@/components/Footer";

const About: React.FC = () => {
  const founders = [
    {
      name: "Nguyễn Văn A",
      position: "Chủ tịch",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqvIGHJMlsT-Rb9XtJQTPEW-brPyVFw-LO8Q&s.jpg",
      quote: "Hành trình giúp đỡ là hành trình tìm thấy ý nghĩa cuộc sống."
    },
    {
      name: "Trần Thị B",
      position: "Giám đốc Điều hành",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqvIGHJMlsT-Rb9XtJQTPEW-brPyVFw-LO8Q&s.jpg",
      quote: "Mỗi sự đóng góp đều có thể tạo nên sự thay đổi lớn lao."
    },
    {
      name: "Lê Văn C",
      position: "Giám đốc Kỹ thuật",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqvIGHJMlsT-Rb9XtJQTPEW-brPyVFw-LO8Q&s.jpg",
      quote: "Công nghệ kết nối những trái tim nhân ái."
    },
    {
      name: "Phạm Thị D",
      position: "Giám đốc Truyền thông",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqvIGHJMlsT-Rb9XtJQTPEW-brPyVFw-LO8Q&s.jpg",
      quote: "Mỗi câu chuyện đều xứng đáng được lắng nghe và chia sẻ."
    },
    {
      name: "Hoàng Văn E",
      position: "Giám đốc Quan hệ Đối tác",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqvIGHJMlsT-Rb9XtJQTPEW-brPyVFw-LO8Q&s.jpg",
      quote: "Cùng nhau, chúng ta có thể tạo nên những thay đổi bền vững."
    },
  ];

  const partners = Array(16).fill(null).map((_, index) => ({
    id: index + 1,
    image: "https://givenow.vn/wp-content/uploads/2023/03/Huy-hieu-Doan-copy-1.jpg",
    name: `Đối tác ${index + 1}`
  }));

  const stats = [
    { value: "10,000+", label: "Nhà hảo tâm" },
    { value: "500+", label: "Dự án thành công" },
    { value: "₫20 tỷ+", label: "Quyên góp" },
    { value: "63/63", label: "Tỉnh thành" }
  ];

  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 py-16">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-4">Về GiveNow</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kết nối những tấm lòng hảo tâm với những hoàn cảnh khó khăn trên khắp Việt Nam
          </p>
        </div>
      </div>

      {/* Mission and Vision Section */}
      <div className="container mx-auto my-16 px-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="bg-green-600 text-white p-10">
              <h2 className="text-3xl font-bold mb-6">Sứ mệnh</h2>
              <p className="text-lg mb-4">
                Tạo ra một nền tảng minh bạch, dễ tiếp cận và đáng tin cậy để kết nối những người hảo tâm với những dự án cộng đồng ý nghĩa.
              </p>
              <p className="text-lg">
                Chúng tôi cam kết 100% số tiền quyên góp sẽ đến với đúng đối tượng cần được giúp đỡ.
              </p>
            </div>
            <div className="p-10">
              <h2 className="text-3xl font-bold text-green-700 mb-6">Tầm nhìn</h2>
              <p className="text-lg text-gray-700 mb-4">
                GiveNow ra đời với tầm nhìn trở thành nền tảng gây quỹ cộng đồng hàng đầu Việt Nam, mang lại sự thay đổi tích cực cho xã hội.
              </p>
              <p className="text-lg text-gray-700">
                Chúng tôi tin rằng mỗi đóng góp dù nhỏ đều có thể tạo nên những thay đổi lớn lao. Từ việc hỗ trợ y tế, giáo dục đến các chương trình phát triển cộng đồng, GiveNow luôn đồng hành cùng những mục tiêu nhân văn.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="bg-green-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-green-700 text-center mb-12">Tác động của chúng tôi</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Founders Section */}
      <div className="container mx-auto my-16 px-4">
        <h2 className="text-3xl font-bold text-green-700 text-center mb-12">Đội Ngũ Sáng Lập</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
          {founders.map((founder, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl">
              <img
                src={founder.image}
                alt={founder.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-800">{founder.name}</h3>
                <p className="text-green-600 mb-3">{founder.position}</p>
                <p className="text-gray-600 text-sm italic">"{founder.quote}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Partners Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-green-700 text-center mb-12">Đối Tác & Tổ Chức</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6 justify-items-center">
            {partners.map((partner) => (
              <div key={partner.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="h-16 grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-600 text-white py-16">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Hãy chung tay cùng chúng tôi</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Mỗi đóng góp của bạn đều có thể tạo nên sự thay đổi tích cực. Hãy cùng GiveNow kiến tạo một Việt Nam tốt đẹp hơn.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-green-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition">
              Quyên góp ngay
            </button>
            <button className="bg-green-700 text-white font-bold py-3 px-8 rounded-full hover:bg-green-800 transition">
              Trở thành đối tác
            </button>
          </div>
        </div>
      </div>

      {/* Messenger Icon */}
      <div className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition cursor-pointer z-50">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </div>
      
      <Footer />
    </>
  );
};

export default About;