import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'


function CoverPage () {

const navigate = useNavigate()

  return (
    <>
      <div className="cover-container">
      <h1>Dog & Sweet Home</h1>
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

export default CoverPage;