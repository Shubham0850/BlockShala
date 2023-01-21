import React, { useEffect, useState } from "react";

export default function Bounties() {
  const [bounties, setBounties] = useState([]);
  const [loading, setLoading] = useState(false);

  //   useEffect(() => {
  //     setLoading(true);
  //     // get bouties list from gitcoin
  //     fetch("https://gitcoin.co/api/v0.1/bounties/?format=json")
  //       .then((res) => res.json())
  //       .then((res) => {
  //         // success
  //         console.log(res);
  //         // setBounties(res);
  //         // setLoading(false);
  //       })
  //       .catch((err) => {
  //         // fail
  //         console.log(err);
  //       });
  //   }, []);

  useEffect(() => {
    const API_KEY = "1234";
    const API_BASE_URL = "https://gitcoin.co/api/v0.1";

    async function getBounties() {
      const response = await fetch(`${API_BASE_URL}/bounties/?format=json`);
      const data = await response.json();
      console.log(data);
    }

    getBounties();
  }, []);

  return (
    <div className=" bg-[#D7FFEE]">
      <div className="text-center p-4 bg-[#000]">
        <h3 className="text-white h3">WEB3 is the future</h3>
      </div>
      <div className="section">
        {loading ? (
          <p className="text-lg text-center p">Loading....</p>
        ) : (
          <div>
            {bounties?.map((bounty, index) => {
              return (
                <div
                  className="flex items-center justify-between p-5 mb-2 bg-white border-2 just hover border-dark"
                  key={index}
                >
                  <h3>{bounty?.title}</h3>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
