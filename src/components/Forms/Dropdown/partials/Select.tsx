import React from "react";
import { SelectProps } from "../SelectDropdown.types";
import { SelectedOption } from "./index";
import { ChevronDownIcon } from "../assets";

const Select: React.FC<SelectProps> = ({
  children,
  outlined,
  setIsOpen,
  isOpen,
  removeSelectedOption,
  selectedOption,
  multiple,
  dropdownRef,
}) => (
  <div className="flex-col flex-1" ref={dropdownRef}>
    <div
      role="button"
      aria-label="dropdown button"
      className={`flex ${
        outlined ? "border border-slate-200" : "bg-slate-200 outline-0"
      } p-2 rounded-xs items-center cursor-pointer text-[14px] text-slate-700`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex gap-x-1">
        {multiple
          ? selectedOption.map((selected) => (
              <SelectedOption
                selected={selected}
                removeSelectedOption={removeSelectedOption}
              />
            ))
          : selectedOption[0] || "Select..."}
      </div>
      <div className="ml-auto">
        <ChevronDownIcon />
      </div>
    </div>
    {children}
  </div>
);

export default Select;
