import React from "react";
import { Link } from "react-router-dom";

const DestinationList = ({ destinations, handleDestinationClick }) => {
  return (
    <ul className="d-flex gap-2">
      {destinations.map((destination, index) => (
        <li
          className="color pointer"
          key={index}
          onClick={() => handleDestinationClick(index)}
        >
          <Link className="navbar-brand">{destination.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default DestinationList;
