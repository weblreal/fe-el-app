// Modules
import { useTheme } from "styled-components";

// Components
import Skeleton from "react-loading-skeleton";
import Container from "../UI/Container/Container";
import Hidden from "../UI/Hidden/Hidden";
import Shadow from "../UI/Shadow/Shadow";

type ISkeletonProps = {};

const SPressRelease: React.FC<ISkeletonProps> = ({}) => {
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
        <Container mb={2} mt={3} px={3}>
          <Skeleton
            height={32}
            baseColor={baseColor}
            highlightColor={highlightColor}
          />
        </Container>

        <Container mb={2} px={3}>
          <Skeleton
            height={22}
            baseColor={baseColor}
            highlightColor={highlightColor}
          />
        </Container>

        <Container mb={3} px={3}>
          <Skeleton
            height={66}
            baseColor={baseColor}
            highlightColor={highlightColor}
          />
        </Container>

        <Container mb={3} px={3}>
          <Skeleton
            height={24.78}
            baseColor={baseColor}
            highlightColor={highlightColor}
          />
        </Container>
      </Hidden>
      <Hidden till="desktopXL">
        <Container mb={2} mt={3} px={3}>
          <Skeleton
            height={32}
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

        <Container mb={3} px={3}>
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
export default SPressRelease;
