import Contact from "../models/contact.model.js";
import { sendEmail } from "../config/sendEmail.js";

export const createContact = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        const newContact = await Contact.create({
            name,
            email,
            message
        });

        // Send email after saving to MongoDB
        await sendEmail(name, email, message);

        res.status(201).json({
            success: true,
            message: "Message sent successfully",
            data: newContact
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};