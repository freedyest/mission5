import { useState } from "react";

function Footer() {
  const [open, setOpen] = useState({
    kategori: false,
    perusahaan: false,
    komunitas: false,
  });

  const toggle = (key) => {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // reusable chevron SVG (right-facing, rotate to point down)
  const Chevron = ({ isOpen }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`w-5 h-5 text-gray-400 transform transition-transform duration-200 ${
        isOpen ? "rotate-90" : "rotate-0"
      }`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  );

  return (
    <footer className="bg-white mt-12 w-full pt-14 h-auto md:px-20">
      <div className="flex flex-wrap justify-between lg:flex-nowrap">
        {/* Kiri */}
        <div className="w-full mb-6 pl-4 pr-4 md:mb-0 md:w-1/3 md:p-0 box-border">
          <img
            src={`${import.meta.env.BASE_URL}Logo.png`}
            alt=""
            className="w-auto h-16"
          />
          <div className="md:w-full">
            <h3 className="mt-6 font-bold text-md text-darkgray">
              Gali Potensi Anda Melalui Pembelajaran Video di videobelajar.id!
            </h3>
            <p className="text-darkgray mt-3">
              Jl. Usman Effendi No. 50 Lowokwaru, Malang
            </p>
            <p className="text-darkgray mt-3">+62-877-7123-1234</p>
          </div>
        </div>

        {/* Kanan dengan dropdown */}
        <div className="pl-4 pr-4 md:pr-10 md:flex justify-evenly w-full md:w-1/2">
          {/* Kategori */}
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <button
              onClick={() => toggle("kategori")}
              className="w-full flex justify-between items-center text-black font-bold text-lg mb-2 md:mb-4 md:cursor-default"
            >
              Kategori
              <span className="md:hidden">
                <Chevron isOpen={open.kategori} />
              </span>
            </button>
            <ul
              className={`${
                open.kategori ? "block" : "hidden"
              } md:block space-y-2 text-darkgray`}
            >
              <li>
                <a href="#" className="hover:underline">
                  Digital & Teknologi
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Pemasaran
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Manajemen Bisnis
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Pengembangan Diri
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Desain
                </a>
              </li>
            </ul>
          </div>

          {/* Perusahaan */}
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <button
              onClick={() => toggle("perusahaan")}
              className="w-full flex justify-between items-center text-black font-bold text-lg mb-2 md:mb-4 md:cursor-default"
            >
              Perusahaan
              <span className="md:hidden">
                <Chevron isOpen={open.perusahaan} />
              </span>
            </button>
            <ul
              className={`${
                open.perusahaan ? "block" : "hidden"
              } md:block space-y-2 text-darkgray`}
            >
              <li>
                <a href="#" className="hover:underline">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Ketentuan Layanan
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Bantuan
                </a>
              </li>
            </ul>
          </div>

          {/* Komunitas */}
          <div className="w-full md:w-auto">
            <button
              onClick={() => toggle("komunitas")}
              className="w-full flex justify-between items-center text-black font-bold text-lg mb-2 md:mb-4 md:cursor-default"
            >
              Komunitas
              <span className="md:hidden">
                <Chevron isOpen={open.komunitas} />
              </span>
            </button>
            <ul
              className={`${
                open.komunitas ? "block" : "hidden"
              } md:block space-y-2 text-darkgray`}
            >
              <li>
                <a href="#" className="hover:underline">
                  Tips Sukses
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Credit */}
      <hr className="border-t border-gray-300 mt-4" />
      <div className="pl-4 flex flex-col-reverse md:flex-row md:text-center text-gray-500 text-sm py-4 md:px-0 justify-between pb-8 items-start">
        <div className="mt-4 md:mt-0">
          <p>@2025 Freedy estiawan All Rights Reserved.</p>
        </div>
        <div className="flex space-x-4">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/freedy-estiawan-bbb98b244/"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 hover:bg-gray-600 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="#222325"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.82-2.2 3.75-2.2 4.01 0 4.75 2.64 4.75 6.08V24h-4v-7.6c0-1.81-.03-4.15-2.53-4.15-2.54 0-2.93 1.98-2.93 4.02V24h-4V8z" />
            </svg>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/share/14MAKGZ9rkM/"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 hover:bg-gray-600 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="#222325"
              viewBox="0 0 24 24"
            >
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99h-2.54V12h2.54V9.8c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 17 22 12z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/freedyestiw?igsh=OG0zZGZpazFyMWoz"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 hover:bg-gray-600 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="#222325"
              viewBox="0 0 24 24"
            >
              <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2C6.12 4 5 5.12 5 6.5v11c0 1.38 1.12 2.5 2.5 2.5h11c1.38 0 2.5-1.12 2.5-2.5v-11C21 5.12 19.88 4 18.5 4h-11zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.25-.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0z" />
            </svg>
          </a>

          {/* Twitter */}
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 hover:bg-gray-600 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="#222325"
              viewBox="0 0 24 24"
            >
              <path d="M23 4.5a9.27 9.27 0 0 1-2.65.73A4.62 4.62 0 0 0 22.38 3a9.18 9.18 0 0 1-2.92 1.12 4.6 4.6 0 0 0-7.85 4.2A13.06 13.06 0 0 1 3.16 3.6a4.6 4.6 0 0 0 1.42 6.14 4.56 4.56 0 0 1-2.09-.58v.06a4.6 4.6 0 0 0 3.7 4.5 4.63 4.63 0 0 1-2.08.08 4.61 4.61 0 0 0 4.29 3.19A9.22 9.22 0 0 1 2 19.54a12.99 12.99 0 0 0 7.07 2.07c8.49 0 13.15-7.04 13.15-13.15 0-.2 0-.41-.02-.61A9.27 9.27 0 0 0 23 4.5z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
