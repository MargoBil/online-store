export const onAddNextPage = (totalPages, page, setPage) => {
  if (totalPages > page) {
    setPage(prevPage => prevPage + 1);
  }
};
