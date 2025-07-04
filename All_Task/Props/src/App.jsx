
import Cybrom from './Components/Cybrom.jsx';
// const myage=25;
// const contry="India";

const student={
  nm:"Suryabhan Singh",
  sub:"React",
  add:"Bhopal",
  fees:20000,
  contact:7987292878
}
const App=() => {
  return (
    <>
     {/* <h1 align="center">My Header</h1> */}
     {/* <Cybrom name="Suryabhan Singh" city="Bhopal" age={myage} country={contry}/> */}
    <Cybrom nm={student.nm} sub={student.sub} add={student.add} fees={student.fees} contact={student.contact}/>
    </>
  );
}

export default App;
