import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Product from './pages/Product';
import AnimeDetails from './components/AnimeDetails';
import Navbar from './components/Navbar';
import Favorites from './pages/Favorites';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/character/:id" element={<AnimeDetails />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
}

export default App;
