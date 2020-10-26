import React from 'react'
import Img1 from '../../Resources/Image&Icon/Group 87.png'
import Img2 from '../../Resources/Image&Icon/Group 88.png'
import Img3 from '../../Resources/Image&Icon/gift-2.png'
const Card = ({ name, image }) => {
    return <div className="col-md-4 holder py-4">
        <main className="d-flex flex-column align-items-center justify-content-center p-4">
            <img className="w-25 m" src={image} alt="Icon" />
            <h4 className="text-center text-uppercase mt-3">{name}</h4>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat unde facere quia et rerum repellendus labore doloribus consequuntur aperiam nostrum?</p>
        </main>
    </div>
}

const WhyChooseUs = () => {
    return (
        <section className="why-choose-us container my-5">
            <h1 className="title text-uppercase text-center"><span>Why</span> choose us</h1>
            <div className="row w-100 m-0">
                <Card name={'Free Fitness Training'} image={Img1} />
                <Card name={'Tons of cardio & strength'} image={Img2} />
                <Card name={'No commitment memberships'} image={Img3} />
            </div>
        </section>
    );
};

export default WhyChooseUs;