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
import { useNavigate } from "react-router-dom";


function App() {

    const navigate = useNavigate()
    const [reviews, setReviews] = useState([])
    const [user, setUser] = useState(null);
    
    function addNewReviewToArray(newReview) {
      setReviews([...reviews, newReview])
    }
 
  useEffect(() => {
    fetch('/me').then(r=>r.json().then(data => {
      if (r.ok){
      setUser(data);
      }
    }))
  }, [])

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }

    })
    navigate("/")
  }

  useEffect(() => {
    fetch("/reviews")
    .then(response => response.json())
    .then((reviews) => {
        reviews.forEach(r => {
            r.wouldBuyAgain = r.would_buy_again
            delete r.would_buy_again
        })
        setReviews(reviews)
    })
}, [])

  // function showLogout() {
  //   if (user) {
  //     return (
  //       <div className="logout">
  //         <button onClick={handleLogoutClick}>Logout</button>
  //       </div>
  //     )
  //   }
  // }

  return (
    <div className="App">
      <button id="log-out" onClick={handleLogoutClick}>Logout</button>
      <NavBarLogin />
      <NavBarMain />
      <Routes>
        <Route className="route" path="/" element={<Home />} />
        <Route className="route" path="/browse" element={<Browse reviews={reviews} setReviews={setReviews} currentUser={user}/>} />
        <Route className="route" path="/add-new-review" element={<AddNewReview reviews={reviews} addNewReviewToArray={addNewReviewToArray} isLoggedIn={!!user}/>} />
        <Route className="route" path="/log-in" element={<LogIn onLogin={setUser} isLoggedIn={!!user}/>} />
        <Route className="route" path="/sign-up" element={<SignUp onLogin={setUser} isLoggedIn={!!user} />} />
      </Routes>
    </div>
  );
}

export default App;
