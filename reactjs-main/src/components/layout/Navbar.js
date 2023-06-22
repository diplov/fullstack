import React from "react";
import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated, signOut } from "../../api/userApi";

const Navbar = () => {
  const navigate = useNavigate();
  let { token, user } = isAuthenticated();
  // console.log(token);
  // console.log(user);

  const handlesignout = () => {
    signOut().then(() => {
      // if (data.error) {
      //   console.log(data);
      // } else {
      navigate("/login");
      // }
    });
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row custom-background">
          <div className="col-md-3 text-center">
            <Link className="navbar-brand fs-3 fw-bold text-warning" to="/">
              Our Store
            </Link>
          </div>
          <div className="col-md-6 pt-2">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-success" type="submit">
                Search
              </button>
            </form>
          </div>

          <div className="col-md-3 p-1 d-flex justify-content-evenly">
            {!user && (
              <>
                <Link to="/login">
                  <i className="bi bi-box-arrow-in-right fs-3 text-success"></i>
                </Link>
                <Link to="/register">
                  <i className="bi bi-person-plus fs-3 text-success"></i>
                </Link>
              </>
            )}

            {user && user.role === 1 && (
              <>
                <Link to="/admin/dashboard">
                  <i className="bi bi-speedometer fs-3 text-success"></i>
                </Link>
              </>
            )}

            {user && user.role === 0 && (
              <>
                <Link to="/userprofile">
                  <i className="bi bi-person-circle fs-3 text-success"></i>
                </Link>

                <Link to="/cart">
                  <i className="bi bi-cart fs-3 text-success"></i>
                </Link>
              </>
            )}

            {user && (
              <i
                className="bi bi-box-arrow-in-right fs-3 text-success"
                onClick={handlesignout}
                role="button"
              ></i>
            )}
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg bg-light custom-background">
        <div className="container-fluid">
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/faq">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
