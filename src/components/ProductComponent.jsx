import React from "react";

const ProductComponent = ({ image, name, type, price }) => (
  <div className="product">
    <img src={image} />
    <div>
      <h4>{name}</h4>
      <p>
        {type} / {price} SEK
      </p>
    </div>
  </div>
);

export default ProductComponent;
