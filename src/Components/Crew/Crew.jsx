import React from "react";
import { useState } from "react";
import "./Crew.css";
import crews from "../../data.json";
import douglas from "../../../public/assets/crew/image-douglas-hurley.png";
import { Link, NavLink } from "react-router-dom";
import CrewList from "./CrewList";

const Crew = () => {
  const { crew } = crews;
  const [selectedCrew, setSelectedCrew] = useState(crew[0]);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleCrewClick = (index) => {
    setSelectedCrew(crew[index]);
    setActiveIndex(index);
  };
  return (
    <div className="crew-component d-flex align-items-center">
      <section className="section-crew container">
        <div className="row">
          <div className="col-12 col-md-6 color text-center text-md-start">
            <h2 className="title-crew text-center text-md-start mb-5">
              <span className="light-color-crew">02</span> MEET YOUR CREW
            </h2>
            <h6 className="light-color-crew role-size mb-3">
              {selectedCrew.role.toUpperCase()}
            </h6>
            <h4 className="name-size mb-4">
              {selectedCrew.name.toUpperCase()}
            </h4>
            <p
              className="color-bio-crew width-bio-crew mb-5"
              style={{ minHeight: "120px", overflow: "hidden" }}
            >
              {selectedCrew.bio}
            </p>
            <ul className="d-flex gap-4 flex-wrap p-0 justify-content-center">
              {crew.map((crew, index) => (
                <CrewList
                  key={index}
                  crew={crew}
                  handleCrewClick={handleCrewClick}
                  index={index}
                  activeIndex={activeIndex}
                />
              ))}
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