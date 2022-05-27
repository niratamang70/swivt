import React from 'react';
import { Pagination } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { search } from '../actions/repoActions';
const Paginate = ({ pages, keyword, order, pData, setPage, page }) => {
  const dispatch = useDispatch();
  const pageNumberHandler = () => {
    if (page === 1) {
      return [1, 2, 3];
    } else if (page === 2) {
      return [1, 2, 3, 4];
    } else {
      return [page - 2, page - 1, page, page + 1, page + 2];
    }
  };
  const pageClickHandler = page => {
    dispatch(search(keyword, order, pData, page));
  };
  return (
    pages > 1 && (
      <Pagination className="d-flex justify-content-center">
        <Pagination.Prev />

        {pageNumberHandler().map(x => (
          <Pagination.Item active={x === page ? 'true' : 'false'} onClick={() => pageClickHandler(x + 1)}>
            {x + 1}
          </Pagination.Item>
        ))}

        <Pagination.Next />
      </Pagination>
    )
  );
};

export default Paginate;
