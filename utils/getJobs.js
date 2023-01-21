import Jobs from "../src/model/jobs";
import connectMongo from "./connectDB";

export const fetchAndSaveRemote3Jobs = async () => {
  fetch("https://remote3.co/api/1.1/obj/job")
    .then((data) => data.json())
    .then((res) => {
      // handle success
      console.log("Remote3 res: ", res);

      // jobs list
      const jobs = res.response.results;

      jobs.map((job, index) => {
        fetch(`https://remote3.co/api/1.1/obj/company/${job.company}`)
          .then((data) => data.json())
          .then((compRes) => {
            // company details
            const companyDetails = compRes.response;

            const structuredResult = {
              company_name: companyDetails.name,
              company_logo: companyDetails.logo,
              company_website: companyDetails["company-website"],
              apply_url: job["apply-url"],
              job_type: job["job-type"],
              payscale_max: job["payscale-max"],
              payscale_min: job["payscale-min"],
              job_description: job["job-description"],
              job_title: job["job-title"],
              job_location: job["job-location"],
            };

            console.log("structured result", structuredResult)

            // connect db
            connectMongo()
              .then((res) => console.log("db connected"))
              .catch((err) => console.log(err));

            //   upload data
            Jobs.create(structuredResult)
              .then((res) => console.log("created"))
              .catch((err) => console.log(err));
          })
          .catch((err) => {
            console.log(err);
          });
      });

      return res;
    })
    .catch((err) => {
      // handle error
      console.log(err);
      return err;
    });
};
