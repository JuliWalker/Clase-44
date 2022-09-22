import mongoose from "mongoose";
import "dotenv/config";

export const config = {
  mongoDB: {
    URL: process.env.DB_MONGO,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
};