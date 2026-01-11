import PropTypes from 'prop-types';
import logo from "../components/hh.jpg";
import { Link } from "react-router-dom";
import './Navbar.css';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>

      {/* Logo */}
      <img src={logo} alt="logo" className='mm' />

      {/* Brand */}
      <Link className="navbar-brand" to="/">
        {props.title}
      </Link>

      {/* Mobile toggler */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Navbar items */}
      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav me-3">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">{props.about}</Link>
          </li>
        </ul>

        <form className="d-flex align-items-center me-3">
          <input className="form-control me-2" type="search" placeholder="Search" />
          <Link to="/signin">
            <button className="btn btn-primary" type="button">SIGN IN</button>
          </Link>
        </form>

        <div className="d-flex align-items-center">
          <label className="switch me-2">
            <input type="checkbox" onClick={props.togglemode} />
            <span className="slider round"></span>
          </label>
          <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            Dark mode
          </label>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
  mode: PropTypes.string,
  togglemode: PropTypes.func
};
