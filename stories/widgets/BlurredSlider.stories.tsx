import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import BlurredSlider from "../../widgets/BlurredSlider";

export default {
  title: "Widgets/BlurredSlider",
  component: BlurredSlider,
  argTypes: {},
} as ComponentMeta<typeof BlurredSlider>;

const Template: ComponentStory<typeof BlurredSlider> = (args) => {
  return <BlurredSlider {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  header: "Who We Are",
  backgroundImage: "/images/01-mission.jpg",
  longText:
    "We have a fully integrated approach, from R&D and product development to a robust supply chain that allows us to produce a complete pair of branded frames with advanced lens technology, to our omnichannel platform",
  slides: [
    {
      header: "Who We Are",
      alt: "Test",
      src: "/images/dummy.jpg",
      longText:
        "<div><p>We are a fully integrated player addressing the world’s evolving vision needs.</p></div>",
      longText2: "",
    },
    {
      header: "A partnership for the smart glasses of the future",
      alt: "Test",
      src: "/images/dummy2.jpg",
      longText:
        "<div><p>The project will encompass industrial research and experimental development of devices underlying a new generation of wearables which are capable of autonomous network connection.</p></div>",
      longText2: "",
    },
    {
      header: "Fostering research and development",
      alt: "Test",
      src: "/images/dummy3.jpg",
      longText:
        "<div><p>The EssilorLuxottica Smart Eyewear Lab will employ both industrial and academic researchers and scientists, developing a highly international research environment that fosters synergies and transversality.</p></div>",
      longText2: "",
    },
    {
      header: "Attracting talents",
      alt: "Test",
      src: "/images/dummy2.jpg",
      longText:
        "<div><p>Joining the EssilorLuxottica Smart Eyewear Lab means having the opportunity to live an immersive, first-hand experience in innovation while working in a passion-driven and diverse environment involving international stakeholders and talents.</p></div>",
      longText2: "",
    },
  ],
};
