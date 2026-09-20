import { useContext, useEffect, useState } from "react";
import { FaArrowLeft, FaCheck, FaHeart, FaMinus, FaPlus, FaStar, FaTruck } from "react-icons/fa6";
import { Link, useNavigate, useParams } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { CartContext } from "../../Context/Cart.context/Cart.context";
import { AuthContext } from "../../Context/Auth.context/Auth.context";
import useHandleWishList from "../../Hooks/useHandleWishList";
import "./ProductDetails.css";

const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: "btn btn-success ms-2",
        cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
});

export default function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useContext(CartContext);
    const { accessToken } = useContext(AuthContext);
    const [product, setProduct] = useState(null);
    const [selectedImage, setSelectedImage] = useState(0);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const { handleWishList, isInWishList } = useHandleWishList(product);

    useEffect(() => {
        let isMounted = true;

        async function getProduct() {
            setLoading(true);
            try {
                const { data } = await axios.get(`https://dummyjson.com/products/${id}`);
                if (isMounted) {
                    setProduct(data);
                    setSelectedImage(0);
                }
            } catch {
                if (isMounted) setProduct(null);
            } finally {
                if (isMounted) setLoading(false);
            }
        }

        getProduct();
        return () => { isMounted = false; };
    }, [id]);

    function handleAddToCart() {
        if (!accessToken) {
            swalWithBootstrapButtons.fire({
                title: "Login required",
                text: "You need to sign in before adding items to your cart.",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes, go to login",
                cancelButtonText: "No, stay here",
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) navigate("/login");
            });
            return;
        }

        addToCart(product, quantity);
    }

    if (loading) {
        return <section className="product-details-page container py-5"><p className="product-state">Loading product...</p></section>;
    }

    if (!product) {
        return (
            <section className="product-details-page container py-5 text-center">
                <p className="text-accent fw-semibold">PRODUCT NOT FOUND</p>
                <h1 className="display-5">This piece is no longer available.</h1>
                <Link to="/products" className="product-primary-action btn mt-3">Back to products</Link>
            </section>
        );
    }

    const images = product.images?.length ? product.images : [product.thumbnail];
    const originalPrice = product.discountPercentage
        ? (product.price * 100) / (100 - product.discountPercentage)
        : product.price;

    return (
        <section className="product-details-page container py-5">
            <Link to="/products" className="product-back-link d-inline-flex align-items-center gap-2 mb-4">
                <FaArrowLeft /> Back to products
            </Link>

            <div className="row g-5 align-items-start">
                <div className="col-12 col-lg-6">
                    <div className="product-gallery">
                        <div className="product-main-image">
                            <img src={images[selectedImage]} alt={product.title} />
                            <span className="product-discount">-{Math.round(product.discountPercentage)}%</span>
                        </div>
                        <div className="product-thumbnails d-flex gap-2 mt-3">
                            {images.map((image, index) => (
                                <button
                                    className={`product-thumbnail ${selectedImage === index ? "active" : ""}`}
                                    key={image}
                                    type="button"
                                    onClick={() => setSelectedImage(index)}
                                >
                                    <img src={image} alt={`${product.title} view ${index + 1}`} />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="col-12 col-lg-6">
                    <div className="product-detail-copy">
                        <div className="d-flex justify-content-between gap-3 align-items-start">
                            <span className="product-category text-uppercase">{product.category}</span>
                            <button className={`product-wishlist ${isInWishList ? "active" : ""}`} type="button" onClick={() => handleWishList(product)} aria-label="Add to wishlist">
                                <FaHeart />
                            </button>
                        </div>
                        <h1 className="display-4 product-title mt-3">{product.title}</h1>
                        <div className="d-flex align-items-center gap-2 mb-3">
                            <span className="product-rating"><FaStar /> {product.rating}</span>
                            <span className="text-secondary">Highly rated by our customers</span>
                        </div>
                        <p className="product-description">{product.description}</p>
                        <div className="product-price d-flex align-items-baseline gap-2 mb-4">
                            <strong>${product.price.toFixed(2)}</strong>
                            {product.discountPercentage > 0 && <span>${originalPrice.toFixed(2)}</span>}
                        </div>

                        <div className="product-availability d-flex align-items-center gap-2 mb-4">
                            <FaCheck /> In stock · {product.stock} available
                        </div>

                        <div className="product-purchase d-flex flex-wrap gap-2 mb-4">
                            <div className="quantity-control d-flex align-items-center justify-content-between">
                                <button type="button" onClick={() => setQuantity((current) => Math.max(1, current - 1))} aria-label="Decrease quantity"><FaMinus /></button>
                                <span>{quantity}</span>
                                <button type="button" onClick={() => setQuantity((current) => Math.min(product.stock, current + 1))} aria-label="Increase quantity"><FaPlus /></button>
                            </div>
                            <button className="product-primary-action btn flex-grow-1" type="button" onClick={handleAddToCart}>Add to cart</button>
                        </div>

                        <div className="product-shipping d-flex align-items-center gap-3">
                            <FaTruck />
                            <div><strong>Free delivery</strong><br /><span>Dispatched within 2-3 business days.</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
