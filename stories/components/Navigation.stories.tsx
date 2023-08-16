import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import Navigation from "../../components/Navigation/Navigation";

export default {
  title: "Components/Navigation",
  component: Navigation,
  argTypes: {},
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = (args) => {
  return <Navigation {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  superHeader: "",
  logo: "",
  LevelOneLinks: [
    {
      label: "GROUP",
      url: "#",
    },
    {
      label: "BRANDS",
      url: "#",
    },
    {
      label: "GOVERNANCE",
      url: "#",
    },
    {
      label: "COMMITMENTS",
      url: "#",
    },
    {
      label: "INVESTORS",
      longText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      LevelTwoLinks: [
        {
          label: "Overview",
          longText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
          url: "#",
        },
        {
          label: "Publications",
          longText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
          url: "#",
        },
        {
          label: "Regulatory Information",
          longText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
          url: "#",
        },
        {
          label: "Annual Shareholders Meeting",
          longText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
          url: "#",
        },
        {
          label: "Stock and shareholders information",
          longText: "",
          LevelThreeLinks: [
            {
              label: "Real time quotation",
              url: "#",
            },
            {
              label: "How to become a shareholder",
              url: "#",
            },
          ],
        },
        {
          label: "Debt Financing",
          longText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        },
        {
          label: "Individual shareholder",
          longText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
          url: "#",
        },
        {
          label: "Events",
          longText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
          url: "#",
        },
      ],
    },
    {
      label: "CAREERS",
      url: "#",
    },
    {
      label: "NEWS ROOM",
      url: "#",
    },
  ],
};
