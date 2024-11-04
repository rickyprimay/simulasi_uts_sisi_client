import React from 'react';

const formatRupiah = (amount) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(amount);
};

const ItemDetail = ({ item }) => {
  if (!item) return <div className="p-4 text-center text-gray-500">Pilih item untuk melihat detail</div>;

  return (
    <div className="p-6 bg-white shadow-md rounded-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{item.name}</h2>
      <div className="text-gray-600">
        <p><span className="font-semibold">Kategori:</span> {item.category}</p>
        <p><span className="font-semibold">Stok:</span> {item.stock}</p>
        <p><span className="font-semibold">Harga:</span> {formatRupiah(item.price)}</p>
      </div>
    </div>
  );
};

export default ItemDetail;
