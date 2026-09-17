import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";
import ProductsCart from "../../components/ProductsCart/ProductsCart";
import useGetCategories from "../../Hooks/useGetCategories";
import useGetProducts from "../../Hooks/useGetProducts";

export default function Products() {
    const { currentProducts } = useGetProducts();
    const { allCategories } = useGetCategories();
    return (
        <section className="products-intro pt-5">
            <div className="container py-5">
                <div >
                    <span className="text-accent fw-semibold">THE SOUQ EDIT</span>
                    <h1 className="display-4 mb-3">All products</h1>
                    <p className="text-muted mb-0">
                        Explore our collection and find something made for you.
                    </p>
                </div>
                <div className="py-3">
                    <CategoryFilter allCategories={allCategories} />
                </div>
                <div className="row g-3">
                    {currentProducts?.map((product) => {
                        return <ProductsCart product={product} key={product.id} />
                    })}
                </div>

            </div>
        </section>

    );
}
