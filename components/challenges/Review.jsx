import React from "react";
import { Col, Row } from "react-bootstrap";

export default function Review() {
  return (
    <div className="text-center bg-[#E8EBFF] border-dark border-t-2">
      <div className="section">
        <div>
          <span className="text-8xl">🧙</span>
          <h4 className="h1 my-3">Wall of fame</h4>
        </div>
        <p className="p mb-5">
          Here is what people have to say about this challenge.
        </p>

        <Row>
          <Col sm={6} className="flex items-center justify-center">
            <blockquote class="twitter-tweet">
              <p lang="en" dir="ltr">
                NFTs are misunderstood.
                <br />
                <br />
                As a 2x founder who is currently building a product that
                analyzes millions of NFTs every day, here is what I&#39;ve
                learned so far
                <br />
                <br />
                Find a cozy couch 🛋️, grab some snacks🍿 and read on
                <br />
                <br />A 🧵
              </p>
              &mdash; mahabali.eth | flipflop.xyz (@0xMahabali){" "}
              <a href="https://twitter.com/0xMahabali/status/1606758527049302017?ref_src=twsrc%5Etfw">
                December 24, 2022
              </a>
            </blockquote>{" "}
            <script
              async
              src="https://platform.twitter.com/widgets.js"
              charset="utf-8"
            ></script>
          </Col>
          <Col sm={6} className="flex items-center justify-center">
            <blockquote class="twitter-tweet">
              <p lang="en" dir="ltr">
                NFTs are misunderstood.
                <br />
                <br />
                As a 2x founder who is currently building a product that
                analyzes millions of NFTs every day, here is what I&#39;ve
                learned so far
                <br />
                <br />
                Find a cozy couch 🛋️, grab some snacks🍿 and read on
                <br />
                <br />A 🧵
              </p>
              &mdash; mahabali.eth | flipflop.xyz (@0xMahabali){" "}
              <a href="https://twitter.com/0xMahabali/status/1606758527049302017?ref_src=twsrc%5Etfw">
                December 24, 2022
              </a>
            </blockquote>{" "}
            <script
              async
              src="https://platform.twitter.com/widgets.js"
              charset="utf-8"
            ></script>
          </Col>
        </Row>
      </div>
    </div>
  );
}
