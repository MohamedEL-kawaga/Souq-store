import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router";

export default function CategoryCard({ category, onCategoryClick }) {
    const navigate = useNavigate();
    function handleSlug() {
        onCategoryClick(category.slug);
        console.log(category.slug)
        navigate("/products");
    };

    return (
        <div className="col-md-6 col-lg-3">
            <div
                className="category-card bg-white d-flex justify-content-between align-items-center p-4 rounded-4 cursor-pointer"
                onClick={handleSlug}
            >
                <p className="mt-2 fw-bolder">{category ? category.name : "store"}</p>
                <FaArrowRightLong className="text-muted" />
            </div>
        </div>
    );
}