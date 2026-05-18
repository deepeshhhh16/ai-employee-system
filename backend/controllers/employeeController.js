const Employee = require("../models/Employee");

exports.addEmployee = async(req,res)=>{

    try{

        const employee =
        await Employee.create(req.body);

        res.status(201).json(employee);

    }catch(err){

        res.status(500).json({
            message:err.message
        });

    }

};

exports.getEmployees = async(req,res)=>{

    try{

        const employees =
        await Employee.find();

        res.json(employees);

    }catch(err){

        res.status(500).json({
            message:err.message
        });

    }

};

exports.searchEmployee = async(req,res)=>{

    try{

        const department =
        req.query.department;

        const employees =
        await Employee.find({department});

        res.json(employees);

    }catch(err){

        res.status(500).json({
            message:err.message
        });

    }

};