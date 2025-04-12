import React from "react";
import HomePage from "./pages/HomePage";
import { Route, Router, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { SignUpMentor } from "./pages/SignUpMentor";
import LogSign from "./pages/LogSign";
import JuniorSignup from "./pages/JuniorSignup";
import Navbar from "./components/layout/Navbar";
import Dashboard from './pages/Dashboard';
import MentorProfile from "./pages/MentorProfile";
import JuniorLogin from "./pages/JuniorLogin";
import LoginGateway from "./pages/LoginGateway";


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
          <Route path="/profile" element={<MentorProfile/>} />
          <Route path="/mentors/:mentorName" element={<MentorProfile />} />
          <Route path="/juniorLogin" element={<JuniorLogin/>} />
          <Route path="/loginGateway" element={<LoginGateway/>} />
          

        </Routes>
    </div>
  );
}

export default App;
