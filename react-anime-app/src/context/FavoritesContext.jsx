import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
    const [favorites, setFavorites] = useState([]);

    const addFavorite = (anime) => {
        if (!favorites.find((fav) => fav.mal_id === anime.mal_id)) {
            setFavorites([...favorites, anime]);
        }
    };

    const removeFavorite = (id) => {
        setFavorites(favorites.filter((anime) => anime.mal_id !== id));
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
}

FavoritesProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export function useFavorites() {
    return useContext(FavoritesContext);
}