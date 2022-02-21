/* eslint-disable no-undef */
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders M(-_(", () => {
  render(<App />);
  const linkElement = screen.getByText(/M(-_(-_-)_-)E/i);
  expect(linkElement).toBeInTheDocument();
});
