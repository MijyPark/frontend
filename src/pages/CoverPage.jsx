import { Link } from "react-router-dom";
//import Open.css from "../scss/OpenPage.css"//

function OpenPage () {

  return (
    <>
      <div className="cover-container">
      <h1>Dog & Sweet Home</h1>
      </div>

      <Link to="/dogs">
      <h5> Our Dogs</h5>
      </Link>

      <Link to="/admin">
      <h5>Admin</h5>
      </Link>

      <Link to="/about">
      <h5>About Us</h5>
      </Link>

      <Link to="/donate">
      <h5> Donation</h5>
      </Link>

      <Link to="/login">
      <h5> Log In</h5>
      </Link>

      <Link to="/register">
      <h5> Sign Up</h5>
      </Link>
    </>
  );
}

export default OpenPage;