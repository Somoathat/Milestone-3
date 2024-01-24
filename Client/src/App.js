import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"

import logo from "./logo.svg";
import  {Login} from "./components/Login"
import  {Register}  from "./components/Register"
import  {Homepage}  from "./components/Homepage"
import "./App.css";
import { Link } from 'react-router-dom'


function App() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    
   


      
<div className="App">
      <Router>
        <header>
          <h1 className="title">Welcome to LLB</h1>

          <div className="navBar">
            <ul>
              <li>
                <Link to="/">Homepage</Link>
              </li>
              <li>
              <Link to="/Login">Login</Link>
              </li>
              <li>
              <Link to="/Register">Register</Link>
              </li>
            </ul>
          </div>

          <div className="display">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Register" element={<Register/>} />
            </Routes>
          </div>

        </header>
      </Router>
    </div>
  );
}

export default App;