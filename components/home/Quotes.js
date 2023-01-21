import React from "react";
import { Col, Row } from "react-bootstrap";
import {FaQuoteRight} from "react-icons/fa"

export default function Quotes() {
  return (
    <div className="bg-[#E2FFAA] border-t-2 border-b-2 border-dark">
      <div className="section">
        <Row className="items-center justify-content-md-center">
          <Col sm={2}>
            <div className="text-[10rem]">
              <FaQuoteRight/>
            </div>
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
