import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Browse from "./Browse";
import AddNewReview from "./AddNewReview";

function NavBarMain() {
  return (
    <>
      <nav id="nav-bar-main">
        <Link to="/">Home | </Link>
        <Link to="/browse">Browse Reviews | </Link>
        <Link to="/add-new-review">Add New Review</Link>
      </nav>
    </>
  );
}
export default NavBarMain;
