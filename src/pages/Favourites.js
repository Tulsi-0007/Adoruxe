// pages/Favorites.js
import { useJewelry } from '../JewelryContext';

const Favorites = () => {
  const { favorites, removeFromFavorites } = useJewelry();

  return (
    <div className="page-container">
      <h2>Your Favorites</h2>
      <div className="items-grid">
        {favorites.map(item => (
          <div key={item.id} className="item-card">
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <button onClick={() => removeFromFavorites(item.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;