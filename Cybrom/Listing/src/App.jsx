import EmpData from "./EmpData";
import EmpDesign from "./EmpDesign";
const App=()=>{
  let sno=1;
  const ans=EmpData.map((key)=> {
    sno++;
    return(
      <>
      <EmpDesign 
      
  nm={key.name}  
  eno={key.empno} 
  dpt={key.department} 
  sal={key.salary}/>
      </>
    )
  })
  return(
    <>
     <h1 align="center">Welcome To Employeeee Records!!!!</h1>
     <hr />
     <table border="1" width="500px">
      <tr>
        <th>Sno</th>
        <th>Name</th>
        <th>EmpNo</th>
        <th>Department</th>
        <th>Salary</th>
      </tr>
      {ans}
     </table>
    </>
  )
}
export default App;