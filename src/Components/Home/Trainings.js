import React from 'react'
import Img1 from '../../Resources/Image&Icon/bruce-mars-gJtDg6WfMlQ-unsplash.png'
import Img2 from '../../Resources/Image&Icon/arthur-edelman-qfjuh4OLdxw-unsplash.jpg'

const Trainings = () => {
    return (
        <section className="trainings my-5 py-5 container">
            <h1 className="title mb-5">Trainings <span>Programs</span></h1>
            <div className="row w-100 m-0">
                <div className="col-md-6">
                    <main className="position-relative">
                        <img className="card-img" src={Img1} alt="Img" />
                        <div className="training-tag p-3">
                            <p className="m-0 text-right">Training Session</p>
                        </div>
                    </main>
                </div>
                <div className="col-md-6">
                    <main className="position-relative">
                        <img className="card-img" src={Img2} alt="Img" />
                        <div className="training-tag p-3">
                            <p className="m-0 text-right">Training Session</p>
                        </div>
                    </main>
                </div>
            </div>
            <p className="m-3 font-weight-bold see-more">See All</p>
        </section>
    );
};

export default Trainings;