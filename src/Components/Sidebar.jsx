import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBoxOpen, faPlusSquare } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-blue-100 text-gray-700">
      <nav className="p-6">
        <div className="text-blue-800 font-semibold text-lg mb-10">Manajemen Barang</div>
        
        <ul className="space-y-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center px-4 py-2 bg-blue-200 rounded-md text-blue-800 font-semibold"
                  : "flex items-center px-4 py-2 rounded-md text-gray-600 hover:bg-blue-200 hover:text-blue-800 transition"
              }
            >
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/inventory"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center px-4 py-2 bg-blue-200 rounded-md text-blue-800 font-semibold"
                  : "flex items-center px-4 py-2 rounded-md text-gray-600 hover:bg-blue-200 hover:text-blue-800 transition"
              }
            >
              <FontAwesomeIcon icon={faBoxOpen} className="mr-2" />
              List Barang
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/add-item"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center px-4 py-2 bg-blue-200 rounded-md text-blue-800 font-semibold"
                  : "flex items-center px-4 py-2 rounded-md text-gray-600 hover:bg-blue-200 hover:text-blue-800 transition"
              }
            >
              <FontAwesomeIcon icon={faPlusSquare} className="mr-2" />
              Tambah Barang
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
