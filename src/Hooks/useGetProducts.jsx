import axios from "axios";
import { useEffect, useState, useCallback } from "react";

export default function useGetProducts(slug) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleProducts = useCallback(async (categorySlug) => {
        setLoading(true);
        try {
            const baseUrl = "https://dummyjson.com/products";
            const url = categorySlug
                ? `${baseUrl}/category/${categorySlug}`
                : baseUrl;

            const { data } = await axios.get(url);
            setProducts(data.products);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
        setLoading(false);
    }, []);

    useEffect(() => {
        handleProducts(slug);
    }, [slug, handleProducts]);

    return {
        products,
        loading,
        handleProducts
    };
}