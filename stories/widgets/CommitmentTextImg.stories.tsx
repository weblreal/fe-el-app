import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import CommitmentTextImg from "../../widgets/CommitmentTextImg";

export default {
  title: "Widgets/CommitmentTextImg",
  component: CommitmentTextImg,
  argTypes: {},
} as ComponentMeta<typeof CommitmentTextImg>;

const Template: ComponentStory<typeof CommitmentTextImg> = (args) => {
  return <CommitmentTextImg {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  longText:
    "We are committed to creating a better, more sustainable future for all. With the above, we are proud to be contributing to the below UN Sustainable Development Goals: <br /> <br /> <ul> <li>Affordable and Clean Energy</li> <li>Climate Action</li> </ul>",
  picture: "Images/dummy.jpg",
  title: "Commitment to UN Sustainable Development Goals",
};
