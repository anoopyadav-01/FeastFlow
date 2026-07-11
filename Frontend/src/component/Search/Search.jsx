import React, { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import { FoodItem } from "../FoodItem/FoodItem";

const Search = () => {
  const { food_list } = useContext(StoreContext);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = food_list.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="search-page">
      <h2>Search Products</h2>

      <input
        type="text"
        placeholder="Search food..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="food-display-list">
        {filteredProducts.map((item) => (
          <FoodItem
            key={item._id}
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
