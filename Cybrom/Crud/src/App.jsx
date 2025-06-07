import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Insert from "./Pages/Insert";
import Display from "./Pages/Display";
import Contact from "./Pages/Contact";






const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="insert" element={<Insert/>} />
          <Route path="display" element={<Display />} />
          <Route path="contact" element={<Contact />} />
          

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;