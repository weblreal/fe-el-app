// Modules
import { useState, useRef, useEffect } from "react";
import {
  IActive,
  IBrands,
  IBrandsModuleProps,
} from "../models/widgets/IBrandsModule";
import useThrottling from "../hooks/useThrottling";

// Components
import Container from "../components/UI/Container/Container";
import Flex from "../components/UI/Flex/Flex";
import LogoSlider from "../components/BrandsModule/BrandsModuleLogoSlider";
import BackgroundSlider from "../components/BrandsModule/BrandsModuleBackgroundSlider";
import BrandsModuleTag from "../components/BrandsModule/BrandsModuleTag";
import useView from "../hooks/useView";
import useIsSsr from "../hooks/useIsSsr";

const BrandsModule: React.FC<IBrandsModuleProps> = ({ brands }) => {
  /**
   * Hooks
   */
  const [active, setActive] = useState<IActive>({
    index: (brands || []).length - 1,
    direction: "",
    id: brands?.[(brands || []).length - 1].id || 0,
  });
  const [isThrottle, throttle] = useThrottling(750);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useView(ref, { once: true });
  const isSsr = useIsSsr();

  /**
   * Functions
   */
  const brandPickerHandler = (id: number, index: number) => {
    if (isThrottle) return;
    throttle();

    setActive((prev) => {
      return {
        ...prev,
        index,
        id,
        direction: index > prev.index ? "left" : "right",
      };
    });
  };

  /**
   * Effects
   */
  useEffect(() => {
    if (inView) {
      setActive((prev) => ({
        ...prev,
        index:
          (brands || [])
            .map((brand: IBrands) => brand.id)
            ?.indexOf(brands?.[0].id) || 0,
        id: brands?.[0].id || 0,
      }));
    }
  }, [inView]);

  return (
    <Container
      maxWidth="screen"
      width="full"
      height={{ _: "674px", desktopS: "800px", desktopXL: "920px" }}
      margin="auto"
      position="relative"
      ref={ref}
    >
      <BackgroundSlider brands={brands} active={active} />

      <Flex position="absolute" bottom={0} left={0} width="full">
        <LogoSlider
          brands={brands}
          active={active}
          brandPickerHandler={brandPickerHandler}
        />
      </Flex>

      {!isSsr && <BrandsModuleTag currentBrand={brands[active?.index]} />}
    </Container>
  );
};

export default BrandsModule;
