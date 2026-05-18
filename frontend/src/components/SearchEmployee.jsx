import { useState } from "react";
import axios from "axios";

function SearchEmployee(){

    const [department,setDepartment] = useState("");

    const [employees,setEmployees] = useState([]);

    const handleSearch = async()=>{

        const res = await axios.get(
            `http://localhost:5000/api/employees/search?department=${department}`
        );

        setEmployees(res.data);

    };

    return(

        <div>

            <h2>Search Employee</h2>

            <input
                type="text"
                placeholder="Enter Department"
                onChange={(e)=>setDepartment(e.target.value)}
            />

            <button onClick={handleSearch}>
                Search
            </button>

            {
                employees.map((emp)=>(
                    <div key={emp._id}>

                        <h3>{emp.name}</h3>

                        <p>{emp.department}</p>

                        <hr />

                    </div>
                ))
            }

        </div>

    );

}

export default SearchEmployee;