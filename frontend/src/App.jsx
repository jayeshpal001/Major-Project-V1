import React from "react";
import HomePage from "./pages/HomePage";
import { Route, Router, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { SignUpMentor } from "./pages/SignUpMentor";
import LogSign from "./pages/LogSign";
import JuniorSignup from "./pages/JuniorSignup";
import Navbar from "./components/layout/Navbar";
import Dashboard from './pages/Dashboard';
function App() {
  return (
    <div className="App">
      
       <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/mentorSignup" element={<SignUpMentor/>} />
          <Route path="/logSign" element={<LogSign/>} />
          <Route path="/juniorSignup" element={<JuniorSignup/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          
        </Routes>
    </div>
  );
}

export default App;
