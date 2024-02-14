import React from "react";
import { useState } from "react";
import data from "../../data.json";
import DestinationList from "./DestinationList";
import luna from "/src/assets/destination/image-moon.png";
import mars from "/src/assets/destination/image-mars.png";
import europa from "/src/assets/destination/image-europa.png";
import titan from "/src/assets/destination/image-titan.png";
import "./Destination.css";

const Destiantion = () => {
  const { destinations } = data;

  const [selectedDestination, setSelectedDestination] = useState(
    destinations[0]
  );

  const [activeIndex, setActiveIndex] = useState(0);

  const handleDestinationClick = (index) => {
    setSelectedDestination(destinations[index]);
    setActiveIndex(index);
  };

  return (
    <div className="destination container-fluid d-flex justify-content-center align-items-end gap-5">
      <article className="row justify-content-center gap-5 left">
        <div className="col-12 col-lg-4 d-flex flex-column align-items-center">
          <h1 className="title-destination mb-5 text-start">
            <span className="num-color-destination">01</span> PICK YOUR
            DESTINATION
          </h1>
          <figure className="container-img">
            <img
              src={selectedDestination.images.png}
              alt={selectedDestination.name}
              className="img-destination"
            />
          </figure>
        </div>
        <div className="col-12 col-lg-4 color mb-4 right">
          <ul className="d-flex gap-2">
            {destinations.map((items, index) => (
              <DestinationList
                key={index}
                destination={items}
                index={index}
                handleDestinationClick={handleDestinationClick}
                activeIndex={activeIndex}
              />
            ))}
          </ul>
          <h2 className="title-destination_2 color px-4">
            {selectedDestination.name.toUpperCase()}
          </h2>
          <p className="px-4">{selectedDestination.description}</p>
          <hr />
          <div className="d-flex gap-5 px-4">
            <article>
              <p>AVG. DISTANCE</p>
              <h5>{selectedDestination.distance}</h5>
            </article>
            <article>
              <p>EST. TRAVEL TIME</p>
              <h5>{selectedDestination.travel}</h5>
            </article>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Destiantion;
