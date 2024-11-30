import { useState, useEffect } from 'react';

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
                <li key={anime.mal_id}>{anime.title}</li>
            ))}
            </ul>
        </div>
    );
}

export default AnimeList;