import { IViewAllSlide } from "./IViewAllSlide";
import Link from "next/link";
// Components
import Center from "../UI/Center/Center";
import Grid from "../UI/Grid/Grid";
import Icon from "../UI/Icon/Icon";
import Text from "../UI/Text/Text";
import Flex from "../UI/Flex/Flex";


const ViewAllSlide = ({ cta, height }: IViewAllSlide) => {
  return (
    <Flex
      minWidth={316}
      minHeight={height || 471}
      width="full"
      height="100%"
      alignItems="center"
      boxShadow="Card Border"
    >
      <Flex
        alignItems="center"
        justifyContent="center"
        height="full"
        width="full"
      >
        <Link href={cta.url}>
          <Grid gridGap={4} height="auto">
            {/* Arrow */}
            <Center>
              <Center
                width={80}
                height={80}
                borderRadius="50%"
                backgroundColor="neutral.5"
                whileHover={{
                  scale: 1.2,
                }}
              >
                <Icon type="arrow-right" size={24} />
              </Center>
            </Center>

            <Text textAlign="center" fontFamily="Avenir Roman" fontSize="22px">
              {cta.label}
            </Text>
          </Grid>
        </Link>
      </Flex>
    </Flex>
  );
};

export default ViewAllSlide;
