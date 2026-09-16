import { FaArrowRightLong } from "react-icons/fa6"
import heroSection from "../../assets/images/Ecommerce-web-page-bro-e1740653207242-1024x635.png"
export default function HeroSection() {
    return (
        <>
            <section className="hero-section bg-prim">
                <div className="container">
                    <div className="row vh-100 flex-column-reverse justify-content-center align-items-center flex-lg-row g-4">
                        <div className="col-lg-7">
                            <div>
                                <span className=" text-accent">NEW COLLECTION — 2026</span>
                                <h1 className=" display-3">
                                    <p>Discover products</p>
                                    <p className=" text-accent text-italic">you'll love</p>
                                </h1>
                                <p className="dis max-w text-muted">Thoughtfully selected essentials that bring beauty, function and a little joy to every day</p>
                            </div>
                            <div className="buttons d-flex  gap-3">
                                <button className="btn-g btn-shop">Shop now</button>
                                <button className="btn-g btn-categories">Explore categories
                                    <span><FaArrowRightLong className=" ms-2" />
                                    </span> </button>
                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div className="hero-image">
                                <img
                                    src={heroSection} alt="hero section for souq"
                                    className="w-100 d-block" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
