import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-10 border-t border-gray-300">
      <div className="container mx-auto px-4 py-8 flex flex-col items-center text-center gap-3">
        <h2 className="text-lg font-semibold">Soheb Khan</h2>
        <p className="text-sm">📧 sohebkhan3145@gmail.com</p>
        <p className="text-sm">📱 +91 93244 58770</p>
        <a
          href="https://lively-paletas-1868df.netlify.app/"
          className="text-blue-600 underline text-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit My Portfolio
        </a>

        <div className="flex gap-6 mt-4 text-xl">
          <a
            href="https://www.linkedin.com/in/soheb-khan-574199247/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/soheb85"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black"
          >
            <FaGithub />
          </a>
          <a
            href="https://wa.me/919324458770"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600"
          >
            <FaWhatsapp />
          </a>
        </div>

        <p className="text-sm mt-4">
          Created with ❤️ by <span className="font-semibold">Soheb Khan</span>
        </p>
        <p className="text-xs text-gray-500">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
