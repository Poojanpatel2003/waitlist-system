import Waitlist from "../models/Waitlist.js";
import sendEmail from "../utils/sendEmail.js";

export const addToWaitlist = async (req, res) => {
  try {

    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        message: "All required fields missing",
      });
    }

    const existingUser = await Waitlist.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    const user = await Waitlist.create({
      name,
      email,
      phone,
      message,
    });

    // Send response FIRST
    res.status(201).json({
      message: "Successfully added to waitlist",
      user,
    });

    // THEN send email in background
    sendEmail(email, name)
      .then(() => {
        console.log("Email Sent");
      })
      .catch((err) => {
        console.log("Email Error:", err);
      });

  } catch (error) {

    return res.status(500).json({
      message: error.message,
    });

  }
};