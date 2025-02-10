// components/Navbar.js
import { Link } from 'react-router-dom';
import { useJewelry } from '../JewelryContext';
import { FaCartPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import './navbar.css';

const Navbar = () => {
  const { cart, favorites } = useJewelry();

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="https://previews.123rf.com/images/wikagraphic/wikagraphic2102/wikagraphic210204065/164069095-initial-logo-letter-aj-with-golden-color-with-ornaments-and-classic-pattern-vector-logo-for.jpg" alt="logo" className="logo" />
        <Link to="/" className="website-name">Adoruxe Jewellers</Link>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/earrings">Earrings</Link>
        <Link to="/necklace">Necklace</Link>
        <Link to="/bracelet">Bracelet</Link>
        <Link to="/ring">Ring</Link>
        <Link to="/login">Login/Sign Up</Link>
        <Link to="/cart"><FaCartPlus /> ({cart.length})</Link>
        <Link to="/favorites"><FaHeart /> ({favorites.length})</Link>
      </div>
    </nav>
  );
};

export default Navbar;