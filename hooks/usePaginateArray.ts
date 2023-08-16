interface IPaginateArray {
  arr: any[];
  itemsPerPage: number;
  activePage: number;
}

const usePaginateArray = ({
  arr,
  itemsPerPage,
  activePage,
}: IPaginateArray) => {
  const newArr = arr?.slice(0, activePage * itemsPerPage);

  return newArr;
};

export default usePaginateArray;
