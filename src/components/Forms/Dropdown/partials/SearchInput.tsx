import React from "react";
import { SearchInputProps } from "../SelectDropdown.types";
import { SearchIcon } from "../assets";

const SearchInput: React.FC<SearchInputProps> = ({
    searchTerm,
    setSearchTerm,
}) => (
  <div className="flex border-b border-slate-100">
    <span className="px-3 py-2">
      <SearchIcon />
    </span>
    <input
      type="text"
      className="flex-1 outline-0 text-[14px]"
      placeholder="Search..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  </div>
);

export default SearchInput;
