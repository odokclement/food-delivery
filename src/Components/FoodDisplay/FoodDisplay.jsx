import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-diplay" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list?.map((item, index) => {
          // Ensure that each item has a unique key
          const uniqueKey = item.id || index; // Fallback to index if no id is available

          if (category === "All" || category === item.category) {
            return <FoodItem key={uniqueKey} item={item} />;
          }

          return null;
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
