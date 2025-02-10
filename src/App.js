// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { JewelryProvider } from './JewelryContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import JewelryCategory from './pages/JewelryCategory';
// import Earrings from './pages/Earrings';
// import Necklace from './pages/Necklace';
// import Bracelet from './pages/Bracelet';
// import Ring from './pages/Ring';
import JewelryDetails from './pages/JewelryDetails';
import Cart from './pages/Cart';
// import Favorites from './pages/Favorites';
import Login from './pages/Login';
import './App.css';

function App() {
  return (
    <JewelryProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:category" element={<JewelryCategory />} />
          <Route path="/jewelry/:id" element={<JewelryDetails />} />
          {/* <Route path="/earrings" element={<Earrings />} />
          <Route path="/necklace" element={<Necklace />} />
          <Route path="/bracelet" element={<Bracelet />} />
          <Route path="/ring" element={<Ring />} /> */}
          <Route path="/jewelry/:id" element={<JewelryDetails />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/favorites" element={<Favorites />} /> */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </JewelryProvider>
  );
}

export default App;