import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import People from "./assets/img/people.jpg";
import { Link } from "react-router-dom";

const Layout = ({ children, login }) => {
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
    // overflow-hidden
    <div className="flex flex-col h-screen  bg-gray-100">
      {/* Top Bar */}
      <header className={`${login ? "hidden" : "block"} py-4 bg-white shadow`}>
        <div className="flex items-center justify-between px-4">
          <div className="flex items-center">
            <button
              className="text-gray-500 pr-4 lg:hidden"
              onClick={toggleSidebar}
            >
              <svg
                width="40px"
                height="40px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M5 6.5H19V8H5V6.5Z" fill="#8c8787"></path>
                  <path d="M5 16.5H19V18H5V16.5Z" fill="#8c8787"></path>
                  <path d="M5 11.5H19V13H5V11.5Z" fill="#8c8787"></path>
                </g>
              </svg>
            </button>
            <h1 className="text-2xl font-bold">LunchMate</h1>
          </div>
          <div className="relative">
            <button
              className="flex items-center space-x-2 text-gray-700"
              onClick={toggleMenu}
            >
              <img
                src={People}
                alt="Account Photo"
                className="w-8 h-8 rounded-full"
              />
            </button>
            {menuOpen && (
              <div
                ref={menuRef}
                className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1"
              >
                <Link
                  to="change-password"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Change Password
                </Link>
                <Link
                  to="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 z-30 w-64 transition-transform transform bg-slate-950 text-white lg:translate-x-0 lg:static lg:inset-0 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } ${login ? "hidden" : "block"}`}
        >
          <div className="flex items-center justify-between p-4 lg:hidden">
            <h1 className="text-lg font-bold"></h1>
            <button className="text-white" onClick={toggleSidebar}>
              X
            </button>
          </div>
          <div className="p-4 space-y-4">
            <Link
              to="today-menu"
              className="block p-2 text-base font-medium rounded bg-gray-900 hover:bg-gray-800"
              onClick={toggleSidebar}
            >
              Today's Menu
              {/* admin -> add menu ( based on date , default select todays date)
              admin can select date dropdown, Employee not .... emply show only text
              admin -> show, edit , delete menu 
              employee -> show dropdown and select menu.
              employee -> after select , which select content will be show  */}
            </Link>
            <Link
              to="choices"
              className="block p-2 text-base font-medium rounded bg-gray-900 hover:bg-gray-800"
              onClick={toggleSidebar}
            >
              Employee Choices
              {/* all -> can show todays all menu selection  
              by default it can be shown the result for todays date . but date filter should work 
              */}
            </Link>
            <Link
              to="add-employee"
              className="block p-2 text-base font-medium rounded bg-gray-900 hover:bg-gray-800"
              onClick={toggleSidebar}
            >
              Add Employee
              {/* admin -> email and password  */}
            </Link>
            <Link
              to="archive"
              className="block p-2 text-base font-medium rounded bg-gray-900 hover:bg-gray-800"
              onClick={toggleSidebar}
            >
              Archive
              {/* admin -> list of all menus by date  */}
            </Link>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6">{children}</div>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
  login: PropTypes.node,
};

export default Layout;
