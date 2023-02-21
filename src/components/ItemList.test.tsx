import { ItemList } from './ItemList.js';
import { render, screen } from '@testing-library/react';

test('list items', () => {
  const items = { cheesecake: 2, croissant: 5, macaroon: 96 };
  render(<ItemList items={items} />);
  const listElement = document.querySelector('ul');

  expect(listElement && listElement.childElementCount).toBe(3);
  expect(screen.getByText('cheesecake - Quantity: 2')).toBeDefined();
  expect(screen.getByText('croissant - Quantity: 5')).toBeDefined();
  expect(screen.getByText('macaroon - Quantity: 96')).toBeDefined();
});
