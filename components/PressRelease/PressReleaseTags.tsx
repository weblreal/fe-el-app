import { ITags } from "./IPressRelease";
import { ICta } from "../../models/components/ICta";
import { useRouter } from "next/router";
import useTranslateTags from "../../hooks/useTranslateTags";
import Link from "next/link";
// Components
import Column from "../UI/Column/Column";
import Flex from "../UI/Flex/Flex";
import Text from "../UI/Text/Text";

type Props = {
  tags?: ITags[];
  tag?: string;
  tagCta?: ICta;
  removeFirst?: boolean;
  isGoBackTags?: boolean
};

const PressReleaseTags = ({ tags = [], tag, tagCta, removeFirst, isGoBackTags }: Props) => {
  // Hooks
  const { tagList } = useTranslateTags(tags);
  const { asPath } = useRouter();

  // Variables
  const withTags = tags && !!tags.length;
  const fallBackUrl = isGoBackTags ? asPath?.split("/")?.slice(0, asPath?.split("/").length - 2)?.join("/") : "";

  return (
    <Flex flexWrap="wrap">
      {tagList?.slice(removeFirst ? 1 : 0)?.map((tag: string, key: number) => (
        <Link href={`${tagCta?.url ? tagCta?.url : fallBackUrl}#PR__${tag}`} key={key}>
          <Column
            justifyContent="center"
            alignItems="center"
            backgroundColor="neutral.5"
            px={2}
            height={32}
            border="thin"
            borderColor="neutral.5"
            borderWidth={0.5}
            borderRadius="100px"
            mr={1}
            mb={1}
          >
            {/* Tag */}
            <Text fontFamily="Avenir Roman">{tag}</Text>
          </Column>
        </Link>
      ))}

      {tag && !withTags && (
        <Column
          height={32}
          justifyContent="center"
          alignItems="center"
          backgroundColor="neutral.5"
          px={2}
          mb={2}
          border="thin"
          borderColor="neutral.5"
          borderWidth={0.5}
          borderRadius="100px"
        >
          {/* Tag */}
          <Text fontFamily="Avenir Roman">{tag}</Text>
        </Column>
      )}
    </Flex>
  );
};

export default PressReleaseTags;
