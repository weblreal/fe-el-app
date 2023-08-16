// Modules
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

// Components
import Flex from "../UI/Flex/Flex";
import Text from "../UI/Text/Text";

type IBodyTagsProps = {
  tagList: string[];
};

const BodyTags: React.FC<IBodyTagsProps> = ({ tagList }) => {
  // Hooks
  const router = useRouter();

  // Variables
  const arrPage = router.query.page;

  // Functions
  const handleBackBtn = () => {
    if (!!arrPage) {
      if (arrPage?.length < 1) return;

      const isIndexPos = arrPage?.length >= 0;
      const prevIndex = isIndexPos ? arrPage?.length - 1 : 0;

      const formattedArr = arrPage?.slice(0, prevIndex);
      return (formattedArr as string[]).join("/");
    }
  };

  const list = tagList?.slice(1);
  const tagType = tagList?.slice(0, 1)?.[0];
  const anchor = tagType === "Press-Release" ? "#PR__" : "#S__";

  return (
    <Flex flexWrap="wrap">
      {list?.map((tag: string, index: number) => (
        <Link href={`${handleBackBtn()}${anchor}${tag}` || "#"} key={index}>
          <Tag
            fontSize="16px"
            fontFamily="Avenir Roman"
            lineHeight={1}
            color="#000"
            mb={1}
          >
            {tag}
          </Tag>
        </Link>
      ))}
    </Flex>
  );
};

const Tag = styled(Text)`
  padding: 7px 16px 7px;
  border: solid 0.5px rgba(0, 0, 0, 0.1);
  background-color: #f5f5f5;
  margin-right: 8px;
  border-radius: 100px;
`;

export default BodyTags;
