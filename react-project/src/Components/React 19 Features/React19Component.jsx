import React, { useState, useEffect, useActionState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";

function DisplayItem({ item }) {
  return (
    <Card className="shadow-sm rounded p-2 m-2 bg-secondary text-light text-break">
      <Card.Body>
        <span>{item}</span>
      </Card.Body>
    </Card>
  );
}

const SubmitButton = ({ isPending }) => (
  <button type="submit" className="btn btn-primary mt-2" disabled={isPending}>
    {isPending ? "Adding..." : "Add Item"}
  </button>
);

export default function React19Component() {
  const [items, setItems] = useState([
    "React 19 Features",
    "Actions and Forms",
    "New Hooks",
    "useOptimistic",
    "useActionState()",
    "useFormStatus",
  ]);

  console.log(setItems);

  const [isPending] = useActionState();

  const [resolvedMessage, setResolvedMessage] = useState("");

  // ✅ Fetch or resolve message safely in client
  useEffect(() => {
    const fetchMessage = async () => {
      const msg = await new Promise((res) =>
        setTimeout(
          () => res("✅ This text is resolved safely without use()!"),
          1000
        )
      );
      setResolvedMessage(msg);
    };
    fetchMessage();
  }, []);

  return (
    <div className="container-fluid text-center p-3">
      <Row className="justify-content-center">
        <Col md={8} className="mb-3">
          <Card className="shadow-sm rounded">
            <Card.Header className="bg-success text-light text-center">
              <h4>React 19</h4>
            </Card.Header>
            <Card.Body>
              <Row>
                {/* Form Column */}
                <Col md={6}>
                  <Form>
                    <Form.Group className="mb-3" controlId="formItem">
                      <Form.Label>Form Input</Form.Label>
                      <Form.Control type="text" placeholder="Enter item" />
                      <Form.Text className="text-muted">
                        This is a demo form input
                      </Form.Text>
                    </Form.Group>
                    <SubmitButton isPending={isPending} />
                  </Form>

                  {/* Resolved message */}
                  {resolvedMessage && (
                    <p className="mt-3 text-info">{resolvedMessage}</p>
                  )}
                </Col>

                {/* Items Grid */}
                {items.map((it, index) => (
                  <Col md={6} key={index} className="mb-3">
                    <DisplayItem item={it} />
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
