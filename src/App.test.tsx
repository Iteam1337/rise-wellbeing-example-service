import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders", () => {
  const { getByText } = render(<App />);

  const appTitle = getByText(/the Mindfulness App/i);

  expect(appTitle).toBeInTheDocument();
});
