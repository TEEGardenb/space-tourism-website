import React from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import Destination from "../Destination/Destination";
import Crew from "../Crew/Crew";
import Technology from "../Technology/Technology";

const MyRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Destination" element={<Destination />} />
        <Route path="/Crew" element={<Crew />} />
        <Route path="/Technology" element={<Technology />} />
      </Routes>
    </div>
  );
};

export default MyRoutes;
