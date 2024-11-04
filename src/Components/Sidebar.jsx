import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-gray-800 text-white">
      <nav className="p-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Menu</h2>
        <ul className="space-y-4">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) =>
                isActive 
                  ? "block px-4 py-2 bg-blue-600 rounded-md text-white font-semibold" 
                  : "block px-4 py-2 rounded-md text-gray-300 hover:bg-blue-500 hover:text-white transition"
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/inventory" 
              className={({ isActive }) =>
                isActive 
                  ? "block px-4 py-2 bg-blue-600 rounded-md text-white font-semibold" 
                  : "block px-4 py-2 rounded-md text-gray-300 hover:bg-blue-500 hover:text-white transition"
              }
            >
              List Barang
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/add-item" 
              className={({ isActive }) =>
                isActive 
                  ? "block px-4 py-2 bg-blue-600 rounded-md text-white font-semibold" 
                  : "block px-4 py-2 rounded-md text-gray-300 hover:bg-blue-500 hover:text-white transition"
              }
            >
              Tambah Barang
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
