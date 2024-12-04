import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';

function AnimeList() {
    const [animes, setAnimes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1); 
    const { addFavorite } = useFavorites();
    const [sortByRating, setSortByRating] = useState(false); 

    useEffect(() => {
        const fetchAnimes = async () => {
            let url = `https://api.jikan.moe/v4/anime?page=${currentPage}`;

            //  filtro de calificación
            if (sortByRating) {
                url += `&order_by=score&sort=desc`;
            }

            try {
                const response = await fetch(url);
                const data = await response.json();
                setAnimes(data.data);
                setTotalPages(data.pagination.last_visible_page);
            } catch (error) {
                console.error('Error al obtener la lista de animes: ', error);
            }
        };

        fetchAnimes();
    }, [currentPage, sortByRating]);

    // Paginación
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

    // Ordenar por calificación
    const handleSortByScore = () => {
        setSortByRating(true);
        setCurrentPage(1); // Restablecer a la primera página
    };

    // Restablecer el orden a la lista original
    const handleResetSort = () => {
        setSortByRating(false);
        setCurrentPage(1); // Restablecer a la primera página
    };

    return (
        <div className='anime-list'> 
            <div className="sorting-buttons">
                <button onClick={handleSortByScore}>Ordenar por Calificación</button>
                <button onClick={handleResetSort}>Restablecer</button>
            </div>

            <ul>
                {animes.map((anime) => (
                    <li className = "anime-list-card" key={anime.mal_id}>
                        <img src={anime.images.jpg.image_url} alt={anime.title} />
                        <h3>{anime.title}</h3>
                        <p>Calificación: {anime.score}</p>
                        <Link to = {`/character/${anime.mal_id}`}><p>Descripción</p></Link>
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