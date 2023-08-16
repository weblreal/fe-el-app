import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import LeftImageRightText from "../../widgets/LeftImageRightText";

export default {
  title: "Widgets/LeftImageRightText",
  component: LeftImageRightText,
  argTypes: {},
} as ComponentMeta<typeof LeftImageRightText>;

const Template: ComponentStory<typeof LeftImageRightText> = (args) => {
  return <LeftImageRightText {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  ctaRoute: "",
  ctaText: "",
  description: "",
  imgAlt: "",
  imgUrl: "",
  title: "",
};
