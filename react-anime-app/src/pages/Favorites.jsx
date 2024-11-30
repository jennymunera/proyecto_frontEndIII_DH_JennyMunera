import { useFavorites } from '../context/FavoritesContext';

function Favorites() {
    const { favorites, removeFavorite } = useFavorites();

    return (
        <div>
            <h2>Your Favorites</h2>
            {favorites.length === 0 ? (
                <p>No favorites yet.</p>
            ) : (
                <ul>
                    {favorites.map((anime) => (
                        <li key={anime.mal_id}>
                            <h3>{anime.title}</h3>
                            <button onClick={() => removeFavorite(anime.mal_id)}>Remove</button>
                        </li>
                ))}
                </ul>
            )}
        </div>
    );
}

export default Favorites;