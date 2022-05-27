import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { userRepo } from '../actions/repoActions';
import Loader from '../components/Loader';

const UserRepo = () => {
  const dispatch = useDispatch();

  const { loading, REPO } = useSelector(state => state.userRepo);

  useEffect(() => {
    dispatch(userRepo());
  }, []);
  return (
    <Container>
      <h2 className="mt-5">User Repositories</h2>
      <div>
        <Row>
          {loading ? (
            <Loader />
          ) : (
            REPO?.map(data => (
              <Col className="p-3">
                <Card style={{ width: '18rem' }} key={data.id}>
                  <Card.Body>
                    <Link to={{ pathname: data.owner.html_url }} target="_blank">
                      <Card.Title>{data.owner.login}</Card.Title>
                    </Link>
                    <Card.Subtitle className="mb-2 text-muted">{`Defualt branch:${data.default_branch}`}</Card.Subtitle>
                    <Card.Text>{`number of open issue:${data.open_issues_count}`}</Card.Text>
                    <Link to={{ pathname: data.html_url }} target="_blank">
                      <Card.Link>{data.full_name}</Card.Link>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))
          )}
        </Row>
      </div>
    </Container>
  );
};

export default UserRepo;
