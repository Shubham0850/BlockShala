import Link from "next/link";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { consensusData } from "../../../data/resources/consensus";

function Card(props) {
  const { logo_url, title, description, used_by, link } = props;

  return (
    <Link href={link} >
      <div className="border-2 border-dark py-5 px-3 hover h-full bg-white">
        <img className="mb-3 max-h-[50px]" src={logo_url} alt="logo" />

        <h4 className="my-3 h4">{title}</h4>
        <p className="p text-sm">{description}</p>
        <div className="flex items-center mt-3">
            <p className="p">Used by:</p>
          {used_by.map((protocol, index) => (
            <div
              className="bg-[#fff] px-2 py-1 text-xs border border-dark flex m-1"
              key={index + 1}
            >
              {protocol}
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default function ConsensusAlgorithm() {
  return (
    <div className="bg-[#F2FFDA]">
      <div className="text-center p-4 bg-[#000]">
        <h3 className="h3 text-white">{`Consensus Algorithm 🍿`}</h3>
      </div>
      <div className="section">
        <Row>
          {consensusData.map((data, index) => {
            return (
              <Col key={index + 1} sm={4} className="p-2">
                <Card
                  logo_url={data.logo_url}
                  title={data.title}
                  description={data.description}
                  link={data.link}
                  used_by={data.used_by}
                />
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}
