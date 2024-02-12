import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import NavBar from "./Components/Header/NavBar";
import MyRoutes from "./Components/MyRoutes/MyRoutes";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main className="main">
        <MyRoutes />
      </main>
    </div>
  );
}

export default App;
