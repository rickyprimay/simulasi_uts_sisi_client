import React from 'react';
import AddItem from '../Components/AddItem';

const AddItemPage = ({ addItem }) => {
  return <AddItem onAddItem={addItem} />;
};

export default AddItemPage;
