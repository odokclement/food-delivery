import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./FoodItem.css";
import { assets } from "../../assets/assets";

const FoodItem = ({ item }) => {
  const { addToCart, removeFromCart, cartItems } = useContext(StoreContext);

  const handleAddToCart = () => {
    addToCart(item);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(item);
  };

  const itemInCart = cartItems[item._id]; // Check if item is in cart

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img src={item.image} alt={item.name} className="food-item-image" />
        
        {/* Plus sign for adding */}
        {!itemInCart ? (
          <div className="add" onClick={handleAddToCart}>
            +
          </div>
        ) : null}
        
        {/* Counter, visible only when itemInCart */}
        <div className={`food-item-counter ${itemInCart ? "show" : ""}`}>
          <img
            src={assets.remove_icon_red}
            alt="Remove"
            onClick={handleRemoveFromCart}
          />
          <span>{itemInCart ? itemInCart.quantity : 0}</span>
          <img
            src={assets.add_icon_white}
            alt="Add"
            onClick={handleAddToCart}
          />
        </div>
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{item.name}</p>
          {/* Rating always visible */}
          <img src={assets.rating_starts} alt="Rating" />
        </div>
        <p className="food-item-desc">{item.description}</p>
        <p className="food-item-price">${item.price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
