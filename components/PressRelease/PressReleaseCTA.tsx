import { ICta } from "../../models/components/ICta";
import Column from "../UI/Column/Column";
import LinkAngle from "../UI/LinkAngle/LinkAngle";

type Props = { cta?: ICta };

const PressReleaseCTA = ({ cta }: Props) => {
  return (
    <>
      {cta && (
        <Column justifyContent="center">
          <LinkAngle label={cta?.label} url={cta?.url} isExternal={cta?.isExternal} gap={0} iconVerticalAlign="bottom" />
        </Column>
      )}
    </>
  );
};

export default PressReleaseCTA;
