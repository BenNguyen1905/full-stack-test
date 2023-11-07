import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';

test('Open Modal successfully after click Open Modal button', async () => {
  const { container } = render(<App />);
  const openModalButton = await screen.getByRole('button', {
    name: /Open Modal/i,
  });
  fireEvent.click(openModalButton);
  const modalList = container.getElementsByClassName('ModalWrapper');
  for (const modal of modalList) {
    expect(modal).toHaveClass('ModalOpened');
    expect(modal).toBeVisible();
  }
});
