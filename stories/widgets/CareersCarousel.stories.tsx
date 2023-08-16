import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CareersCarousel from "../../widgets/CareersCarousel";
// Components

export default {
  title: "Widgets/CareersCarousel",
  component: CareersCarousel,
  argTypes: {},
} as ComponentMeta<typeof CareersCarousel>;

const Template: ComponentStory<typeof CareersCarousel> = (args) => {
  return <CareersCarousel {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  header: "Step inside:",
  slides: [
    {
      backgroundImage: "/images/dummy2.jpg",
      title: "Design, R&D and Engineering",
      paragraph: "From the first sketches and prototypes, all the way to rigorous quality testing and patents, this function offers a strong pipeline of innovation to deliver superior quality products and raise the standard of excellence across the industry. As the force behind our incredible products, our team of hands-on innovators are highly talented in their areas of expertise."
    },
    {
      backgroundImage: "/images/dummy2.jpg",
      title: "Design, R&D and Engineering",
      paragraph: "From the first sketches and prototypes, all the way to rigorous quality testing and patents, this function offers a strong pipeline of innovation to deliver superior quality products and raise the standard of excellence across the industry. As the force behind our incredible products, our team of hands-on innovators are highly talented in their areas of expertise."
    },
    {
      backgroundImage: "/images/dummy2.jpg",
      title: "Design, R&D and Engineering",
      paragraph: "From the first sketches and prototypes, all the way to rigorous quality testing and patents, this function offers a strong pipeline of innovation to deliver superior quality products and raise the standard of excellence across the industry. As the force behind our incredible products, our team of hands-on innovators are highly talented in their areas of expertise."
    },
    {
      backgroundImage: "/images/dummy2.jpg",
      title: "Design, R&D and Engineering",
      paragraph: "From the first sketches and prototypes, all the way to rigorous quality testing and patents, this function offers a strong pipeline of innovation to deliver superior quality products and raise the standard of excellence across the industry. As the force behind our incredible products, our team of hands-on innovators are highly talented in their areas of expertise."
    },
    {
      backgroundImage: "/images/dummy2.jpg",
      title: "Design, R&D and Engineering",
      paragraph: "From the first sketches and prototypes, all the way to rigorous quality testing and patents, this function offers a strong pipeline of innovation to deliver superior quality products and raise the standard of excellence across the industry. As the force behind our incredible products, our team of hands-on innovators are highly talented in their areas of expertise."
    },
    {
      backgroundImage: "/images/dummy2.jpg",
      title: "Design, R&D and Engineering",
      paragraph: "From the first sketches and prototypes, all the way to rigorous quality testing and patents, this function offers a strong pipeline of innovation to deliver superior quality products and raise the standard of excellence across the industry. As the force behind our incredible products, our team of hands-on innovators are highly talented in their areas of expertise."
    },
    {
      backgroundImage: "/images/dummy2.jpg",
      title: "Design, R&D and Engineering",
      paragraph: "From the first sketches and prototypes, all the way to rigorous quality testing and patents, this function offers a strong pipeline of innovation to deliver superior quality products and raise the standard of excellence across the industry. As the force behind our incredible products, our team of hands-on innovators are highly talented in their areas of expertise."
    },
  ],
};
