import React from "react";
import { NavLink } from "react-router-dom";
import videobg from '../src/assests/video-2.mp4'
const Home = () => {
  return (
    <div className="App">
    <h1>Welcome</h1>
      <video src={videobg} autoPlay loop muted></video>
      
      <section id="header" className="">
        <div className="container-fluid nav_bag" >
          <div className="row">
            <div className="manage col-10 mx-auto">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                <h1> Find your suitable Projects with <strong> Join Differ </strong></h1>
                <h3 className="my-3">
                  You can Find Or Post Projects to Advance your skills with all Talented Developers
                </h3>
                <div className="mt-3">
                  <NavLink to="./Post" className="btn-get-started" ><span>Get Started</span></NavLink>
                </div>
              </div>
            </div>
          </div>
          <div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;