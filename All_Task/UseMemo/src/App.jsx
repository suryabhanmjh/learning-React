// import React, { useMemo, useState } from 'react';  {/useMemo: To optimize performance by memoizing the result of a computation./}

// const App = () => {
//   const [add, setAdd] = useState(0);
//   const [minus, setMinus] = useState(100);

//   const myMulti = useMemo(() => {
//     console.log("");
//     return add * 2;
//   }, [add]);

//   return (
//     <>
//       <h1>Welcome to my App</h1>
//       <h2>Multiplication of add by 2: {myMulti}</h2>
//       <button onClick={() => setAdd(add + 1)}>Addition</button>
//       <button onClick={() => setMinus(minus - 1)}>Subtraction</button>
//       <h2>Add value: {add}</h2>
//       <h2>Minus value: {minus}</h2>
//     </>
//   );
// };

// export default App;

import React, { useState } from 'react';

export const App = () => {
  const [num, setNum] = useState(0);
  const [city, setCity] = useState("");

  function calculateCount(n) {
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result = n * 2;
    }
    return result;
  }

  const myCount = calculateCount(num);

  return (
    <>
      <h1>Welcome to my App</h1>
      
      <div>
        Enter Number : 
        <input 
          type="number" 
          value={num} 
          onChange={(e) => setNum(Number(e.target.value))} 
        />
      </div>

      <div>
        Enter City : 
        <input 
          type="text" 
          value={city} 
          onChange={(e) => setCity(e.target.value)} 
        />
      </div>

      <h2>My count: {myCount}</h2>
      {/* <h2>City: {city}</h2> */}
    </>
  );
};

export default App;