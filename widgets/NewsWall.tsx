import { INewsWall } from "../models/widgets/INewsWall";
import { FilterProvider } from "../components/Filter/FilterProvider";
// Components
import Container from "../components/UI/Container/Container";
import NewsWallContent from "../components/NewsWall/NewsWallContent";

const NewsWall = ({
  downloadAllLabel,
  filterYearLabel,
  paginationLabel1,
  paginationLabel2,
  pagingationCTA,
  resultsLabel,
  sortLabels,
  readMoreLabel,
}: INewsWall) => {
  return (
    <FilterProvider>
      <Container
        px={{ _: 2, desktopS: 8 }}
        py={{ _: 3, desktopS: 7 }}
        maxWidth="screen"
        m="auto"
        width="full"
      >
        {/* Grid */}
        <NewsWallContent
          {...{
            downloadAllLabel,
            filterYearLabel,
            paginationLabel1,
            paginationLabel2,
            pagingationCTA,
            resultsLabel,
            readMoreLabel,
            sortLabels,
          }}
        />
      </Container>
    </FilterProvider>
  );
};

export default NewsWall;
