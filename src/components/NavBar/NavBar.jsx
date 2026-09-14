import { useState } from "react";
import { FaBars, FaCartPlus, FaRegHeart, FaRegUserCircle, FaTimes } from "react-icons/fa";
import { Link } from "react-router";

export default function NavBar() {

    const [isOpen, setIsOpen] = useState(false);

    function toggleMenu() {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <header className="shadow-sm fixed-top py-3 bg-white  ">
                <nav className="container ">
                    <div className="d-flex justify-content-between align-items-center">

                        <div className="main-logo">
                            <Link to={"/"} className="text-decoration-none">
                                <h3 className="m-0"><span>S</span>OUQ</h3>
                            </Link>
                        </div>

                        <div className={`nav-menu ${isOpen ? "open" : ""}`}>

                            <button
                                className="btn d-lg-none close-btn position-absolute top-0 end-0 m-3"
                                onClick={toggleMenu}
                            >
                                <FaTimes className="h3" />
                            </button>

                            <ul className="d-flex flex-column ms-lg-5 flex-lg-row align-items-center gap-4 gap-lg-5 list-unstyled m-0 p-0">
                                <li className="ms-lg-5">
                                    <Link to={"/"} onClick={() => setIsOpen(false)}>HOME</Link>
                                </li>
                                <li>
                                    <Link to={"/categories"} onClick={() => setIsOpen(false)}>CATEGORY</Link>
                                </li>
                                <li>
                                    <Link to={"/products"} onClick={() => setIsOpen(false)}>PRODUCTS</Link>
                                </li>
                            </ul>

                            <ul className="ul2 d-flex align-items-center gap-4 gap-lg-5 list-unstyled m-0 mt-4 mt-lg-0">
                                <li className="mt-1 m-lg-0">
                                    <Link className="d-flex flex-lg-column  align-items-center text-decoration-none" to={"/wishList"} onClick={() => setIsOpen(false)}>
                                        <FaRegHeart className="h5 m-0" />
                                        <span>WishList</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="d-flex flex-lg-column  align-items-center text-decoration-none" to={"/cart"} onClick={() => setIsOpen(false)}>
                                        <FaCartPlus className="h5 m-0" />
                                        <span>Cart</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="d-flex flex-lg-column  align-items-center text-decoration-none" to={"/user"} onClick={() => setIsOpen(false)}>
                                        <FaRegUserCircle className="h5 m-0" />
                                        <span>User</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <button className="btn d-lg-none" onClick={toggleMenu}>
                            <FaBars className="h3 m-0" />
                        </button>
                    </div>
                </nav>
            </header>

            {isOpen && (
                <div
                    className="menu-overlay z-0"
                    onClick={toggleMenu}
                ></div>
            )}
        </>
    );
}