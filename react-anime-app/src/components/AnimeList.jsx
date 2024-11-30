import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useFavorites } from '../context/FavoritesContext';

function AnimeList() {
    const [animes, setAnimes] = useState([]);
    const { addFavorite } = useFavorites();

    useEffect(() => {
        const fetchAnimes = async () => {
            const response = await fetch('https://api.jikan.moe/v4/anime');
            const data = await response.json();
            setAnimes(data.data);
        };

        fetchAnimes();
    }, []);

    return (
        <div className='anime-list'>
            <h2>Anime List</h2>
            <ul>
                {animes.map((anime) => (
                    <li key={anime.mal_id}>
                        <img src={anime.images.jpg.image_url} alt={anime.title} />
                        <h3>{anime.title}</h3>
                        <Link to = {`/character/${anime.mal_id}`}>{anime.title}</Link>
                        <button onClick={() => addFavorite(anime)}>Add to favorites</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AnimeList;