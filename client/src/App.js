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
import {useState, useEffect} from "react"
function App() {

  const [perfumes, setPerfumes] = useState([])
  const [reviews, setReviews] = useState([])

  return (
    <div className="App">
      <NavBarLogin />
      <NavBarMain />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/add-new-review" element={<AddNewReview />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
