import React from "react";
import PropTypes from "prop-types";

export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">

        {/* Title */}
        <a className="navbar-brand" href="#">
          {props.title}
        </a>

        {/* Toggle button (mobile) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar content */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          {/* Left side */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <span className="nav-link active">Home</span>
            </li>
          </ul>

          {/* Right side controls */}
          <div className="d-flex align-items-center ms-auto gap-3 flex-wrap">

            {/* Search */}
            {props.searchBar && (
              <form
                className="d-flex"
                role="search"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  className="form-control me-3"
                  type="search"
                  placeholder="Search"
                  value={props.search}
                  onChange={(e) => props.setSearch(e.target.value)}
                />
                <button className="btn btn-outline-success m-2" type="submit">
                  Search
                </button>
              </form>
            )}

            {/* Dark Mode Toggle */}
            <button
              className="btn btn-sm btn-outline-secondary px-3"
              onClick={() => props.setDarkMode(!props.darkMode)}
            >
              {props.darkMode ? "☀ Light" : "🌙 Dark"}
            </button>

          </div>
        </div>
      </div>
    </nav>
  );
}

Header.defaultProps = {
  title: "Title Here",
  searchBar: true,
};

Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired,
};