import React from 'react';
import {
    Link,
  } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">        
        <Link to={`/`} style={{ textDecoration: 'none'}}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="navbar-brand">Hjem</a>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
            </li>
            </ul>
            {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button> */}
        </div>
    </nav>
  );
}

export default Navbar;
