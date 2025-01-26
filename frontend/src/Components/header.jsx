import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext'; // Assuming you have an AuthContext

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  // const { currentUser, logout } = useAuth();
const currentUser = "veer";
  const handleLogout = async () => {
    try {
      await logout();
      // Handle redirect after logout (e.g., to login page)
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="flex justify-between items-center">
        {/* App Icon */}
        <div>
          {/* Replace with your actual app icon */}
          <img src="/logo.svg" alt="App Logo" className="w-8 h-8" />
        </div>

        {/* User Profile */}
        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center"
          >
            {/* Replace with user profile image or initials */}
            <span className="text-sm font-medium">
              {currentUser && currentUser.displayName}
            </span>
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 4-7-4"
              />
            </svg>
          </button>

          {showDropdown && (
            <div
              className="absolute right-0 mt-2 bg-white rounded-md shadow-lg"
              style={{ width: '150px' }}
            >
              <ul className="p-2">
                <li>
                  <Link
                    to="/profile" // Replace with actual profile page URL
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;