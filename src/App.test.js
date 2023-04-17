import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from "./App";

test("renders page headings", () => {
  const { getByText } = render(<App />);
  const heading = getByText(/images of cats/i);
  expect(heading).toBeInTheDocument();
});

describe('Cat Grid', () => {
  const setup = () => {
    return render(<App />);
  }

  it('renders images', async () => {
    const { findAllByRole } = render(<App />);

    const images = await findAllByRole('img');
    images.forEach((i) => {
      expect(i).toBeInTheDocument();
    })

  })

  it('shows cat name and description information when show cat info button is clicked', async () => {
    
    setup();

    waitFor(() => {
      const button = screen.getByRole('button');
      userEvent.click(button);

      expect(screen.getByTestId('cat-info')).toBeInTheDocument();
    })
    
  })
})
