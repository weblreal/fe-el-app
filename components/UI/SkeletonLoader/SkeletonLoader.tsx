import WIDGET_SKELETON_STYLE from "../../../logic/constants/WIDGET_SKELETON_STYLE";
import Container from "../Container/Container";

const SkeletonLoader = ({ widgetName }: { widgetName: string }) => {
  const selectedWidgetStyle = WIDGET_SKELETON_STYLE[widgetName];

  return selectedWidgetStyle ? (
    <Container
      minHeight={{
        _: selectedWidgetStyle.desktop,
        desktopS: selectedWidgetStyle.mobile,
      }}
    ></Container>
  ) : (
    <Container minHeight="400px"></Container>
  );
};

export default SkeletonLoader;
