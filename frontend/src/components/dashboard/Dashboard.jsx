import { useState, useRef, useEffect } from "react";
import Logo from "../../assets/img/logo.svg";
// import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    setMenuOpen(false);
  };

  const toggleMenu = (event) => {
    event.stopPropagation();
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-gray-100">
      {/* Top Bar */}
      <header className="bg-white shadow">
        <div className="flex items-center justify-between px-8 pt-2 pb-5">
          <div className="flex items-center">
            <button className="text-gray-500 lg:hidden" onClick={toggleSidebar}>
              {/* <MenuIcon className="w-6 h-6" />  */}
              I1
            </button>
            <h1 className="text-lg font-bold text-indigo-800 ml-2 lg:ml-0">
              <img src={Logo} className="logo" alt="Site Logo" />
            </h1>
          </div>
          <div className="relative">
            <button
              className="flex items-center space-x-2 text-gray-700"
              onClick={toggleMenu}
            >
              <span className="font-medium">LOVE</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {menuOpen && (
              <div
                ref={menuRef}
                className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1"
              >
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </a>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 z-30 w-64 transition-transform transform bg-indigo-800 text-white lg:translate-x-0 lg:static lg:inset-0 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-4 lg:hidden">
            <h1 className="text-lg font-bold">AMI</h1>
            <button className="text-white" onClick={toggleSidebar}>
              {/* <XIcon className="w-6 h-6" />  */}
              I2
            </button>
          </div>
          <div className="p-4 space-y-4">
            <a
              href="#"
              className="block p-2 text-base font-medium rounded hover:bg-indigo-700"
            >
              Add Food Menu
            </a>
            <a
              href="#"
              className="block p-2 text-base font-medium rounded hover:bg-indigo-700"
            >
              Users
            </a>
            {/* Add more menu items here */}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6">
          <h1 className="text-2xl font-semibold text-gray-900">
            Dashboard Content
          </h1>
          {/* Add your dashboard content here */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
