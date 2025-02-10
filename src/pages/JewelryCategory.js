// pages/JewelryCategory.js
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import jewelryItems from '../data/jewelryItems';
import '../App.css';

const JewelryCategory = () => {
  const { category } = useParams();
  const categoryItems = jewelryItems.filter(item => item.category === category);

  return (
    <div className="page-container">
      <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
      <div className="items-grid">
        {categoryItems.map(item => (
          <div key={item.id} className="item-card">
            <Link to={`/jewelry/${item.id}`}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>${item.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JewelryCategory;