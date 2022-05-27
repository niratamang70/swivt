import React from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPaginate from 'react-paginate';
import { useDispatch } from 'react-redux';
import { search } from '../actions/repoActions';
import '../style/pagination.css';

const SearchTable = ({ data, page, keyword, perPageData, order, setPage }) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { items, total_count } = data;
  const totalpage = Math.ceil(total_count / perPageData);
  const handlePageClick = event => {
    setPage(event.selected + 1);
    dispatch(search(keyword, order, perPageData, event.selected + 1));
  };

  return (
    <>
      <Table striped bordered hover>
        <tbody>
          {items?.map(item => (
            <tr
              style={{ height: '50px', cursor: 'pointer' }}
              onClick={() => {
                navigate('/details', {
                  state: {
                    name: item.owner.login,
                    full_name: item.full_name,
                    github_link: item.owner.html_url,
                    repo_link: item.html_url,
                    issue_count: item.open_issues_count,
                    default_branch: item.default_branch
                  }
                });
              }}
            >
              <td>
                <img src={item.owner.avatar_url} alt="avatar" width="20" height="20" className="rounded" />
              </td>
              <td>{item.owner.login}</td>
              <td>{item.full_name}</td>
              <td>{`open issue is ${item.open_issues_count}`}</td>
              <td>{`default branch is ${item.default_branch}`}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      {data.items?.length ? (
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={totalpage}
          previousLabel="<"
          renderOnZeroPageCount={null}
          forcePage={page - 1}
          className="pagination "
        />
      ) : null}

      {/* <Paginate keyword={keyword} page={page} pData={perPageData} pages={totalpage} order={order} setPage={setPage} /> */}
    </>
  );
};

export default SearchTable;
