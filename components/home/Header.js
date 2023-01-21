import Link from "next/link";
import React from "react";
import { Col, Row } from "react-bootstrap";
import Nav from "./Nav";

function Earn() {
  return (
    <div className="w-full">
      <div className="w-full p-5 border-b-2 border-dark">
        <h1 className="h3 mb-5">
          Browse <br />
          <b>29,375</b> blockchain jobs in web3
          <br /> at <b>2,936 projects.</b>
        </h1>

        <button className="btn">💰 Explore now</button>
      </div>

      <div className="w-full p-5">
        <h1 className="h3 mb-5">
          Solve
          <b>299</b> <br /> blockchain related bounties
          <br /> and earn upto <b>$1,99,989</b>
        </h1>

        <button className="btn">💰 Solve now</button>
      </div>
    </div>
  );
}

function Build() {
  return (
    <div className="flex items-center justify-center w-full h-full p-5">
      <div>
        <h3 className="mb-5 h3 leading-[50px]">
          We have prepared a list of
          <br /> <b> 100+ </b> Blockchain projects,
          <br /> that you can <b>Build </b> right now
        </h3>
        <button className="btn">🛠 Build now</button>
      </div>
    </div>
  );
}

function Learn() {
  return (
    <div>
      <div className="w-full p-5 border-b-2 border-dark">
        <h1 className="h3 mb-5">
          Browse <br />
          <b>100+</b> blockchian resources, <br />
          which help you learn
        </h1>

        <button className="btn">👨‍💻 Explore now</button>
      </div>

      <div className="w-full p-5">
        <h1 className="h3 mb-5">
          Learn about Metaverse, NFTs, Blockchain, Web3 and much more...
        </h1>

        <button className="btn">👨‍💻 Learn now</button>
      </div>
    </div>
  );
}

export default function Header() {
  return (
    <div>
      <div className="bg-[#F5F6FF] min-h-[80vh]">
        <Row className="m-0">
          <Col sm={4} className="p-0 h-[80vh] bg-[#D7FFEE] flex items-center">
            <Learn />
          </Col>
          <Col
            sm={4}
            className="p-0 h-[80vh] border-r-2 border-l-2 border-dark bg-[#EAE7FF]"
          >
            <Build />
          </Col>
          <Col sm={4} className="p-0 h-[80vh] bg-[#F3FEDE] flex items-center">
            <Earn />
          </Col>
        </Row>
      </div>
    </div>
  );
}
