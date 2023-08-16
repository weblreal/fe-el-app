import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import StoriesCarousel from "../../widgets/StoriesCarousel";

export default {
  title: "Widgets/StoriesCarousel",
  component: StoriesCarousel,
  argTypes: {},
} as ComponentMeta<typeof StoriesCarousel>;

const Template: ComponentStory<typeof StoriesCarousel> = (args) => {
  return <StoriesCarousel {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  header: "Stories",
  longText:
    "Every day, everywhere we work, we seek out new ways to help people see more and be more. Discover our lastest stories from EssiorLuxottica world.",
  cta: {
    label: "Read all stories",
    url: "#",
  },
  slides: [
    {
      backgroundImage: "/images/dummy2.jpg",
      cta: {
        label: "Read more",
        url: "#",
      },
      date: "03 Feb 2022",
      title: "Eizen Kids Lenses: Designed for how they see the new world",
    },
    {
      backgroundImage: "/images/dummy2.jpg",
      cta: {
        label: "Read more",
        url: "#",
      },
      date: "03 Feb 2022",
      title: "Eizen Kids Lenses: Designed for how they see the new world",
    },
    {
      backgroundImage: "/images/dummy2.jpg",
      cta: {
        label: "Read more",
        url: "#",
      },
      date: "03 Feb 2022",
      title: "Eizen Kids Lenses: Designed for how they see the new world",
    },
  ],
};
