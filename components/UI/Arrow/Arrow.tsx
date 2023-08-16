import Container from "../Container/Container";
import Flex from "../Flex/Flex";
import Icon from "../Icon/Icon";

const Arrow = (props: {
  reverse?: boolean;
  onClick?: () => void;
  hide?: boolean;
  circleSize?: number;
  arrowSize?: number;
  className?: string;
}) => {
  return !props?.hide ? (
    <Flex
      height="100%"
      width="100%"
      position="absolute"
      left={0}
      top={0}
      alignItems="center"
      justifyContent="flex-end"
      style={{
        pointerEvents: "none",
        transform: props.reverse ? "rotate(180deg)" : "",
      }}
      zIndex={1}
    >
      <Flex
        borderRadius={props.circleSize || 72}
        width={props.circleSize || 72}
        height={props.circleSize || 72}
        backgroundColor="white"
        justifyContent="center"
        style={{
          transform: "rotate(-180deg) translateX(64px)",
          cursor: "pointer",
          pointerEvents: "all",
        }}
        className={props.className || ""}
        onClick={props.onClick}
      >
        <Icon type="arrow-left" size={props.arrowSize || 25} color="black" />
      </Flex>
    </Flex>
  ) : null;
};

export default Arrow;
