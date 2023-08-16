import styled from "styled-components";
import Flex from "../UI/Flex/Flex";
import Grid, { GridRow } from "../UI/Grid/Grid";
import Text from "../UI/Text/Text";

type Props = {};

const FilterPopular = ({}: Props) => {
  return (
    <GridRow pt={{ _: 1 }}>
      <Text
        fontFamily={{ _: "Avenir Roman" }}
        fontSize={{ _: "normal" }}
        mb={{ _: "12px" }}
        px={{ _: 3, desktopS: 4 }}
      >
        Popular filters:
      </Text>

      <TagWrapper
        gridGap={{ _: 1 }}
        gridTemplateColumns="repeat(5, 1fr)"
        overflowY="auto"
        width="full"
        px={{ _: 3, desktopS: 4 }}
        m="auto"
      >
        <Tag px={{ _: 2 }} pointer>
          <Text fontFamily={{ _: "Avenir Roman" }}>Commitments</Text>
        </Tag>
        <Tag px={{ _: 2 }} pointer>
          <Text fontFamily={{ _: "Avenir Roman" }}>Year 2022</Text>
        </Tag>
      </TagWrapper>
    </GridRow>
  );
};

const Tag = styled(Flex)`
  width: fit-content;
  background-color: ${(props: any) => props.theme?.colors?.neutral?.["5"]};
  white-space: pre;
  border: solid 0.5px ${(props: any) => props.theme?.colors?.neutral?.["20"]};
  border-radius: 100px;

  padding-top: 6px;
  padding-bottom: 6px;
`;

const TagWrapper = styled(Grid)`
  ::-webkit-scrollbar {
    display: none;
  }

  ::-webkit-scrollbar-thumb {
    display: none;
  }
`;

export default FilterPopular;
