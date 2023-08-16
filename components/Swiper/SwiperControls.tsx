// Components
import Center from "../UI/Center/Center";
import Flex from "../UI/Flex/Flex";
import Grid, { GridColumn } from "../UI/Grid/Grid";
import Icon from "../UI/Icon/Icon";

interface ISwiperControls {
  prevOpacity?: boolean;
  nextOpacity?: boolean;
  uniqiueId?: string;
}

const SwiperControls = ({ nextOpacity, prevOpacity, uniqiueId }: ISwiperControls) => {
  return (
    <Grid
      width="fit-content"
      gridTemplateColumns="1fr 1fr"
      gridGap={2}
      ml={{ _: 0, desktopS: 3 }}
      mr={{ _: 0, desktopS: 2 }}
    >
      <GridColumn  opacity={prevOpacity ? 0.2 : 1} pointer={!prevOpacity}>
        <SwiperPrev uniqiueId={uniqiueId} />
      </GridColumn>
      <GridColumn opacity={nextOpacity ? 0.2 : 1} pointer={!nextOpacity}>
        <SwiperNext uniqiueId={uniqiueId} />
      </GridColumn>
    </Grid>
  );
};

export const SwiperPrev = ({ onClick, uniqiueId }: { onClick?: () => void, uniqiueId?: string }) => {
  return (
    <Flex
      width={48}
      height={48}
      alignItems="center"
      justifyContent="center"
      borderRadius={41}
      top="calc(50% - 20.5px)"
      className={`${uniqiueId || "swiper-controls"}-prev`}
      onClick={onClick}
    >
      <Center>
        <Icon type="arrow-left" size={31.5} />
      </Center>
    </Flex>
  );
};

export const SwiperNext = ({ onClick, uniqiueId }: { onClick?: (e: any) => void, uniqiueId?: string }) => {
  return (
    <Flex
      width={48}
      height={48}
      alignItems="center"
      justifyContent="center"
      borderRadius={48}
      top="calc(50% - 20.5px)"
      className={`${uniqiueId || "swiper-controls"}-next`}
      onClick={onClick}
    >
      <Center style={{ transform: "rotate(180deg)" }}>
        <Icon type="arrow-left" size={31.5} />
      </Center>
    </Flex>
  );
};

export default SwiperControls;
