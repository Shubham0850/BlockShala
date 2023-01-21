import Link from "next/link";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { techData } from "../../data/resources/tech";

const data = {
  logo: "https://d33wubrfki0l68.cloudfront.net/7be340cf7f33d774314208ef5909440b608d87a2/cbe64/static/4f10d2777b2d14759feb01c65b2765f7/b7d3e/eth-glyph-colored.png",
  name: "Ethereum",
  desc: "I use whimsical to create wireframes and user flows.",
};

function Card(tech) {
  const { title, sub_title, logo_url, link } = tech;

  return (
    <div className="border-2 hover border-dark py-5 px-3">
      <img className="mb-3 max-h-[50px]" src={logo_url} alt="logo" />

      <h4 className="my-3 h4">{title}</h4>
      <p className="p text-sm line-clamp-4">{sub_title}</p>
    </div>
  );
}

export default function Technology() {
  return (
    <div className="bg-[#fff]">
      <div className="section">
        <div className="text-center">
          <h3 className="h3 mb-2">Learn technology which matters !</h3>
          <p className="p mb-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        <Row>
          {techData.slice(0, 8).map((tech, index) => {
            return (
              <Col key={index + 1} sm={3} className="p-2">
                <Card
                  title={tech.title}
                  logo_url={tech.logo_url}
                  sub_title={tech.sub_title}
                  link={tech.link}
                />
              </Col>
            );
          })}
        </Row>

        <Link href="/learn">
          <p className="text-center my-3 cursor-pointer animate-bounce w-max mx-auto">
            🎢Learn More 👉...
          </p>
        </Link>
      </div>
    </div>
  );
}
