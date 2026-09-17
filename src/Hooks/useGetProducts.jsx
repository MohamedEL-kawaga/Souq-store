import axios from "axios";
import { useEffect, useState } from "react";

export default function useGetProducts() {
    const [currentProducts, setCurrentProducts] = useState(null);

    async function handleProducts() {
        try {
            const options = {
                url: "https://dummyjson.com/products",
                method: "GET"
            };

            const { data } = await axios.request(options);
            // console.log(data);
            if (data !== null) {
                setCurrentProducts(data.products);
            }

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        handleProducts();
    }, [])
    return { currentProducts };
}