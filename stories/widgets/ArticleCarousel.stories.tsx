import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import ArticleCarousel from "../../widgets/ArticleCarousel";

export default {
  title: "Widgets/ArticleCarousel",
  component: ArticleCarousel,
  argTypes: {},
} as ComponentMeta<typeof ArticleCarousel>;

const Template: ComponentStory<typeof ArticleCarousel> = (args) => {
  return <ArticleCarousel {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  backgroundImage: [
    "/Images/dummy3.jpg",
    "/Images/dummy2.jpg",
    "/Images/dummy3.jpg",
  ],
  backgroundVideo: [
    // "https://vimeo.com/763421056/666af388d5",
    // "https://vimeo.com/763422022/893bc1b8a7",
    // "https://vimeo.com/763422443/2d5c1c75ea",
  ],
};
