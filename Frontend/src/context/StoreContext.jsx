import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const url = "http://localhost:4000";
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [food_list, setFoodList] = useState([]);
  const [cartItem, setCartItem] = useState(() => {
    const saved = localStorage.getItem("cartItem");
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cartItem));
  }, [cartItem]);

  const fetchFoodList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      if (response.data.success) setFoodList(response.data.data);
    } catch (err) {
      console.error("Error fetching food list:", err);
    }
  };

  const loadCartData = async (tokenValue) => {
    try {
      const res = await axios.post(
        `${url}/api/cart/get`,
        {},
        { headers: { token: tokenValue } },
      );

      console.log(res.data);

      if (res.data.success) {
        setCartItem(res.data.cartData);
      }
    } catch (err) {
      console.error("Cart fetch error:", err);
    }
  };

  const addToCart = async (itemId) => {
    setCartItem((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
    if (token) {
      try {
        await axios.post(
          `${url}/api/cart/add`,
          { itemId },
          { headers: { token } },
        );
      } catch (err) {
        console.error("Cart add error:", err);
      }
    }
  };

  const removeFromCart = async (itemId) => {
    setCartItem((prev) => {
      const updated = { ...prev };
      if (updated[itemId] > 1) updated[itemId]--;
      else delete updated[itemId];
      return updated;
    });
    if (token) {
      try {
        await axios.post(
          `${url}/api/cart/remove`,
          { itemId },
          { headers: { token } },
        );
      } catch (err) {
        console.error("Cart remove error:", err);
      }
    }
  };

  const getTotalCartAmount = () => {
    let total = 0;
    for (const id in cartItem) {
      const item = food_list.find((f) => f._id === id);
      if (item) total += item.price * cartItem[id];
    }
    return total;
  };

  useEffect(() => {
    fetchFoodList();
    if (token) loadCartData(token);
  }, [token]);

  const contextValue = {
    food_list,
    cartItem,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
