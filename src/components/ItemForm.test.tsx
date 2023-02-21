import { render, fireEvent, screen } from '@testing-library/react';
import { ItemForm } from './ItemForm';

test('sending requests', () => {
  const { getByText, getByPlaceholderText } = render(<ItemForm />);

  fireEvent.change(getByPlaceholderText('Item name'), {
    target: { value: 'cheesecake' },
  });
  fireEvent.change(getByPlaceholderText('Quantity'), {
    target: { value: '2' },
  });
  fireEvent.click(getByText('Add item'));
});
