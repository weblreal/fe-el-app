import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import OverviewBanner from "../../widgets/OverviewBanner";

export default {
  title: "Widgets/OverviewBanner",
  component: OverviewBanner,
  argTypes: {},
} as ComponentMeta<typeof OverviewBanner>;

const Template: ComponentStory<typeof OverviewBanner> = (args) => {
  return <OverviewBanner {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  title: "Framing beauty",
  longText: "Aiming to serve everyone’s unique vision requirements in the best possible way.",
  picture1: "/Images/M_Overview.png",
  picture2: "/Images/M_Overview.png",
};
