import { useContext } from "react";
import { FaArrowRight, FaEnvelope, FaIdBadge, FaKey, FaRightFromBracket, FaUser } from "react-icons/fa6";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Context/Auth.context/Auth.context";
import "./Profile.css";

export default function Profile() {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    function handleLogout() {
        logout();
        navigate("/login");
    }

    const fullName = [user?.firstName, user?.lastName].filter(Boolean).join(" ") || user?.username;
    const initials = [user?.firstName, user?.lastName]
        .filter(Boolean)
        .map((name) => name[0])
        .join("")
        .toUpperCase() || user?.username?.slice(0, 2).toUpperCase();

    return (
        <section className="profile-page py-5">
            <div className="container py-5">
                <div className="profile-heading mb-4">
                    <span className="text-accent fw-semibold">YOUR SOUQ ACCOUNT</span>
                    <h1 className="display-5 mb-2">Your profile</h1>
                    <p className="text-muted mb-0">Everything you need, in one place.</p>
                </div>

                <div className="row g-4 align-items-stretch">
                    <div className="col-12 col-lg-5">
                        <article className="profile-card profile-identity h-100">
                            <div className="profile-avatar">
                                {user?.image ? <img src={user.image} alt={fullName} /> : <span>{initials}</span>}
                            </div>
                            <span className="profile-status">Active member</span>
                            <h2>{fullName}</h2>
                            <p className="text-muted mb-4">@{user?.username}</p>
                            <button className="profile-logout btn w-100" type="button" onClick={handleLogout}>
                                <FaRightFromBracket /> Sign out
                            </button>
                        </article>
                    </div>

                    <div className="col-12 col-lg-7">
                        <article className="profile-card h-100">
                            <div className="profile-card-heading">
                                <span className="profile-card-icon"><FaUser /></span>
                                <div><h2>Personal details</h2><p>Information from your Souq account.</p></div>
                            </div>
                            <div className="profile-details-grid">
                                <div className="profile-detail"><FaEnvelope /><span>Email</span><strong>{user?.email || "Not provided"}</strong></div>
                                <div className="profile-detail"><FaIdBadge /><span>Account ID</span><strong>#{user?.id || "--"}</strong></div>
                                <div className="profile-detail"><FaUser /><span>Gender</span><strong>{user?.gender || "Not provided"}</strong></div>
                                <div className="profile-detail"><FaKey /><span>Username</span><strong>{user?.username || "Not provided"}</strong></div>
                            </div>
                        </article>
                    </div>
                </div>

                <div className="profile-shortcuts mt-4">
                    <Link to="/products" className="profile-shortcut">
                        <span><strong>Ready for your next find?</strong><small>Browse the latest collection</small></span><FaArrowRight />
                    </Link>
                    <Link to="/wishList" className="profile-shortcut">
                        <span><strong>Your saved pieces</strong><small>Visit your wishlist</small></span><FaArrowRight />
                    </Link>
                </div>
            </div>
        </section>
    );
}