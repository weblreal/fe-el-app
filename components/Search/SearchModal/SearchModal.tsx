// Modules
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import useLocalStorage from "../../../hooks/useLocalStorage";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { useFetchSearchTargetsQuery } from "../../../redux/slices/Search/SearchAPI";
import { addPreviousSearch, toggleSearch } from "../../../redux/slices/Search/SearchSlice";

// Components
import Logo from "../../Logo/Logo";
import Modal from "../../Modal/Modal";
import Container from "../../UI/Container/Container";
import Flex from "../../UI/Flex/Flex";
import Hidden from "../../UI/Hidden/Hidden";
import Icon from "../../UI/Icon/Icon";
import SearchInput from "../SearchInput/SearchInput";
import SearchPopular from "../SearchPopular/SearchPopular";
import SearchPrevious from "../SearchPrevious/SearchPrevious";

type ISearchModalProps = {};
const SearchModal: React.FC<ISearchModalProps> = () => {
  // Hooks
  const dispatch = useAppDispatch();
  const { searhModal, searchLabels } = useAppSelector(
    (state) => state.SearchSlice
  );
  const [prevSearch, setPrevSearch] = useLocalStorage<string[]>("previousSearch", []);

  const { push } = useRouter();
  const { data } = useFetchSearchTargetsQuery({ id: searchLabels.target });

  // Functions
  const closeModalHandler = () => {
    dispatch(toggleSearch());
  };

  const onSubmitHandler = (e: string) => {
    push(`${data?.cta || ""}/?q=${e || ""}`);
    dispatch(toggleSearch());

    const newPrevSearch = prevSearch?.slice(0, 10);
    dispatch(addPreviousSearch(e));
    setPrevSearch([e, ...(newPrevSearch || [])]);

  };

  return (
    <>
      <Modal portalId="#portal" show={searhModal}>
        <Container
          backgroundTheme
          width="full"
          height="full"
          zIndex={9999}
          position="fixed"
          top={0}
          left={0}
          px={{ _: 0, desktopS: 4 }}
        >
          <Flex
            alignItems="center"
            justifyContent="space-between"
            height={{ _: 60, desktopS: 100 }}
            mt={{ _: 0, desktopS: 50 }}
            px={{ _: 2, desktopS: 4 }}
          >
            <LogoLink href="/">
              <Logo theme="Light Theme" />
            </LogoLink>

            <Flex pointer className="tappable" onClick={closeModalHandler}>
              <Hidden till="desktopS">
                <Icon type="close" size={62.8} />
              </Hidden>

              <Hidden from="desktopS">
                <Icon type="close" size={32} />
              </Hidden>
            </Flex>
          </Flex>

          <Container px={{ _: 0, desktopS: 2 }}>
            <SearchInput
              onSubmit={onSubmitHandler}
              placeholder={searchLabels.SearchPlaceHolderText}
              label1={searchLabels.SearchText}
            />

            <SearchPrevious
              label={searchLabels.PrevioussearchesText}
              onSubmit={onSubmitHandler}
            />

            <SearchPopular
              items={data?.popularSearches || []}
              label={searchLabels.PopularSearchesText}
            />
          </Container>
        </Container>
      </Modal>
    </>
  );
};

const LogoLink = styled(Link)`
  display: flex;
`;

export default SearchModal;
