import React from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag, faBox, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';

const formatRupiah = (amount) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(amount);
};

const ItemDetail = ({ items }) => {
  const { itemId } = useParams();
  const item = items.find((i) => i.id === parseInt(itemId));

  if (!item) return <div className="p-4 text-center text-gray-500">Item tidak ditemukan</div>;

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg max-w-lg mx-auto mt-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">{item.name}</h2>
      
      <div className="mb-6">
        <img
          src={`/assets/img/${item.image}`}
          alt={item.name}
          className="max-h-40 w-full object-contain rounded-md mx-auto"
        />
      </div>

      <div className="text-gray-700 space-y-4">
        <div className="flex items-center space-x-3">
          <FontAwesomeIcon icon={faTag} className="text-blue-500" />
          <p>
            <span className="font-semibold">Kategori:</span> {item.category}
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <FontAwesomeIcon icon={faBox} className="text-green-500" />
          <p>
            <span className="font-semibold">Stok:</span> {item.stock}
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <FontAwesomeIcon icon={faMoneyBillWave} className="text-yellow-500" />
          <p>
            <span className="font-semibold">Harga:</span> {formatRupiah(item.price)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
