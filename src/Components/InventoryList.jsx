import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const InventoryList = ({ items, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div className="p-6 bg-white shadow-md rounded-lg max-w-3xl mx-auto">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Daftar Barang</h2>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li
            key={index}
            className="relative p-4 bg-gray-100 rounded-md shadow hover:bg-gray-200 cursor-pointer transition-transform transform hover:scale-105"
            onClick={() => navigate(`/item-detail/${item.id}`)} 
          >
            <div className="text-lg font-semibold text-gray-800">{item.name}</div>
            <div className="text-gray-600">Kategori: {item.category}</div>
            <div className="text-gray-600">Stok: {item.stock}</div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDelete(index);
              }}
              className="absolute top-2 right-2 text-red-500 hover:text-red-700 focus:outline-none"
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InventoryList;
