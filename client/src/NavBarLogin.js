import React from "react";
import { Link } from "react-router-dom";

function NavBarLogin() {
  return (
    <div>
      <nav id="nav-bar-login">
        <Link to="/log-in">Log In | </Link>
        <Link to="/sign-up">Sign Up |</Link>
        <Link to="/log-out"> Log Out</Link>
      </nav>
    </div>
  );
}
export default NavBarLogin;
