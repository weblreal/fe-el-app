import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import TextImageColumn from "../../widgets/TextImageColumn";

export default {
  title: "Widgets/TextImageColumn",
  component: TextImageColumn,
  argTypes: {},
} as ComponentMeta<typeof TextImageColumn>;

const Template: ComponentStory<typeof TextImageColumn> = (args) => {
  return <TextImageColumn {...args} />;
};


export const Default = Template.bind({});
Default.args = {
  title: "Discover the two locations of this year",
  content: [
    {
      backgroundImage: "/Images/dummy5.jpg",
      longText: "<div><p>Feel the beating heart of our historic production plant, which allies the most advanced <em>R&amp;D and manufacturing technologies and highly qualified international teams to create a rich pipeline of innovations directly applicable to products. Be inspired by an inclusive and challenging mindset while surrounded by unspoiled nature in the heart of the National Park of the Belluno Dolomites, a UNESCO World Heritage Site.</p></div>",
      title: "Agordo, Italy"
    },
    {
      backgroundImage: "/Images/dummy5.jpg",
      longText: "<div><p>Evolve in our Center for Innovation and Technologies in Europe, where our optical lenses are meticulously designed and engineered. Two steps away from Paris, one of the most vibrant metropolitan cities in Europe, you will work alongside dynamic, multidisciplinary teams who design and develop value-creating products, technologies and services to anticipate wearers’ expectations and constant market changes.</p></div>",
      title: "Créteil, France"
    },
  ]
};
