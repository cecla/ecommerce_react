/*
  Main component iterating over imagetextlinks, imagetexts and products and render those components
*/

import React from "react";
import ImageTextLinkComponent from "./ImageTextLinkComponent";
import ImageTextComponent from "./ImageTextComponent";
import ProductComponent from "./ProductComponent";

const MainComponent = ({ imagetexts, products, imagetextlinks }) => (
  <div className="main">
    {imagetextlinks &&
      imagetextlinks.map(content => (
        <ImageTextLinkComponent key={content.id} {...content} />
      ))}

    <div className="main__imagetext">
      {imagetexts &&
        imagetexts.map(content => (
          <ImageTextComponent key={content.id} {...content} />
        ))}
    </div>

    <div className="main__products">
      {products &&
        products.map(product => (
          <ProductComponent key={product.id} {...product} />
        ))}
    </div>
  </div>
);

export default MainComponent;
