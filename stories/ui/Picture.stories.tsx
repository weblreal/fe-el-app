import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Picture from "../../components/UI/Picture/Picture";

export default {
  title: "UI/Picture",
  component: Picture,
  argTypes: {},
} as ComponentMeta<typeof Picture>;

const Template: ComponentStory<typeof Picture> = (args) => (
  <Picture {...args} />
);

export const Default = Template.bind({});
Default.args = {
  src: "/Images/dummy.jpg",
  alt: "/Images/dummy.jpg",
  width: 1440,
  height: 800,
};
