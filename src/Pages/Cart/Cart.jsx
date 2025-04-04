import  { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';

const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);

  return (
    <div className="cart">
      <div className="cart-items">
        {/* Cart Header */}
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

        {/* Loop through food_list and display items in cart */}
        {food_list.map((item) => {
          const cartItem = cartItems[item._id]; // Get item from cartItems by _id
          
          if (cartItem && cartItem.quantity > 0) {
            return (
              <div key={item._id} className="cart-items-title cart-items-item">
                {/* Item details */}
                <p><img src={item.image} alt={item.name} className="cart-item-image" /></p>
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItem.quantity}</p>
                <p>${(cartItem.quantity * item.price).toFixed(2)}</p>
                
                {/* Remove button */}
                <p>
                  <button onClick={() => removeFromCart(item)}>Remove</button>
                </p>
              </div>
            );
          }
          
          return null;
        })}
      </div>
    </div>
  );
};

export default Cart;
