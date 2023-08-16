import Loading from "../Loading/Loading";
import Button from "../UI/Button/Button";
import Center from "../UI/Center/Center";
import Container from "../UI/Container/Container";
import Flex from "../UI/Flex/Flex";
import Span from "../UI/Span/Span";
import Text from "../UI/Text/Text";

type Props = {
  pressRelease: any[];
  showMoreHandler: () => void;
  paginationLabel1?: string;
  paginationLabel2?: string;
  pagingationCTA?: string;
  pressReleaseCount: number;
  isFetching?: boolean;
};

const DocumentCategoriesPagination = ({
  pressRelease,
  paginationLabel1,
  paginationLabel2,
  showMoreHandler,
  pagingationCTA,
  pressReleaseCount,
  isFetching,
}: Props) => {
  return (
    <Flex justifyContent="center" flexDirection="column" alignItems="center">
      <Text mb={2} fontSize="h5">
        {`${paginationLabel1}`}{" "}
        <Span fontWeight="500" fontSize="h5" fontFamily="Avenir Medium">
          {pressRelease?.length || 0}
        </Span>{" "}
        {paginationLabel2} {pressReleaseCount || 0}
      </Text>

      {pressRelease?.length !== pressReleaseCount && (
        <Button
          variant="secondary"
          minWidth="193px"
          onClick={showMoreHandler}
          padding={{ _: "13px 53px", desktopS: "13px 18px" }}
          fontFamily="Avenir Light"
          fontWeight="light"
          fontSize="h5"
          textAlign="center"
          height={48}
          className={isFetching ? "noPointer" : ""}
        >
          {!isFetching && <Text m="auto">{pagingationCTA}</Text>}
          {isFetching && <Loading />}
        </Button>
      )}
    </Flex>
  );
};

export default DocumentCategoriesPagination;
