import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import Dashboard from './Pages/Dashboard';
import Inventory from './Pages/Inventory';
import AddItemPage from './Pages/AddItemPage';
import ItemDetail from './Pages/ItemDetailPage';

const App = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Tv Polytron', category: 'Elektronik', image: 'tv.jpg', stock: 10, price: 2000000 },
    { id: 2, name: 'Baju Hermes', category: 'Pakaian', image: 'hermes.jpeg', stock: 5, price: 1200000 }
  ]);  

  const addItem = (newItem) => {
    setItems([...items, { ...newItem, id: items.length + 1 }]);
  };

  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header username="Ricky" />
          <div className="p-4 flex-1 bg-gray-100">
            <Routes>
              <Route path="/" element={<Dashboard items={items} />} />
              <Route path="/inventory" element={<Inventory items={items} onDelete={deleteItem} />} />
              <Route path="/add-item" element={<AddItemPage addItem={addItem} />} />
              <Route path="/item-detail/:itemId" element={<ItemDetail items={items} />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
