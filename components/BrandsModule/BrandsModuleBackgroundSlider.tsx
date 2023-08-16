// Modules
import { AnimatePresence } from "framer-motion";
import {
  IBrands,
  IBrandsModuleProps,
} from "../../models/widgets/IBrandsModule";

// Components
import Grid from "../UI/Grid/Grid";
import BackgroundSlide from "./BrandsModuleBackgroundSlide";

const BackgroundSlider = ({ brands, active }: IBrandsModuleProps) => {
  return (
    <>
      <Grid>
        {brands?.map((brand: IBrands, key: number) => (
          <AnimatePresence key={key}>
            {active.id === brand.id && (
              <BackgroundSlide brand={brand} active={active} />
            )}
          </AnimatePresence>
        ))}
      </Grid>

      {/* Preloader */}
      <Grid opacity={0} position="absolute" top={0} left={0} zIndex={-1}>
        {brands?.map((brand: IBrands, key: number) => (
          <AnimatePresence key={key}>
            <BackgroundSlide brand={brand} active={active} />
          </AnimatePresence>
        ))}
      </Grid>
    </>
  );
};

export default BackgroundSlider;
