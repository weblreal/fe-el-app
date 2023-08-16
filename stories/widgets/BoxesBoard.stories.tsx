import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import BoxesBoard from "../../widgets/BoxesBoard";

export default {
  title: "Widgets/BoxesBoard",
  component: BoxesBoard,
  argTypes: {},
} as ComponentMeta<typeof BoxesBoard>;

const Template: ComponentStory<typeof BoxesBoard> = (args) => {
  return <BoxesBoard {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  title: "Our board of directors",
  cta:{
    label: "View all",
    url: "#",
  },
  boards: [
    {
      title: "Francesco Milleri",
      subTitle: "Chairman and Chief executive officer",
      backgroundImage: "Images/dummy4.jpg",
      cta: {
        label: "Read more",
        url: "#",
      }
    },
    {
      title: "Paul du Saillant",
      subTitle: "Deputy chief executive officer",
      backgroundImage: "Images/dummy5.jpg",
      cta: {
        label: "Read more",
        url: "#",
      }
    }
  ]
};
