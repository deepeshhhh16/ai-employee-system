import { useEffect, useState } from "react";
import axios from "axios";

function EmployeeList(){

    const [employees,setEmployees] = useState([]);

    useEffect(()=>{

        fetchEmployees();

    },[]);

    const fetchEmployees = async()=>{

        const res = await axios.get(
            "https://ai-employee-backend-3lkr.onrender.com" ,
        );

        setEmployees(res.data);

    };

    return(

        <div>

            <h2>Employee List</h2>

            {
                employees.map((emp)=>(
                    <div key={emp._id}>

                        <h3>{emp.name}</h3>

                        <p>{emp.email}</p>

                        <p>{emp.department}</p>

                        <p>{emp.performanceScore}</p>

                        <hr />

                    </div>
                ))
            }

        </div>

    );

}

export default EmployeeList;