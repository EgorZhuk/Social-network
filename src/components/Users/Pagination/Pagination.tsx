import React from 'react';
import s from 'components/Users/Users.module.css';

type PaginationPropsType = {
  totalPages: number
  setCurrentPage: (page: number) => void
  currentPage: number
}

const Pagination = (props: PaginationPropsType) => {

  const LEFT_PAGE = '...';
  const RIGHT_PAGE = '...';

  const fetchPageNumbers = (): any[] => {

    const range = (from: number, to: number, step = 1) => {
      let i = from;
      const range: number[] = [];
      while (i <= to) {
        range.push(i);
        i += step;
      }
      return range;
    };
    const totalPages = props.totalPages;
    const currentPage = props.currentPage;
    const pageNeighbours = 2;

    const totalNumbers = (pageNeighbours * 2) + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbours);
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);
      let pages: any[] = range(startPage, endPage);
      const hasLeftSpill = startPage > 2;
      const hasRightSpil = (totalPages - endPage) > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      switch (true) {
        case (hasLeftSpill && !hasRightSpil): {
          const extraPages = range(startPage - spillOffset, startPage - 1);
          pages = [LEFT_PAGE, ...extraPages, ...pages];
          break;
        }
        case (!hasLeftSpill && hasRightSpil): {
          const extraPages = range(endPage + 1, endPage + spillOffset);
          pages = [...pages, ...extraPages, RIGHT_PAGE];
          break;
        }
        case (hasLeftSpill && hasRightSpil):
        default: {
          pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
          break;
        }
      }
      return [1, ...pages, totalPages];
    }
    return range(1, props.totalPages);
  };



  const pages = fetchPageNumbers();
  return (
    <div>
      {
        pages.map(((el, index) => {
            if (el === LEFT_PAGE) return (
              <span key={index}>...</span>
            );
            if (el === RIGHT_PAGE) return (
              <span key={index}>...</span>
            );
            return (
              <span
                key={index}
                onClick={() => props.setCurrentPage(el)}
                className={(el === props.currentPage) ? s.selected : ''}
              > {el} </span>);

          }


        ))}
    </div>
  );
};

export default Pagination;