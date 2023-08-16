import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import TabPlacements from "../../widgets/TabPlacements";

export default {
  title: "Widgets/TabPlacements",
  component: TabPlacements,
  argTypes: {},
} as ComponentMeta<typeof TabPlacements>;

const Template: ComponentStory<typeof TabPlacements> = (args) => {
  return <TabPlacements {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  tabs: [
    {
      label: "Customer Support",
      url: "115160",
    },
    {
      label: "Product Care",
      url: "115160",
    },
  ],
};
