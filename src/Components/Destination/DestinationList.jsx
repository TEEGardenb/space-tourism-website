import React from "react";
import { Link } from "react-router-dom";

const DestinationList = ({ destination, index, handleDestinationClick }) => {
  return (
    <li
      className="color pointer"
      key={index}
      onClick={() => handleDestinationClick(index)}
    >
      <Link className="navbar-brand">{destination.name}</Link>
    </li>
  );
};

export default DestinationList;
