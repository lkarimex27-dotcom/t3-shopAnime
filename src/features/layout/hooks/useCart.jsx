import { useState, useEffect } from 'react';

export const useCart = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    alert(`${product.title} añadido al carrito`);
  };

  return { cart, addToCart };
};