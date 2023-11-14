const nodemailer = require("nodemailer");
const crypto = require("crypto");
const dotenv = require("dotenv");
const ContactUs = require('../models/ContactUs')


const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

 
  const postFeedback = async (req, res) => {
    try {
        const { fullName, mail, subject, message } = req.body;
        const newFeedback = new ContactUs({fullName, mail, subject, message});
        console.log(mail);
        await newFeedback.save();

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: mail,
            subject: "Thank You for your Feedback!",
            text: `Your feedback was received with the subject of ${subject}, We will get back to you in a short while`,
        };
       
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Feedback saved Successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  };
  
  const getAllFeedbacks = async(req,res) =>{
    try {
        const response = await ContactUs.find();
        res.status(201).send(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  }



module.exports = {postFeedback,getAllFeedbacks}