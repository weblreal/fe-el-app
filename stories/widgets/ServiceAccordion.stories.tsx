import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import ServiceAccordion from "../../widgets/ServiceAccordion";

export default {
  title: "Widgets/ServiceAccordion",
  component: ServiceAccordion,
  argTypes: {},
} as ComponentMeta<typeof ServiceAccordion>;

const Template: ComponentStory<typeof ServiceAccordion> = (args) => {
  return <ServiceAccordion {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      header: "Header",
      longText: "Long Text",
      pressRelease: [],
      toggleLabelOff: "Off",
      toggleLabelOn: "On",
    },
  ],
};
