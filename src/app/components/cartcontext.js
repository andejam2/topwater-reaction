"use client";
import { createLocalRequestContext } from "next/dist/server/after/builtin-request-context";
import { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        try {
            const raw = localStorage.getItem("cartItems");
            if (raw) setCartItems(JSON.parse(raw));
        } catch {}
    }, []);

    useEffect(() => {
        try {
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
        } catch {}
    }, [cartItems]);

    const addToCart = (item) => {
        setCartItems((prev) => {
            const existing = prev.find((i) => i.id === item.id);
            if (existing) {
                return prev.map((i) =>
                    i.id === item.id ? {...i, quantity: i.quantity + item.quantity} : i
                );
            }
            return [...prev, item];
        });
    };

    const removeFromCart = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    const updateQuantity = (id, qty) =>
        setCartItems((prev) =>
            prev.map((i) => (i.id === id ? {...i, quantity: Math.max(1, qty) } : i))
        );

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{cartItems, addToCart, removeFromCart, clearCart, updateQuantity}}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);