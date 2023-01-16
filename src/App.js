import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './pages/About'
import Home from './pages/Home';
import MentorProfiles from './pages/MentorProfiles';
import Login from './pages/Login';

import NavBarElements from './components/NavBar/NavBarElements.js';
import Profile from './pages/Profile';
import Chatting from './pages/Chatting';
import Coin from './pages/Coin';
import Signup from './pages/Signup';

import Footer from './components/Footer';



function App() {
  return (
    <div>
      <Router>
      <NavBarElements/>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/Profile" element = {<Profile/>}/>
        <Route path = "/About" element = {<About/>}/>
        <Route path = "/MentorProfiles" element = {<MentorProfiles/>}/>
        <Route path = "/Chatting" element = {<Chatting/>}/>
        <Route path = "/Coin" element = {<Coin/>}/>
        <Route path = "/Login" element = {<Login/>}/>
        <Route path = "/Signup" element = {<Signup/>}/>
      </Routes>
      <Footer/>
    </Router>
    </div>
)}

export default App;
