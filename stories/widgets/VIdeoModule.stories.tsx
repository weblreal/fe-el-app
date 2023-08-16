import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import VideoModule from "../../widgets/VideoModule";

export default {
  title: "Widgets/VideoModule",
  component: VideoModule,
  argTypes: {},
} as ComponentMeta<typeof VideoModule>;

const Template: ComponentStory<typeof VideoModule> = (args) => {
  return <VideoModule {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  title: "Eyes on the planet",
  //text: "The Operations Talent Program (OTP) is a two-year program designed for talented STEM students and graduates willing to develop both technical and managerial skills for dynamic and international career opportunities within EssilorLuxottica Global Operations.",
  text2:
    "The learning path offers experiences within technology and innovation with a focus on products and sustainability topics. This year the program will start in two EssilorLuxottica Operations hubs: in Agordo, Belluno area, Italy, and in Créteil, southeast of Paris, France.",
  backgroundVideo: ["112836958"],
  cta: [
    {
      label: "Watch the video",
      url: "#",
    },
  ],
};
