import React, { useEffect, useState } from 'react';
import { repoList } from '../actions/repoActions';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Loader from '../components/Loader';

const Details = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { state } = useLocation();

  useEffect(() => {
    // console.log(state, 'here');
  }, []);
  return (
    <Container>
      <h1 className="mt-5"> Repository Details</h1>
      <Row>
        {loading ? (
          <Loader />
        ) : (
          <Col className="p-3">
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <a href={state.github_link} target="_blank" rel="noreferrer">
                  <Card.Title>{state.name}</Card.Title>
                </a>
                <Card.Subtitle className="mb-2 text-muted">{`Defualt branch:${state.default_branch}`}</Card.Subtitle>
                <Card.Text>{`number of open issue:${state.issue_count}`}</Card.Text>

                <a href={state.repo_link} target="_blank" rel="noreferrer">
                  <Card.Link>{state.full_name}</Card.Link>
                </a>
              </Card.Body>
            </Card>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default Details;
