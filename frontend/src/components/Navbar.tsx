import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Tasks</Link>
      <Link to="/create">New Task</Link>
    </nav>
  );
}

export default Navbar;