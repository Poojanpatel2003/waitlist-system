import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import waitlistRoutes from "./routes/waitlistRoutes.js";
import rateLimit from "express-rate-limit";

dotenv.config();

const app = express();

// DATABASE CONNECT
connectDB();

// MIDDLEWARES
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

// RATE LIMIT
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

app.use(limiter);

// ROUTES
app.use("/api", waitlistRoutes);

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("Backend Running Successfully");
});

// ERROR HANDLER
app.use((err, req, res, next) => {
  console.log("SERVER ERROR:", err);

  res.status(500).json({
    message: "Internal Server Error",
  });
});

// SERVER START
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});