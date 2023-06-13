const bcrypt = require("bcryptjs");
const userModels = require("../models/userModels");

exports.authenticateUser = (req, res) => {
  userModels.findOne({ email }).then((user) => {
    if (!user) {
      return res.status(404).json({ error: "User not Found" });
    }
    bcrypt.compare(password, user.password, function (err, result) {
      if (err) {
        res.status(500).json({error:err.message})
      } else if (result) {
        res.status(200).json({message:"Autehntification was Succesful"})
      } else {
        res.status(401).json({eror:"Autehntification failed"})
        
      }
    });
  })
  .cath(err => res.status(500).json({error:err.message}))
};
