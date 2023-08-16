import { useEffect } from "react";
import { GridColumn, GridRow } from "../UI/Grid/Grid";
import Icon from "../UI/Icon/Icon";
import Text from "../UI/Text/Text";

type Props = { openFilterHandler: () => void; header?: string };

const FilterHeader = ({ openFilterHandler, header }: Props) => {
  // Hooks
  useEffect(() => {
    const x = false;

    document.body.style.overflow = "hidden";

    globalThis?.window?.scrollTo(0, 1);

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <GridRow
      gridTemplateColumns="auto auto"
      gridGap={2}
      justifyContent="space-between"
      alignItems="center"
      px={{ _: 2, mobile: 4 }}
    >
      <GridColumn>
        <Text fontFamily="Avenir Black" fontSize="h4" fontWeight="bolder">
          {header}
        </Text>
      </GridColumn>
      <GridColumn alignItems="center" pointer onClick={openFilterHandler}>
        <Icon type="close" size={24} />
      </GridColumn>
    </GridRow>
  );
};

export default FilterHeader;
