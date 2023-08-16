// Modules
import styled from "styled-components";
import { Transition, Variants } from "framer-motion";

// Components
import Center from "../Center/Center";
import Hidden from "../Hidden/Hidden";
import Icon from "../Icon/Icon";
import Flex from "../Flex/Flex";

type IDotsProps = {
  sizes: {
    mobile: number;
    desktop: number;
  };
  variants: Variants;
  color?: string;
  transitions?: Transition;
};

const Dots: React.FC<IDotsProps> = ({
  sizes,
  variants,
  color,
  transitions = { duration: 0.5 },
}) => {
  /**
   * Variables
   */

  return (
    <Center>
      <EssilorDot>
        <Hidden till="tablet">
          <Flex
            variants={variants}
            position="absolute"
            initial="close"
            whileInView="spreadLeftD"
            viewport={{ once: true }}
            transition={transitions}
          >
            <Icon type="essilor-dot" size={sizes.desktop} color={color} />
          </Flex>
          <Flex
            variants={variants}
            position="absolute"
            initial="close"
            whileInView="spreadRightD"
            viewport={{ once: true }}
            transition={transitions}
          >
            <Icon type="essilor-dot" size={sizes.desktop} color={color} />
          </Flex>
        </Hidden>

        <Hidden from="tablet">
          <Flex
            variants={variants}
            position="absolute"
            initial="close"
            whileInView="spreadLeftM"
            viewport={{ once: true }}
            transition={transitions}
          >
            <Icon type="essilor-dot" size={sizes.mobile} color={color} />
          </Flex>
          <Flex
            variants={variants}
            position="absolute"
            initial="close"
            whileInView="spreadRightM"
            viewport={{ once: true }}
            transition={transitions}
          >
            <Icon type="essilor-dot" size={sizes.mobile} color={color} />
          </Flex>
        </Hidden>
      </EssilorDot>
    </Center>
  );
};

const EssilorDot = styled(Flex)`
  transition: opacity ease 200ms;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  margin-bottom: 0;
  position: relative;

  @media (min-width: 834px) {
    width: 40px;
    height: 40px;
  }
`;

export default Dots;
