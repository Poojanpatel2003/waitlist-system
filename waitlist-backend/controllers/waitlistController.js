import Waitlist from "../models/Waitlist.js";
import sendEmail from "../utils/sendEmail.js";

export const addToWaitlist = async (req, res) => {
  try {

    const { name, email, phone, message } = req.body;

    // CHECK REQUIRED FIELDS
    if (!name || !email || !message) {
      return res.status(400).json({
        message: "All required fields missing",
      });
    }

    // CHECK EXISTING USER
    const existingUser = await Waitlist.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    // CREATE USER
    const user = await Waitlist.create({
      name,
      email,
      phone,
      message,
    });

    // SEND RESPONSE FIRST
    res.status(201).json({
      message: "Successfully added to waitlist",
      user,
    });

    // SEND EMAIL IN BACKGROUND
    sendEmail(email, name)
      .then(() => {
        console.log("Mail Sent Successfully");
      })
      .catch((err) => {
        console.log("MAIL ERROR:", err.message);
      });

  } catch (error) {

    console.log("CONTROLLER ERROR:", error.message);

    return res.status(500).json({
      message: error.message,
    });

  }
};