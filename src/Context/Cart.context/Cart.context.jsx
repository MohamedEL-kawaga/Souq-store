import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

function getStoredCart() {
    try {
        const storedCart = localStorage.getItem("souq-cart");
        const parsedCart = storedCart ? JSON.parse(storedCart) : [];

        return parsedCart.reduce((uniqueCart, item) => {
            const existingItem = uniqueCart.find((cartItem) => cartItem.id === item.id);

            if (existingItem) {
                existingItem.quantity += item.quantity || 1;
                return uniqueCart;
            }

            uniqueCart.push({ ...item, quantity: item.quantity || 1 });
            return uniqueCart;
        }, []);
    } catch {
        return [];
    }
}

export default function CartContextProvider({ children }) {
    const [cart, setCart] = useState(getStoredCart);

    useEffect(() => {
        localStorage.setItem("souq-cart", JSON.stringify(cart));
    }, [cart]);

    function addToCart(product, quantityToAdd = 1) {
        const quantity = Math.max(1, quantityToAdd);
        let itemExists = false;

        setCart((currentCart) => {
            const existingItem = currentCart.find((item) => item.id === product.id);

            if (!existingItem) {
                return [...currentCart, { ...product, quantity }];
            }

            itemExists = true;
            return currentCart.map((item) => item.id === product.id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            );
        });

        toast.success(itemExists ? "Product quantity increased." : "Product added to cart.");
    }

    function decreaseQuantity(productId) {
        setCart((currentCart) => currentCart
            .map((item) => item.id === productId
                ? { ...item, quantity: item.quantity - 1 }
                : item
            )
            .filter((item) => item.quantity > 0)
        );
    }

    function removeFromCart(productId) {
        setCart((currentCart) => currentCart.filter((item) => item.id !== productId));
    }

    function clearCart() {
        setCart([]);
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, decreaseQuantity, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
}
