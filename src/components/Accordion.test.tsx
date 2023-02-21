import { Accordion } from './Accordion';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Accordion', () => {
  beforeEach(() => {
    render(
      <Accordion title="Hello">
        <h3>My title</h3>
        <p>Some content</p>
      </Accordion>
    );
  });

  test('should show title all the time', () => {
    expect(screen.getByText('Hello')).toBeDefined();
  });

  test('should not show the content at the start', () => {
    expect(screen.queryByText(/content/i)).toBeNull();
  });

  test('should show the content when title is clicked', () => {
    const button = screen.getByText(/open/i);
    fireEvent.click(button);
    expect(screen.queryByText(/content/i)).toBeDefined();
  });

  test('should not show the content when title is clicked', () => {
    const button = screen.getByText(/open/i);
    fireEvent.click(button);
    fireEvent.click(button);
    expect(screen.queryByText(/content/i)).toBeNull();
  });
});
