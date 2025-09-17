import { config } from "dotenv";
config();
import express from "express";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./src/config/db.js";
import userRouter from "./src/routes/UserRoutes.js";
import programRouter from "./src/routes/ProgramRoutes.js";
import subjectRouter from "./src/routes/SubjectRoutes.js";

const app = express();

//middlewares
app.use(express.json());
app.use(cors());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//routes
app.use("/api/users", userRouter);
app.use("/api/programs", programRouter);
app.use("/api/subjects", subjectRouter);

app.get("/", (req, res) => {
  res.send("Hello world");
});

const port = process.env.PORT || 3300;

async function startServer() {
  try {
    await connectDB(); // pehle DB connect karo
    app.listen(port, () => {
      console.log("✅ DB Connected");
      console.log("🚀 Server is running on port " + port);
    });
  } catch (err) {
    console.error("❌ DB Connection Failed:", err.message);
    process.exit(1); // server band kar do
  }
}

startServer();
