import React from "react";
import { useState } from "react";
import "./Crew.css";
import crews from "../../data.json";
import douglas from "../../../public/assets/crew/image-douglas-hurley.png";
import { Link, NavLink } from "react-router-dom";

const Crew = () => {
  const { crew } = crews;
  const [selectedCrew, setSelectedCrew] = useState(crew[0]);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleCrew = (index) => {
    setSelectedCrew(crew[index]);
    setActiveIndex(index);
  };
  return (
    <div className="crew-component d-flex align-items-center">
      <section className="section-crew container">
        <div className="row">
          <div className="col-12 col-md-6 color text-center text-md-start">
            <h2 className="title-crew text-center text-md-start mb-5">
              02 MEET YOUR CREW
            </h2>
            <h6 className="mb-3">{selectedCrew.role.toUpperCase()}</h6>
            <h4 className="mb-4">{selectedCrew.name.toUpperCase()}</h4>
            <p
              className="mb-5"
              style={{ minHeight: "96px", overflow: "hidden" }}
            >
              {selectedCrew.bio}
            </p>
            <ul className="d-flex gap-4 flex-wrap p-0 justify-content-center">
              {crew.map((crew, index) => (
                <li
                  className="position-crew cursor-crew"
                  key={index}
                  onClick={() => handleCrew(index)}
                >
                  <a
                    className={`estilo ${
                      index === activeIndex ? "active-crew" : ""
                    }`}
                  >
                    {crew.name}
                  </a>
                </li>
              ))}
              <li>
                <a href=""></a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-6 d-flex flex-column align-items-center">
            <img
              src={selectedCrew.images.png}
              alt={selectedCrew.name}
              style={{ width: "90%", maxHeight: "600px" }}
              className="img-size"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Crew;
