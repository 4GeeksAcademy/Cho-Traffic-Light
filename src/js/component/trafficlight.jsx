import React, { useState } from "react";
const TrafficLight = () => {
  const [activeLight, setActiveLight] = useState(null);
  const activeClick = (color) => {
    setActiveLight(color);
  };
  return (
    <div className="container">
      <div className="trafficTop"></div>
      <div className="trafficBody rounded">
        <div
          className={`redLight ${activeLight === "Red" ? "active" : ""}`}
          onClick={() => activeClick("Red")}
        ></div>
        <div
          className={`yellowLight ${activeLight === "Yellow" ? "active" : ""}`}
          onClick={() => activeClick("Yellow")}
        ></div>
        <div
          className={`greenLight ${activeLight === "Green" ? "active" : ""}`}
          onClick={() => activeClick("Green")}
        ></div>
      </div>
    </div>
  );
};
export default TrafficLight;
