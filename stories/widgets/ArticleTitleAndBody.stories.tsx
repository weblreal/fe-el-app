import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import ArticleTitleAndBody from "../../widgets/ArticleTitleAndBody";

export default {
  title: "Widgets/ArticleTitleAndBody",
  component: ArticleTitleAndBody,
  argTypes: {},
} as ComponentMeta<typeof ArticleTitleAndBody>;

const Template: ComponentStory<typeof ArticleTitleAndBody> = (args) => {
  return <ArticleTitleAndBody {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  timeToRead: "2min",
  shareText: "Share",
  backToListText: "Back To List",
  publishText: "Publish Text",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dignissimos quis aspernatur magnam exercitationem laudantium iure unde perspiciatis libero, aliquid numquam excepturi officia ut saepe corrupti ex iusto. At, debitis?",
  text2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quo totam nobis culpa molestias necessitatibus distinctio aut, quibusdam est accusamus asperiores assumenda eligendi tempore omnis error fugit rem commodi. Reprehenderit quae officia perspiciatis. Iusto accusantium suscipit, amet eveniet id, praesentium nostrum fugiat ducimus illum eum molestiae asperiores porro optio architecto et sequi doloribus! Eveniet, beatae natus! Blanditiis quod recusandae vitae, voluptates perspiciatis amet totam cupiditate beatae explicabo odit nesciunt, possimus nulla. Veritatis aut rerum cum iure esse ducimus doloribus doloremque suscipit, aliquam voluptatum magni est tempora dolorem consequuntur quibusdam ab at quidem omnis. Provident non magnam excepturi maxime officia nulla?",
  title: "Article Title",
  tags: [{}],
  publishDate: "May 2 1999"
};
