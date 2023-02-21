import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { ItemForm } from './components/ItemForm';
import { ItemList } from './components/ItemList';

export const App = () => {
  const [items, setItems] = useState({});
  const isMounted = useRef<boolean | null>(null);

  useEffect(() => {
    isMounted.current = true;
    const loadItems = async () => {
      const response = await axios.get('/inventory');
      if (isMounted.current) setItems(response.data);
    };
    loadItems();

    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <div>
      <h1>Inventory Contents</h1>
      <ItemList items={items} />
      <ItemForm />
    </div>
  );
};
