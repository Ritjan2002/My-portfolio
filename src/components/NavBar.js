import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/nav.css";

function NavBar() {
  return (
    <div className="nav-container">
      <div className="links">
        <Link to="Home">Home</Link>
        <Link to="About">About</Link>
        <Link to="Skills">Skills</Link>
        <Link to="Projects">Projects</Link>
        <Link to="Contact">Contact</Link>
      </div>
    </div>
  );
}

export default NavBar;
