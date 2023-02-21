import axios from 'axios';
import { SyntheticEvent, useState } from 'react';

const addItemRequest = (itemName: string, quantity: number) => {
  return axios.post(
    `/inventory/${itemName}`,
    {
      quantity,
    },
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    }
  );
};

export const ItemForm = () => {
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState(0);

  const onSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    await addItemRequest(itemName, quantity);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        onChange={(e) => setItemName(e.target.value)}
        placeholder="Item name"
      />
      <input
        onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
        placeholder="Quantity"
      />
      <button type="submit">Add item</button>
    </form>
  );
};
