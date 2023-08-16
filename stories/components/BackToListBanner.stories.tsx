import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import BackToListBanner from "../../components/BackToListBanner/BackToListBanner";

export default {
    title: "Components/BackToListBanner",
    component: BackToListBanner,
    argTypes: {},
} as ComponentMeta<typeof BackToListBanner>;

const Template: ComponentStory<typeof BackToListBanner> = (args) => {
    return <BackToListBanner {...args} />;
};

export const Default = Template.bind({});
Default.args = {
    backToListText: "Back to list",
    title: "EssilorLuxottica winner at the Red Dot Design Award 2022 with Ray-Ban Stories and SPHERE by Starck Biotech Paris",
    publishDate: "3 min read - 04 Apr 2022",
    backgroundImage: "/Images/dummy3.jpg"
};