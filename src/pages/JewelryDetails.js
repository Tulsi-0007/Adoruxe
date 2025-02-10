// pages/JewelryDetails.js
import { useParams } from 'react-router-dom';
import { useJewelry } from '../JewelryContext';
import jewelryItems from '../data/jewelryItems';
import { Link } from 'react-router-dom';
import '../App.css';

const JewelryDetails = () => {
  const { id } = useParams();
  const { addToCart, addToFavorites } = useJewelry();
  const item = jewelryItems.find(item => item.id === parseInt(id));

  return (
    <div className="details-container">
      <img src={item.image} alt={item.name} />
      <div className="product-info">
        <h2>{item.name}</h2>
        <p className="price">${item.price}</p>
        <p>{item.description}</p>
        <p><strong>Material:</strong> {item.material}</p>
        <p><strong>Stone Type:</strong> {item.stone}</p>
        <div className="button-group">
          <button onClick={() => addToCart(item)}>Add to Cart</button>
          <button onClick={() => addToFavorites(item)}>Add to Favorites</button>
        </div>
        <Link to={`/${item.category}`} className="back-link">
          &larr; Back to {item.category}
        </Link>
      </div>
    </div>
  );
};

export default JewelryDetails;