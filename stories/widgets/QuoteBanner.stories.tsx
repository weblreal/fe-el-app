import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import QuoteBanner from "../../widgets/QuoteBanner";

export default {
  title: "Widgets/QuoteBanner",
  component: QuoteBanner,
  argTypes: {},
} as ComponentMeta<typeof QuoteBanner>;

const Template: ComponentStory<typeof QuoteBanner> = (args) => {
  return <QuoteBanner {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  longText: "Empowering people to shape a brighter tomorrow.",
};
