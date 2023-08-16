import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import BrandsNewsRow from "../../widgets/BrandsNewsRow";
import BigNews from "../../widgets/BigNews";

export default {
  title: "Widgets/BrandsNewsRow",
  component: BrandsNewsRow,
  argTypes: {},
} as ComponentMeta<typeof BrandsNewsRow>;

const Template: ComponentStory<typeof BrandsNewsRow> = (args) => {
  return <BrandsNewsRow {...args} />;
};

const Template1: ComponentStory<typeof BigNews> = (args) => {
  return <BigNews {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  title: "Brands news",
  news: [
    {
      backgroundImage: "Images/dummy2.jpg",
      category: "BRANDS",
      date: "04 Apr 2022",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      cta: {
        label: "Read more",
        url: "/",
      },
    },
    {
      backgroundImage: "Images/dummy2.jpg",
      category: "BRANDS",
      date: "04 Apr 2022",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      cta: {
        label: "Read more",
        url: "/",
      },
    },
    {
      backgroundImage: "Images/dummy2.jpg",
      category: "BRANDS",
      date: "04 Apr 2022",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      cta: {
        label: "Read more",
        url: "/",
      },
    },
    {
      backgroundImage: "Images/dummy2.jpg",
      category: "BRANDS",
      date: "04 Apr 2022",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      cta: {
        label: "Read more",
        url: "/",
      },
    },
  ],
  cta: {
    label: "View all",
    url: "/",
  }
};

export const BigNewsTemplate = Template1.bind({});
BigNewsTemplate.args = {
  title: "Latest Stories",
  news: [
    {
      backgroundImage: "Images/dummy2.jpg",
      category: "BRANDS",
      date: "04 Apr 2022",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      longText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      cta: {
        label: "Read more",
        url: "/",
      },
    },
    {
      backgroundImage: "Images/dummy2.jpg",
      category: "BRANDS",
      date: "04 Apr 2022",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      cta: {
        label: "Read more",
        url: "/",
      },
    },
    {
      backgroundImage: "Images/dummy2.jpg",
      category: "BRANDS",
      date: "04 Apr 2022",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      cta: {
        label: "Read more",
        url: "/",
      },
    },
    {
      backgroundImage: "Images/dummy2.jpg",
      category: "BRANDS",
      date: "04 Apr 2022",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      cta: {
        label: "Read more",
        url: "/",
      },
    },
  ],
  cta: {
    label: "View all",
    url: "/",
  }
};
