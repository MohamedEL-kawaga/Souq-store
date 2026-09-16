import { FaRegHeart, FaStar } from "react-icons/fa6";
import "./products.css"
import { LuSlidersHorizontal } from "react-icons/lu";
import useGetCategories from "../../Hooks/useGetCategories";
export default function Prouducts() {
    const { allCategories } = useGetCategories();
    return (
        <section className="prouducts-section py-5" id="products">
            <div className="container">
                <div className="row">
                    <div className="products-header d-flex flex-column gap-2 flex-md-row justify-content-md-between align-items-md-center pb-5">
                        <div className="info">
                            <span className="text-muted fw-bold">THE EDIT</span>
                            <h2 className=" display-6">Featured products</h2>
                            <span className="text-muted">8 considered pieces, ready to be yours</span>
                        </div>

                        <div className="filters mt-3 mt-md-0 d-flex flex-wrap align-items-center justify-content-end gap-2 p-0">
                            <span className="btn btn-light d-inline-flex align-items-center gap-2 rounded-2 border px-3">
                                <LuSlidersHorizontal />
                                <span>Filters</span>
                            </span>
                            <select
                                defaultValue="Sort: Featured"
                                className="form-select w-auto rounded-3 border-2"
                            >
                                <option value="Sort: Featured">Sort: Featured</option>
                                <option value="Price: low to high">Price: low to high</option>
                                <option value="Price: high to low">Price: high to low</option>
                            </select>
                        </div>
                    </div>

                    {/* some catecory to ux improve */}
                    <div className=" short-cat pb-3 pt-1">
                        <span className="cat d-inline-block py-2 px-4 rounded-5 border border-1 border-black bg-black text-white ">All categories</span>
                        {allCategories.slice(0, 5).map((cat, index) => {
                            return <span key={index} className="cat ms-2 d-inline-block py-2 px-4 rounded-5 border border-1 border-black ">{cat.name}</span>
                        })}
                    </div>

                    {/* pro-card */}
                    <div className="col-6 col-md-4 col-lg-3">
                        <div className="card overflow-hidden">
                            <div className="card-image overflow-hidden ">
                                <img src="https://i.pinimg.com/736x/50/c1/24/50c1247bdc003e3fcf5175b8d4810fe4.jpg"
                                    className="card-img-top d-block "
                                    alt="" />
                                <span className="add-WL"><FaRegHeart className="WL-icon" /></span>
                                <span className="discount">-22%</span>
                            </div>
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="category-pro text-white ">audio</span>
                                    <span className="pro-rate"><FaStar className="stare" />(4.8)</span>
                                </div>
                                <h4 className="pro-name pt-3 pb-2">Apple AirPods Max</h4>
                                <p className="discriotion-pro">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit
                                </p>
                                <div className="buttons-card d-flex justify-content-center align-items-center gap-1 flex-grow-1">
                                    <button className="btn-g add-btn">Add to Cart</button>
                                    <button className="btn-g view-btn">View </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};
