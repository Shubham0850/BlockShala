import React from "react";

export default function ConsensusHeader() {
  return (
    <div className="bg-[#D6FFEE]">
      <div className="section text-center">
        <div className="max-w-full sm:max-w-[60%] mx-auto">
          <h1 className="h3">
            <b className="heading">⚙️</b>
            <br /> Consensus Algorithm
          </h1>
          <p className="p">
            A consensus algorithm is a method used to achieve agreement on a
            single data value among distributed systems. These algorithms are
            designed to enable communication among multiple parties and to
            ensure that the data being shared is accurate and up-to-date. These
            algorithms are used in various distributed systems, such as
            blockchain networks and distributed databases.
          </p>
        </div>
      </div>
    </div>
  );
}
