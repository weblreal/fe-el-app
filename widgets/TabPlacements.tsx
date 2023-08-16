// Modules
import { IWidgetModel } from "../models/IWidget.interface";
import { ITabPlacements } from "../models/widgets/ITabPlacements";
import { useFetchPageDataQuery } from "../redux/slices/Page/PageAPI";
import { ICta } from "../models/components/ICta";

// Components
import Tab from "../components/Tab/Tab";
import TabContent from "../components/Tab/TabContent";
import Container from "../components/UI/Container/Container";
import Widget from "../components/Widget/Widget";
import Grid, { GridRow } from "../components/UI/Grid/Grid";

const TabPlacements: React.FC<ITabPlacements> = ({ tabs }) => {
  return (
    <Container px={{ desktopS: 8 }} maxWidth="screen" m="auto" width="full">
      <Tab>
        {tabs?.map((tab: ICta, key: number) => (
          <TabContent key={key} label={tab.label}>
            <TabContentWrapper path={tab.url} />
          </TabContent>
        ))}
      </Tab>
    </Container>
  );
};

const TabContentWrapper = ({ path }: { path: string }) => {
  // Hooks
  const { data } = useFetchPageDataQuery({ path });
  const widgetList = data?.widgets?.filter(
    (widget: IWidgetModel) =>
      widget.widgetName !== "TabPlacements" &&
      widget.widgetName !== "Navigation" &&
      widget.widgetName !== "Footer"
  );

  return (
    <Grid minHeight={!!widgetList?.length ? "auto" : "200vh"}>
      {(widgetList || []).map((widget: IWidgetModel, key: number) => (
        <GridRow id={widget.widgetName} key={key}>
          <Widget {...widget} />
        </GridRow>
      ))}
    </Grid>
  );
};

export default TabPlacements;
