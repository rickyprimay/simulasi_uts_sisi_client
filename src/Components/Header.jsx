import React from 'react';
import { useLocation } from 'react-router-dom';

const Header = ({ username }) => {
  const location = useLocation();

  const getBreadcrumb = () => {
    const path = location.pathname;
    if (path === '/') {
      return 'Dashboard';
    } else if (path === '/inventory') {
      return 'List Barang';
    } else if (path === '/add-item') {
      return 'List Barang > Tambah Barang';
    } else if (path.startsWith('/item-detail/')) {
      return 'List Barang > Item Detail';
    } else {
      return 'Dashboard';
    }
  };

  return (
    <header className="bg-blue-500 p-4 text-white flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <span className="font-semibold">Manajemen Barang</span>
        <span>|</span>
        <span className="text-sm">{getBreadcrumb()}</span>
      </div>
      
      <div className="flex items-center space-x-2">
        <span>{username}</span>
        <div className="w-8 h-8 bg-blue-300 rounded-full flex items-center justify-center">
          <span className="text-white font-bold">{username[0]}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
