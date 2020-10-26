import React from 'react'
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
                    <li className="nav-item active">Home</li>
                    <li className="nav-item active">Service</li>
                    <li className="nav-item active">Our Classes</li>
                    <li className="nav-item active">About Us</li>
                    <li className="nav-item active">Blog</li>
                    <li className="nav-item active">Practicing</li>
                    <li className="nav-item active">Contact Us</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;