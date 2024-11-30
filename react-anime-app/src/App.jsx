import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Product from './pages/Product';
import AnimeDetails from './components/AnimeDetails';
import Navbar from './components/Navbar';
import Favorites from './pages/Favorites';
import './styles/App.css';

function App() {
  return (
    <Router>
      <header>
        <h1>Welcome to Anime World</h1>
        <p>Find your favorite anime and add them to your collection!</p>
      </header>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
          <Route path="/character/:id" element={<AnimeDetails />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
      <footer>
        <p>&copy; 2024 Anime World. All rights reserved.</p>
      </footer>
    </Router>
  );
}

export default App;
