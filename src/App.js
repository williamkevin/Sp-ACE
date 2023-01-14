import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from './screens/Portfolio'
import About from './screens/About'
import Home from './screens/Home';
import MentorProfiles from './screens/MentorProfiles';

import NavBarElements from './components/NavBar/NavBarElements.js';


function App() {
  return (
    <div>
      <Router>
      <NavBarElements/>
      <Routes>
        <Route path = "/Home" element = {<Home/>}/>
        <Route path = "/Portfolio" element = {<Portfolio/>}/>
        <Route path = "/About" element = {<About/>}/>
        <Route path = "/MentorProfiles" element = {<MentorProfiles/>}/>
      </Routes>
    </Router>
    </div>
)}

export default App;
