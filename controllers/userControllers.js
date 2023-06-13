const userModel = require("../models/userModels");
const bcrypt = require("bcryptjs")

exports.getAllUser = (req, res) =>{
    userModel.find()
    .then(users => res.json(users))
    .catch(error => res.status(500).json({error: error.message}))
};

exports.createUser = (req, res) => {
    const {username, email, password} = req.body;
    const saltRounds = 10;
    bcrypt.hash(password,saltRounds,function(err,hash){
        if(err){
            return res.status(500).json({error: err.message});
        }else{
            const newUser = new userModel({
                username,
                email,
                password,
        
            });
        
            newUser.save()
            .then(() => res.status(201).json({success:"created"}))
            .catch(error => res.status(500).json({error: error.message}))
        }
            
        }
    )}
   

exports.updateUser =(req, res)=>{
    const {id} =req.params;
    const {username, email, password} = req.body
    userModel.findByIdAndUpdate(id, {username, email, password}, )
    .then(user => {
        if(!user)throw new Error (`user whit id ${id} not found`);
        res.status(200).json({user});
    })
    .catch(error => res.status(500).json({message: 'An error', error}))
};

exports.deleteUser =(req, res)=>{
    const {id} =req.params;
    userModel.findByIdAndDelete(id)
    .then(user => {
        if(!user)throw new Error (`user whit id ${id} not found`);
        res.status(200).json({message:'User delete'})
    })
    .catch(error => res.status(500).json({message: 'An error', error}))
};