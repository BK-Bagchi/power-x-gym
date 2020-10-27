import React from 'react'
import Image1 from '../../Resources/Image&Icon/hipcravo-5UbIqV58CW8-unsplash.jpg'
import Image2 from '../../Resources/Image&Icon/daniel-apodaca-WdoQio6HPVA-unsplash.jpg'
import Image3 from '../../Resources/Image&Icon/penguinuhh-8VI6WwEEEHw-unsplash.jpg'

const Plan = ({ image, background, plan, bill }) => {
    return <main className={`plan ${background} d-flex flex-column align-items-center justify-content-center`}>
        <h6 className="title"><span>Billed monthly</span></h6>
        <h2 className="text-white text-uppercase plan-name">{plan}</h2>
        <h1 className="text-white bill title"><span>${bill}</span></h1>
        <ul type="none" className="text-white my-3">
            <li>Mobile Optimized</li>
            <li>Best Hosting</li>
            <li>Free Custom</li>
            <li>Outstanding</li>
            <li>Happy Customers</li>
        </ul>
        <button className="purchase my-3">Purchase</button>
    </main>
}

const Offers = () => {
    return (
        <main className="my-5">
            <h1 className="title"><span>Choose the offer</span> that suits you</h1>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ducimus eveniet error nemo asperiores soluta illo animi alias doloribus debitis.</p>
            <div className="row w-100 m-0">
                <div className="col-md-1"></div>
                <div className="col-md-10 d-flex flex-wrap align-items-center justify-content-center">
                    <Plan image={Image1} background={'Icon1'} plan={'Advance plan'} bill={'140'} />
                    <Plan image={Image2} background={'Icon2'} plan={'Basic plan'} bill={'120'} />
                    <Plan image={Image3} background={'Icon3'} plan={'beginners'} bill={'90'} />
                </div>
                <div className="col-md-1"></div>
            </div>
        </main>
    );
};

export default Offers;