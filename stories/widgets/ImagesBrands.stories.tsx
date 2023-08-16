import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import ImagesBrands from "../../widgets/ImagesBrands";

export default {
  title: "Widgets/ImagesBrands",
  component: ImagesBrands,
  argTypes: {},
} as ComponentMeta<typeof ImagesBrands>;

const Template: ComponentStory<typeof ImagesBrands> = (args) => {
  return <ImagesBrands {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  title: "Our Brands Portfolio",
  brands: [
    {
      title: "Eyecare",
      backgroundImage: ["Images/dummy4.jpg"],
      cta: {
        label: "Discover",
        url: "#",
      }
    },
    {
      title: "Eyewear",
      backgroundImage: ["Images/dummy5.jpg"],
      cta: {
        label: "Discover",
        url: "#",
      }
    },
    {
      title: "Direct to consumer",
      backgroundImage: ["Images/dummy6.jpg"],
      cta: {
        label: "Discover",
        url: "#",
      }
    },
    {
      title: "Special Categories",
      backgroundImage: ["Images/dummy7.jpg"],
      cta: {
        label: "Discover",
        url: "#",
      }
    },
  ]
};
