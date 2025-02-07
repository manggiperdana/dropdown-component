import React from "react";
import { SelectedOptionProps } from "../SelectDropdown.types";
import { CircleXIcon } from "../assets";

const SelectedOption: React.FC<SelectedOptionProps> = ({
  selected,
  removeSelectedOption,
}) => (
  <span
    key={selected}
    className="inline-flex space-x-1 items-center bg-gray-100 text-slate-600 rounded text-[10px] px-1 py-0.5"
  >
    <span role="option" aria-label={selected}>
      {selected}
    </span>
    <button
      role="removeButton"
      aria-label={selected}
      className="cursor-pointer"
      onClick={(event) => removeSelectedOption(event, selected)}
    >
      <CircleXIcon />
    </button>
  </span>
);

export default SelectedOption;
