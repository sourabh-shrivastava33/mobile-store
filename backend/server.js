import "express-async-errors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import path from "path";

const PORT = process.env.PORT || 5000;
// routers
import phoneRouter from "./routes/phoneRoutes.js";

// middlewares
import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware.js";
import { NotFoundError } from "./errors/customErrors.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/phones", phoneRouter);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*", (req, res) =>
  res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
);
app.use("*", (req, res) => {
  throw new NotFoundError("Route not found");
});
app.use(errorHandlerMiddleware);
// Connecting db and starting server
try {
  await mongoose.connect(process.env.MONGODB_URL);
  // If the database connection is successful, start the server
  app.listen(PORT, () => {
    console.log("server listening");
  });
} catch (error) {
  // Exit the process if the database connection fails
  console.log(error);
  process.exit(1);
}
