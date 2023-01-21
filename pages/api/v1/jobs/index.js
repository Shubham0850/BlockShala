import Jobs from "../../../../src/model/jobs";
import connectMongo from "../../../../utils/connectDB";
import { fetchAndSaveRemote3Jobs } from "../../../../utils/getJobs";

export default async function getJobs(req, res) {
  // fetchAndSaveRemote3Jobs()

  // connect db
  console.log("connecting to db");
  await connectMongo();
  console.log("connected to db");

  //   upload data
  console.log("query doc");
  const jobs = await Jobs.find();
  console.log("query completed");

  res.json(jobs);
}
