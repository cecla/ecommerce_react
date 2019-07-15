import React from "react";

const LinksComponent = ({ links }) => (
  <div className="links">
    {links && links.map(({ link, linkText }) => <a href={link}>{linkText}</a>)}
  </div>
);

export default LinksComponent;
