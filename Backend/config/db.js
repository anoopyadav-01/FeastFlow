import mongoose, { Mongoose } from "mongoose";

export const connectdb = async () => {
  await mongoose
    .connect(
      // you mongodb compass url
    )
    .then(() => {
      console.log("database connected");
    });
};
