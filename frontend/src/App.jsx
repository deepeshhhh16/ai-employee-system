import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import SearchEmployee from "./components/SearchEmployee";

function App(){

  return(

    <div
      style={{
        backgroundColor:"#f4f4f4",
        minHeight:"100vh",
        padding:"30px",
        fontFamily:"Arial"
      }}
    >

      <h1
        style={{
          textAlign:"center",
          color:"#333"
        }}
      >
        AI Employee System
      </h1>

      <div
        style={{
          background:"white",
          padding:"20px",
          borderRadius:"10px",
          marginBottom:"20px"
        }}
      >
        <EmployeeForm />
      </div>

      <div
        style={{
          background:"white",
          padding:"20px",
          borderRadius:"10px",
          marginBottom:"20px"
        }}
      >
        <EmployeeList />
      </div>

      <div
        style={{
          background:"white",
          padding:"20px",
          borderRadius:"10px"
        }}
      >
        <SearchEmployee />
      </div>

    </div>

  )

}

export default App;