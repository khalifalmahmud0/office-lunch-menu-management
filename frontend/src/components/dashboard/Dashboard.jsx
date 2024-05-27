import { useState } from "react";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 transition-transform transform bg-indigo-800 text-white lg:translate-x-0 lg:static lg:inset-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 lg:hidden">
          <h1 className="text-lg font-bold">AMI</h1>
          <button className="text-white" onClick={toggleSidebar}>
            X
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
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="flex items-center justify-between p-4 bg-white shadow">
          <div className="flex items-center">
            <button className="text-gray-500 lg:hidden" onClick={toggleSidebar}>
              X
            </button>
            <h1 className="text-lg font-bold text-indigo-800 ml-2 lg:ml-0">
              AMI
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
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </a>
              </div>
            )}
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <h1 className="text-2xl font-semibold text-gray-900">
            Dashboard Content
          </h1>
          {/* Add your dashboard content here */}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
