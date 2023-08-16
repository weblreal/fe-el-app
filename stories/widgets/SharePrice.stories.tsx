import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import SharePrice from "../../widgets/SharePrice";

export default {
  title: "Widgets/SharePrice",
  component: SharePrice,
  argTypes: {},
} as ComponentMeta<typeof SharePrice>;

const Template: ComponentStory<typeof SharePrice> = (args) => {
  return <SharePrice {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  latestEvent: {
    date: "Date",
    event: "Event",
    title: "Title",
  },
  sharePrice: {
    liveText: "Live",
    change: "Change",
    cta: {
      label: "Read more",
      url: "#",
    },
    subtitle: "From",
    lastPrice: "Price",
    subtitle2: "",
    title: "Share Price",
    volume: "Volume",
  },
  nextEvents: {
    title: "Title",
    events: [
      {
        addToCalendar: {
          description: "Add",
          endDate: "Jan 1 2023",
          label: "Add to calendar",
          startDate: "Jan 1 2023",
        },
        date: "Jan 1 2023",
        event: "Event",
      },
    ],
  },
};
