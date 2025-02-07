import React from "react";
import { DropdownContentProps } from "../SelectDropdown.types";
import SearchInput from "./SearchInput";
import OptionList from "./OptionList";

const DropdownContent: React.FC<DropdownContentProps> = ({
  withSearch,
  setSearchTerm,
  searchTerm,
  filteredOptions,
  multiple,
  selectedOption,
  zIndex,
  addSelectedOption,
  highlightText,
}) => (
  <div className="shadow mt-1 rounded-xs">
    {withSearch && (
      <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    )}
    <OptionList
      filteredOptions={filteredOptions}
      searchTerm={searchTerm}
      multiple={multiple}
      selectedOption={selectedOption}
      zIndex={zIndex}
      addSelectedOption={addSelectedOption}
      highlightText={highlightText}

    />
  </div>
);

export default DropdownContent;
