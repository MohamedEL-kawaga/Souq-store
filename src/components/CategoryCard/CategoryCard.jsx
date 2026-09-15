import { FaArrowRightLong } from "react-icons/fa6";

export default function CategoryCard({ category }) {
    return (<div className="col-6 col-md-4 col-lg-3">
        <div className="category-card bg-white
                        d-flex justify-content-between align-items-center 
                        p-4 rounded rounded-4 ">
            <p className="mt-2 fw-bolder">{category ? category.name : "store"}</p>
            <FaArrowRightLong className="text-muted" />
        </div>
    </div>);
}
