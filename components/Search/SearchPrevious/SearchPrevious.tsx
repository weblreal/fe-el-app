// Modules
import styled from "styled-components";
import useLocalStorage from "../../../hooks/useLocalStorage";
import { useEffect } from "react";
import { ISearchPrevious } from "./ISearchPrevious";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { removePreviousSearch } from "../../../redux/slices/Search/SearchSlice";

// Components
import Column from "../../UI/Column/Column";
import Container from "../../UI/Container/Container";
import Flex from "../../UI/Flex/Flex";
import Grid from "../../UI/Grid/Grid";
import Header from "../../UI/Header/Header";
import Icon from "../../UI/Icon/Icon";
import Text from "../../UI/Text/Text";

const SearchPrevious: React.FC<ISearchPrevious> = ({ label, onSubmit }) => {
  // Hooks
  const [_, setPrevSearch] = useLocalStorage<string[]>("previousSearch", []);
  const { previousSearch } = useAppSelector((state) => state.SearchSlice);
  const dispatch = useAppDispatch();

  // Functions
  const deleteHandler = (search: string) => {
    dispatch(removePreviousSearch(search));
  };

  const onSubmitHandler = (search: string) => {
    if (onSubmit) onSubmit(search);
  };

  // Effects
  useEffect(() => {
    setPrevSearch(previousSearch);
  }, [previousSearch, setPrevSearch]);

  return (
    <>
      {!!previousSearch?.length && (
        <Container maxWidth="screen4" m="auto" pt={[2, 3]} pb={[2, 5]} px={[2]}>
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

          <Grid gridGap={1}>
            {previousSearch
              ?.slice(0, 10)
              ?.map((search: string, key: number) => (
                <SearchItem
                  key={key}
                  title={search}
                  onClick={onSubmitHandler}
                  deleteHandler={deleteHandler}
                />
              ))}
          </Grid>
        </Container>
      )}
    </>
  );
};

const SearchItem = ({
  title,
  onClick,
  deleteHandler,
}: {
  title: string;
  onClick: (title: string) => void;
  deleteHandler: (search: string) => void;
}) => {
  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Title fontSize={["18px", "20px"]} onClick={() => onClick(title)}>
        {title}
      </Title>

      <Column pointer onClick={() => deleteHandler(title)}>
        <Icon type="close" size={24} />
      </Column>
    </Flex>
  );
};

const Title = styled(Header)`
  text-decoration: underline;

  @media (min-width: 425px) {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
  cursor: pointer;
`;
export default SearchPrevious;
