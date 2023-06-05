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

export default CoverPage;