

import { Link } from "react-router-dom";     
import React from "react";

function Navbar() {
  return (
    <nav className="Navbar"style={{ width: "100%", marginBottom: "20px" }}>
      <ul>        
        <Link to="/"> Home </Link>     
        <Link to="/dogs"> Our Dogs </Link> 
        <Link to="/edit"> Donation </Link> 
        <Link to="/about"> About Us </Link> 
        <Link to="/"> Log Out </Link>     
      </ul>
    </nav>
  );
}
export default Navbar;