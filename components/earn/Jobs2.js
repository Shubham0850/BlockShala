import React, { useEffect, useState } from "react";

// using remote3.co free api

export default function Jobs2() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // fetch jobs
    fetch("https://web3.career/api/v1?token=FfQcnaaDByx4Jn9X5LwdpQwVbrXjmSqS")
      .then((data) => data.json())
      .then((res) => {
        // handle success
        console.log(res);
      })
      .catch((err) => {
        // handle error
        console.log(err);
      });
  }, []);

  return (
    <div className="border-t-2 border-dark bg-[#D7FFEE]">
      <div className="section">
        <h3 className="text-center h3 ">WEB3 JObs</h3>
        {loading ? (
          <p>Loading....</p>
        ) : (
          <div>
            {jobs?.map((job, index) => {
              return (
                <div
                  className="flex items-center justify-between p-5 mb-2 bg-white border-2 just hover border-dark"
                  key={index}
                >
                  <div>
                    <h3 className="h4">{job["job-title"]}</h3>
                    <p className="p">
                      {job["payscale-min"]} - {job["payscale-max"]}
                    </p>

                    <p className="p">
                      {job["job-location"]} - {job["job-type"]}
                    </p>
                  </div>

                  <a href={job["apply-url"]} target="_blank" rel="noreferrer">
                    <button className="btn">Apply</button>
                  </a>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
