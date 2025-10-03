import React from "react";
import { BrowserRouter as Router , Routes, Route} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Project from "./Components/Projects/Project";
import Experience from "./Components/Experience/Experience";
import Contact from "./Components/Contacts/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project />} /> 
          <Route path="/experience" element = {<Experience />} />
          <Route path="/contact" element= {<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
