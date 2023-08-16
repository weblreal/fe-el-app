import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import DirectorProfile from "../../widgets/DirectorProfile";

export default {
  title: "Widgets/DirectorProfile",
  component: DirectorProfile,
  argTypes: {},
} as ComponentMeta<typeof DirectorProfile>;

const Template: ComponentStory<typeof DirectorProfile> = (args) => {
  return <DirectorProfile {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  name:"Francesco Milleri",
  title:"Chairman and CEO",
  paragraph: "<div><p>Francesco Milleri is Chairman and Chief Executive Officer (CEO) of EssilorLuxottica.</p><p>He graduated with honors in Law at the University of Florence, where he worked as Assistant Professor of political economy, from 1984 until 1986. He later earned in 1987 an MBA in Business Administration with high merit at the school of management at the Bocconi University in Milan, followed by two years of specialization in Corporate Finance at the Stern School of Business at New York University as the assignee of the “Donato Menichella” scholarship from Banca d’Italia.</p><p>Francesco Milleri began his career as a business consultant for Italian groups and multinationals in 1988. He gained international experience working in a variety of industries, from mechanics to consumer goods, from financial institutions to pharmaceuticals.</p><p>Alongside business consulting activities, he founded in 1996 and developed for about 20years a group of companies focused on technology and digital automation platforms. He is also Director of the Leonardo Del Vecchio Foundation and of IEO European Institute of Oncology.</p><p>While maintaining his responsibilities at Luxottica, Francesco Milleri has been involved in the business combination between Essilor and Luxottica since January 2017. In close collaboration with Paul du Saillant and his teams, he has been actively working on advancing the integration and synergy plans of the two companies, most recently as co-executive delegate and currently as CEO of the Company. </p></div>",
  picture:"/Images/dummy2.jpg",
};
