import React, { useState } from "react";
import "./Technology.css";
import technologys from "../../data.json";
import TechnologyList from "./TechnologyList";

const Technology = () => {
  const { technology } = technologys;

  const [SelectedTechnology, setSelectedTechnology] = useState(technology[0]);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleTechnologyClick = (index) => {
    setSelectedTechnology(technology[index]);
    setActiveIndex(index);
  };
  return (
    <div className="technology-component d-flex align-items-center">
      <section className="section-technology container">
        <div className="row flex-column-reverse flex-md-row">
          <article className="col-12 col-md-6 color d-flex flex-column flex-md-row align-items-center align-items-md-start">
            <div className="number-container number-size d-flex flex-row flex-md-column gap-4 gap-md-4 mb-3 me-md-5 justify-content-center">
              {technology.map((technologys, index) => (
                <TechnologyList
                  key={index}
                  index={index}
                  eventClick={handleTechnologyClick}
                  activeIndex={activeIndex}
                />
              ))}
            </div>
            <div>
              <span className="text-center">THE TERMINOLOGY...</span>
              <h4 className="title-technology mb-4">
                {SelectedTechnology.name.toUpperCase()}
              </h4>
              <p
                className="width-description-tech mb-4"
                style={{ minHeight: "168px" }}
              >
                {SelectedTechnology.description}
              </p>
            </div>
          </article>
          <div className="col-12 col-md-6 mb-2 mb-md-0">
            <figure className="img-container">
              <img
                src={SelectedTechnology.images.portrait}
                alt=""
                style={{ width: "100%" }}
              />
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;
