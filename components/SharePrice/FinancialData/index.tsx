import { ISharePriceRow } from "../../../models/widgets/ISharePrice";
// Components
import Container from "../../UI/Container/Container";
import Flex from "../../UI/Flex/Flex";
import Hidden from "../../UI/Hidden/Hidden";
import LinkAngle from "../../UI/LinkAngle/LinkAngle";
import Change from "./Change";
import DateTime from "./DateTime";
import LastPrice from "./LastPrice";
import LiveText from "./LiveText";
import Title from "./Title";
import Volume from "./Volume";

type IFinancialDataProps = {
  sharePrice: ISharePriceRow;
  price: any;
};

const FinancialData: React.FC<IFinancialDataProps> = ({
  sharePrice,
  price,
}) => {
  // Hooks
  // Variables
  // Functions
  // Effects

  return (
    <Container
      backgroundColor="rgba(0, 0, 0, 0.05)"
      px={{ _: "16px", desktopS: "64px" }}
      py={{ _: "40px", desktopS: "40px" }}
    >
      <Container maxWidth="1312px" width="full" m="auto">
        <Flex
          flexDirection={{ _: "column", desktopS: "unset" }}
          alignItems={{ _: "start", desktopS: "center" }}
          flexWrap={{ _: "wrap", desktopS: "initial" }}
          mb={4}
        >
          <Flex alignItems="center" mb={{ _: 1, desktopS: 0 }}>
            {/* Title */}
            <Title title={sharePrice?.title || ""} />

            {/* Live Text */}
            <Hidden from="desktopS">
              <LiveText liveText={sharePrice.liveText} />
            </Hidden>
          </Flex>

          <Flex
            flexDirection={{ _: "column", desktopS: "unset" }}
            alignItems={{ _: "start", desktopS: "center" }}
            mb={{ _: 2, desktopS: 0 }}
          >
            {/* Date and Time */}
            <DateTime
              subtitle={sharePrice.subtitle}
              subtitle2={sharePrice.subtitle2}
              date={price.date}
              time={price.time}
            />

            {/* Live Text */}
            <Hidden till="desktopS">
              <LiveText liveText={sharePrice.liveText} />
            </Hidden>
          </Flex>

          {/* CTA */}
          <Flex ml={{ desktopS: "auto" }}>
            <LinkAngle
              label={sharePrice?.cta.label}
              url={sharePrice?.cta.url}
              gap={0}
              iconVerticalAlign="middle"
            />
          </Flex>
        </Flex>

        {/* Prices */}
        <Flex
          flexWrap={{ _: "wrap", desktopS: "initial" }}
          flexDirection={{ _: "column", desktopS: "unset" }}
        >
          <LastPrice label={sharePrice.lastPrice} value={price.value} />
          <Change label={sharePrice.change} value={price.changes} />
          <Volume label={sharePrice.volume} value={price.volume} />
        </Flex>
      </Container>
    </Container>
  );
};

export default FinancialData;
