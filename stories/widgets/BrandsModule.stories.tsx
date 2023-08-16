import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import BrandsModule from "../../widgets/BrandsModule";

export default {
  title: "Widgets/BrandsModule",
  component: BrandsModule,
  argTypes: {},
} as ComponentMeta<typeof BrandsModule>;

const Template: ComponentStory<typeof BrandsModule> = (args) => {
  return <BrandsModule {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  brands: [
    { backgroundImage: ["/images/dummy2.jpg"], logo: "/images/rayban.svg", category: "EYEWEAR BRANDS", id: 0 },
    { backgroundImage: ["/images/dummy3.jpg"], logo: "/images/rayban.svg", category: "EYEWEAR BRANDS", id: 1 },
    { backgroundImage: ["/images/dummy2.jpg"], logo: "/images/rayban.svg", category: "EYEWEAR BRANDS", id: 2 },
    { backgroundImage: ["/images/dummy.jpg"], logo: "/images/rayban.svg", category: "EYEWEAR BRANDS", id: 3 },
    { backgroundImage: ["/images/dummy2.jpg"], logo: "/images/rayban.svg", category: "EYEWEAR BRANDS", id: 4 },
    { backgroundImage: ["/images/dummy.jpg"], logo: "/images/rayban.svg", category: "EYEWEAR BRANDS", id: 5 },
    { backgroundImage: ["/images/dummy2.jpg"], logo: "/images/rayban.svg", category: "EYEWEAR BRANDS", id: 6 },
    { backgroundImage: ["/images/dummy2.jpg"], logo: "/images/rayban.svg", category: "EYEWEAR BRANDS", id: 0 },
    { backgroundImage: ["/images/dummy3.jpg"], logo: "/images/rayban.svg", category: "EYEWEAR BRANDS", id: 1 },
    { backgroundImage: ["/images/dummy2.jpg"], logo: "/images/rayban.svg", category: "EYEWEAR BRANDS", id: 2 },
    { backgroundImage: ["/images/dummy.jpg"], logo: "/images/rayban.svg", category: "EYEWEAR BRANDS", id: 3 },
    { backgroundImage: ["/images/dummy2.jpg"], logo: "/images/rayban.svg", category: "EYEWEAR BRANDS", id: 4 },
    { backgroundImage: ["/images/dummy.jpg"], logo: "/images/rayban.svg", category: "EYEWEAR BRANDS", id: 5 },
    { backgroundImage: ["/images/dummy2.jpg"], logo: "/images/rayban.svg", category: "EYEWEAR BRANDS", id: 6 },
  ],
};
