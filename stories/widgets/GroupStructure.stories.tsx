import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import GroupStructure from "../../widgets/GroupStructure";

export default {
  title: "Widgets/GroupStructure",
  component: GroupStructure,
  argTypes: {},
} as ComponentMeta<typeof GroupStructure>;

const Template: ComponentStory<typeof GroupStructure> = (args) => {
  return <GroupStructure {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  title: "After contribution of Delfin shares",
  longText: "Aiming to serve everyone’s unique vision requirements in the best possible way.",
  picture1: "/Images/dummy5.jpg",
  picture2: "/Images/dummy6.jpg",
  title2: "After Exchange Offer"
};
