function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500 text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to Homepage</h1>
      <p className="text-lg mb-6">Kamu berhasil masuk 🎉</p>
      <button className="px-6 py-2 bg-red-500 rounded-md hover:bg-red-600 transition">
        Logout
      </button>
    </div>
  );
}

export default Home;
