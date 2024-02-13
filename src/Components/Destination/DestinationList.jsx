import React from "react";
import { Link } from "react-router-dom";

const DestinationList = ({
  destination,
  index,
  handleDestinationClick,
  activeIndex,
}) => {
  return (
    <li
      className="color pointer position-destination"
      key={index}
      onClick={() => handleDestinationClick(index)}
    >
      <a
        className={`navbar-brand tarjet-destination ${
          index === activeIndex ? "active-destination" : ""
        }`}
      >
        {destination.name.toUpperCase()}
      </a>
    </li>
  );
};

export default DestinationList;
