import React from 'react';

const Header = ({ username }) => {
  return (
    <header className="bg-blue-600 p-4 text-white flex justify-between items-center">
      <h1 className="text-lg font-semibold">Manajemen Inventaris Barang</h1>
      <span className="text-sm">Selamat Datang, {username}</span>
    </header>
  );
};

export default Header;
