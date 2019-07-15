import React from "react";

const NavigationComponent = ({ openMenu, active }) => (
  <div className="navigation">
    <span
      className={`${active === "shirts" ? "is-active" : ""}`}
      onClick={() => openMenu()}
    >
      shirts
    </span>
    <span className={`${active === "accessories" ? "is-active" : ""}`}>
      accessories
    </span>
    <span className={`${active === "our world" ? "is-active" : ""}`}>
      our world
    </span>
  </div>
);

export default NavigationComponent;
