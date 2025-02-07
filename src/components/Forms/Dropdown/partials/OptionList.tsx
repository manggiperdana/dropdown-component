import React from "react";
import { OptionListProps } from "../SelectDropdown.types";

const OptionList: React.FC<OptionListProps> = ({
  filteredOptions,
  searchTerm,
  multiple,
  selectedOption,
  addSelectedOption,
  highlightText,
}) => (
  <div className="text-[14px] text-slate-700 z-[2000]">
    {filteredOptions.length > 0 ? (
      filteredOptions.map((option) => (
        <div
          key={option.label}
          className="px-3 py-2 hover:bg-cyan-50 cursor-pointer"
          onClick={() => addSelectedOption(option.label)}
        >
          {highlightText(option.label, searchTerm)}
          {multiple && selectedOption.includes(option.label) && " ✓"}
        </div>
      ))
    ) : (
      <div className="p-2 text-gray-500">No results found</div>
    )}
  </div>
);

export default OptionList;
