import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contact.route.js";
import cors from "cors";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

    

connectDB();
    
app.use("/api/contacts", contactRoutes);

app.listen(5000 || process.env.PORT,()=>{
 console.log("Server running");
});