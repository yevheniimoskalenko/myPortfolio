const Experience = require('../model/experience.model');
const nodemailer = require('nodemailer');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dmrpkseez',
  api_key: '218954266888641',
  api_secret: 'z_Q9L0gsneYqZCcsTo_ZDVKm7jE',
});
module.exports.upload = async (req, res) => {
  console.log(req.body);
};
module.exports.experience = async (req, res) => {
  const { company, role, datepicker } = req.body;
  try {
    const experience = new Experience({
      company,
      role,
      date: datepicker,
    });
    await experience.save();
    return res.json({});
  } catch (e) {
    return res.status(500).json(e);
  }
};
module.exports.concept = (req, res) => {
  res.json(req.body);
};

module.exports.email = (req, res) => {
  const { name, email, detail } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.email,
      pass: process.env.password,
    },
  });
  const mailOptions = {
    from: email,
    to: process.env.email,
    subject: name,
    text: detail,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });
};
