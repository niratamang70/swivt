import React, { useEffect } from 'react';
import { repoList } from '../actions/repoActions';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Loader from '../components/Loader';

const RepoList = () => {
  const dispatch = useDispatch();

  const { loading, repos } = useSelector(state => state.repoList);

  useEffect(() => {
    dispatch(repoList());
  }, []);
  return (
    <Container>
      <h1 className="mt-5">All Public Repositories</h1>
      <Row>
        {loading ? (
          <Loader />
        ) : (
          repos?.map(repo => (
            <Col className="p-3">
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Link to={{ pathname: repo.owner.html_url }} target="_blank">
                    <Card.Title>{repo.owner.login}</Card.Title>
                  </Link>
                  <Card.Subtitle className="mb-2 text-muted">{`Defualt branch:${repo.default_branch}`}</Card.Subtitle>
                  <Card.Text>{`number of open issue:${repo.open_issues_count}`}</Card.Text>
                  <Link to={{ pathname: repo.html_url }} target="_blank">
                    <Card.Link>{repo.full_name}</Card.Link>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default RepoList;
