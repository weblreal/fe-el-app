import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import IRAlerts from "../../widgets/IRAlerts";

export default {
  title: "Widgets/IRAlerts",
  component: IRAlerts,
  argTypes: {},
} as ComponentMeta<typeof IRAlerts>;

const Template: ComponentStory<typeof IRAlerts> = (args) => {
  return <IRAlerts {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  contactHeader: "IR Contacts",
  contacts: [
    {
      email: "giorgio.iannella@essilorluxottica.com",
      name: "GIORGIO IANNELLA",
      role: "Head of Investor Relations",
    },
    {
      email: "emanuela.mazzoni@essilorluxottica.com",
      name: "EMANUELA MAZZONI",
      role: "Investor Relations Manager",
    },
    {
      email: "sarah.teicher@esssilorluxottica.com",
      name: "SARAH TEICHER",
      role: "Investor Relations Manager",
    },
    {
      email: "giulia.perriccioli@essilorluxottica.com",
      name: "GIULIA PERRICCIOLI, CESGA",
      role: "Investor Relations ESG Specialist",
    },
    {
      email: "chengran.mei@essilorluxottica.com",
      name: "CHENGRAN (ZOE) MEI   梅珵然",
      role: "Investor Relations Analyst",
    },
    {
      email: "",
      name: "For general inquiries:",
      role: '<a href="mailto:IR@essilorluxottica.com">IR@essilorluxottica.com</a>',
    },
  ],
  src: "https://pr.globenewswire.com/NewsArchive/View/-C27LnH1-M7J-miDIO0C9w==?iFrame=true",
  forms: {
    title: "",
    description:
      "<div><p><em>Subscribe to receive our latest news and announcements by filling the form below.</em></p><p><br/></p><p>By submitting this form, you agree that the information entered will be saved in a computer file and processed by EssilorLuxottica to receive alerts and financial information.</p><p><br/></p><p>Your personal data is only used to send you alerts and financial information. You can at any time click on the link included in the release in order to unsubscribe from the alerts and financial information.</p><p><br/></p><p>To know more about the management of your personal data, see the Privacy policy section of our Site.</p></div>",
  },
};
