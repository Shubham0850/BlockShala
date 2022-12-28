import React from "react";
import { Col, Row } from "react-bootstrap";

export default function Quotes() {
  return (
    <div className="bg-[#E2FFAA] border-t-2 border-b-2 border-dark">
      <div className="section">
        <Row className="justify-content-md-center items-center">
          <Col sm={2}>
            <img width={200} src="/quote.png" alt="quote" />
          </Col>
          <Col sm={7}>
            <h1 className="h1">
              Learning WEB3.0 right now is like,
               buying Bitcoin at $100
            </h1>
          </Col>
        </Row>
      </div>
    </div>
  );
}
