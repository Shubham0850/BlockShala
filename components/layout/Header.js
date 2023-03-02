import React from "react";

export default function Header({headerBgColor, title, emoji, description}) {
  return (
    <div className={`bg-${headerBgColor}`}>
      <div className="section text-center">
        <div className="max-w-full sm:max-w-[60%] mx-auto">
          <h1 className="h3">
            <b className="heading">{emoji}</b>
            <br /> {title}
          </h1>
          <p className="p">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
