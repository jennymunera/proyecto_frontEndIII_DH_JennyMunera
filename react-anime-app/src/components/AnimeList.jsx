import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';

function AnimeList() {
    const [animes, setAnimes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1); 
    const { addFavorite } = useFavorites();

    useEffect(() => {
        const fetchAnimes = async () => {
            try {
                const response = await fetch(`https://api.jikan.moe/v4/anime?page=${currentPage}`);
                const data = await response.json();
                setAnimes(data.data);
                setTotalPages(data.pagination.last_visible_page);
            }   catch (error) {
                console.error('Error Obteniendo lista de Animes: ', error);
            }
        };

        fetchAnimes();
    }, [currentPage]);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };
    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className='anime-list'> 
            <ul>
                {animes.map((anime) => (
                    <li key={anime.mal_id}>
                        <img src={anime.images.jpg.image_url} alt={anime.title} />
                        <h3>{anime.title}</h3>
                        <Link to = {`/character/${anime.mal_id}`}>{anime.title}</Link>
                        <button onClick={() => addFavorite(anime)}>Agregar a Favoritos</button>
                    </li>
                ))}
            </ul>
            <div className='pagination'>
                <button onClick={handlePreviousPage} disabled={currentPage === 1}>Anterior</button>
                <span>Pagina {currentPage} de {totalPages}</span>
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>Siguiente</button>
            </div>
        </div>
    );
}
export default AnimeList;