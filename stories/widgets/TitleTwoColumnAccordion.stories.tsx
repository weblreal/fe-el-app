import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import TitleTwoColumnAccordion from "../../widgets/TitleTwoColumnAccordion";

export default {
  title: "Widgets/TitleTwoColumnAccordion",
  component: TitleTwoColumnAccordion,
  argTypes: {},
} as ComponentMeta<typeof TitleTwoColumnAccordion>;

const Template: ComponentStory<typeof TitleTwoColumnAccordion> = (args) => {
  return <TitleTwoColumnAccordion {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  title: "A bio-based future",
  title2:"We are moving our focus away from fossil-based materials and towards renewable sources - which produce fewer emissions, biodegrade, and are easier to recycle.",
  longText1: "We’re focusing particularly on bringing transparency and clarity to the whole supply chain by developing certified life-cycle assessments (LCAs) with our partners. We are working to develop an internal LCA tool to easily assess our materials and products and to make sure we are considering all different sustainability drivers.",
  longText2: "We’ve introduced bio-based materials into a range of types of products, enabling the launch of specific collections, from Arnette to Foster Grant and many others. It is this understanding of our impact at every level that enables us to never lose sight of what really matters.",
  background: "/Images/dummy3.jpg",
  cta: {
    label: "Read More",
    url: "#"
  }
};
