import { useNavigate } from "react-router-dom";
import eyesOff from "../assets/eyesoff.png";
import eyesOn from "../assets/eyeson.png";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  const togglePassword = () => {
    const input = document.getElementById("password");
    const icon = document.getElementById("iconPassword");

    if (input.type === "password") {
      input.type = "text";
      icon.src = eyesOn; // ✅ pakai import
    } else {
      input.type = "password";
      icon.src = eyesOff; // ✅ pakai import
    }
  };

  return (
    <div className="bg-lightgray">
      <header>
        <div className="fixed top-0 left-0 w-full bg-white h-auto shadow-lg md:shadow-sm">
          <div className="px-4 lg:px-14 py-2 flex items-center">
            {/* ✅ logo dari public */}
            <img
              src={`${import.meta.env.BASE_URL}logo3.png`}
              alt="Logo"
              className="h-12 w-auto"
            />
          </div>
        </div>
      </header>

      <section
        id="loginform"
        className="min-h-screen flex items-center justify-center py-32 md:py-36"
      >
        <div className="bg-white rounded-lg shadow-lg p-4 md:p-8 text-center w-4/5 md:w-1/2">
          <h1 className="text-3xl">Masukkan Akun</h1>
          <h2 className="text-darkgray text-lg">
            Yuk, lanjutin belajarmu di videobelajar.
          </h2>

          <div className="mt-8">
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
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
            </div>

            {/* Password */}
            <div className="mb-5 text-start">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Kata Sandi <span className="text-red-600">*</span>
              </label>
              <div className="flex justify-between w-full border border-gray-300 rounded-md shadow-sm">
                <input
                  type="password"
                  id="password"
                  className="flex-1 px-3 py-2 focus:outline-none rounded-l-md"
                />
                <button type="button" onClick={togglePassword} className="px-3">
                  <img
                    id="iconPassword"
                    src={eyesOff} // ✅ default icon
                    alt="toggle password"
                    className="w-5 h-5"
                  />
                </button>
              </div>
            </div>

            {/* Lupa Password */}
            <div className="mb-5 text-end">
              <a href="#" className="text-darkgray hover:underline text-md">
                Lupa password?
              </a>
            </div>

            {/* Tombol Masuk */}
            <div>
              <button
                type="button"
                onClick={handleLogin}
                className="w-full font-bold bg-green-400 text-white py-2 px-4 rounded-md hover:bg-green-700 mb-8"
              >
                Masuk
              </button>
            </div>

            {/* Tombol Daftar */}
            <div>
              <button
                type="button"
                onClick={() => navigate("/register")}
                className="w-full font-bold bg-green-200 text-green-400 py-2 px-4 rounded-md hover:bg-green-600 hover:text-white"
              >
                Daftar
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
              <span>Masuk dengan Facebook</span>
            </button>

            <button className="flex justify-center items-center w-full font-bold bg-white text-darkgray py-2 px-4 rounded-md hover:bg-slate-400 border border-darkgray">
              <img
                src={`${import.meta.env.BASE_URL}google.png`}
                alt="Google"
                className="h-10 w-10 mr-2"
              />
              <span>Masuk dengan Google</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
