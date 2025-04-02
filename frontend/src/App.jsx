import React from "react";
import HomePage from "./pages/HomePage";
import { Route, Router, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { SignUpMentor } from "./pages/SignUpMentor";
import LogSign from "./pages/LogSign";
import JuniorSignup from "./pages/JuniorSignup";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/mentorSignup" element={<SignUpMentor/>} />
          <Route path="/logSign" element={<LogSign/>} />
          <Route path="/juniorSignup" element={<JuniorSignup/>} />
          
        </Routes>
    </div>
  );
}

export default App;
