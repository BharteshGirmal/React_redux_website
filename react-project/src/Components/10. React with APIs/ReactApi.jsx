import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import Pagination from "./Pagination";

export default function ReactApi() {
  const [data, setData] = useState(null);

  const fetchData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => setData(response.data))
      .catch((err) => console.error("Error occurred:", err.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const AsyncAwait = `
useEffect(() => {
  const fetchUser = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      const result = await response.json();
      setData(result);
    } catch (err) {
      console.error("Error Ocurred", err.message);
    }
  };
  fetchUser();
}, []);`;

  const Axios_Api = `
import axios from "axios";
useEffect(() => {
  axios
    .get("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => setData(response.data))
    .catch((err) => console.error("Error:", err.message));
}, []);`;

  const fetch_Api = `
useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => res.json())
    .then((result) => setData(result))
    .catch((err) => console.error("Error:", err.message));
}, []);`;

  const fetch_Post_Api = `
const postData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "My New Post",
      body: "This is the content of the post",
      userId: 1,
    }),
  });
  const data = await response.json();
  console.log("Response:", data);
};`;

  const Axios_Post_Api = `
axios.post("https://jsonplaceholder.typicode.com/posts", {
  title: "My New Post",
  body: "This is the content of the post",
  userId: 1,
})
.then(response => console.log("Response:", response.data))
.catch(error => console.error("Error:", error));`;

  return (
    <div className="container-fluid text-center p-3">
      <Row className="justify-content-center">
        {[
          { title: "Fetch API", value: fetch_Api },
          { title: "Axios API", value: Axios_Api },
          { title: "Async Await", value: AsyncAwait },
        ].map((item, index) => (
          <Col md={4} key={index} className="mb-3">
            <Card className="shadow-sm rounded">
              <Card.Header className="bg-success text-light text-center">
                <h6>{item.title}</h6>
              </Card.Header>
              <Card.Body>
                <textarea
                  className="form-control bg-dark text-light p-2"
                  value={item.value}
                  rows={8}
                  readOnly
                ></textarea>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row className="justify-content-center mt-3">
        {[
          { title: "Fetch POST API", value: fetch_Post_Api },
          { title: "Axios POST API", value: Axios_Post_Api },
        ].map((item, index) => (
          <Col md={6} key={index} className="mb-3">
            <Card className="shadow-sm rounded">
              <Card.Header className="bg-success text-light text-center">
                <h6>{item.title}</h6>
              </Card.Header>
              <Card.Body>
                <textarea
                  className="form-control bg-dark text-light p-2"
                  value={item.value}
                  rows={6}
                  readOnly
                ></textarea>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="justify-content-center">
        <Col md={4} className="mb-3">
          <h5 className="bg-success text-light py-2">Fetch API</h5>
          <textarea
            className="form-control bg-dark text-light p-2"
            rows={8}
            readOnly
            value={`fetch("https://jsonplaceholder.typicode.com/posts/1")\n  .then(res => res.json())\n  .then(data => console.log(data))\n  .catch(error => console.error(error));`}
          ></textarea>
        </Col>
        <Col md={4} className="mb-3">
          <h5 className="bg-success text-light py-2">Fetch Async/Await</h5>
          <textarea
            className="form-control bg-dark text-light p-2"
            rows={8}
            readOnly
            value={`async function fetchData() {\n  try {\n    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");\n    const data = await res.json();\n    console.log(data);\n  } catch (error) {\n    console.error(error);\n  }\n}`}
          ></textarea>
        </Col>
        <Col md={4} className="mb-3">
          <h5 className="bg-success text-light py-2">Axios API</h5>
          <textarea
            className="form-control bg-dark text-light p-2"
            rows={8}
            readOnly
            value={`axios.get("https://jsonplaceholder.typicode.com/posts/1")\n  .then(res => console.log(res.data))\n  .catch(error => console.error(error));`}
          ></textarea>
        </Col>
      </Row>
      <Row className="justify-content-center mt-3">
        <Col md={6}>
          <Card className="shadow-lg rounded">
            <Card.Header className="bg-secondary text-light text-center">
              <h5>Live API Data</h5>
            </Card.Header>
            <Card.Body>
              <p className="alert alert-info">
                <strong>Title:</strong> {data ? data.title : "Fetching..."}
              </p>
              <p className="alert alert-info">
                <strong>Body:</strong> {data ? data.body : "Fetching..."}
              </p>
              <Button variant="success" onClick={fetchData}>
                Refresh Data
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="shadow-lg rounded">
            <Card.Header className="bg-secondary text-light text-center">
              <h5>React Pagination</h5>
            </Card.Header>
            <Card.Body>
              <Pagination />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
