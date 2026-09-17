import "./products.css"
import { LuSlidersHorizontal } from "react-icons/lu";
import ProductsCart from "../ProductsCart/ProductsCart";
import useGetProducts from "../../Hooks/useGetProducts";
import { useEffect, useState } from "react";

export default function ProuductsSection() {
    const { currentProducts } = useGetProducts();
    const [popularProducts, setPopularProducts] = useState([]);
    useEffect(() => {
        if (currentProducts) {
            setPopularProducts(currentProducts.slice(0, 16));
        }
    }, [currentProducts])
    function handleSort(e) {
        const value = e.target.value;
        let sorted = [...popularProducts];

        if (value === "Price: low to high") {
            sorted.sort((a, b) => a.price - b.price);
        } else if (value === "Price: high to low") {
            sorted.sort((a, b) => b.price - a.price);
        } else if (value === "Sort: Featured") {
            sorted = currentProducts.slice(0, 16);
        }

        setPopularProducts(sorted);
    };
    return (
        <section className="Products-section py-5">
            <div className="container">
                <div className="row g-3">
                    <div className="products-header d-flex flex-column gap-2 flex-md-row justify-content-md-between align-items-md-center pb-5">
                        <div className="info">
                            <span className="text-muted">THE EDIT</span>
                            <h2 className=" display-6">Featured products</h2>
                            <span className="text-muted">Our most popular products, chosen just for you</span>
                        </div>

                        <div className="filters mt-3 mt-md-0 d-flex flex-wrap align-items-center justify-content-end gap-2 p-0">
                            <span className="btn btn-light d-inline-flex align-items-center gap-2 rounded-2 border px-3">
                                <LuSlidersHorizontal />
                                <span>Filters</span>
                            </span>
                            <select
                                defaultValue="Sort: Featured"
                                onChange={handleSort}
                                className="form-select w-auto rounded-3 border-2"
                            >
                                <option value="Sort: Featured">Sort: Featured</option>
                                <option value="Price: low to high">Price: low to high</option>
                                <option value="Price: high to low">Price: high to low</option>
                            </select>
                        </div>
                    </div>

                    {/* some catecory to ux improve */}
                    {/* <div className=" short-cat pb-3 pt-1">
                        <span className="cat d-inline-block py-2 px-4 rounded-5 border border-1 bg-black text-white ">All categories</span>
                        {allCategories.slice(0, -1).map((cat, index) => {
                            return <span key={index} className="cat ms-2 d-inline-block py-2 px-4 rounded-5 border border-1 ">{cat.name}</span>
                        })}
                    </div> */}

                    {currentProducts ? (
                        popularProducts.map((product) => {
                            return <ProductsCart key={product.id} product={product} />;
                        })
                    ) : (
                        <p>loading products...</p>
                    )}
                </div>
            </div>
        </section>
    );
};
