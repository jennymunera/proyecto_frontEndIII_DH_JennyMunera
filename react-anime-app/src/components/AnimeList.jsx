import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function AnimeList() {
    const [animes, setAnimes] = useState([]);

    useEffect(() => {
        const fetchAnimes = async () => {
            const response = await fetch('https://api.jikan.moe/v4/anime');
            const data = await response.json();
            setAnimes(data.data);
        };

        fetchAnimes();
    }, []);

    return (
        <div>
            <h2>Anime List</h2>
            <ul>
                {animes.map((anime) => (
                    <li key={anime.mal_id}>
                        <Link to = {`/character/${anime.mal_id}`}>{anime.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AnimeList;