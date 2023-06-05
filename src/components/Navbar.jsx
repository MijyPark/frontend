
 
import React from "react";
import { Link, NavLink } from "react-router-dom";  
 
function Navbar() {
  return (
    <nav className="Navbar">
      <ul>


      import { Link } from "react-router-dom";
import coverImg from '../assets/home.jpg'

function CoverPage () {


  return (
    <>
    <div>
    <img src={coverImg} className="coverimg" alt="cover"/>
    <h2>Dog Rescue</h2>

    </div>
      <Link to="/about">
      <h5>About Us</h5>
      </Link>

      <Link to="/donate">
      <h5> Donation</h5>
      </Link>

      <Link to="/login">
      <h5> Log In</h5>
      </Link>

      <Link to="/sigup">
      <h5> Sign Up</h5>
      </Link>

      <Link to="/dogs">
      <h5> Our Dogs</h5>
      </Link>

      <Link to="/admin">
      <h5>Admin</h5>
      </Link>
  </>
  );
}

function Navbar() {
  const { 
    isLoggedIn,
    user,                   // <== UPDATE
    logOutUser              // <== UPDATE
  } = useContext(AuthContext);
 
  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>
      
      {isLoggedIn && (
        <>
          <Link to="/projects">
            <button>Projects</button>
          </Link>
        
          {/*   UPDATE   */}
          <button onClick={logOutUser}>Logout</button>
          <span>{user && user.name}</span>
        </>
      )}
 
      {!isLoggedIn && (
        <>
          <Link to="/signup"> <button>Sign Up</button> </Link>
          <Link to="/login"> <button>Login</button> </Link>
        </>
      )}      
 
    </nav>
  );
}
 
export default Navbar;
 