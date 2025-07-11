import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CounterApp from "./components/CounterApp";
import ThemeChangeApp from "./components/ThemeChangeApp";
import ToDoListApp from "./components/ToDoListApp";
import ContactUs from "./components/ContactUs";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<CounterApp />} />
        <Route path="/theme" element={<ThemeChangeApp />} />
        <Route path="/todo" element={<ToDoListApp />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
