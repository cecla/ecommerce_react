import React from "react";

const NavigationComponent = ({ openMenu, active }) => (
  <div className="navigation">
    <span
      className={`${active === "shirts" ? "is-active" : ""}`}
      onClick={() => openMenu("shirts")}
    >
      shirts
    </span>
    <span
      className={`${active === "accessories" ? "is-active" : ""}`}
      onClick={() => openMenu("accessories")}
    >
      accessories
    </span>
    <span
      className={`${active === "our world" ? "is-active" : ""}`}
      onClick={() => openMenu("ourWorld")}
    >
      our world
    </span>
  </div>
);

export default NavigationComponent;
