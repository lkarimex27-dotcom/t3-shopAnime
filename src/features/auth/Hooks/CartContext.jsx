import React, { createContext, useState, useCallback, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // 1. Cargamos los datos iniciales desde LocalStorage si existen
  const [carrito, setCarrito] = useState(() => {
    const savedCart = localStorage.getItem('anime_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [favoritos, setFavoritos] = useState(() => {
    const savedFavs = localStorage.getItem('anime_favs');
    return savedFavs ? JSON.parse(savedFavs) : [];
  });

  // 2. Cada vez que el carrito o favoritos cambien, guardamos en LocalStorage
  useEffect(() => {
    localStorage.setItem('anime_cart', JSON.stringify(carrito));
  }, [carrito]);

  useEffect(() => {
    localStorage.setItem('anime_favs', JSON.stringify(favoritos));
  }, [favoritos]);

  const agregarAlCarrito = useCallback((producto) => {
    // Agregamos un instanceId único (timestamp) para poder borrar items específicos
    // incluso si el producto es el mismo (mismo ID de base)
    setCarrito((prev) => [...prev, { ...producto, instanceId: Date.now() }]);
  }, []);

  // --- FUNCIÓN PARA ELIMINAR DEL CARRITO ---
  const eliminarDelCarrito = useCallback((instanceId) => {
    // Filtramos el carrito manteniendo solo los objetos cuyo instanceId NO sea el que queremos borrar
    setCarrito((prev) => prev.filter(item => item.instanceId !== instanceId));
  }, []);

  const alternarFavorito = useCallback((producto) => {
    setFavoritos((prev) => {
      const existe = prev.some(fav => fav.id === producto.id);
      if (existe) {
        return prev.filter(fav => fav.id !== producto.id);
      }
      return [...prev, producto];
    });
  }, []);

  return (
    <CartContext.Provider value={{ 
      carrito, 
      favoritos, 
      agregarAlCarrito, 
      eliminarDelCarrito, // Exportado para usar en Mybuys.js
      alternarFavorito 
    }}>
      {children}
    </CartContext.Provider>
  );
};