// Modules
import useThrottling from "../../hooks/useThrottling";
import { ILogoSliderControls } from "../../models/widgets/IBrandsModule";

// Components
import Center from "../UI/Center/Center";
import Container from "../UI/Container/Container";
import Flex from "../UI/Flex/Flex";
import Grid, { GridColumn } from "../UI/Grid/Grid";
import Icon from "../UI/Icon/Icon";

const BrandsModuleControls: React.FC<ILogoSliderControls> = ({
  brands,
  isNavigationState,
}) => {
  /**
   * Variables
   */
  const morethanSeven = (brands || []).length;

  /**
   * Hooks
   */
  const [isThrottling, throttle] = useThrottling(750);

  return (
    <>
      {morethanSeven && (
        <Grid
          gridGap={2}
          ml={{ _: 0, desktopS: 28 }}
          mt={{ _: 0, deskttopS: 21 }}
          gridTemplateColumns="1fr 1fr"
          width="fit-content"
          position="relative"
          display={{ _: "none", desktopS: "grid" }}
        >
          {isThrottling && (
            <Container
              position="absolute"
              top={0}
              left={0}
              width="full"
              height="full"
              zIndex={2}
            ></Container>
          )}
          <GridColumn
            className="swiper-controls-brand-news-prev"
            opacity={isNavigationState.isBeginning ? 0.3 : 1}
            pointer={isNavigationState.isBeginning ? false : true}
            onClick={isThrottling ? () => {} : throttle}
          >
            <Prev />
          </GridColumn>
          <GridColumn
            className="swiper-controls-brand-news-next"
            opacity={isNavigationState.isEnd ? 0.3 : 1}
            pointer={isNavigationState.isEnd ? false : true}
            onClick={isThrottling ? () => {} : throttle}
          >
            <Next />
          </GridColumn>
        </Grid>
      )}
    </>
  );
};

const Prev = ({ pointer }: { pointer?: boolean }) => {
  return (
    <Flex
      width={32}
      height={32}
      alignItems="center"
      justifyContent="center"
      borderRadius={32}
      top="47%"
      pointer={pointer}
    >
      <Center>
        <Icon type="arrow-left" size={21} color="#ffffff" />
      </Center>
    </Flex>
  );
};

const Next = ({ pointer }: { pointer?: boolean }) => {
  return (
    <Flex
      width={32}
      height={32}
      alignItems="center"
      justifyContent="center"
      borderRadius={32}
      top="47%"
      pointer={pointer}
    >
      <Center style={{ transform: "rotate(180deg)" }}>
        <Icon type="arrow-left" size={21} color="#ffffff" />
      </Center>
    </Flex>
  );
};

export default BrandsModuleControls;
