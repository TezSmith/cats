import React from "react";
import { render, rerender, waitFor, act, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from "./App";

test("renders page headings", () => {
  const { getByText } = render(<App />);
  const heading = getByText(/images of cats/i);
  expect(heading).toBeInTheDocument();
});

describe('Cat Grid', () => {
  it('renders images', async () => {
    const { findAllByRole } = render(<App />);

    const images = await findAllByRole('img');
    images.forEach((i) => {
      expect(i).toBeInTheDocument();
    })

  })

  it('shows cat name and description information when show cat info button is clicked', async () => {
    
    const { getByRole, getAllByTestId } = render(<App />);
    
    const button = getByRole('button');
    userEvent.click(button);

    const hmm = await getAllByTestId('cat-grid');
    expect(hmm).toBeInTheDocument();
    
  })
})
