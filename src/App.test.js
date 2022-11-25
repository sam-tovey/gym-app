import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'

import App from './App';

test('renders the company name', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
  const headerElement = screen.getByText(/AS Fitness/i)
  expect(headerElement).toBeInTheDocument();
});

// it('renders an image', () => {
//   render(<Home />);
//   const imageElement = screen.getByTestId('family-img')
//   expect(imageElement).toBeInTheDocument()
// })
