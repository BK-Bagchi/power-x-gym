import React from 'react'
import './Header.css'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <h1>Power X</h1>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">Home</li>
                    <li class="nav-item active">Service</li>
                    <li class="nav-item active">Our Classes</li>
                    <li class="nav-item active">About Us</li>
                    <li class="nav-item active">Blog</li>
                    <li class="nav-item active">Practicing</li>
                    <li class="nav-item active">Contact Us</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;