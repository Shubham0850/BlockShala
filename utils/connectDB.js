import mongoose from "mongoose";

const connectMongo = async () =>
  mongoose.connect(
    "mongodb+srv://gulzari:lQtKKIiq8IQZXyC4@cluster0.2fisufz.mongodb.net/?retryWrites=true&w=majority"
  );

export default connectMongo;
