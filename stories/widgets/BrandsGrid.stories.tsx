import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import BrandsGrid from "../../widgets/BrandsGrid";

export default {
  title: "Widgets/BrandsGrid",
  component: BrandsGrid,
  argTypes: {},
} as ComponentMeta<typeof BrandsGrid>;

const Template: ComponentStory<typeof BrandsGrid> = (args) => {
  return <BrandsGrid {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  title: "View Websites",
  title2: "View More",
  brands: [{
    title: "Rayban",
    title2: "ACQUIRED DATE XXXX",
    longText1: "Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum",
    logoImage: ["/Images/dummy2.jpg", "/Images/dummy2.jpg"],
    cta: [{
      label: "GO TO LINK",
      url: "#"
    }]
  }]
};
