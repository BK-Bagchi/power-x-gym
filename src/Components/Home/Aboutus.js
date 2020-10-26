import React from 'react'
import AboutImg from '../../Resources/Image&Icon/wells-chan-H-vAxuWxmi8-unsplash.jpg'

const Aboutus = () => {
    return (
        <section className="about-us container my-5">
            <div className="row w-100 m-0 py-5">
                <div className="col-md-6">
                    <img className="w-100" src={AboutImg} alt="About Img" />
                </div>
                <div className="col-md-6 px-4">
                    <h1 className="about-1 text-uppercase">About Us</h1>
                    <h1 className="about-2 text-uppercase">We are here to dream !</h1>
                    <h1 className="about-3 text-uppercase">Our team is here to serve you</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus velit consequatur maxime, quis voluptates eligendi eos expedita libero corrupti vitae at ratione, adipisci repellendus amet error dignissimos assumenda magnam incidunt dolore corporis dolorem enim tempore? Quia in pariatur esse voluptatem commodi fuga voluptatum molestias, ea, eius, quasi temporibus eum autem.</p>
                    <button className="join my-3">Join us</button>
                </div>
            </div>
        </section>
    );
};

export default Aboutus;