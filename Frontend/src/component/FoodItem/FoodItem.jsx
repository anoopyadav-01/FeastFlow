import { assets } from "../../assets/assets";
import "./FoodItem.css";
import "../../assets/assets";
import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

export const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItem, addToCart, removeFromCart, url } = useContext(StoreContext);

  const itemCount = cartItem[id] || 0;

  return (
    <div className="food-item">
      <div className="food-item-container">
        <img
          src={url + "/images/" + image}
          alt={name}
          className="food-item-image"
        />

        <img
          className="add"
          onClick={() => addToCart(id)}
          src={assets.add_icon_green}
          alt="add"
        />

        {itemCount > 0 && (
          <>
            <span className="change">{itemCount}</span>
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt="remove"
              className="remove"
            />
          </>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-des">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};
