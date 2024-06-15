import React, { useContext, useState } from "react";
import "./FoodDisplay.css";
import { createContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

function FoodDisplay(props) {
  const { food_list } = useContext(StoreContext);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFoodType, setSelectedFoodType] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSelect = (e) => {
    setSelectedFoodType(e.target.value);
  };


  const filteredFoodList = food_list.filter((item) => {
    const matchesSearchQuery = item.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const matchesFoodType =
      selectedFoodType === "" || item.name.toLowerCase().includes(selectedFoodType.toLowerCase());
    return matchesSearchQuery && matchesFoodType;
  });

  return (
    <div className="food_list_items" id="food_list_items">
      <div className="food_list_item_header">
        <h2>Popular food</h2>
        <input
          onChange={handleSearch}
          id="food_list_item_header_input"
          type="text"
          placeholder="search food"
        />
        <select name="foodItems" id="foodItems" value={selectedFoodType} onChange={handleSelect}>
          <option value="">Most Relevent Food</option>
          <option value="Pasta">Pasta</option>
          <option value="Cream">Cream</option>
          <option value="Rolls">Rolls</option>
        </select>
      </div>

      <div className="food_list_item_view">
        {filteredFoodList.map((item, index) => {
          return (
            <FoodItem
              key={index}
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default FoodDisplay;
