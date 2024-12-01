import { useFavorites } from '../context/FavoritesContext';
import '../styles/App.css';

function Favorites() {
    const { favorites, removeFavorite } = useFavorites();

    return (
        <div className='favorites'>
            <h2>Lista de Favoritos</h2>
            {favorites.length === 0 ? (
                <p>No se han Agregado Favoritos Aún.</p>
            ) : (
                <div className='favorites-grid'>
                    {favorites.map((anime) => (
                        <div key={anime.mal_id} className="anime-card">
                            <img
                                src={anime.images.jpg.image_url}
                                alt={anime.title}
                                className="anime-card-image"
                            />
                            <div className="anime-card-content">
                                <h3>{anime.title}</h3>
                                <button 
                                    onClick={() => removeFavorite(anime.mal_id)}
                                    className="remove-button">Eliminar de Favoritos
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Favorites;