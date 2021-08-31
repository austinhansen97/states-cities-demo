import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Form from "./Form";

describe("Forms component", () => {
  test("When Alabama is selected, cities list is empty", () => {
    const { queryByText, queryByTitle } = render(<Form />);
    const citiesDropdown = queryByTitle("city-option");

    expect(queryByText("Alabama")).toBeTruthy();
    expect(citiesDropdown).toBeFalsy();
  });

  test("Checks if U.S. STATES renders", () => {
    render(<Form />);
    const USstatesElement = screen.getByText("U.S. STATES");
    expect(USstatesElement).toBeInTheDocument();
  });

  test("Checks if states data transferred to props.stateArray/props.stateDetailsArray in Forms", () => {
    render(<Form />);
    const listBoxElements = screen.getAllByRole("combobox");
    expect(listBoxElements).not.toHaveLength(0);
  });
});
