// pages/Cart.js
import { useJewelry } from '../JewelryContext';

const Cart = () => {
  const { cart, removeFromCart } = useJewelry();

  return (
    <div className="page-container">
      <h2>Your Cart</h2>
      <div className="items-grid">
        {cart.map(item => (
          <div key={item.id} className="item-card">
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;