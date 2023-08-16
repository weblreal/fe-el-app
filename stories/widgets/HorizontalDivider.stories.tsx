import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import HorizontalDivider from "../../widgets/HorizontalDivider";

export default {
  title: "Widgets/HorizontalDivider",
  component: HorizontalDivider,
  argTypes: {},
} as ComponentMeta<typeof HorizontalDivider>;

const Template: ComponentStory<typeof HorizontalDivider> = (args) => {
  return <HorizontalDivider {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  longText: "Our portfolio includes some of the most loved and most trusted vision care eyewear brands in the world.",
  cta: {
    label: "Explore our brands",
    url: "#",
  },
};
