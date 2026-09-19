import { FaRegHeart, FaStar } from "react-icons/fa6";
import useHandleWishList from "../../Hooks/useHandleWishList";
import { useContext } from "react";
import { CartContext } from "../../Context/Cart.context/Cart.context";

export default function ProductsCart({ product, onWishlistChange }) {
    const { handleWishList, isInWishList } = useHandleWishList(product, onWishlistChange);
    const { addToCart } = useContext(CartContext);

    return (
        <div className="col-6 col-md-4 col-lg-3" >
            <div className="card card-pro overflow-hidden">
                <div className="card-image overflow-hidden ">
                    <img src={product.thumbnail}
                        className="card-img-top d-block p-3 "
                        alt={product.title} />
                    <span className={`add-WL ${isInWishList ? "wl-done" : ""}`} onClick={() => handleWishList(product)}><FaRegHeart className="WL-icon " /></span>
                    <span className="discount px-2 py-1">{product.discountPercentage}%</span>
                </div>
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                        <span className="category-pro text-white ">{product.category}</span>
                        <span className="pro-rate"><FaStar className="stare" />({product.rating})</span>
                    </div>
                    <h5 className="pro-name pt-3 pb-2">{product.title}</h5>
                    <p className="discriotion-pro">
                        {product.description.split(/\s+/).slice(0, 14).join(" ")}
                    </p>
                    <p>
                        <span>${product.price}</span>

                        {product.discountPercentage && (
                            <span className="main-price text-muted text-decoration-line-through ms-1 ">
                                ${((product.price * 100) / (100 - product.discountPercentage)).toFixed(2)}
                            </span>
                        )}
                    </p>
                    <div className="buttons-card d-flex justify-content-center align-items-center gap-1 flex-grow-1">
                        <button className="btn-g add-btn" onClick={() => addToCart(product)}>Add to Cart</button>
                        <button className="btn-g view-btn">View </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
