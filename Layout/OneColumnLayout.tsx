import styled from "styled-components";
import AppConfig from "../logic/configs/AppConfig";
import { IWidgetModel } from "../models/IWidget.interface";
import { getAnalyticsId } from "../logic/utilities";
// Component
import Grid, { GridRow } from "../components/UI/Grid/Grid";
import Widget from "../components/Widget/Widget";

interface IOneColumnLayout {
  data: { widgets: IWidgetModel[] };
}

const OneColumnLayout = ({ data }: IOneColumnLayout) => {
  return (
    <Grid backgroundTheme>
      {data?.widgets &&
        data?.widgets?.map((list: IWidgetModel, key: number) => {
          const orderId = list?.widgetContainerId;
          const isPadding = key === 0 && !AppConfig.isPlacementNoPadding(list?.widgetName);
          const isNavigation = data?.widgets?.[0]?.widgetName === "Navigation";
          const backgroundTheme = list?.widgetName !== "Navigation";
          const zIndex = list?.widgetName === "Navigation" ? 9999 : list?.widgetName === "Footer" ? 1 : data?.widgets?.length - key;

          return (
            <GridPaddingRow
              width="full"
              id={list?.widgetName}
              key={key}
              gridRow={orderId}
              backgroundTheme={backgroundTheme}
              zIndex={list?.widgetName === "HeroImageFullscreen" ? 1 : zIndex}
              isPadding={isPadding}
              data-element-id={getAnalyticsId(list?.widgetName)}
              isNavigation={isNavigation}
            >
              <Widget {...list} />
            </GridPaddingRow>
          );
        })}
    </Grid>
  );
};


interface IGridPaddingRow { isPadding: boolean, isNavigation: boolean };

const GridPaddingRow = styled(GridRow)<IGridPaddingRow>`
  @media (min-width: 1280px) {
    padding-top: ${(props: any) =>
      props.isNavigation ? (props.isPadding ? "150px" : "0") : "0"};
  }
`;

export default OneColumnLayout;
