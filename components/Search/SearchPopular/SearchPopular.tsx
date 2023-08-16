// Modules
import Link from "next/link";
import { ICta } from "../../../models/components/ICta";
import { ISearchPopular } from "./ISearchPopular";
import { toggleSearch } from "../../../redux/slices/Search/SearchSlice";
import { useAppDispatch } from "../../../redux/hooks";
import AppConfig from "../../../logic/configs/AppConfig";
// Components
import Column from "../../UI/Column/Column";
import Container from "../../UI/Container/Container";
import Flex from "../../UI/Flex/Flex";
import Text from "../../UI/Text/Text";

const SearchPopular: React.FC<ISearchPopular> = ({ label, items }) => {
  // Hooks
  const dispatch = useAppDispatch();

  // Variables
  // Functions
  // Effects

  return (
    <Container
      pt={{ _: 4, desktopS: 7 }}
      pb={{ _: 0, desktopS: 111 }}
      px={2}
      maxWidth="screen4"
      m="auto"
    >
      {label && (
        <Text
          mb={1}
          fontFamily="Avenir Medium"
          fontSize="18px"
          fontWeight={500}
        >
          {label}
        </Text>
      )}

      {/* Tags */}
      <Flex flexWrap="wrap">
        {items?.map((tag: ICta, key: number) => (
          <Container onClick={() => dispatch(toggleSearch())} key={key}>
            <Tag tag={tag.label} url={tag.url} />
          </Container>
        ))}
      </Flex>
    </Container>
  );
};

const Tag = ({ tag, url }: { tag: string; url: string }) => {
  return url ? (
    <Container mr={1} mb={1}>
      <Link href={url}>
        <Column
          justifyContent="center"
          alignItems="center"
          backgroundColor="neutral.5"
          px={2}
          height="32px"
          border="thin"
          borderColor="neutral.5"
          borderWidth={0.5}
          borderRadius="100px"
          pointer
        >
          {/* Tag */}
          <Text fontFamily="Avenir Roman">{AppConfig.html(tag)}</Text>
        </Column>
      </Link>
    </Container>
  ) : (
    <></>
  );
};
export default SearchPopular;
