import React from "react";

const TechnologyList = ({ index, eventClick, activeIndex }) => {
  return (
    <div
      key={index}
      className={`border cursor px-3 d-flex justify-content-center ${
        index === activeIndex ? "active" : ""
      }`}
      onClick={() => eventClick(index)}
    >
      {index + 1}
    </div>
  );
};

export default TechnologyList;
