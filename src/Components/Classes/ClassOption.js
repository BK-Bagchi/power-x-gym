import React from 'react'
import Gym1 from '../../Resources/Image&Icon/victor-freitas-546919-unsplash.png'
import Gym2 from '../../Resources/Image&Icon/baylee-gramling-5m4Z14SDL80-unsplash.jpg'
import Gym3 from '../../Resources/Image&Icon/humphrey-muleba-LOA2mTj1vhc-unsplash.jpg'
import Gym4 from '../../Resources/Image&Icon/alora-griffiths-TuzrzArccvc-unsplash.jpg'
import Gym5 from '../../Resources/Image&Icon/john-fornander-FIu48iuo_4g-unsplash.jpg'
import Gym6 from '../../Resources/Image&Icon/sven-mieke-Lx_GDv7VA9M-unsplash.jpg'

const ClassItem = ({ title, image, setClassName }) => {
    return <main className="position-relative">
        <img className="w-100 h-100" src={image} alt="Gym Pic" />
        <div className="tag" onClick={() => setClassName(title)}>
            <p className="m-0 text-uppercase text-right">{title}</p>
        </div>
    </main>
}

const ClassOption = ({ setClassName }) => {
    return (
        <main className="class-option row w-100 m-0 my-5">
            <div className="col-md-1"></div>
            <div className="col-md-10">
                <div className="class d-flex flex-wrap align-items-center justify-content-center">
                    <ClassItem title={'Psycho training'} image={Gym1} setClassName={setClassName} />
                    <ClassItem title={'Self Defense'} image={Gym2} setClassName={setClassName} />
                    <ClassItem title={'Advance gym'} image={Gym3} setClassName={setClassName} />
                    <ClassItem title={'Cardio training'} image={Gym4} setClassName={setClassName} />
                    <ClassItem title={'Strength training'} image={Gym5} setClassName={setClassName} />
                    <ClassItem title={'Psycho training'} image={Gym6} setClassName={setClassName} />
                </div>
            </div>
            <div className="col-md-1"></div>
        </main>
    );
};

export default ClassOption;