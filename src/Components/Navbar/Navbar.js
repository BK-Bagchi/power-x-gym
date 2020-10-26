import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h1 className="text-white title">Power <span>X</span></h1>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <Link to="/"><li className="nav-item active">Home</li></Link>
                    <li className="nav-item active">Service</li>
                    <Link to="/classes"><li className="nav-item active">Our Classes</li></Link>
                    <li className="nav-item active">About Us</li>
                    <li className="nav-item active">Blog</li>
                    <Link to="/pricing"><li className="nav-item active">Pricing</li></Link>
                    <li className="nav-item active">Contact Us</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;