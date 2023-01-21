import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import {RiOpenSourceFill} from "react-icons/ri"

export default function HomeAbout() {
  return (
    <div className="bg-[#D6FFEE] border-t-2 border-black">
      <div className="section">
        <Row >
            <Col>
                <h3 className="text-xl text-left"><b>BlockShala</b> is</h3>
                <h1 className="heading">Opensource,<br/> Peer-2-Peer, <br/>& Free</h1>
                <h3 className="h4">Web3 learning community.</h3>
            </Col>

            <Col className="flex items-center justify-center">
              <div className="text-[25rem]">
                <RiOpenSourceFill/>
              </div>
            </Col>
        </Row>
      </div>
    </div>
  );
}