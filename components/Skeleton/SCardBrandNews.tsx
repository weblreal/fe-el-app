// Modules
import Skeleton from "react-loading-skeleton";
import { useTheme } from "styled-components";

// Components
import Shadow from "../UI/Shadow/Shadow";
import Container from "../UI/Container/Container";
import Hidden from "../UI/Hidden/Hidden";

type ISkeletonProps = {};

const SCardBrandNews: React.FC<ISkeletonProps> = ({}) => {
  // Hooks
  const theme = useTheme();
  const baseColor = (theme as { colors: { [neutral: string]: string } })?.colors?.neutral?.["5"];
  const highlightColor = (theme as { colors: { [neutral: string]: string } })?.colors?.neutral?.["5"];

  // Variables
  // Functions
  // Effects

  return (
    <Shadow boxShadow="Card Border" zIndex={0}>
      <Hidden from="desktopXL">
        <Container mb={4}>
          <Skeleton
            height={220}
            baseColor={baseColor}
            highlightColor={highlightColor}
          />
        </Container>

        <Container mb={1} px={3}>
          <Skeleton
            height={22}
            baseColor={baseColor}
            highlightColor={highlightColor}
          />
        </Container>

        <Container mb={6} px={3}>
          <Skeleton
            height={81}
            baseColor={baseColor}
            highlightColor={highlightColor}
          />
        </Container>

        <Container mb={4} px={3}>
          <Skeleton
            height={29}
            baseColor={baseColor}
            highlightColor={highlightColor}
          />
        </Container>
      </Hidden>
      <Hidden till="desktopXL">
        <Container mb={4}>
          <Skeleton
            height={303}
            baseColor={baseColor}
            highlightColor={highlightColor}
          />
        </Container>

        <Container mb={1} px={3}>
          <Skeleton
            height={22}
            baseColor={baseColor}
            highlightColor={highlightColor}
          />
        </Container>

        <Container mb={6} px={3}>
          <Skeleton
            height={81}
            baseColor={baseColor}
            highlightColor={highlightColor}
          />
        </Container>

        <Container mb={4} px={3}>
          <Skeleton
            height={29}
            baseColor={baseColor}
            highlightColor={highlightColor}
          />
        </Container>
      </Hidden>
    </Shadow>
  );
};
export default SCardBrandNews;
