import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import Destination from "../Destination/Destination";
import Crew from "../Crew/Crew";
import Technology from "../Technology/Technology";

export const baseUrl = "/space-tourism-website";

const MyRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path={`${baseUrl}`} element={<HomePage />} />
        <Route path={`${baseUrl}/Destination`} element={<Destination />} />
        <Route path={`${baseUrl}/Crew`} element={<Crew />} />
        <Route path={`${baseUrl}/Technology`} element={<Technology />} />
      </Routes>
    </div>
  );
};

export default MyRoutes;
