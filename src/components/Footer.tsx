import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">GiveAway Team</h3>
            <div className="flex items-center mb-4">
              <Image
                src="/logo.png"
                alt="GiveAway Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <p className="mb-2">📍 227 Nguyễn Văn Cừ, Quận 5</p>
            <p className="mb-2">🌆 TP. Hồ Chí Minh, Việt Nam</p>
            <p className="mb-2">📱 Phone: +84 123 456 789</p>
            <p>📧 Email: contact@giveaway.com</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <Link href="/about" className="hover:text-gray-400 transition-colors flex items-center">
                  <span className="mr-2">👥</span> About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/services" className="hover:text-gray-400 transition-colors flex items-center">
                  <span className="mr-2">🎁</span> Our Services
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="hover:text-gray-400 transition-colors flex items-center">
                  <span className="mr-2">📞</span> Contact
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/privacy" className="hover:text-gray-400 transition-colors flex items-center">
                  <span className="mr-2">🔒</span> Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Google Maps */}
          <div>
            <h3 className="text-xl font-bold mb-4">Find Us</h3>
            <div className="w-full h-[250px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6697269378337!2d106.68006621474899!3d10.759917362439628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1b7c3ed289%3A0xa06651894598e488!2sUniversity%20of%20Science%20-%20VNUHCM!5e0!3m2!1sen!2s!4v1680501477827!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} GiveAway Team. All rights reserved.
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

