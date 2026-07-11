import Contact from "../models/contact.model.js";
import { sendEmail } from "../config/sendEmail.js";

export const createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

   

    const newContact = await Contact.create({
      name,
      email,
      message,
    });



 
     await sendEmail(name, email, message);

 

    res.status(201).json({
  success: true,
  message: "Saved successfully",
});

sendEmail(name, email, message).catch((err) => {
  console.error("Email failed:", err);
});

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};