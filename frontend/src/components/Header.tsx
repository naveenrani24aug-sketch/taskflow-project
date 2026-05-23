import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <header className="header">
      <div className="header-left">
        <div className="logo-placeholder">TF</div>
        <h1>TaskFlow</h1>
      </div>
      <button className="btn" onClick={handleLogout}>Logout</button>
    </header>
  );
}

export default Header;