import { useState } from "react";

function LoginPage() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username.trim() === "" || password.trim() === "") {
      setError("Please enter username and password.");
      return;
    }

    if (username === "admin" && password === "admin123") {
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = "/";
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <div className="logo-placeholder">TF</div>
          <h1>TaskFlow</h1>
        </div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label>Username</label>
          <input
            type="text"
            className="input"
            placeholder="Enter username"
            value={username}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            className="input"
            placeholder="Enter password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          />
          {error && <p className="error">{error}</p>}
          <button type="submit" className="btn" style={{ width: "100%" }}>
            Login
          </button>
        </form>
        <p className="login-hint">Username: admin | Password: admin123</p>
      </div>
    </div>
  );
}

export default LoginPage;