import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

function getStoredCart() {
    try {
        const storedCart = localStorage.getItem("souq-cart");
        return storedCart ? JSON.parse(storedCart) : [];
    } catch {
        return [];
    }
}

export default function CartContextProvider({ children }) {
    const [cart, setCart] = useState(getStoredCart);

    useEffect(() => {
        localStorage.setItem("souq-cart", JSON.stringify(cart));
    }, [cart]);

    function addToCart(product) {
        const itemExists = cart.some((item) => item.id === product.id);

        setCart((currentCart) => {
            if (!itemExists) {
                return [...currentCart, { ...product, quantity: 1 }];
            }

            return currentCart.map((item) => item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
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
