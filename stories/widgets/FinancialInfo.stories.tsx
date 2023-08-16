import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import FinancialInfo from "../../widgets/FinancialInfo";

export default {
  title: "Widgets/FinancialInfo",
  component: FinancialInfo,
  argTypes: {},
} as ComponentMeta<typeof FinancialInfo>;

const Template: ComponentStory<typeof FinancialInfo> = (args) => {
  return <FinancialInfo {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  header1: "Next events",
  header2: "Email investors alert",
  subtitle: "Subscribe to our Latest News and Announcements",
  events: [
    {
      date: "25 May 2022",
      title: "Annual Shareholders Meeting",
      link: {
        label: "Add to calendar",
        url: "#",
      }
    },
    {
      date: "25 May 2022",
      title: "H1 2022 results presentation",
      link: {
        label: "Add to calendar",
        url: "#",
      }
    }
  ],
  cta: {
    label: "View investors page",
    url: "#",
  }
};
