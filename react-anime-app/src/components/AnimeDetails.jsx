import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function AnimeDetails() {
    const { id } = useParams();
    const [anime, setAnime] = useState(null);

    useEffect(() => {
        const fetchAnimeDetails = async () => {
            const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
            const data = await response.json();
            setAnime(data.data);
        };

        fetchAnimeDetails();
    }, [id]);

    if (!anime) return <p>Loading...</p>;

    return (
        <div className='anime-details'>
            <h2>{anime.title}</h2>
            <p>{anime.synopsis}</p>
            <img src={anime.images.jpg.image_url} alt={anime.title} />
        </div>
    );
}
export default AnimeDetails;