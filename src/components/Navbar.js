import PropTypes from 'prop-types';
import logo from "../components/download (2).png"
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <img src={logo} className="image" height={70} alt="logo" />

        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>

        {/* Mobile toggle button for Bootstrap 5 */}
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

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.about}
              </Link>
            </li>
          </ul>

          {/* Make form and buttons stack on mobile */}
          <form className="form-inline my-2 my-lg-0 d-flex flex-column flex-lg-row">
            <input
              className="form-control mr-sm-2 mb-2 mb-lg-0"
              type="search"
              placeholder="Search"
            />
            

            <Link to="/signin">
              <button className="btn btn-primary mb-2 mb-lg-0" type="button">
                SIGN IN
              </button>
            </Link>
          </form>

          <div className="mx-3 d-flex align-items-center mt-2 mt-lg-0">
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
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
  mode: PropTypes.string,
  togglemode: PropTypes.func
};
