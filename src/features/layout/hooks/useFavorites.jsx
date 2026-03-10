import { useState, useEffect } from 'react';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState(() => {
    const savedFavs = localStorage.getItem('favorites');
    return savedFavs ? JSON.parse(savedFavs) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (product) => {
    setFavorites((prev) => {
      const isFav = prev.find(fav => fav.id === product.id);
      if (isFav) {
        return prev.filter(fav => fav.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const isFavorite = (id) => favorites.some(fav => fav.id === id);

  return { favorites, toggleFavorite, isFavorite };
};