import Link from "next/link";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { documentaryData } from "../../../data/resources/documentary";

function Card(props) {
  const { banner_url, title, description, link } = props;

  return (
    <div className="border-2 border-dark  h-full bg-white">
      <img className="w-full border-b-2 border-dark" src={banner_url} alt="banner" />

      <div className="p-3">
        <h4 className="h4 line-clamp-2">{title}</h4>
        <p className="my-3 p text-sm line-clamp-2 ">{description}</p>

        <a href={link} target="_blank" rel="noreferrer">
          <button className="btn">🎬 Watch Now 🍿</button>
        </a>
      </div>
    </div>
  );
}

export default function Documentaries() {
  return (
    <div className="bg-[#F2FFDA]">
      <div className="text-center p-4 bg-[#000]">
        <h3 className="h3 text-white">{`Learn while you're board from learning 🍿`}</h3>
      </div>
      <div className="section">
        <Row>
          {documentaryData.map((data, index) => {
            return (
              <Col key={index+1} sm={4} className="p-2">
                <Card
                  banner_url={data.banner_url}
                  title={data.title}
                  description={data.description}
                  link={data.link}
                />
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}
