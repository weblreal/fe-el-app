import styled from "styled-components";
import {
  alignItems,
  alignSelf,
  AlignSelfProps,
  grid,
  gridColumn,
  gridColumnGap,
  GridColumnGapProps,
  GridColumnProps,
  gridRow,
  gridRowGap,
  GridRowGapProps,
  GridRowProps,
  justifyContent,
  justifyItems,
  justifySelf,
} from "styled-system";
import { IGridProps } from "./IGrid";
import Container from "../Container/Container";

const Grid = styled(Container)<IGridProps>`
  display: grid;
  ${grid};
  ${justifyContent}
  ${justifySelf}
  ${alignSelf}
  ${alignItems}
  ${justifyItems}
`;

export const GridColumn = styled(Grid)<
  GridColumnGapProps | GridColumnProps | AlignSelfProps
>`
  ${gridColumn}
  ${gridColumnGap}
`;
export const GridRow = styled(Grid)<
  GridRowProps | GridRowGapProps | AlignSelfProps
>`
  ${gridRow}
  ${gridRowGap}
`;

export default Grid;
