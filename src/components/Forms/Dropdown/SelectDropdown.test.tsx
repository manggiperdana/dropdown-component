/* eslint-disable-next-line no-unused-vars */
import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { SelectDropdown } from "./SelectDropdown";

// Mock the icons for simplicity
jest.mock("./assets", () => ({
  SearchIcon: () => <div>Search</div>,
  ChevronDownIcon: () => <div>ChevronDown</div>,
  CircleXIcon: () => <div>CircleX</div>,
}));

describe("SelectDropdown", () => {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  test("renders without crashing", () => {
    render(<SelectDropdown options={options} />);
    expect(screen.getByText("Select...")).toBeInTheDocument();
  });

  test("opens the dropdown when clicked", () => {
    render(<SelectDropdown options={options} />);
    const dropdown = screen.getByText("Select...");
    fireEvent.click(dropdown);
    expect(screen.getByText("Option 1")).toBeInTheDocument();
  });

  test("selects an option and triggers onChange for single select", () => {
    const onChangeMock = jest.fn();
    render(<SelectDropdown options={options} onChange={onChangeMock} />);
    const dropdown = screen.getByText("Select...");
    fireEvent.click(dropdown);
    fireEvent.click(screen.getByText("Option 1"));
    expect(onChangeMock).toHaveBeenCalledWith("Option 1");
  });

  test("allows multiple selections and triggers onChange", () => {
    const onChangeMock = jest.fn();
    render(
      <SelectDropdown
        options={options}
        multiple={true}
        onChange={onChangeMock}
      />
    );

    // Query the dropdown button by aria-label or role
    const dropdown = screen.getByRole("button", { name: /dropdown button/i });

    // Simulate clicking the dropdown to reveal the options
    fireEvent.click(dropdown);
    fireEvent.click(screen.getByText("Option 1"));

    fireEvent.click(dropdown);
    fireEvent.click(screen.getByText("Option 2"));

    // Ensure the onChangeMock was called with the selected options
    expect(onChangeMock).toHaveBeenCalledWith(["Option 1", "Option 2"]);
  });

  test("removes selected option for multiple select", () => {
    const onChangeMock = jest.fn();
    render(
      <SelectDropdown
        options={options}
        multiple={true}
        onChange={onChangeMock}
      />
    );

    // Open the dropdown
    const dropdown = screen.getByRole("button", { name: /dropdown button/i });

    // Select options
    fireEvent.click(dropdown);
    fireEvent.click(screen.getByText("Option 1"));

    fireEvent.click(dropdown);
    fireEvent.click(screen.getByText("Option 2"));

    // Remove data
    const removeButton = screen.getByRole("removeButton", {
      name: /Option 2/i,
    });
    fireEvent.click(removeButton);

    // Ensure the onChangeMock was called with the remaining options
    expect(onChangeMock).toHaveBeenCalledWith(["Option 1"]);
  });

  test("filters options when typing in the search input", () => {
    render(<SelectDropdown options={options} withSearch={true} />);
    const dropdown = screen.getByText("Select...");
    fireEvent.click(dropdown);
    const searchInput = screen.getByPlaceholderText("Search...");
    fireEvent.change(searchInput, { target: { value: "Option 1" } });
    expect(screen.getByText("Option 1")).toBeInTheDocument();
    expect(screen.queryByText("Option 2")).not.toBeInTheDocument();
  });

  test("shows 'No results found' when no options match search term", () => {
    render(<SelectDropdown options={options} withSearch={true} />);
    const dropdown = screen.getByText("Select...");
    fireEvent.click(dropdown);
    const searchInput = screen.getByPlaceholderText("Search...");
    fireEvent.change(searchInput, { target: { value: "Nonexistent" } });
    expect(screen.getByText("No results found")).toBeInTheDocument();
  });

  test("closes dropdown when clicking outside", () => {
    render(<SelectDropdown options={options} />);
    const dropdown = screen.getByText("Select...");
    fireEvent.click(dropdown);
    expect(screen.getByText("Option 1")).toBeInTheDocument();

    // Simulate click outside the dropdown
    fireEvent.mouseDown(document);
    expect(screen.queryByText("Option 1")).not.toBeInTheDocument();
  });

  // test("does not open dropdown if disabled", () => {
  //   render(<SelectDropdown options={options} disabled />);
  //   const dropdown = screen.getByText("Select...");
  //   fireEvent.click(dropdown);
  //   expect(screen.queryByText("Option 1")).not.toBeInTheDocument();
  // });
});
