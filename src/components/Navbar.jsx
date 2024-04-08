import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="d-flex flex-column">
          <span className="navbar-brand" href="#">
            Gus mornins
          </span>
          <span className="navbar-brand fw-bold" href="#">
            By Charlie
          </span>
        </div>
        <div className="btn-group dropdown">
          <button
            type="button"
            className="btn"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;