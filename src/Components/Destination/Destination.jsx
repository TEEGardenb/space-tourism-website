import React from "react";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import data from "../../data.json";
import "./Destination.css";
import DestinationList from "./DestinationList";

const Destiantion = () => {
  const { destinations } = data;

  const [selectedDestination, setSelectedDestination] = useState(
    destinations[0]
  );

  const handleDestinationClick = (index) => {
    setSelectedDestination(destinations[index]);
  };

  return (
    <div className="destination container-fluid d-flex justify-content-center align-items-end gap-5">
      <article className="row justify-content-center gap-5 left">
        <div className="col-12 col-lg-4 d-flex flex-column align-items-center">
          <h1 className="title-destination mb-5 text-start">
            01 PICK YOUR DESTINATION
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
              />
            ))}
          </ul>
          <h2 className="title-destination_2 color px-4">
            {selectedDestination.name}
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
