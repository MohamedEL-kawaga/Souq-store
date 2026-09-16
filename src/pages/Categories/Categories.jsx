import CategoryCard from "../../components/CategoryCard/CategoryCard";
import useGetCategories from "../../Hooks/useGetCategories";

export default function Categories() {
    const { allCategories } = useGetCategories();
    return (
        <section className="all-catecories-section">
            <div className="container py-5">
                <div className="row g-4">
                    <div className="categories-header pt-5 pb-3">
                        <span className=" text-accent fw-semibold">EXPLORE THE COLLECTION</span>
                        <h2 className="display-4">Shop by category</h2>
                        <p className="text-muted pb-4">Find exactly what you're looking for, or discover something unexpected</p>
                    </div>
                    {allCategories.map((category, index) => {
                        return <CategoryCard category={category} key={index} />
                    })}
                </div>
            </div>
        </section>
    );
}
