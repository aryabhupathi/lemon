import React from "react";
import Toast from "./Toast";
import Lemon from "../images/lemonlogo.png";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [showToast, setShowToast] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState("");
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", formData);
    setToastMessage("Logged in successfully!");
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      setIsModalOpen(false);
    }, 3000);
  };
  return (
    <>
      <header className="restaurant-header">
        <div className="logo">
          <img src={Lemon} alt="Little Lemon Restaurant Logo" />
        </div>
        <nav className="main-nav">
          <button
            className="menu-toggle"
            aria-label="Toggle navigation"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
          <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/menu">Menu</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/reservation">Reservation</a>
            </li>
            <li>
              <a href="/order">Order Online</a>
            </li>
            <li>
              <button
                className="login-link"
                onClick={() => setIsModalOpen(true)}
              >
                Login
              </button>
            </li>
          </ul>
        </nav>
      </header>
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>
            <h2>Login</h2>
<form onSubmit={handleSubmit} className="login-form">
  <div className="form-group">
    <label htmlFor="email">Email</label>
    <input
      id="email"
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      required
    />
  </div>

  <div className="form-group">
    <label htmlFor="password">Password</label>
    <input
      id="password"
      type="password"
      name="password"
      value={formData.password}
      onChange={handleChange}
      required
    />
  </div>

  <button type="submit" className="submit-btn">
    Login
  </button>
</form>
          </div>
        </div>
      )}
      <Toast
        message={toastMessage}
        show={showToast}
        onClose={() => setShowToast(false)}
      />
    </>
  );
};
export default Header;
