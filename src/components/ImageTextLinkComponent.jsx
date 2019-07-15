import React from "react";

const ImageTextLinkComponent = ({ image, header, text, link, linkText }) => (
  <div className="imagetextlink">
    <img src={image} />
    <div className="imagetextlink__content">
      <h3>{header}</h3>
      <p>{text}</p>
      <a href={link}>
        <div className="link-button">{linkText}</div>
      </a>
    </div>
  </div>
);

export default ImageTextLinkComponent;
