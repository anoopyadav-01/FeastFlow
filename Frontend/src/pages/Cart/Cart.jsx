import "./Mcc.css";
import React, { useContext } from "react";

import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const { cartItem, food_list, removeFromCart, getTotalCartAmount, url } =
    useContext(StoreContext);
  console.log("food_list:", food_list);
  console.log("cartItem:", cartItem);
  const navigate = useNavigate();
  return (
    <div className="carts">
      <div className="carts-items">
        <div className="carts-items-title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list?.map((item, index) => {
          if (cartItem?.[item._id] > 0) {
            return (
              <div key={item._id}>
                <div
                  key={item._id || index}
                  className="carts-items-title carts-items-item"
                >
                  <img src={`${url}/images/${item.image}`} alt={item.name} />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItem[item._id]}</p>
                  <p>${item.price * cartItem[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="carts-bottom">
        <div className="carts-total">
          <h2>Cart Total</h2>
          <div>
            <div className="carts-total-details" id="">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="carts-total-details" id="">
              <p>Delivery</p>
              <p>${2}</p>
            </div>
            <hr />
            <div className="carts-total-details" id="">
              <p>Total</p>
              <p>${getTotalCartAmount() + 2}</p>
            </div>
          </div>
          <button onClick={() => navigate("/order")}>
            Proceed to checkout
          </button>
        </div>
        <div className="carts-promocode">
          <p>If you have a promo code, Ente it here</p>

          <div className="carts-promocode-input">
            <input type="text" placeholder="Promo Code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
