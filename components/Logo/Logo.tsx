// Modules
import Image from "next/image";
import useGetTheme from "../../hooks/useGetTheme";
import { ITheme } from "../../models/ITheme";

// Components
import Hidden from "../UI/Hidden/Hidden";
import Flex from "../UI/Flex/Flex";

type Props = { theme?: ITheme; footer?: boolean };

const Logo = ({ theme: themeProps = "Light Theme", footer }: Props) => {
  const theme = useGetTheme();

  return !footer ? (
    <Flex width={{ _: 160, desktopS: 248.6 }}>
      <Hidden from="desktopS">
        <Image
          src={
            themeProps === "Light Theme" && theme.name === "Light Theme"
              ? "/Images/EssilorLuxottica.svg"
              : "/Images/EssilorLuxotticaWhite.svg"
          }
          width={160}
          height={18}
          alt="Essilor Luxottica"
        />
      </Hidden>
      <Hidden till="desktopS">
        <Image
          src={
            themeProps === "Light Theme" && theme.name === "Light Theme"
              ? "/Images/EssilorLuxottica.svg"
              : "/Images/EssilorLuxotticaWhite.svg"
          }
          width={248.6}
          height={27}
          alt="Essilor Luxottica"
        />
      </Hidden>
    </Flex>
  ) : (
    <>
      <Image
        src={
          themeProps === "Light Theme" && theme.name === "Light Theme"
            ? "/Images/EssilorLuxottica.svg"
            : "/Images/EssilorLuxotticaWhite.svg"
        }
        width={238}
        height={27}
        alt="Essilor Luxottica"
      />
    </>
  );
};

export default Logo;
