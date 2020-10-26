import React from 'react'
import Icon1 from '../../Resources/Image&Icon/Group 80.png'
import Icon2 from '../../Resources/Image&Icon/Group 81.png'
import Icon3 from '../../Resources/Image&Icon/Group 82.png'

const Card = ({ name, image, background }) => {
    return <div className="col-md-4 holder">
        <main className={`d-flex flex-column align-items-center justify-content-center ${background}`}>
            <img src={image} alt="Icon" />
            <h1>{name}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat unde facere quia et rerum repellendus labore doloribus consequuntur aperiam nostrum?</p>
        </main>
    </div>
}

const Cards = () => {
    return (
        <section className="info-cards container my-5">
            <div className="row m-0 w-100 py-5">
                <Card name={'Progression'} image={Icon1} background={'Icon1'} />
                <Card name={'Workout'} image={Icon2} background={'Icon2'} />
                <Card name={'Nutrition'} image={Icon3} background={'Icon3'} />
            </div>
        </section>
    );
};

export default Cards;