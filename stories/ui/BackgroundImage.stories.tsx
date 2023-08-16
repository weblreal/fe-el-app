import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import BackgroundImage from "../../components/UI/BackgroundImage/BackgroundImage";

export default {
  title: "UI/BackgroundImage",
  component: BackgroundImage,
  argTypes: {},
} as ComponentMeta<typeof BackgroundImage>;

const Template: ComponentStory<typeof BackgroundImage> = (args) => (
  <BackgroundImage {...args} />
);

export const Default = Template.bind({});
Default.args = {
  src: "/Images/dummy2.jpg",
  alt: "/Images/dummy2.jpg",
};
