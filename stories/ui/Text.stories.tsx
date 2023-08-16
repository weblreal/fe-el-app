import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Text from "../../components/UI/Text/Text";

export default {
  title: "UI/Text",
  component: Text,
  argTypes: {},
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  fontSize: "20px",
  fontWeight: "normal",
  color: "text",
  padding: "20px",
};
