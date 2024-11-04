import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Dashboard = ({ items, onDeleteItem }) => {
  const totalStock = items.reduce((sum, item) => sum + item.stock, 0);

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Dashboard</h2>
      
      <div className="p-6 bg-blue-500 text-white rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-2">Total Stok Barang</h3>
        <p className="text-4xl font-semibold">{totalStock}</p>
      </div>
    </div>
  );
};

export default Dashboard;
