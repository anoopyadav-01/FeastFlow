import dotenv from "dotenv";
dotenv.config();
import express from "express";
import path from "path";
import cors from "cors";
import { connectdb } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";

import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import UserRouter from "./routes/userRoute.js";

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());
connectdb();

app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", UserRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
app.get("/", async (req, res) => {
  res.send("api working");
});

app.listen(port, () => {
  console.log(`server started on http://localhost:${port}`);
});
