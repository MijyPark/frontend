
 
import React from "react";
import { Link, NavLink } from "react-router-dom";  
 
function Navbar() {
  return (
    <nav className="Navbar">
      <ul>

        <NavLink to="/" className={({ isActive }) => isActive ? "selected" : ""}>
          Home
        </NavLink>

        <NavLink  to="/signup" 
          className={({ isActive }) => isActive ? "selected" : ""}
         >
          Register/Log In
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => isActive ? "selected" : ""}
         >
          About Us
        </NavLink>
        
        <NavLink 
          to="/dogs" 
          className={({ isActive }) => isActive ? "selected" : ""}
        >
          Our Dogs
        </NavLink>

        <NavLink 
          to="/admin" 
          className={({ isActive }) => isActive ? "selected" : ""}
         >
          Admin
        </NavLink>
        
      </ul>
      
    </nav>
  );
}
 
export default Navbar;