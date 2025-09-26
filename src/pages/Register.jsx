import { useNavigate } from "react-router-dom";
import { useState } from "react";
import eyesOff from "../assets/eyesoff.png";
import eyesOn from "../assets/eyeson.png";

function Register() {
  const navigate = useNavigate();

  // State untuk password
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // State dropdown
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    flag: "https://flagcdn.com/w20/id.png",
    code: "+62",
  });

  const countries = [
    { flag: "https://flagcdn.com/w20/id.png", code: "+62" },
    { flag: "https://flagcdn.com/w20/us.png", code: "+1" },
    { flag: "https://flagcdn.com/w20/sg.png", code: "+65" },
  ];

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
    setDropdownOpen(false);
  };

  return (
    <div>
      {/* Header */}
      <header>
        <div className="fixed top-0 left-0 w-full bg-white h-auto">
          <div className="px-4 lg:px-14 py-2 flex items-center">
            <img
              src={`${import.meta.env.BASE_URL}logo3.png`}
              alt="Logo"
              className="h-12 w-auto"
            />
          </div>
        </div>
      </header>

      {/* Main section */}
      <section
        id="Register"
        className="min-h-screen flex items-center justify-center py-36"
      >
        <div className="bg-white rounded-lg shadow-lg p-8 text-center w-5/6 lg:w-1/2">
          <h1 className="text-3xl font-bold">Pendaftaran Akun</h1>
          <h2 className="text-darkgray text-lg">
            Yuk, daftarkan akunmu sekarang juga!
          </h2>

          <div className="mt-8">
            {/* Nama */}
            <div className="mb-5 text-start">
              <label
                htmlFor="nama"
                className="block text-sm font-medium text-gray-700"
              >
                Nama Lengkap <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="nama"
                name="nama"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Email */}
            <div className="mb-5 text-start">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Phone number */}
            <div className="mb-5 text-start">
              <label
                htmlFor="phonenumber"
                className="block text-sm font-medium text-gray-700"
              >
                No. HP <span className="text-red-600">*</span>
              </label>
              <div className="flex relative">
                <button
                  type="button"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center border border-gray-300 rounded-l-md px-2 py-2 bg-white"
                >
                  <img
                    src={selectedCountry.flag}
                    alt="flag"
                    className="w-5 h-4 mr-2"
                  />
                  {selectedCountry.code}
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {dropdownOpen && (
                  <ul className="absolute left-0 top-full mt-1 bg-white border border-gray-300 rounded-md shadow-md z-10">
                    {countries.map((c, i) => (
                      <li
                        key={i}
                        className="px-3 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                        onClick={() => handleSelectCountry(c)}
                      >
                        <img src={c.flag} alt="flag" className="w-5 h-4 mr-2" />
                        {c.code}
                      </li>
                    ))}
                  </ul>
                )}

                <input
                  type="tel"
                  id="phonenumber"
                  name="phonenumber"
                  required
                  className="block w-full px-3 py-2 border border-gray-300 rounded-r-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Password */}
            <div className="mb-5 text-start">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Kata Sandi <span className="text-red-600">*</span>
              </label>
              <div className="flex justify-between w-full border border-gray-300 rounded-md shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  className="flex-1 px-3 py-2 focus:outline-none rounded-l-md"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="px-3"
                >
                  <img
                    src={showPassword ? eyesOn : eyesOff}
                    alt="toggle password"
                    className="w-5 h-5"
                  />
                </button>
              </div>
            </div>

            {/* Konfirmasi Password */}
            <div className="mb-5 text-start">
              <label
                htmlFor="confirm"
                className="block text-sm font-medium text-gray-700"
              >
                Konfirmasi Kata Sandi <span className="text-red-600">*</span>
              </label>
              <div className="flex justify-between w-full items-center border border-gray-300 rounded-md shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
                <input
                  type={showConfirm ? "text" : "password"}
                  id="confirm"
                  name="confirm"
                  className="flex-1 px-3 py-2 focus:outline-none rounded-l-md"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="px-3"
                >
                  <img
                    src={showConfirm ? eyesOn : eyesOff}
                    alt="toggle confirm"
                    className="w-5 h-5"
                  />
                </button>
              </div>
            </div>

            {/* Tombol */}
            <div className="mb-5 text-end">
              <a href="#" className="text-darkgray hover:underline text-md">
                Lupa password?
              </a>
            </div>

            <div>
              <button
                type="button"
                onClick={() => navigate("/home")}
                className="w-full font-bold bg-green-400 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mb-8"
              >
                Daftar
              </button>
            </div>

            <div>
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="w-full font-bold bg-green-200 text-green-400 py-2 px-4 rounded-md hover:bg-green-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Masuk
              </button>
            </div>

            {/* Atau */}
            <div className="flex items-center my-6">
              <hr className="flex-grow border-gray-300" />
              <span className="px-3 text-gray-500 text-sm">atau</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            {/* Sosmed */}
            <button className="flex justify-center items-center w-full font-bold bg-white text-darkgray py-2 px-4 rounded-md hover:bg-slate-400 mb-4 border border-darkgray">
              <img
                src={`${import.meta.env.BASE_URL}fb.png`}
                alt="Facebook"
                className="h-10 w-10 mr-2"
              />
              <span>Daftar dengan Facebook</span>
            </button>

            <button className="flex justify-center items-center w-full font-bold bg-white text-darkgray py-2 px-4 rounded-md hover:bg-slate-400 border border-darkgray">
              <img
                src={`${import.meta.env.BASE_URL}google.png`}
                alt="Google"
                className="h-10 w-10 mr-2"
              />
              <span>Daftar dengan Google</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register;
