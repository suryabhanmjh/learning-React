import { useSelector, useDispatch } from "react-redux";
import { incrementByTen, decrementByTen } from "../features/counter/counterSlice";

const CounterApp = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: 50 }}>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(incrementByTen())} style={btnStyle}>
        +10
      </button>
      <button onClick={() => dispatch(decrementByTen())} style={btnStyle}>
        -10
      </button>
    </div>
  );
};

const btnStyle = {
  margin: "0 10px",
  padding: "8px 16px",
  fontSize: "16px",
};
export default CounterApp;
