import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import waitlistRoutes from "./routes/waitlistRoutes.js";
import rateLimit from "express-rate-limit";

dotenv.config();
connectDB();

const app = express();
app.use(cors({
  origin: "https://waitlist-system-1xtlkkzye-poojans-projects-93986157.vercel.app",
   methods: ["GET", "POST"],
  credentials: true
}));
app.use(express.json());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use(limiter);

app.use("/api", waitlistRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});