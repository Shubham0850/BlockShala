import React from "react";
import { Col, Row } from "react-bootstrap";

function Card() {
  return <div></div>;
}

export default function AboutChallenge() {
  return (
    <div className="text-center bg-[#E6E4FF] border-dark border-t-2">
      <div className="section">
        <div className="max-w-[80%] mx-auto">
          <h3 className="h1 mb-5">
            What if you could be an animation wizard 🧙
          </h3>
          <p className="p mb-5">
            I know, that sounds far fetched. But what if this was possible? What
            if you could, on a whim, create interactions/animations that impress
            stakeholders, win clients, and even put you ahead in your career? In
            this course, you’ll learn not only how to create interactions and
            animate interfaces well, but also how to do it quickly.
          </p>
        </div>

        <div className="p-5">
          <Row>
            <Col sm={3}>
              <div className="border-2 border-dark bg-[#FEDDF0] pb-[100px] relative">
                <div className="p-5 text-left">
                  <h4 className="font-bold text-2xl uppercase">Learn</h4>
                  <p className=" text-xl">Put your studies into practice</p>
                </div>

                <span className="absolute bottom-2 right-2 text-7xl">👨‍💻</span>
              </div>
            </Col>

            <Col sm={3}>
              <div className="border-2 border-dark bg-[#FEFBED] pb-[100px] relative">
                <div className="p-5 text-left">
                  <h4 className="font-bold text-2xl uppercase">Challenge</h4>
                  <p className=" text-xl">7 challenges in 7 days</p>
                </div>

                <span className="absolute bottom-2 right-2 text-7xl">🗂</span>
              </div>
            </Col>

            <Col sm={3}>
              <div className="border-2 border-dark bg-[#F2FFDF] pb-[100px] relative">
                <div className="p-5 text-left">
                  <h4 className="font-bold text-2xl uppercase">Portfolio</h4>
                  <p className=" text-xl">Develop your portfolio</p>
                </div>

                <span className="absolute bottom-2 right-2 text-7xl">💻 </span>
              </div>
            </Col>

            <Col sm={3}>
              <div className="border-2 border-dark bg-[#E7FFFF] pb-[100px] relative">
                <div className="p-5 text-left">
                  <h4 className="font-bold text-2xl uppercase">Built by</h4>
                  <p className=" text-xl">Created by market professionals</p>
                </div>

                <span className="absolute bottom-2 right-2 text-7xl">⚡</span>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
