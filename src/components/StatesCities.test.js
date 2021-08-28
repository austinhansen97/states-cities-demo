import React from "react";
import { render, screen } from "@testing-library/react";
import StatesCities from "./StatesCities";

describe("Planets components", () => {
  test("Checks if planet data is requested and loads into select tags", () => {
    render(<StatesCities />);
    const listBoxElements = screen.getAllByRole("combobox");
    expect(listBoxElements).not.toHaveLength(0);
  });
});
