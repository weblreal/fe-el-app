import Link from "next/link";
import styled from "styled-components";
import { INavigation } from "../INavigation";
import { getAnalyticsId } from "../../../logic/utilities";
import { GridRow } from "../../UI/Grid/Grid";
import Text from "../../UI/Text/Text";

const SubLinks = ({ footerLinks, analyticsId }: INavigation) => {
  return (
    <GridRow gridGap={3} p={2} py="28px" backgroundTheme>
      {footerLinks?.map((link: any, key: number) => (
        <GridRow key={key}>
          <Linkable
            href={link?.url || "#"}
            data-element-id={getAnalyticsId(analyticsId, link?.label)}
          >
            <TextHoverable>{link?.label}</TextHoverable>
          </Linkable>
        </GridRow>
      ))}
    </GridRow>
  );
};

const Linkable = styled(Link)`
  width: fit-content;
`;

const TextHoverable = styled(Text)`
  &:hover {
    text-decoration: underline;
  }
`;

export default SubLinks;
