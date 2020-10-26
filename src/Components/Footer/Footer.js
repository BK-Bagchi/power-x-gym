import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="mt-5 py-4">
                <div className="row w-100 m-0">
                    <div className="col-md-1 my-2"></div>
                    <div className="col-md-2 my-2">
                        <h2 className="title text-white">Power <span>X</span></h2>
                    </div>
                    <div className="col-md-2 my-2">
                        <ul type="none" className="text-white">
                            <li><p className="text-white font-weight-bold mb-1">Need Help ?</p></li>
                            <li>Help Center</li>
                            <li>Email Support</li>
                            <li>Live Chat</li>
                            <li>Gift Certificates</li>
                            <li>Send Us Feedback</li>
                        </ul>
                    </div>
                    <div className="col-md-2 my-2">
                        <ul type="none" className="text-white">
                            <li><p className="text-white font-weight-bold mb-1">Digital Resources</p></li>
                            <li>Articles</li>
                            <li>E-books</li>
                        </ul>
                    </div>
                    <div className="col-md-2 my-2">
                        <ul type="none" className="text-white">
                            <li><p className="text-white font-weight-bold mb-1">Connect with Us</p></li>
                            <li>Forum</li>
                        </ul>
                    </div>
                    <div className="col-md-2 my-2">
                        <ul type="none" className="text-white">
                            <li><p className="text-white font-weight-bold mb-1">Join Our Newsletter</p></li>
                            <li>Get exclusive news, features, and updates from The Shredder Weight Loss Academy</li>
                        </ul>
                    </div>
                    <div className="col-md-1 my-2"></div>
                </div>
            </div>
            <p className="m-0 pb-2 text-white text-center">BK Bagchi &copy;{new Date().getFullYear()}. All rights reserved</p>
        </footer>
    );
};

export default Footer;