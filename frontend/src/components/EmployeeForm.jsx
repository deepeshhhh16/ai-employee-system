import { useState } from "react";
import axios from "axios";

function EmployeeForm(){

    const [formData,setFormData] = useState({
        name:"",
        email:"",
        department:"",
        skills:"",
        performanceScore:"",
        experience:""
    });

    const handleChange = (e)=>{

        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        });

    };

    const handleSubmit = async(e)=>{

        e.preventDefault();

        const employeeData = {

            ...formData,

            skills:formData.skills.split(",")

        };

        await axios.post(
            "http://localhost:5000/api/employees",
            employeeData
        );

        alert("Employee Added");

    };
    const inputStyle = {
    width:"100%",
    padding:"10px",
    marginBottom:"10px",
    borderRadius:"5px",
    border:"1px solid gray"
};

const buttonStyle = {
    background:"#007bff",
    color:"white",
    padding:"10px 20px",
    border:"none",
    borderRadius:"5px",
    cursor:"pointer"
};

   return(

    <div>

        <h2>Add Employee</h2>

        <form onSubmit={handleSubmit}>

            <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleChange}
                style={inputStyle}
            />

            <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                style={inputStyle}
            />

            <input
                type="text"
                name="department"
                placeholder="Department"
                onChange={handleChange}
                style={inputStyle}
            />

            <input
                type="text"
                name="skills"
                placeholder="Skills"
                onChange={handleChange}
                style={inputStyle}
            />

            <input
                type="number"
                name="performanceScore"
                placeholder="Performance Score"
                onChange={handleChange}
                style={inputStyle}
            />

            <input
                type="number"
                name="experience"
                placeholder="Experience"
                onChange={handleChange}
                style={inputStyle}
            />

            <button style={buttonStyle}>
                Add Employee
            </button>

        </form>

    </div>

);

}

export default EmployeeForm;