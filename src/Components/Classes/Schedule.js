import React from 'react'
import Img from '../../Resources/Image&Icon/humphrey-muleba-LOA2mTj1vhc-unsplash.jpg'

const Schedule = () => {
    return (
        <main className="schedule row m-0 w-100 my-5">
            <div className="col-md-1"></div>
            <div className="col-md-5 my-3">
                <img className="img-fluid" src={Img} alt="Img" />
                <p className="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sunt ipsa a ex. Dolores illo, minima animi quaerat unde laboriosam ipsam magni cumque nihil error expedita fugiat consectetur, eum laborum possimus esse nesciunt doloremque impedit aut nulla quod quam magnam quis? Ullam nihil harum perferendis ipsa explicabo fugiat reprehenderit laboriosam ratione porro atque nemo aliquam repellat, fugit, animi delectus eaque veritatis. Deleniti explicabo doloremque, repudiandae possimus ipsam debitis ducimus quaerat.</p>
                <form>
                    <input type="checkbox" checked /><label className="ml-3 text-capitalize">Having similar shapely things</label><br />
                    <input type="checkbox" checked /><label className="ml-3 text-capitalize">Getting stronger</label><br />
                    <input type="checkbox" checked /><label className="ml-3 text-capitalize">Increased metabolism</label><br />
                    <input type="checkbox" checked /><label className="ml-3 text-capitalize">Increased muscular endurance</label><br />
                    <input type="checkbox" checked /><label className="ml-3 text-capitalize">Maximum results in less time</label><br />
                    <input type="checkbox" checked /><label className="ml-3 text-capitalize">Firm hips and tummy</label><br />
                </form>
            </div>
            <div className="col-md-5 my-3">
                <h1 className="title text-uppercase"><span>Class</span> schedule</h1>
                <div className="d-flex flex-wrap justify-content-center">
                    <div className="day">
                        <h5>Monday</h5>
                        <p>8:00 AM-9:00 AM</p>
                    </div>
                    <div className="day">
                        <h5>Tuesday</h5>
                        <p>10:00 AM-11:00 AM</p>
                    </div>
                    <div className="day">
                        <h5>Wednesday</h5>
                        <p>7:00 AM-8:00 AM</p>
                    </div>
                    <div className="day">
                        <h5>Thursday</h5>
                        <p>5:00 PM-6:00 PM</p>
                    </div>
                    <div className="day">
                        <h5>Friday</h5>
                        <p>6:00 AM-7:00 AM</p>
                    </div>
                    <div className="day">
                        <h5>Saturday</h5>
                        <p>7:00 PM-8:00 PM</p>
                    </div>
                </div>
            </div>
            <button className="join mx-auto mt-4">Join us</button>
            <div className="col-md-1"></div>
        </main>
    );
};

export default Schedule;