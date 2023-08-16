// Modules

// Components
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "../components/UI/Button/Button";
import Flex from "../components/UI/Flex/Flex";
import Grid, { GridRow } from "../components/UI/Grid/Grid";
import Header from "../components/UI/Header/Header";
import Icon from "../components/UI/Icon/Icon";
import LinkAngle from "../components/UI/LinkAngle/LinkAngle";
import LongText from "../components/UI/LongText/LongText";

type INotFoundProps = {
  data: any;
};

const NotFound: React.FC<INotFoundProps> = ({}) => {
  // Hooks
  const { locales } = useRouter();

  // Variables
  // Functions
  // Effects

  return (
    <Grid
      py={{ _: 5, tablet: 7 }}
      pb={{ _: 81, tablet: 120 }}
      maxWidth="638px"
      m="auto"
      px={[2, 2, 0]}
    >
      <GridRow mb={4}>
        <Logo />
      </GridRow>
      <GridRow mb={2}>
        <Header element="h2" fontSize="32px" textAlign="center">
          Sorry we couldn’t find the page you are looking for.
        </Header>
      </GridRow>
      <GridRow mb={5}>
        <LongText fontSize="20px" textAlign="center">
          The link you followed may be broken or the page may have been removed.
          Try using the search tool or go back to our homepage.
        </LongText>
      </GridRow>

      <GridRow justifyContent="center">
        <Link href="/" locale={locales?.[1]}>
          <Button variant="secondary">
            <LinkAngle label="Go to Homepage" url="#" gap={0} />
          </Button>
        </Link>
      </GridRow>
    </Grid>
  );
};

const Logo = () => {
  return (
    <Flex alignItems="center" justifyContent="center">
      <Header element="h1" fontSize="160px" textAlign="center" mr={27.4}>
        4
      </Header>
      <Grid gridTemplateColumns="auto auto" gridGap={15.1}>
        <Icon type="essilor-dot" size={33.8} />
        <Icon type="essilor-dot" size={33.8} />
      </Grid>
      <Header element="h1" fontSize="160px" textAlign="center" ml={27.4}>
        4
      </Header>
    </Flex>
  );
};
export default NotFound;
