import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import notesRouter from "./routes/notesRoute.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

// CORS configuration for both development and production
app.use(
  cors({
    origin: process.env.NODE_ENV === "production" 
      ? process.env.FRONTEND_URL || "https://thinkboard.vercel.app" // Update with your Vercel URL later
      : "http://localhost:5173",
    credentials: true
  })
);

app.use(express.json());
// app.use(rateLimiter)

app.use("/api/notes", notesRouter);

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Backend is running" });
});

// Remove the static file serving - frontend will be on Vercel
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../frontend/dist")));
//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
//   });
// }

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started on port " + PORT);
  });
});
