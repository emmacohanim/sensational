import React from "react";
import { Link } from "react-router-dom";

function NavBarLogin() {
  return (
    <div>
      <nav id="nav-bar-login">
        <Link className="link-login" to="/log-in">Log In | </Link>
        <Link className="link-login" to="/sign-up">Sign Up</Link>
      </nav>
    </div>
  );
}
export default NavBarLogin;
