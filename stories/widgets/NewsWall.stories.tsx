import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import NewsWall from "../../widgets/NewsWall";

export default {
  title: "Widgets/NewsWall",
  component: NewsWall,
  argTypes: {},
} as ComponentMeta<typeof NewsWall>;

const Template: ComponentStory<typeof NewsWall> = (args) => {
  return <NewsWall {...args} />;
};

const news = [
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
    category: "ZBRANDS",
    date: "04 Apr 1999",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    cta: {
      label: "Read more",
      url: "/",
    },
  },
  {
    backgroundImage: "Images/dummy2.jpg",
    category: "ABRANDS",
    date: "04 Apr 2001",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    cta: {
      label: "Read more",
      url: "/",
    },
  },
  {
    backgroundImage: "Images/dummy2.jpg",
    category: "BRANDS",
    date: "04 Apr 2019",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    cta: {
      label: "Read more",
      url: "/",
    },
  },
  {
    backgroundImage: "Images/dummy2.jpg",
    category: "BRANDS",
    date: "04 Apr 2019",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    cta: {
      label: "Read more",
      url: "/",
    },
  },
  {
    backgroundImage: "Images/dummy2.jpg",
    category: "BRANDS",
    date: "04 Apr 2019",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    cta: {
      label: "Read more",
      url: "/",
    },
  },
  {
    backgroundImage: "Images/dummy2.jpg",
    category: "BRANDS",
    date: "04 Apr 2019",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    cta: {
      label: "Read more",
      url: "/",
    },
  },
  {
    backgroundImage: "Images/dummy2.jpg",
    category: "BRANDS",
    date: "04 Apr 2019",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    cta: {
      label: "Read more",
      url: "/",
    },
  },
  {
    backgroundImage: "Images/dummy2.jpg",
    category: "BRANDS",
    date: "04 Apr 2019",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    cta: {
      label: "Read more",
      url: "/",
    },
  },
  {
    backgroundImage: "Images/dummy2.jpg",
    category: "BRANDS",
    date: "04 Apr 2019",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    cta: {
      label: "Read more",
      url: "/",
    },
  },
  {
    backgroundImage: "Images/dummy2.jpg",
    category: "BRANDS",
    date: "04 Apr 2019",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    cta: {
      label: "Read more",
      url: "/",
    },
  },
  {
    backgroundImage: "Images/dummy2.jpg",
    category: "BRANDS",
    date: "04 Apr 2019",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    cta: {
      label: "Read more",
      url: "/",
    },
  },
  {
    backgroundImage: "Images/dummy2.jpg",
    category: "BRANDS",
    date: "04 Apr 2019",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    cta: {
      label: "Read more",
      url: "/",
    },
  },
  {
    backgroundImage: "Images/dummy2.jpg",
    category: "BRANDS",
    date: "04 Apr 2019",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    cta: {
      label: "Read more",
      url: "/",
    },
  },
  {
    backgroundImage: "Images/dummy2.jpg",
    category: "BRANDS",
    date: "04 Apr 2019",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    cta: {
      label: "Read more",
      url: "/",
    },
  },
  {
    backgroundImage: "Images/dummy2.jpg",
    category: "BRANDS",
    date: "04 Apr 2019",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    cta: {
      label: "Read more",
      url: "/",
    },
  },
];

export const Default = Template.bind({});
Default.args = {
  news: news,
};
