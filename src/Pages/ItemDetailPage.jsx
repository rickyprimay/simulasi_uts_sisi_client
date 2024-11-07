import React from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../Components/ItemDetail';

const ItemDetailPage = ({ items }) => {
  const { itemId } = useParams();
  const item = items.find((i) => i.id === parseInt(itemId));

  if (!item) return <div className="p-4 text-center text-gray-500">Item tidak ditemukan</div>;

  return (
    <ItemDetail items={items} />
  );
};

export default ItemDetailPage;