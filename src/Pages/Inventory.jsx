import React, { useState } from 'react';
import InventoryList from '../Components/InventoryList';
import ItemDetail from '../Components/ItemDetail';

const Inventory = ({ items, onDelete }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="p-4 flex gap-6">
      <div className="flex-1">
        <InventoryList items={items} onDelete={onDelete} onItemSelect={setSelectedItem} />
      </div>

      {selectedItem && (
        <div className="flex-1">
          <ItemDetail item={selectedItem} />
        </div>
      )}
    </div>
  );
};

export default Inventory;
