import React, { useState } from 'react';
import Swal from 'sweetalert2';

const AddItem = ({ onAddItem }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [stock, setStock] = useState(0);
  const [price, setPrice] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();


    if (name === '') {
      Swal.fire({
        title: 'Error!',
        text: 'Nama barang harus diisi.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return;
    } else if (category === '' || category === 'Pilih Kategori') {
      Swal.fire({
        title: 'Error!',
        text: 'Kategori harus dipilih.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return;
    } else if (stock <= 0) {
      Swal.fire({
        title: 'Error!',
        text: 'Stok harus lebih dari 0 atau tidak boleh kosong.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return;
    } else if (price <= 0) {
      Swal.fire({
        title: 'Error!',
        text: 'Harga harus lebih dari 0 atau tidak boleh kosong.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return;
    } else {
      const newItem = { name, category, stock, price };
      onAddItem(newItem);

      Swal.fire({
        title: 'Berhasil!',
        text: 'Item berhasil ditambahkan.',
        icon: 'success',
        confirmButtonText: 'OK'
      });

      setName('');
      setCategory('');
      setStock(null);
      setPrice(null);
    }
  };

  return (
    <form className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg" onSubmit={handleSubmit}>
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Tambah Barang</h2>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-semibold mb-2">Nama Barang:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded-md w-full py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Masukkan nama barang"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-semibold mb-2">Kategori:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border rounded-md w-full py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Pilih Kategori</option>
          <option value="Elektronik">Elektronik</option>
          <option value="Pakaian">Pakaian</option>
          <option value="Makanan">Makanan</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-semibold mb-2">Stok:</label>
        <input
          type="number"
          value={stock || ''}
          onChange={(e) => setStock(parseInt(e.target.value) || null)}
          className="border rounded-md w-full py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Masukkan jumlah stok"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-semibold mb-2">Harga:</label>
        <input
          type="number"
          value={price || ''}
          onChange={(e) => setPrice(parseInt(e.target.value) || null)}
          className="border rounded-md w-full py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Masukkan harga barang"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Tambah Barang
      </button>
    </form>
  );
};

export default AddItem;