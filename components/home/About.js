import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";

export default function HomeAbout() {
  return (
    <div className="bg-[#D6FFEE] border-t-2 border-black">
      <div className="section">
        <Row >
            <Col>
                <h3 className="text-xl text-left">BlockShala is</h3>
                <h1 className="heading">Opensource, Free, Peer-2-Peer</h1>
                <h3 className="h4 text-left sm:text-right">Web3 learning community.</h3>
            </Col>
        </Row>
      </div>
    </div>
  );
}