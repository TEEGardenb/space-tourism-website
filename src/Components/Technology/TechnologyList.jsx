import React from "react";

const TechnologyList = ({ index, eventClick, activeIndex }) => {
  return (
    <div
      key={index}
      className={`border cursor d-flex justify-content-center ${
        index === activeIndex ? "active" : ""
      }`}
      onClick={() => eventClick(index)}
    >
      <span className="size-index">{index + 1}</span>
    </div>
  );
};

export default TechnologyList;
