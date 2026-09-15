import axios from "axios";
import { useEffect, useState } from "react";

export default function useGetCategories() {
    const [allCategories, setAllCategories] = useState([]);
    async function getAllCategories() {
        try {
            const options = {
                method: "GET",
                url: "https://dummyjson.com/products/categories"
            };
            const { data } = await axios.request(options);
            console.log(data);
            if (data !== null) {
                setAllCategories(data);
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getAllCategories();
    }, []);
    // console.log(`arr : ${allCategories}`);
    return { allCategories };
}
