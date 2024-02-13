import React from "react";

const CrewList = ({ crew, index, handleCrewClick, activeIndex }) => {
  return (
    <li
      className="position-crew cursor-crew"
      onClick={() => handleCrewClick(index)}
    >
      <a className={`estilo ${index === activeIndex ? "active-crew" : ""}`}>
        {crew.name}
      </a>
    </li>
  );
};

export default CrewList;
