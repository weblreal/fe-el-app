// Modules
import styled from "styled-components";
import Link from "next/link";
import { IBrands } from "../../models/widgets/IBrandsModule";
import AppConfig from "../../logic/configs/AppConfig";

// Components
import Flex from "../UI/Flex/Flex";
import Text from "../UI/Text/Text";

type IBrandsModuleTagProps = {
  currentBrand: IBrands;
};

const BrandsModuleTag: React.FC<IBrandsModuleTagProps> = ({ currentBrand }) => {
  return (
    <Tag>
      {currentBrand.category && (
        <Link
          href={currentBrand?.categoryCTA?.url || "#"}
          target={currentBrand?.categoryCTA?.isExternal ? "_blank" : "_self"}
        >
          <Flex
            alignItems="center"
            height="32px"
            zIndex={1}
            position="absolute"
            right={{ _: 2, desktopS: 4 }}
            top={{ _: 2, desktopS: 4 }}
            px={2}
            backgroundColor="rgba(0, 0, 0, 0.4)"
            borderRadius={100}
            width="fit-content"
            noSelect
          >
            <Text color="white" fontFamily={{ _: "Avenir Roman" }} transparent>
              {AppConfig.html(currentBrand?.category)}
            </Text>
          </Flex>
        </Link>
      )}
    </Tag>
  );
};

const Tag = styled(Flex)`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  width: 100%;
`;

export default BrandsModuleTag;
