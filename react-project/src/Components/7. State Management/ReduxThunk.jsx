import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchusers } from "./ThunkActions";
import { Container, ListGroup, Spinner, Alert } from "react-bootstrap";

function ReduxThunk() {
  const { loading, users, error } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchusers());
  }, [dispatch]);

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Users List</h2>

      {loading && (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
          <p>Loading...</p>
        </div>
      )}

      {error && <Alert variant="danger">Error: {error}</Alert>}

      {!loading && !error && (
        <ListGroup>
          {users &&
            users.map((user) => (
              <ListGroup.Item
                key={user.id}
                className="d-flex justify-content-start gap-3 align-items-center"
              >
                <span className="badge bg-primary rounded-pill">{user.id}</span>
                {user.name}
              </ListGroup.Item>
            ))}
        </ListGroup>
      )}
    </Container>
  );
}

export default ReduxThunk;
