const Experience = require('../model/experience.model');

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
