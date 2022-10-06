import logo from "./logo.svg";
import "./App.css";
import NavBarMain from "./NavBarMain";
import NavBarLogin from "./NavBarLogin";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Browse from "./Browse";
import AddNewReview from "./AddNewReview";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import React, { useEffect, useState } from "react"

function App() {

    const [user, setUser] = useState(null);
  //   useEffect(() => {    // auto-login    
  //     fetch('/me').then((r) => {      
  //       if (r.ok) {        
  //         r.json().then((user) => setUser(user));      
  //       }    
  //     });  
  //   }, []);
  // if (!user) return <LogIn onLogin={setUser} />;

  return (
    <div className="App">
      <NavBarLogin />
      <NavBarMain />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/add-new-review" element={<AddNewReview />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/sign-up" element={<SignUp onLogin={setUser} />} />
      </Routes>
    </div>
  );
}

export default App;
