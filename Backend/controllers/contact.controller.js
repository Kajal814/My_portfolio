import Contact from "../models/contact.model.js";
import { sendEmail } from "../config/sendEmail.js";

export const createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    console.log("Step 1");

    const newContact = await Contact.create({
      name,
      email,
      message,
    });

    console.log("Step 2: MongoDB Saved");

    // Comment this line temporarily
    // await sendEmail(name, email, message);

    console.log("Step 3");

    res.status(201).json({
      success: true,
      message: "Saved successfully",
      data: newContact,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};