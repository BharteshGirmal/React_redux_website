import React, { useDeferredValue, useState, useTransition, useId } from "react";
import { Card, Col, Row } from "react-bootstrap";

export default function React18Component() {
  const [items, setItems] = useState([
    "React 18 Features",
    "Concurrency",
    "Server Side Rendering (SSR)",
    "Automatic Batching",
    "New Hooks",
  ]);

  const [isPending, startTransition] = useTransition();
  const [filter, setFilter] = useState("");
  const inputId = useId();

  // ✅ Automatic Batching: adding an item + clearing filter
  const AddItem = () => {
    startTransition(() => {
      setTimeout(() => {
        setItems((prev) => [...prev, "New Item " + (prev.length + 1)]);
      }, 2000); // ⏳ artificial 2s delay to show isPending
    });
  };

  // ✅ Concurrent Rendering: wrap filter updates in startTransition
  const handleOnChange = (e) => {
    const value = e.target.value;
    startTransition(() => {
      setFilter(value);
    });
  };

  // ✅ Deferred Value: avoid blocking input while filtering
  const deferredFilter = useDeferredValue(filter);
  const filteredItems = items.filter((i) =>
    i.toLowerCase().includes(deferredFilter.toLowerCase())
  );

  return (
    <div className="container-fluid text-center p-3">
      <Row className="justify-content-center">
        <Col md={8} className="mb-3">
          <Card className="shadow-sm rounded">
            <Card.Header className="bg-success text-light text-center">
              <h4>React 18</h4>
            </Card.Header>

            <Card.Body>
              <button className="btn btn-success" onClick={AddItem}>
                {isPending ? "Adding..." : "Add Item"}
              </button>

              <div style={{ marginTop: 20 }}>
                <label htmlFor={inputId}>Filter Items: </label>
                <input
                  id={inputId}
                  type="text"
                  value={filter}
                  placeholder="Search Item here"
                  onChange={handleOnChange}
                />
                {isPending && (
                  <span style={{ marginLeft: 8, color: "black" }}>
                    Filtering the Data ...
                  </span>
                )}
              </div>

              <ul typeof="number" style={{ marginTop: 20 }}>
                {filteredItems.map((it, index) => (
                  <li key={index}>{it}</li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
