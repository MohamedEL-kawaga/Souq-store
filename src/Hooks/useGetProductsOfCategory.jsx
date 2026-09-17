import axios from "axios";
import useGetProducts from "./useGetProducts";

export default function useGetProductsOfCategory() {
    const { setCategoryProducts, categoryProducts } = useGetProducts();

    async function handleProductsCategory(slug) {
        try {
            const baseUrl = "https://dummyjson.com/products";
            const categoryUrl = `${baseUrl}/category/`;
            const options = {
                url: slug ? `${categoryUrl}${slug}` : baseUrl,
                method: "GET",
            };
            const { data } = await axios.request(options);
            if (data?.products) {
                console.log(data.products);
                setCategoryProducts(data.products);
            }
        } catch (error) {
            console.error(error);
        }
    }
    // console.log(categoryProducts);

    return { handleProductsCategory };
}