function Header() {
  return (
    <header>
      <div className="fixed top-0 left-0 w-full bg-white h-auto z-50">
        <div className="px-4 lg:px-14 py-2 flex items-center">
          <img
            src={`${import.meta.env.BASE_URL}Logo.png`}
            alt="Logo"
            className="h-12 w-auto"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
