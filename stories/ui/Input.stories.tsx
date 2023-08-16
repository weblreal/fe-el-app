import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input from "../../components/UI/Input/Input";

export default {
  title: "UI/Input",
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
  <Input {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Label",
  placeholder: "Placeholder",
  required: true,
  errorMessage: "This is a danger alert—check it out!",
};
