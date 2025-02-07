/* eslint-disable @typescript-eslint/no-explicit-any */
import { SelectDropdown } from "./SelectDropdown";
import { SelectDropdownProps } from "./SelectDropdown.types";
import { StoryFn } from "@storybook/react";
import { action } from '@storybook/addon-actions';

export default {
  title: "Components/Form",
  component: SelectDropdown,
  tags: ['autodocs'],
  argTypes: {
    withSearch: { control: "boolean" },
    multiple: { control: "boolean" },
    outlined: { control: "boolean" },
    onChange: { 
      control: 'function', 
      description: 'Callback when selection changes' 
    },
    optionLabel: { control: "text" },
    options: {
      control: "array",
      defaultValue: [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
      ],
    },
  },
};

const Template: StoryFn<SelectDropdownProps> = (args: any) => {
  return <SelectDropdown {...args} onChange={action("onChange")} />;
};

export const SelectDropdownField = Template.bind({});
SelectDropdownField.args = {
  withSearch: true,
  options: [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ],
  multiple: false,
  optionLabel: "Label",
  outlined: true,
};