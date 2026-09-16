import { FaArrowRightLong } from "react-icons/fa6";
import CategoryCard from "../CategoryCard/CategoryCard";
import useGetCategories from "../../Hooks/useGetCategories";

export default function CategoriesSection() {
    const { allCategories } = useGetCategories();

    return (
        <section className="py-5 bg-scound">
            <div className="container">
                <div className="row g-3 pt-5">
                    <div className="categorey-header d-flex flex-column gap-4 justify-content-center align-items-lg-start flex-lg-row justify-content-lg-between align-items-lg-center">
                        <div className="left-header d-flex flex-column gap-3">
                            <span className="text-muted">CURATED FOR YOU</span>
                            <h2 className="display-6">Shop by category</h2>
                        </div>
                        <p className=" align-self-lg-end"><span className="me-1">View all</span> <FaArrowRightLong /></p>
                    </div>
                    {allCategories.slice(0, 4).map((category, index) => {
                        return <CategoryCard category={category} key={index} />
                    })}
                </div>
            </div>
        </section>
    )
}
