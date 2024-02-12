import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home container-fluid d-flex flex-column justify-content-center align-items-center">
      <div className="position row gap-5 gap-lg-0">
        <article className="general-container col-lg-7 d-flex flex-column justify-content-center align-items-center">
          <div className="container-card">
            <p className="subtitle subtitle-2 m-auto m-lg-0">
              SO, YOU WANT TO TRAVEL TO
            </p>
            <h1 className="title m-auto m-lg-0">SPACE</h1>
            <p className="paragraph subtitle text-center text-lg-start mt-4">
              Let´s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we´ll give you a truly out of
              this world experience!
            </p>
          </div>
        </article>
        <div className="circle-container col-lg-5 d-flex justify-content-center align-items-center">
          <div className="circle d-flex flex-column justify-content-center align-items-center">
            <p className="m-0 explore-font">EXPLORE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
