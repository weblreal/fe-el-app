import { IPressRelease } from "../components/PressRelease/IPressRelease";
import PressReleaseLarge from "../components/PressReleaseLarge/PressReleaseLarge";
import Container from "../components/UI/Container/Container";
import Flex from "../components/UI/Flex/Flex";
import Grid from "../components/UI/Grid/Grid";
import LinkAngle from "../components/UI/LinkAngle/LinkAngle";
import Text from "../components/UI/Text/Text";
import { IPressReleaseList } from "../models/widgets/IPressReleaseList";

const NewsSingle = ({ pressReleaseItem, header, cta }: IPressReleaseList) => {
  return (
    <Container
      maxWidth="screen"
      width="full"
      m="auto"
      px={{ _: 2, tablet: 8 }}
      pt={{ _: 6, tablet: 9 }}
      pb={{ _: 3, tablet: 8 }}
    >
      <Flex
        mb={{ _: 3, tablet: 4 }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Text fontSize="h2" fontWeight="500" fontFamily="Avenir Medium">
          {header}
        </Text>

        {cta && <LinkAngle label={cta?.label} url={cta?.url} gap={0} iconVerticalAlign="sub" />}
      </Flex>

      <Grid
        maxWidth={{ _: "screen3", desktopL: "screen2" }}
        m="auto"
        gridGap={{ _: 2, tablet: 3 }}
      >
        {pressReleaseItem?.map((item: IPressRelease, key: number) => (
          <PressReleaseLarge {...item} key={key} />
        ))}
      </Grid>
    </Container>
  );
};

export default NewsSingle;
