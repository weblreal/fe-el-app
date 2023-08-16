import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import InvestorKit from "../../widgets/InvestorKit";

export default {
  title: "Widgets/InvestorKit",
  component: InvestorKit,
  argTypes: {},
} as ComponentMeta<typeof InvestorKit>;

const Template: ComponentStory<typeof InvestorKit> = (args) => {
  return <InvestorKit {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  header: "Investor Kit",
  downloadLink: "Download all",
  cta: {
    label: "View all documents",
    url: "#",
  },
  files: [
    {
      fileName: "Last fiscal year.pdf",
      url: "#",
      date: "15 May 2022",
      label: "Last fiscal year.pdf",
    },
    {
      fileName: "Last fiscal year.pdf",
      url: "#",
      date: "15 May 2022",
      label: "Last fiscal year.pdf",
    },
    {
      fileName: "Last fiscal year.pdf",
      url: "#",
      date: "15 May 2022",
      label: "Last fiscal year.pdf",
    },
    {
      fileName: "Last fiscal year.pdf",
      url: "#",
      date: "15 May 2022",
      label: "Last fiscal year.pdf",
    },
  ],
};
