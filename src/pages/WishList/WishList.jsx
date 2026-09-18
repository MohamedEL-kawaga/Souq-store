import { useState } from "react";
import { FaHeart } from "react-icons/fa6";
import { Link } from "react-router";
import ProductsCart from "../../components/ProductsCart/ProductsCart";

export default function WishList() {
    const [wishlistItems, setWishlistItems] = useState(JSON.parse(localStorage.getItem("wishList")) || []);

    function refreshWishlist() {
        const wishList = JSON.parse(localStorage.getItem("wishList")) || [];
        setWishlistItems(wishList);
    };

    return (
        <section className="wishlist-page py-5">
            <div className="container py-5">
                <div className="wishlist-header mb-4">
                    <span className="text-accent fw-semibold">YOUR SAVED PIECES</span>
                    <h1 className="display-5 mb-2">Wishlist</h1>
                    <p className="text-muted mb-0">
                        {wishlistItems.length > 0
                            ? `${wishlistItems.length} item${wishlistItems.length > 1 ? "s" : ""} saved for later.`
                            : "Save products you love and come back to them anytime."}
                    </p>
                </div>

                {wishlistItems.length > 0 ? (
                    <div className="row g-3">
                        {wishlistItems.map((product) => (
                            <ProductsCart
                                key={product.id}
                                product={product}
                                onWishlistChange={refreshWishlist}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="wishlist-empty text-center">
                        <div className="empty-icon mb-3">
                            <FaHeart />
                        </div>
                        <h3 className="mb-3">Your wishlist is empty</h3>
                        <p className="text-muted mb-4">
                            Explore our collection and tap the heart on products you want to keep.
                        </p>
                        <Link to="/products" className="btn-g btn-shop">
                            Continue shopping
                        </Link>
                    </div>
                )}
            </div>
        </section >
    );
}
