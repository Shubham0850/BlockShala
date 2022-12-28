import React from "react";
import Nav from "./Nav";

export default function Header() {
  return (
    <div>
      <div className="bg-[#F5F6FF] min-h-[90vh] text-center flex items-center justify-center">
        <div className="section">
          <div className="">
            <p className="sub-heading mb-3">
              ⛷ Join the community, change the future
            </p>

            <h1 className="heading mb-5">
              Learn. Build.
              <br />
              Earn.
            </h1>

            <button className="btn animate-bounce">
              🤟 Join the Revolution
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
