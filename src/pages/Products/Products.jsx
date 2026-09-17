import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";
import ProductsCart from "../../components/ProductsCart/ProductsCart";
import useGetCategories from "../../Hooks/useGetCategories";
import useGetProducts from "../../Hooks/useGetProducts";
import { useSearchParams } from "react-router";

export default function Products() {
    const [searchParams, setSearchParams] = useSearchParams();
    const selectedCategory = searchParams.get("category") || "all";
    const { allCategories } = useGetCategories();
    const { products } = useGetProducts(selectedCategory === "all" ? undefined : selectedCategory);

    const currentCategoryName =
        selectedCategory === "all"
            ? "All products"
            : (allCategories.find((cat) => (cat.slug ?? cat) === selectedCategory)?.name ??
                selectedCategory.replace(/-/g, " "));

    const handleCategoryChange = (category) => {
        if (category === "all") {
            setSearchParams({});
            return;
        }

        setSearchParams({ category });
    };

    return (
        <section className="products-intro pt-5">
            <div className="container py-5">
                <div>
                    <span className="text-accent fw-semibold">THE SOUQ EDIT</span>
                    <h1 className="display-4 mb-3">{currentCategoryName}</h1>
                    <p className="text-muted mb-0">
                        Explore our collection and find something made for you.
                    </p>
                </div>
                <div className="py-3">
                    <CategoryFilter
                        allCategories={allCategories}
                        selectedCategory={selectedCategory}
                        onCategoryClick={handleCategoryChange}
                    />
                </div>
                <div className="row g-3">
                    {products?.map((product) => {
                        return <ProductsCart product={product} key={product.id} />;
                    })}
                </div>
            </div>
        </section>
    );
}
