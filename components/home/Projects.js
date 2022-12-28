import React from "react";
import { Col, Row } from "react-bootstrap";

export default function Projects() {
  return (
    <div className="bg-[#FEFBEE] border-b-2 border-dark">
      <div className="text-center p-4 bg-[#000]">
        <h3 className="h3 text-white">
          Build real world project, that change peoples life
        </h3>
      </div>
      <div className="section">
        <Row>
          <Col sm={4} className="p-2 ">
            <img
              src="/community-projects/cryptopay.png"
              alt="project 1"
              className="border-2 border-dark"
            />
          </Col>

          <Col sm={4} className="p-2">
            <img
              src="/community-projects/bulls-vs-bear.png"
              alt="project 1"
              className="border-2 border-dark"
            />
          </Col>

          <Col sm={4} className="p-2">
            <img
              src="/community-projects/web3-wiki.png"
              alt="project 1"
              className="border-2 border-dark"
            />
          </Col>

          <Col sm={6} className="p-2">
            <img
              src="/community-projects/m-tribe.png"
              alt="project 1"
              className="border-2 border-dark"
            />
          </Col>

          <Col sm={6} className="p-2">
            <img
              src="/community-projects/d-web-hosting.png"
              alt="project 1"
              className="border-2 border-dark"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}
