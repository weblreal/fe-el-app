import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Dropdown from "../../components/Dropdown/Dropdown";

export default {
  title: "UI/Dropdown",
  component: Dropdown,
  argTypes: {},
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const Default = Template.bind({});
Default.args = {
  options: [
    { label: "Option 1", value: "Option 1" },
    { label: "Option 2", value: "Option 2" },
    { label: "Option 3", value: "Option 3" },
    { label: "Option 4", value: "Option 4" },
  ],
  placeholder: "Select",
  errorMessage: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, sed.",
  label: "Select dropdown",
  error: false,
  required: true,
};
