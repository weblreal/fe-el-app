// Components
import Container from "../../UI/Container/Container";
import Text from "../../UI/Text/Text";

type ISearchNoResultsProps = {
  input: string;
  text1?: string;
};

const SearchNoResults: React.FC<ISearchNoResultsProps> = ({ input, text1 }) => {
  // Hooks
  // Variables
  // Functions
  // Effects

  return (
    <Container
      pt={[3, 7]}
      maxWidth="screen4"
      m="auto"
      width="full"
      px={{ _: 2, desktopS: 2 }}
    >
      {text1 && (
        <Text
          fontFamily="Avenir Medium"
          fontWeight={500}
          fontSize="32px"
          mb={1}
        >
          {text1}
        </Text>
      )}
    </Container>
  );
};
export default SearchNoResults;
