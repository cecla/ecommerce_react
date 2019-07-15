import React from "react";

const ImageTextComponent = ({ image, header, text }) => (
  <div className="imagetext">
    <img src={image} />
    <div className="imagetext__content">
      <h3>{header}</h3>
      <p>{text}</p>
    </div>
  </div>
);

export default ImageTextComponent;
