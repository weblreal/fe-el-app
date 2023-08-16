// Modules
import styled from "styled-components";
import { ICta } from "../models/components/ICta";
// Components
import LinkAngle from "../components/UI/LinkAngle/LinkAngle";
import Container from "../components/UI/Container/Container";
import Grid from "../components/UI/Grid/Grid";
import Header from "../components/UI/Header/Header";

type ISitemapProps = {
  linkList: ILinkList[];
};

interface ILinkList {
  title: string;
  links: ICta[];
}

const Sitemap: React.FC<ISitemapProps> = ({ linkList }) => {
  // Hooks
  // Variables
  // Functions
  // Effects

  return (
    <Grid
      maxWidth={800}
      width="full"
      m="auto"
      p="84px 20px"
      py={10}
      px={2}
      gridTemplateColumns={["auto", "auto", "auto auto"]}
      gridGap={2}
    >
      {linkList?.map((link: ILinkList, key: number) => (
        <LinkList links={link.links} title={link.title} key={key} />
      ))}
    </Grid>
  );
};

const LinkList = ({ links, title }: ILinkList) => {
  return (
    <Container mb={5}>
      {title && (
        <Header element="h3" mb={2}>
          {title}
        </Header>
      )}
      <UnorderedList>
        {links?.map((link: ICta, key: number) => (
          <List key={key}>
            <LinkAngle label={link.label} url={link.url} gap={0} />
          </List>
        ))}
      </UnorderedList>
    </Container>
  );
};

const UnorderedList = styled.ul`
  list-style: none;
  padding: 0;
`;

const List = styled.li`
  margin-bottom: 8px;
  width: fit-content;
`;

export default Sitemap;
