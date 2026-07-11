import mongoose, { Mongoose } from "mongoose";

export const connectdb = async () => {
  await mongoose
    .connect(
      "mongodb+srv://anoopyadav7977195135_db_user:MpY5xCQbPgzku4UX@cluster0.isaltxw.mongodb.net/food-del"
    )
    .then(() => {
      console.log("database connected");
    });
};
