import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from "./App";

test("renders page headings", () => {
  const { getByText } = render(<App />);
  const heading = getByText(/images of cats/i);
  expect(heading).toBeInTheDocument();
});

describe('Cat Grid', () => {
  it('renders images', () => {
    const { getAllByRole } = render(<App />);

    const images = getAllByRole('img');
    expect(images).toBeInTheDocument();
  })

  it('shows cat name and description information, when show cat info button is clicked', async () => {
    const { getByRole, getByTestId } = render(<App />);

    const button = getByRole('button');
    fireEvent.click(button);

    await waitFor(() => {
      expect(getByTestId('cat-name')).toBeInTheDocument();
      expect(getByTestId('cat-desc')).toBeInTheDocument();
    });

  })
})
