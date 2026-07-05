import express from "express";
import { createContact } from "../controllers/contact.controller.js";


const contactRoutes = express.Router();


contactRoutes.post("/", createContact);


export default contactRoutes;