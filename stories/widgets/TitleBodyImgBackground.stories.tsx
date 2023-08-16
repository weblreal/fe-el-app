import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import TitleBodyImgBackground from "../../widgets/TitleBodyImgBackground";

export default {
  title: "Widgets/TitleBodyImgBackground",
  component: TitleBodyImgBackground,
  argTypes: {},
} as ComponentMeta<typeof TitleBodyImgBackground>;

const Template: ComponentStory<typeof TitleBodyImgBackground> = (args) => {
  return <TitleBodyImgBackground {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  title: "Green Shipping",
  text: "We’ve created our green shipping initiative that empowers our customers to choose greener delivery options - aligning their shopping experience with their values. Partnering with distribution partners, we are working on reducing our downstream emissions (Scope 3) in pursuit of our net-zero goal.", 
  //backgroundImage: "/Images/dummy3.jpg"
};
