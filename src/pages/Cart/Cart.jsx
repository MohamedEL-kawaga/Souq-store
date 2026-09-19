import { useContext } from "react";
import { FaArrowLeft, FaBagShopping, FaMinus, FaPlus, FaTrash } from "react-icons/fa6";
import { Link } from "react-router";
import { CartContext } from "../../Context/Cart.context/Cart.context";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import "./Cart.css";

const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: "btn btn-success ms-2",
        cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
});

export default function Cart() {
    const { cart, addToCart, decreaseQuantity, removeFromCart, clearCart } = useContext(CartContext);
    const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    function handleClearCart() {
        swalWithBootstrapButtons.fire({
            title: "Clear your cart?",
            text: "All products in your cart will be removed. This action cannot be undone.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, clear it!",
            cancelButtonText: "No, keep it",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                clearCart();
                swalWithBootstrapButtons.fire({
                    title: "Cart cleared",
                    text: "Your cart is now empty.",
                    icon: "success"
                });
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Your products are still safe in the cart.",
                    icon: "info"
                });
            }
        });
    }

    if (!cart.length) {
        return (
            <section className="cart-page container pt-5 pb-4">
                <div className="cart-heading pt-5 mb-4">
                    <span className="cart-eyebrow text-uppercase fw-bold small">Your selection</span>
                    <h1 className="display-3 mb-0">Your cart</h1>
                </div>

                <div className="cart-empty text-center mx-auto p-5">
                    <div className="cart-empty-icon mx-auto mb-3"><FaBagShopping /></div>
                    <h2 className="h3 mb-2">Your cart is waiting</h2>
                    <p className="mb-4 text-secondary">Browse the collection and add something you love.</p>
                    <Link to="/products" className="cart-primary-action btn">Continue shopping</Link>
                </div>
            </section>
        );
    }

    return (
        <section className="cart-page container pt-5 pb-4">
            <div className="cart-heading pt-5 mb-4">
                <span className="cart-eyebrow text-uppercase fw-bold small">Your selection</span>
                <h1 className="display-3 mb-0">Your cart</h1>
                <p className="mt-2 mb-0 text-secondary">{cart.length} {cart.length === 1 ? "item" : "items"} ready for checkout.</p>
            </div>

            <div className="row g-4 cart-layout">
                <div className="col-12 col-lg-8 cart-items d-flex flex-column gap-3">
                    {cart.map((item) => (
                        <article className="cart-item d-flex flex-wrap align-items-center gap-3 p-3 bg-white border rounded-3" key={item.id}>
                            <img src={item.thumbnail} alt={item.title} />
                            <div className="cart-item-details flex-grow-1">
                                <span className="text-uppercase fw-bold small text-accent">{item.category}</span>
                                <h2 className="h5 mb-1 mt-1">{item.title}</h2>
                                <p className="mb-0 small text-secondary">Quantity: {item.quantity}</p>
                            </div>
                            <div className="cart-quantity d-flex align-items-center gap-2 p-1 border rounded flex-shrink-0" aria-label={`Quantity of ${item.title}`}>
                                <button className="btn btn-sm p-0" type="button" onClick={() => decreaseQuantity(item.id)} aria-label={`Decrease ${item.title} quantity`}>
                                    <FaMinus />
                                </button>
                                <span className="fw-bold text-center">{item.quantity}</span>
                                <button className="btn btn-sm p-0" type="button" onClick={() => addToCart(item)} aria-label={`Increase ${item.title} quantity`}>
                                    <FaPlus />
                                </button>
                            </div>
                            <strong className="text-nowrap flex-shrink-0">${(item.price * item.quantity).toFixed(2)}</strong>
                            <button className="cart-remove btn btn-link p-0 text-secondary flex-shrink-0" type="button" onClick={() => removeFromCart(item.id)} aria-label={`Remove ${item.title}`}>
                                <FaTrash />
                            </button>
                        </article>
                    ))}
                    <div className="cart-actions d-flex justify-content-between align-items-center gap-3">
                        <Link to="/products" className="cart-back-link d-inline-flex align-items-center gap-2 text-decoration-none fw-semibold"><FaArrowLeft /> Continue shopping</Link>
                        <button className="cart-clear-button btn btn-link p-0 text-secondary" type="button" onClick={handleClearCart}>Clear cart</button>
                    </div>
                </div>

                <aside className="col-12 col-lg-4 cart-summary p-4 rounded-3">
                    <span className="cart-eyebrow text-uppercase fw-bold small">Order summary</span>
                    <h2 className="h4 mb-4 mt-1">Almost yours</h2>
                    <div className="summary-line d-flex justify-content-between py-2 text-secondary"><span>Subtotal</span><strong>${subtotal.toFixed(2)}</strong></div>
                    <div className="summary-line d-flex justify-content-between py-2 text-secondary"><span>Shipping</span><span>Free</span></div>
                    <div className="summary-total d-flex justify-content-between pt-3 mt-2 mb-3 border-top fw-bold"><span>Total</span><strong>${subtotal.toFixed(2)}</strong></div>
                    <button className="cart-primary-action btn w-100" type="button">Checkout</button>
                </aside>
            </div>
        </section>
    );
}
