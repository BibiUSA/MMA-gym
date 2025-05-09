import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "./NavBar.css";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/the-team", label: "The Team" },
  { to: "/media", label: "Media" },
  { to: "/chief-instructor", label: "Chief Instructor" },
  { to: "/schedule", label: "Schedule" },
  { to: "/benefits", label: "Benefits of Muay Thai" },
  { to: "/pricing", label: "Pricing" },
  { to: "/private-sessions", label: "Private Sessions" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleLinkClick = () => setOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link
          to="/"
          onClick={handleLinkClick}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="navbar-logo">White Tiger Muay Thai</div>
        </Link>
        <button
          className="navbar-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="6" width="32" height="4" rx="2" fill="#ff9800" />
            <rect y="14" width="32" height="4" rx="2" fill="#ff9800" />
            <rect y="22" width="32" height="4" rx="2" fill="#ff9800" />
          </svg>
        </button>
        <ul className={`navbar-links${open ? " open" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={location.pathname === link.to ? "active" : ""}
                onClick={handleLinkClick}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
