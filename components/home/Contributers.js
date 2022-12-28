import React from "react";
import { Col, Row } from "react-bootstrap";
import { contributorsData } from "../../data/contributors";

function ContributerCard({ pic, name, title }) {
  return (
    <div>
      <img
        className="w-full mb-1 border-2 border-dark"
        src={pic}
        alt="profile pic"
      />
      <p className="text-xl font-bold">{name}</p>
      <p className="p text-md opacity-70">{title}</p>

      <div>
        <a href="" className="mr-2 text-2xl text-gray-600 hover:text-black">
          <ion-icon name="logo-twitter"></ion-icon>
        </a>

        <a href="" className="mr-2 text-2xl text-gray-600 hover:text-black">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a>

        <a href="" className="mr-2 text-2xl text-gray-600 hover:text-black">
          <ion-icon name="logo-discord"></ion-icon>
        </a>
      </div>
    </div>
  );
}

export default function Contributers() {
  return (
    <div className="bg-[#FAFFE9]">
      <div className="section">
        <h1 className="h1">Want to switch your career to WEB3.0?</h1>
        <p className="p mb-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>

        <Row>
          {contributorsData.map((contributer, index) => {
            return (
              <Col xs={6} sm={2} key={index}>
                <ContributerCard
                  pic={contributer.profile_url}
                  name={contributer.name}
                  title={contributer.title}
                />
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}
