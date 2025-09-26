import { useNavigate } from "react-router-dom";
import Header from "../components/header.jsx";
import NavButton from "../components/NavButton.jsx";
function Home() {
  return (
    <div>
      <div className="px-2 md:px-10">
        {/* <!--header--> */}
        <Header />

        {/* <!--spot--> */}
        <section id="spotlight" className="pt-28 bg-white rounded-lg">
          <div className="relative w-full h-[500px] md:h-64 flex items-center justify-center rounded-lg">
            <img
              src="img/spot.jpg"
              alt="Spotlight"
              className="rounded-lg absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="absolute rounded-lg inset-0 bg-black bg-opacity-80 z-1"></div>
            <div className="relative z-20 text-white text-center px-3 md:px-4">
              <h2 className="text-3xl font-bold mb-2">
                Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
                Interaktif!
              </h2>
              <p className="text-lg">
                Temukan ilmu baru yang menarik dan mendalam melalui koleksi
                video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda
                juga dapat berpartisipasi dalam latihan interaktif yang akan
                meningkatkan pemahaman Anda.
              </p>
              <button className="px-2 h-12 mt-4 mx-auto bg-green-400 text-white hover:bg-green-600 font-semibold rounded-md">
                Temukan Video Course untuk Dipelajari!
              </button>
            </div>
          </div>
        </section>

        {/* <!--headmenu--> */}
        <section id="headmenu" className="pt-14 bg-lightgray px-2">
          <div className="w-full">
            <h2 className="text-black text-3xl font-bold">
              Koleksi Video Pembelajaran Unggulan
            </h2>
            <p className="text-darkgray text-lg font-semibold mt-3">
              Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
            </p>
          </div>
        </section>

        {/* <!--mininav--> */}
        <section id="mininav" className="text-darkgray px-2">
          <nav className="flex flex-wrap items-center gap-8 pt-12 font-semibold text-lg">
            <a href="#" data-filter="all" className="filter-btn active">
              SemuaKelas
            </a>
            <a href="#" data-filter="pemasaran" className="filter-btn">
              Pemasaran
            </a>
            <a href="#" data-filter="desain" className="filter-btn">
              Desain
            </a>
            <a href="#" data-filter="pengembangan" className="filter-btn">
              PengembanganDiri
            </a>
            <a href="#" data-filter="bisnis" className="filter-btn">
              Bisnis
            </a>
          </nav>
        </section>

        {/* <!--video course--> */}
        <section id="videocourse" className="w-full mt-10">
          <div className="w-full md:flex flex-wrap justify-evenly ">
            {/* contoh 1 */}
            <div className="containervideo desain">
              <img
                src="img/1.jpg"
                alt="draft1"
                className="w-1/3 box-border h-32 rounded-lg md:videoimg"
              />
              <div className="w-3/5 md:flex md:w-full md:flex-wrap">
                <h3 className="font-bold md:w-full">Beginner Design course</h3>
                <p className="hidden md:flex">
                  Mulai transformasi dengan instruktur profesional dengan harga
                  terjangkau dan kurikulum terbaik
                </p>
                <div className="flex justify-between items-center">
                  <img
                    src="img/avatar1.png"
                    alt="avatar1"
                    className="py-4 avatarimg rounded-lg w-1/5"
                  />
                  <div className="w-4/5 p-2">
                    <h4 className="font-semibold">Alex Ortega</h4>
                    <p className="text-darkgray">Senior Accountant</p>
                  </div>
                  <p className="hidden md:block font-semibold text-black ml-auto">
                    di gojek
                  </p>
                </div>
              </div>

              <div className="rating-container">
                <div className="rating">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star-half-stroke"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
                <span className="review">3.5 (86)</span>
                <span className="price">Rp 300K</span>
              </div>
            </div>

            {/* contoh 1 */}
            <div className="containervideo desain">
              <img
                src="img/1.jpg"
                alt="draft1"
                className="w-1/3 box-border h-32 rounded-lg md:videoimg"
              />
              <div className="w-3/5 md:flex md:w-full md:flex-wrap">
                <h3 className="font-bold md:w-full">Beginner Design course</h3>
                <p className="hidden md:flex">
                  Mulai transformasi dengan instruktur profesional dengan harga
                  terjangkau dan kurikulum terbaik
                </p>
                <div className="flex justify-between items-center">
                  <img
                    src="img/avatar1.png"
                    alt="avatar1"
                    className="py-4 avatarimg rounded-lg w-1/5"
                  />
                  <div className="w-4/5 p-2">
                    <h4 className="font-semibold">Alex Ortega</h4>
                    <p className="text-darkgray">Senior Accountant</p>
                  </div>
                  <p className="hidden md:block font-semibold text-black ml-auto">
                    di gojek
                  </p>
                </div>
              </div>

              <div className="rating-container">
                <div className="rating">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star-half-stroke"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
                <span className="review">3.5 (86)</span>
                <span className="price">Rp 300K</span>
              </div>
            </div>

            {/* contoh 1 */}
            <div className="containervideo desain">
              <img
                src="img/1.jpg"
                alt="draft1"
                className="w-1/3 box-border h-32 rounded-lg md:videoimg"
              />
              <div className="w-3/5 md:flex md:w-full md:flex-wrap">
                <h3 className="font-bold md:w-full">Beginner Design course</h3>
                <p className="hidden md:flex">
                  Mulai transformasi dengan instruktur profesional dengan harga
                  terjangkau dan kurikulum terbaik
                </p>
                <div className="flex justify-between items-center">
                  <img
                    src="img/avatar1.png"
                    alt="avatar1"
                    className="py-4 avatarimg rounded-lg w-1/5"
                  />
                  <div className="w-4/5 p-2">
                    <h4 className="font-semibold">Alex Ortega</h4>
                    <p className="text-darkgray">Senior Accountant</p>
                  </div>
                  <p className="hidden md:block font-semibold text-black ml-auto">
                    di gojek
                  </p>
                </div>
              </div>

              <div className="rating-container">
                <div className="rating">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star-half-stroke"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
                <span className="review">3.5 (86)</span>
                <span className="price">Rp 300K</span>
              </div>
            </div>

            {/* contoh 1 */}
            <div className="containervideo desain">
              <img
                src="img/1.jpg"
                alt="draft1"
                className="w-1/3 box-border h-32 rounded-lg md:videoimg"
              />
              <div className="w-3/5 md:flex md:w-full md:flex-wrap">
                <h3 className="font-bold md:w-full">Beginner Design course</h3>
                <p className="hidden md:flex">
                  Mulai transformasi dengan instruktur profesional dengan harga
                  terjangkau dan kurikulum terbaik
                </p>
                <div className="flex justify-between items-center">
                  <img
                    src="img/avatar1.png"
                    alt="avatar1"
                    className="py-4 avatarimg rounded-lg w-1/5"
                  />
                  <div className="w-4/5 p-2">
                    <h4 className="font-semibold">Alex Ortega</h4>
                    <p className="text-darkgray">Senior Accountant</p>
                  </div>
                  <p className="hidden md:block font-semibold text-black ml-auto">
                    di gojek
                  </p>
                </div>
              </div>

              <div className="rating-container">
                <div className="rating">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star-half-stroke"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
                <span className="review">3.5 (86)</span>
                <span className="price">Rp 300K</span>
              </div>
            </div>

            {/* contoh 1 */}
            <div className="containervideo desain">
              <img
                src="img/1.jpg"
                alt="draft1"
                className="w-1/3 box-border h-32 rounded-lg md:videoimg"
              />
              <div className="w-3/5 md:flex md:w-full md:flex-wrap">
                <h3 className="font-bold md:w-full">Beginner Design course</h3>
                <p className="hidden md:flex">
                  Mulai transformasi dengan instruktur profesional dengan harga
                  terjangkau dan kurikulum terbaik
                </p>
                <div className="flex justify-between items-center">
                  <img
                    src="img/avatar1.png"
                    alt="avatar1"
                    className="py-4 avatarimg rounded-lg w-1/5"
                  />
                  <div className="w-4/5 p-2">
                    <h4 className="font-semibold">Alex Ortega</h4>
                    <p className="text-darkgray">Senior Accountant</p>
                  </div>
                  <p className="hidden md:block font-semibold text-black ml-auto">
                    di gojek
                  </p>
                </div>
              </div>

              <div className="rating-container">
                <div className="rating">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star-half-stroke"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
                <span className="review">3.5 (86)</span>
                <span className="price">Rp 300K</span>
              </div>
            </div>

            {/* contoh 1 */}
            <div className="containervideo desain">
              <img
                src="img/1.jpg"
                alt="draft1"
                className="w-1/3 box-border h-32 rounded-lg md:videoimg"
              />
              <div className="w-3/5 md:flex md:w-full md:flex-wrap">
                <h3 className="font-bold md:w-full">Beginner Design course</h3>
                <p className="hidden md:flex">
                  Mulai transformasi dengan instruktur profesional dengan harga
                  terjangkau dan kurikulum terbaik
                </p>
                <div className="flex justify-between items-center">
                  <img
                    src="img/avatar1.png"
                    alt="avatar1"
                    className="py-4 avatarimg rounded-lg w-1/5"
                  />
                  <div className="w-4/5 p-2">
                    <h4 className="font-semibold">Alex Ortega</h4>
                    <p className="text-darkgray">Senior Accountant</p>
                  </div>
                  <p className="hidden md:block font-semibold text-black ml-auto">
                    di gojek
                  </p>
                </div>
              </div>

              <div className="rating-container">
                <div className="rating">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star-half-stroke"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
                <span className="review">3.5 (86)</span>
                <span className="price">Rp 300K</span>
              </div>
            </div>

            {/* contoh 1 */}
            <div className="containervideo desain">
              <img
                src="img/1.jpg"
                alt="draft1"
                className="w-1/3 box-border h-32 rounded-lg md:videoimg"
              />
              <div className="w-3/5 md:flex md:w-full md:flex-wrap">
                <h3 className="font-bold md:w-full">Beginner Design course</h3>
                <p className="hidden md:flex">
                  Mulai transformasi dengan instruktur profesional dengan harga
                  terjangkau dan kurikulum terbaik
                </p>
                <div className="flex justify-between items-center">
                  <img
                    src="img/avatar1.png"
                    alt="avatar1"
                    className="py-4 avatarimg rounded-lg w-1/5"
                  />
                  <div className="w-4/5 p-2">
                    <h4 className="font-semibold">Alex Ortega</h4>
                    <p className="text-darkgray">Senior Accountant</p>
                  </div>
                  <p className="hidden md:block font-semibold text-black ml-auto">
                    di gojek
                  </p>
                </div>
              </div>

              <div className="rating-container">
                <div className="rating">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star-half-stroke"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
                <span className="review">3.5 (86)</span>
                <span className="price">Rp 300K</span>
              </div>
            </div>

            {/* contoh 1 */}
            <div className="containervideo desain">
              <img
                src="img/1.jpg"
                alt="draft1"
                className="w-1/3 box-border h-32 rounded-lg md:videoimg"
              />
              <div className="w-3/5 md:flex md:w-full md:flex-wrap">
                <h3 className="font-bold md:w-full">Beginner Design course</h3>
                <p className="hidden md:flex">
                  Mulai transformasi dengan instruktur profesional dengan harga
                  terjangkau dan kurikulum terbaik
                </p>
                <div className="flex justify-between items-center">
                  <img
                    src="img/avatar1.png"
                    alt="avatar1"
                    className="py-4 avatarimg rounded-lg w-1/5"
                  />
                  <div className="w-4/5 p-2">
                    <h4 className="font-semibold">Alex Ortega</h4>
                    <p className="text-darkgray">Senior Accountant</p>
                  </div>
                  <p className="hidden md:block font-semibold text-black ml-auto">
                    di gojek
                  </p>
                </div>
              </div>

              <div className="rating-container">
                <div className="rating">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star-half-stroke"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
                <span className="review">3.5 (86)</span>
                <span className="price">Rp 300K</span>
              </div>
            </div>
          </div>
        </section>

        {/* <!--news--> */}
        <section id="newsletter" className=" bg-black">
          <div className="relative w-full h-auto flex items-center justify-center">
            <img
              src="img/newsletter.jpg"
              alt="Spotlight"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="absolute inset-0 bg-black bg-opacity-80 z-1"></div>
            <div className="py-12 md:w-2/5 relative z-20 text-white text-center px-4">
              <h5 className="text-xl  text-lightgray mb-2">NEWSLETTER</h5>
              <h3 className="text-2xl font-bold mb-2">
                Mau Belajar Lebih Banyak?
              </h3>
              <p className="text-lg">
                Daftarkan dirimu untuk mendapatkan informasi terbaru dan
                penawaran spesial dari program-program terbaik videobelajar.id
              </p>
              <div className="flex justify-center mt-10">
                <div className="flex justify-center flex-wrap md:relative md:w-80">
                  <input
                    type="text"
                    className="placeholder:text-center md:placeholder:text-start w-full p-2 md:pr-24 rounded-lg text-black placeholder:text-gray-500 border border-gray-300"
                    placeholder="masukkan emailmu"
                  />
                  <button className="justify-center flex w-full mt-6 md:w-auto md:m-0 md:absolute md:top-1/2 md:right-1 md:-translate-y-1/2 bg-yellow-500 px-3 py-1 rounded-lg font-bold text-white">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* <!--footer--> */}
      <footer className="bg-white mt-12 w-full pt-14 h-auto">
        <div className="flex flex-wrap justify-between lg:flex-nowrap">
          {/* <!-- Kiri --> */}
          <div className="w-full mb-6 pl-4 pr-4 md:mb-0 md:w-1/3 md:pl-10 box-border">
            <img src="img/logo3.png" alt="" className="w-auto h-16" />
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

          {/* <!-- Kanan dengan dropdown --> */}
          <div className="pl-4 pr-4 md:pr-10 md:flex justify-evenly w-full md:w-1/2">
            {/* <!-- Kategori --> */}
            <div className="w-full md:w-auto mb-4 md:mb-0">
              <button className="w-full flex justify-between items-center text-black font-bold text-lg mb-2 md:mb-4 md:cursor-default dropdown-btn">
                Kategori
                <span className="md:hidden">▼</span>
              </button>
              <ul className="hidden md:block space-y-2 text-darkgray dropdown-content">
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

            {/* <!-- Perusahaan --> */}
            <div className="w-full md:w-auto mb-4 md:mb-0">
              <button className="w-full flex justify-between items-center text-black font-bold text-lg mb-2 md:mb-4 md:cursor-default dropdown-btn">
                Perusahaan
                <span className="md:hidden">▼</span>
              </button>
              <ul className="hidden md:block space-y-2 text-darkgray dropdown-content">
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

            {/* <!-- Komunitas --> */}
            <div className="w-full md:w-auto">
              <button className="w-full flex justify-between items-center text-black font-bold text-lg mb-2 md:mb-4 md:cursor-default dropdown-btn">
                Komunitas
                <span className="md:hidden">▼</span>
              </button>
              <ul className="hidden md:block space-y-2 text-darkgray dropdown-content">
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

        <div>
          {/* <!--credit--> */}
          <hr className="border-t border-gray-300 mt-4" />
          <div className="pl-4 flex flex-col-reverse md:flex-row md:text-center text-gray-500 text-sm py-4 md:px-10 justify-between pb-8 items-start">
            {/* <!-- Copyright --> */}
            <div className="mt-4 md:mt-0">
              <p>@2025 Freedy estiawan All Rights Reserved.</p>
            </div>

            {/* <!-- Sosmed --> */}
            <div className="flex space-x-4">
              {/* <!-- LinkedIn --> */}
              <a
                href="https://www.linkedin.com/in/freedy-estiawan-bbb98b244/"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:bg-gray-600 hover:text-white transition"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              {/* <!-- Facebook --> */}
              <a
                href="https://www.facebook.com/share/14MAKGZ9rkM/"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:bg-gray-600 hover:text-white transition"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              {/* <!-- Instagram --> */}
              <a
                href="https://www.instagram.com/freedyestiw?igsh=OG0zZGZpazFyMWoz"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:bg-gray-600 hover:text-white transition"
              >
                <i className="fab fa-instagram"></i>
              </a>
              {/* <!-- Twitter --> */}
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:bg-gray-600 hover:text-white transition"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
