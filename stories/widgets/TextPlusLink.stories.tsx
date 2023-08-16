import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import TextPlusLink from "../../widgets/TextPlusLink";

export default {
  title: "Widgets/TextPlusLink",
  component: TextPlusLink,
  argTypes: {},
} as ComponentMeta<typeof TextPlusLink>;

const Template: ComponentStory<typeof TextPlusLink> = (args) => {
  return <TextPlusLink {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      paragraph: "Browse our job offers or visit our career pages to discover more about our values and history and discover all the possibilities that we can offer you. As we work towards a fully-integrated career site, you will find our job opportunities in the following web pages, which are both part of Essilor Luxottica.",
      cta: [
        {
          label: "Luxottica Career Page",
          url: "https://www.essilorluxottica.com/careers"
        },
        {
          label: "Essilor Career Page",
          url: "https://www.essilorluxottica.com/careers"
        }
      ]
    },
    {
      paragraph: "The Operations Talent Program is a two-year program designed for STEM students and graduates with the goal to develop skills for dynamic career opportunities within Luxottica’s Operations HQ in Agordo (IT) and Creteil (FR).",
      cta: [
        {
          label: "Discover more",
          url: "https://www.essilorluxottica.com/careers"
        }
      ]
    }
  ]
};
