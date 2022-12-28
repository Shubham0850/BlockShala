import React from "react";
import { Accordion } from "react-bootstrap";

export default function Syllabus(props) {
  const { title, description, days } = props;

  return (
    <div className="text-center bg-[#FFE7E6] border-dark border-t-2">
      <div className="section">
        <h3 className="h1 mb-5">{title}</h3>
        <p className="p mb-5">{description}</p>

        <div className="p-5">
          <div className="border-dark border-2 p-[80px] bg-[#E7FFFC]">
            <Accordion defaultActiveKey="0" flush>
              {days?.map((day, index) => {
                return (
                  <Accordion.Item
                    key={index}
                    eventKey={index}
                    className="rounded-none bg-[#E7FFFC] p-2"
                  >
                    <Accordion.Header>
                      <h4 className="text-xl font-">{day.title}</h4>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="p text-left">{day.description}</p>
                    </Accordion.Body>
                  </Accordion.Item>
                );
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
