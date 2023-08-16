import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import WizardStep from "../../widgets/WizardStep";

export default {
    title: "Widgets/WizardStep",
    component: WizardStep,
    argTypes: {},
} as ComponentMeta<typeof WizardStep>;

const Template: ComponentStory<typeof WizardStep> = (args) => {
    return <WizardStep {...args} />;
};

export const Default = Template.bind({});
Default.args = {
    title: "Selection process: what are the next phases",
    phases: [
        {
            title: "PHASE 1",
            date: "APRIL - JUNE 2022",
            text: "Applications and online tests",
            bgImg: "random.jpg"
        },
        {
            title: "PHASE 2",
            date: "JUNE - JULY  2022",
            text: "Virtual Assessment and Business Interview",
            bgImg: "random.jpg"
        },
        {
            title: "PHASE 3",
            date: "SEPTEMBER 2022",
            text: "Onboarding",
            bgImg: "random.jpg"
        },
    ],
    text: `Send your application by June 30th, 2022 <br> For further information, please, contact us: OperationsTalentProgram@essilorluxottica.com`
};