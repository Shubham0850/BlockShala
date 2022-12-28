import Link from "next/link";
import React from "react";
import { Col, Row } from "react-bootstrap";

function Card(tech) {
  const { title, sub_title, logo_url, link } = tech;

  return (
    <div className="border-2 border-dark  h-full bg-white">
      <img className="w-full border-b-2 border-dark" src={logo_url} />

      <div className="p-3">
        <h4 className="h4 line-clamp-2">{title}</h4>
        <p className="my-3 p text-sm line-clamp-4">{sub_title}</p>

        <Link href={link} rel="noreferrer">
          <button className="btn">Join Now</button>
        </Link>
      </div>
    </div>
  );
}

export default function ChallengesList() {
  return (
    <div className="bg-[#E8EBFF]">
      <div className="text-center p-4 bg-[#000]">
        <h3 className="h3 text-white">The key to success is Consistency</h3>
      </div>
      <div className="section">
        <Row>
          <Col sm={6} className="p-2">
            <Card
              title={"7 Days of Web3"}
              logo_url={
                "https://www.codecademy.com/resources/blog/content/images/2021/08/10-JavaScript-code-challenges-for-beginners.png"
              }
              sub_title={
                "During the 7 Days of Logic with Javascript, you will practice with the most used language in the world and learn how to use Javascript to create algorithms and solve your day-to-day problems. Let's see how to use variables, conditionals and loop structures to solve problems that are the basis that anyone entering the programming area needs to know. After practicing these concepts for 7 days in a row, you will see that remembering the syntax of the commands and what it is for will stop being a difficulty, and you will be able to worry more about how to solve problems and less about the programming language you are using."
              }
              link={"/challenges/7days-of-web3"}
            />
          </Col>

          <Col sm={6} className="p-2">
            <Card
              title={"7 Days of Web3"}
              logo_url={
                "https://www.codecademy.com/resources/blog/content/images/2021/08/10-JavaScript-code-challenges-for-beginners.png"
              }
              sub_title={
                "During the 7 Days of Logic with Javascript, you will practice with the most used language in the world and learn how to use Javascript to create algorithms and solve your day-to-day problems. Let's see how to use variables, conditionals and loop structures to solve problems that are the basis that anyone entering the programming area needs to know. After practicing these concepts for 7 days in a row, you will see that remembering the syntax of the commands and what it is for will stop being a difficulty, and you will be able to worry more about how to solve problems and less about the programming language you are using."
              }
              link={"#"}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}
