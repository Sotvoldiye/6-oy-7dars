import React, { useState } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import YourCard from "./YourCard";

function Desktop({ d }) {
  const [product, setProduct] = useState(false);
  const [btnProduct, setBtnProduct] = useState(true);
  const [isSelected, setIsSelected] = useState(false);

  const imgs = d.image;

  const obj = {
    name: d.name,
    price: d.price,
  };

  return (
    <div className="desktop">
      <div className="image-container">
        <img
          src={imgs.desktop}
          style={{
            border: isSelected ? "2px solid #c7380f" : "2px solid transparent",
          }}
          alt="Product"
          className="product-image"
        />
        {btnProduct && (
          <button
            key={d.id}
            onClick={() => {
              setBtnProduct(false);
              setProduct(true), setIsSelected(!isSelected);
            }}
            className="add-to-cart-btn"
          >
            <img className="cart-img" src="./images/icon-add-to-cart.svg" />
            Add to Cart
          </button>
        )}
        {product && (
          <div className="">
            {" "}
            <div className="card-img">
              <button className="button-icon decrement">
                <img src="./images/icon-decrement-quantity.svg" alt="" />
                <div className=""></div>{" "}
              </button>
              <p>4</p>
              <button className="button-icon increment">
                <img src="./images/icon-increment-quantity.svg" alt="" />
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="description-card">
        <h3 className="product-title">{d.category}</h3>
        <p className="product-name">{d.name}</p>
        <p className="product-price">${d.price}</p>
      </div>
    </div>
  );
}

export default Desktop;
