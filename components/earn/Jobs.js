import React, { useEffect, useState } from "react";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // fetch jobs
    fetch("/api/v1/jobs")
      .then((data) => data.json())
      .then((res) => {
        // handle success
        console.log("local api res", res);
        setLoading(false);
        setJobs(res);
      })
      .catch((err) => {
        // handle error
        console.log(err);
      });
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
            {jobs?.slice(50).map((job, index) => {
              const {
                apply_url,
                job_type,
                payscale_max,
                payscale_min,
                job_description,
                job_title,
                job_location,
                company_name,
                company_logo,
                company_website,
              } = job;

              return (
                <div
                  className="flex justify-between p-5 mb-2 bg-white border-2 just hover border-dark"
                  key={index}
                >
                  <div className="mr-5">
                    <a href={company_website} target="_blank" rel="noreferrer">
                      <img src={company_logo} alt="logo" width={"50px"} />
                    </a>
                  </div>
                  <div className="flex-1">
                    <h3 className="h4">💼 {job_title}</h3>
                    {payscale_max && payscale_min && (
                      <p className="mb-2 p">
                        💸 {payscale_min} - 💸 {payscale_max}
                      </p>
                    )}

                    <div className="flex items-center space-x-2">
                      <div className="bg-[#E9EBFE] px-2 py-1 border border-dark w-fit p">
                        🏢 {company_name}
                      </div>
                      <div className="bg-[#F3FEDE] px-2 py-1 border border-dark w-fit p">
                        🌍 {job_location}
                      </div>
                      <div className="bg-[#FFE7E6] px-2 py-1 border border-dark w-fit p">
                        ⌛ {job_type}
                      </div>
                    </div>
                  </div>

                  <a href={apply_url} target="_blank" rel="noreferrer">
                    <button className="btn">✨ Apply</button>
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
