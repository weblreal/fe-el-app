import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import BoardOfDirectors from "../../widgets/BoardOfDirectors";
import Testimonial from "../../widgets/Testimonial";

export default {
    title: "Widgets/Testimonial",
    component: Testimonial,
    argTypes: {},
} as ComponentMeta<typeof Testimonial>;

const Template: ComponentStory<typeof Testimonial> = (args) => {
    return <Testimonial {...args} />;
};

export const Default = Template.bind({});
Default.args = {
    title: "",
    testimonialCards: [
        {
            name: "test",
            title: "test title",
            paragraph: "Lorem Ipsum dolor sit amet",
            picture: "https://www.transitions.com/_next/image/?url=https%3A%2F%2Fmedia.transitions.com%2Fcms%2Fcaas%2Fv1%2Fmedia%2F11036%2Fdata%2Fpicture%2F1d7037c5ee6363ec7bda7de33a9abd47.png&w=256&q=75"
        },
        {
            name: "test",
            title: "test title",
            paragraph: "Lorem Ipsum dolor sit amet",
            picture: "https://www.transitions.com/_next/image/?url=https%3A%2F%2Fmedia.transitions.com%2Fcms%2Fcaas%2Fv1%2Fmedia%2F11036%2Fdata%2Fpicture%2F1d7037c5ee6363ec7bda7de33a9abd47.png&w=256&q=75"
        },
        {
            name: "test",
            title: "test title",
            paragraph: "Lorem Ipsum dolor sit amet",
            picture: "https://www.transitions.com/_next/image/?url=https%3A%2F%2Fmedia.transitions.com%2Fcms%2Fcaas%2Fv1%2Fmedia%2F11036%2Fdata%2Fpicture%2F1d7037c5ee6363ec7bda7de33a9abd47.png&w=256&q=75"
        },
        {
            name: "test",
            title: "test title",
            paragraph: "Lorem Ipsum dolor sit amet",
            picture: "https://www.transitions.com/_next/image/?url=https%3A%2F%2Fmedia.transitions.com%2Fcms%2Fcaas%2Fv1%2Fmedia%2F11036%2Fdata%2Fpicture%2F1d7037c5ee6363ec7bda7de33a9abd47.png&w=256&q=75"
        },
        {
            name: "test",
            title: "test title",
            paragraph: "Lorem Ipsum dolor sit amet",
            picture: "https://www.transitions.com/_next/image/?url=https%3A%2F%2Fmedia.transitions.com%2Fcms%2Fcaas%2Fv1%2Fmedia%2F11036%2Fdata%2Fpicture%2F1d7037c5ee6363ec7bda7de33a9abd47.png&w=256&q=75"
        }
    ]
};
