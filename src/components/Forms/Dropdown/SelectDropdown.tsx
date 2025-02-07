import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { SelectDropdownProps } from "./SelectDropdown.types";
import { Select, DropdownContent } from "./partials";

export const SelectDropdown: React.FC<SelectDropdownProps> = ({
  optionLabel,
  options,
  withSearch,
  outlined,
  multiple,
  zIndex = 1000,
  usePortal = false,
  onChange,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle clicks outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false); // Close the dropdown
      }
    };

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const addSelectedOption = (value: string) => {
    let newSelection;
    if (multiple) {
      // Add or remove selection for multiple choice
      newSelection = selectedOption.includes(value)
        ? selectedOption.filter((v) => v !== value)
        : [...selectedOption, value];
      setSelectedOption(newSelection);
    } else {
      // Single selection, set the new value
      newSelection = [value];
      setSelectedOption(newSelection);
    }

    // Notify parent component about the selected option(s)
    if (onChange) {
      onChange(multiple ? newSelection : newSelection[0]);
    }

    setIsOpen(false);
    setSearchTerm("");
  };

  const removeSelectedOption = (
    event: React.MouseEvent<HTMLButtonElement>,
    value: string
  ) => {
    event.stopPropagation(); // Prevents bubbling to the outer div
    const newSelection = selectedOption.filter((option) => option !== value);
    setSelectedOption(newSelection);

    // Notify parent component about the updated selected option(s)
    if (onChange) {
      onChange(multiple ? newSelection : newSelection[0]);
    }
  };

  const filteredOptions = options
    .filter((option) =>
      option.label.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(0, 6);

  const highlightText = (text: string, query: string) => {
    if (!query) return text;

    const regex = new RegExp(`(${query})`, "gi");
    return text.split(regex).map((part, index) =>
      regex.test(part) ? (
        <mark key={index} className="bg-teal-300 text-slate-700">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };
  return (
    <div className="flex">
      <div className="text-left w-[20%] p-1">{optionLabel}</div>
      {usePortal ? (
        createPortal(
          <Select
            dropdownRef={dropdownRef}
            isOpen={isOpen}
            multiple={multiple}
            outlined={outlined}
            selectedOption={selectedOption}
            setIsOpen={setIsOpen}
            removeSelectedOption={removeSelectedOption}
          >
            {isOpen && (
              <DropdownContent
                multiple={multiple}
                withSearch={withSearch}
                zIndex={zIndex}
                setSearchTerm={setSearchTerm}
                selectedOption={selectedOption}
                searchTerm={searchTerm}
                highlightText={highlightText}
                filteredOptions={filteredOptions}
                addSelectedOption={addSelectedOption}
              />
            )}
          </Select>,
          document.body
        )
      ) : (
        <Select
          dropdownRef={dropdownRef}
          isOpen={isOpen}
          multiple={multiple}
          outlined={outlined}
          selectedOption={selectedOption}
          setIsOpen={setIsOpen}
          removeSelectedOption={removeSelectedOption}
        >
          {isOpen && (
            <DropdownContent
              multiple={multiple}
              withSearch={withSearch}
              zIndex={zIndex}
              setSearchTerm={setSearchTerm}
              selectedOption={selectedOption}
              searchTerm={searchTerm}
              highlightText={highlightText}
              filteredOptions={filteredOptions}
              addSelectedOption={addSelectedOption}
            />
          )}
        </Select>
      )}
    </div>
  );
};
