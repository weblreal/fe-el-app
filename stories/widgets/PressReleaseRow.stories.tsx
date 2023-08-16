import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import PressReleaseRow from "../../widgets/PressReleaseRow";

export default {
  title: "Widgets/PressReleaseRow",
  component: PressReleaseRow,
  argTypes: {},
} as ComponentMeta<typeof PressReleaseRow>;

const Template: ComponentStory<typeof PressReleaseRow> = (args) => {
  return <PressReleaseRow {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  header: "Lastest press releases",
  cta: {
    label: "View all",
    url: "#",
  },
  pressReleases: [
    {
      tag: "BRANDS",
      date: "04 Apr 2022",
      cta: {
        label: "Read more",
        url: "#",
      },
      title: "Title Press Release",
      longText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.",
      singleFile: {
        url: "https://preview-stageintessilorluxottica.luxgroup.net/caas/v1/media/7446/data/download/374b28f2dadc2f7e7edf9da23fc7768e.pdf",
        label: "PDF",
        size: 100,
        type: "application/pdf",
      },
      share: {
        label: "Share",
        url: "#",
      },
    },
    {
      tag: "BRANDS",
      date: "04 Apr 2022",
      cta: {
        label: "Read more",
        url: "#",
      },
      title: "Title Press Release",
      longText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.",
      share: {
        label: "Share",
        url: "#",
      },
    },
    {
      tag: "BRANDS",
      date: "04 Apr 2022",
      cta: {
        label: "Read more",
        url: "#",
      },
      title: "Title Press Release",
      longText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.",
      share: {
        label: "Share",
        url: "#",
      },
    },
  ],
};
