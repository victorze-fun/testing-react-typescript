import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { App } from './App';

describe('App', () => {
  test("rendering the server's list of items", async () => {
    render(<App />);

    // await waitFor(() => {
    //   const listElement = document.querySelector('ul');
    //   expect(listElement.childElementCount).toBe(3);
    // });

    // use findBy* para eveitar usar waitFor
    expect(await screen.findByText('cheesecake - Quantity: 2')).toBeDefined();
    expect(await screen.findByText('croissant - Quantity: 5')).toBeDefined();
    expect(await screen.findByText('macaroon - Quantity: 96')).toBeDefined();

    const listElement = document.querySelector('ul');
    expect(listElement.childElementCount).toBe(3);
  });
});
