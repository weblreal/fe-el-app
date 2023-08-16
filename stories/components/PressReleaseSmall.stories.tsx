import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import PressReleaseSmall from "../../components/PressReleaseSmall/PressReleaseSmall";

export default {
  title: "Components/PressReleaseSmall",
  component: PressReleaseSmall,
  argTypes: {},
} as ComponentMeta<typeof PressReleaseSmall>;

const Template: ComponentStory<typeof PressReleaseSmall> = (args) => {
  return <PressReleaseSmall {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  title: "Sample document with one category of attachments",
  tag: "Executive Corporate",
  date: "15 Feb 2023",
  cta: {
    label: "Read more",
    url: "el-en/",
  },
  singleFile: {
    label: "1.pdf",
    size: 348285,
    url: "https://preview-stageintessilorluxottica.luxgroup.net/caas/v1/media/1724/data/download/43b4262be452d8aa7c31679bc92d7363.pdf",
    category: "<div><p>REPORTS</p></div>",
  },
  share: {
    label: "Share",
    url: "#",
  },
  downloadAllLabel: "Download",
};
