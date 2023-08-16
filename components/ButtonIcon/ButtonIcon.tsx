// Modules
import Link from "next/link";
import { ICta } from "../../models/components/ICta";
import { IIcon } from "../../models/components/IIcon";
import { IButton } from "../UI/Button/IButton";
import AppConfig from "../../logic/configs/AppConfig";
// Components
import ReverseTheme from "../ReverseTheme/ReverseTheme";
import Button from "../UI/Button/Button";
import Icon from "../UI/Icon/Icon";
import Text from "../UI/Text/Text";

const ButtonIcon = ({
  cta,
  reverseTheme,
  icon,
  button,
  color = "#fff",
}: {
  cta: ICta;
  reverseTheme?: boolean;
  icon: IIcon;
  button: IButton;
  color: string;
}) => {
  return (
    cta && (
      <>
        {reverseTheme && (
          <ReverseTheme>
            <Link href={cta.url}>
              <Button variant={button}>
                <Text color={color} mr={1}>
                  {AppConfig.html(cta.label)}
                </Text>
                <Icon type={icon.type} size={icon.size} color={icon.color} />
              </Button>
            </Link>
          </ReverseTheme>
        )}

        {!reverseTheme && (
          <Link href={cta.url}>
            <Button variant={button}>
              <Text color={color} mr={1}>
                {cta.label}
              </Text>
              <Icon type={icon.type} size={icon.size} color={icon.color} />
            </Button>
          </Link>
        )}
      </>
    )
  );
};

export default ButtonIcon;
