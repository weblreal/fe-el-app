import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import Announcement from "../../widgets/Announcement";

export default {
  title: "Widgets/Announcement",
  component: Announcement,
  argTypes: {},
} as ComponentMeta<typeof Announcement>;

const Template: ComponentStory<typeof Announcement> = (args) => {
  return <Announcement {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  header: "Announcement",
  longText:
    "The Combined Shareholders’ Meeting of EssilorLuxottica took place on May 25, 2022.",
  cta: {
    label: "Access the dedicated General Meeting page",
    url: "#",
  },
};
