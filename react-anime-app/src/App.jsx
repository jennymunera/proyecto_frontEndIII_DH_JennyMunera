import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import AnimeDetails from './components/AnimeDetails';
import Navbar from './components/Navbar';
import Favorites from './pages/Favorites';
import Information from './pages/Information';
import './styles/App.css';
import image from './assets/image.png';

function App() {
  return (
    <Router>
      <header>
        <div className="header-content">
          <img src={image} alt="otakuhaven logo" className='logo' />
          <div>
            <h1>OtakuHaven</h1>
            <p>Encuentra tus Animes Favoritos, y Agregalos a tú Colección</p>
          </div>
        </div>
      </header>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Information" element={<Information />} />
          <Route path="/character/:id" element={<AnimeDetails />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
      <footer>
        <p>&copy; 2024 OtakuHaven All rights reserved.</p>
      </footer>
    </Router>
  );
}

export default App;
