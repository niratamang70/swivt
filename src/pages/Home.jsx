import React, { useEffect, useState } from 'react';
import { Container, Form, FormControl, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';

import { search } from '../actions/repoActions';
import SearchTable from '../components/SearchTable';

import Loader from '../components/Loader';
const Home = () => {
  const [keyword, setKeyword] = useState('html');
  const [order, setOrder] = useState('desc');
  const [perPageData, setPerPageData] = useState(10);
  const [page, setPage] = useState(1);
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();

  const submitHandler = e => {
    e.preventDefault();
    if (keyword === '') {
      setMessage('please enter any string');
    }
    setPage(1);
    dispatch(search(keyword, order, perPageData, page));
  };

  useEffect(() => {
    setPage(1);
  }, [keyword, order, perPageData, page]);

  const { loading, data, error } = useSelector(state => state.searchData);

  return (
    <div>
      <Container>
        <h1 className="text-center mt-5 text-primary">Welcome to GitHub Repo Search</h1>
        <div style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', marginTop: '40px' }}>
          <Form className="d-flex" onSubmit={submitHandler}>
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              value={keyword}
              onChange={e => setKeyword(e.target.value)}
            />
            <Form.Select
              placeholder="select order"
              style={{ width: '160px' }}
              value={order}
              onChange={e => setOrder(e.target.value)}
            >
              <option value="asc">ascending</option>
              <option value="desc">descending</option>
            </Form.Select>
            <Form.Select
              placeholder="per page"
              style={{ width: '160px' }}
              value={perPageData}
              onChange={e => setPerPageData(e.target.value)}
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </Form.Select>
            <Button variant="outline-primary" type="submit">
              Search
            </Button>
          </Form>
        </div>
        <div className="mt-5">
          {loading ? (
            <Loader />
          ) : (
            <>
              {error ? (
                <>
                  <p className="text-danger text-center"> {error}</p>
                  {message && <p className="text-danger text-center">{message}</p>}
                </>
              ) : (
                <SearchTable
                  data={data}
                  page={page}
                  setPage={setPage}
                  keyword={keyword}
                  perPageData={perPageData}
                  order={order}
                />
              )}
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Home;
