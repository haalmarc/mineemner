import React from 'react';
import {
    Link,
  } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">        
        <Link to={`/`} style={{ textDecoration: 'none'}}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <span className="navbar-brand">Hjem</span>
        </Link>
    </nav>
  );
}

export default Navbar;
