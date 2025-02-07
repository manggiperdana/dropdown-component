import React, { ReactNode } from "react";
export type SelectDropdownProps = {
  options: { value: string; label: string }[];
  multiple?: boolean;
  optionLabel?: string;
  withSearch?: boolean;
  onChange?: (value: string | string[]) => void;
  outlined?: boolean;
  zIndex?: number;
  usePortal?: boolean;
};

export type SelectProps = {
  children: ReactNode;
  // selected: string;
  outlined: SelectDropdownProps["outlined"];
  multiple: SelectDropdownProps["multiple"]
  setIsOpen: (value: boolean) => void;
  isOpen: boolean;
  selectedOption: string[];
  dropdownRef: React.RefObject<HTMLDivElement>
  removeSelectedOption: (
    event: React.MouseEvent<HTMLButtonElement>,
    selected: string
  ) => void;
};

export type SelectedOptionProps = {
  selected: string;
  removeSelectedOption: (
    event: React.MouseEvent<HTMLButtonElement>,
    selected: string
  ) => void;
};

export type OptionListProps = {
  filteredOptions: SelectDropdownProps["options"];
  multiple: SelectDropdownProps["multiple"];
  searchTerm: string;
  selectedOption: string[];
  zIndex:SelectDropdownProps["zIndex"];
  addSelectedOption: (value: string) => void;
  highlightText: (text: string, query: string) => ReactNode;
};

export type DropdownContentProps = {
  filteredOptions: SelectDropdownProps["options"];
  multiple: SelectDropdownProps["multiple"];
  withSearch: SelectDropdownProps["withSearch"];
  searchTerm: string;
  selectedOption: string[];
  zIndex:SelectDropdownProps["zIndex"];
  setSearchTerm: (value: string) => void;
  addSelectedOption: (value: string) => void;
  highlightText: (text: string, query: string) => ReactNode;
};

export type SearchInputProps = {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
};
