function Register() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm bg-white shadow-md rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Nama</label>
            <input
              type="text"
              className="w-full border rounded-md p-2 mt-1"
              placeholder="Masukkan nama"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full border rounded-md p-2 mt-1"
              placeholder="Masukkan email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">No HP</label>
            <input
              type="tel"
              className="w-full border rounded-md p-2 mt-1"
              placeholder="Masukkan nomor HP"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              className="w-full border rounded-md p-2 mt-1"
              placeholder="Masukkan password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
          >
            Daftar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
