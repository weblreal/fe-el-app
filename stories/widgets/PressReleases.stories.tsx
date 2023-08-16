import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import PressReleases from "../../widgets/PressReleases";

export default {
  title: "Widgets/PressReleases",
  component: PressReleases,
  argTypes: {},
} as ComponentMeta<typeof PressReleases>;

const Template: ComponentStory<typeof PressReleases> = (args) => {
  return <PressReleases {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  header: "Press Releases",
  slides: [
    {
      title:
        "Luxottica undertakes to acquire 90.9% of Fedon to enter the packaging...",
      date: "01 Apr 2022",
      cta: {
        label: " Read more",
        url: "#",
      },
    },
    {
      title:
        "Luxottica undertakes to acquire 90.9% of Fedon to enter the packaging...",
      date: "02 Apr 2022",
      cta: {
        label: " Read more",
        url: "#",
      },
    },
    {
      title:
        "Luxottica undertakes to acquire 90.9% of Fedon to enter the packaging...",
      date: "03 Apr 2022",
      cta: {
        label: " Read more",
        url: "#",
      },
    },
  ],
};
