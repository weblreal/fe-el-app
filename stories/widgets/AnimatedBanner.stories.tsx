import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import AnimatedBanner from "../../widgets/AnimatedBanner";

export default {
  title: "Widgets/AnimatedBanner",
  component: AnimatedBanner,
  argTypes: {},
} as ComponentMeta<typeof AnimatedBanner>;

const Template: ComponentStory<typeof AnimatedBanner> = (args) => {
  return <AnimatedBanner {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  backgroundImage:
    "https://preview-stageuatessilorluxottica.luxgroup.net/caas/v1/media/95866/data/picture/089afd83bfc6b2b564ed766fa55e34ab.jpg",
  cta: {
    label: "Visit our Careers page",
    url: "en/careers",
  },
  header:
    "<div><p>Embrace our vision.</p><p>Step into the EssilorLuxottica world.</p></div>",
};
