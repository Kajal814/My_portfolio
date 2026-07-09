// import "./config/env.js";
// import express from "express";

// import connectDB from "./config/db.js";
// import contactRoutes from "./routes/contact.route.js";
// import cors from "cors";


// const app = express();
// app.use(cors());
// app.use(express.json());

    

// connectDB();
    
// app.use("/api/contacts", contactRoutes);

// const PORT = process.env.PORT || 5000;

// app.get("/", (req, res) => {
//   res.send("Backend is working");
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contact.route.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is working");
});

app.use("/api/contacts", contactRoutes);

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`✅ Server listening on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Startup error:", err);
  }
};

start();