import { Schema, model, models } from "mongoose";

const jobSchema = new Schema({
  apply_url: {
    type: String,
    unique: true,
  },
  job_type: String,
  payscale_max: String,
  payscale_min: String,
  job_description: String,
  job_title: String,
  job_location: String,
  company_name: String,
  company_logo: String,
  company_website: String,
});

const Jobs = models.Jobs || model("Jobs", jobSchema);

export default Jobs;
