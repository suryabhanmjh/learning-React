// src/components/ThemeChangeApp.jsx
import { useSelector, useDispatch } from "react-redux";
import { changeColor } from "../features/colorSlice";

const ThemeChangeApp = () => {
  const bgColor = useSelector((state) => state.color.value);
  const dispatch = useDispatch();

  return (
    <div style={{ backgroundColor: bgColor, height: "100vh", padding: "20px" }}>
      <h2>Theme Change App</h2>
      <input
        type="text"
        placeholder="Enter color (e.g. red, #f00, blue)"
        onChange={(e) => dispatch(changeColor(e.target.value))}
        style={{ padding: "8px", fontSize: "16px" }}
      />
    </div>
  );
};

export default ThemeChangeApp;
