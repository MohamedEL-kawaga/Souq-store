export default function HeroLogin({
    badge = "A CONSIDERED WAY TO SHOP",
    title = "Everything you need,",
    accent = "in one place",
    description = "Discover curated essentials, seasonal favorites and new arrivals in one beautifully simple shopping experience."
}) {
    return (
        <section className="auth-hero">
            <div className="d-flex justify-content-center align-items-start flex-column gap-3">
                <span className="auth-badge">{badge}</span>
                <h1 className="hero-title">
                    <span className="d-block">{title}</span>
                    <span className="d-block text-italic text-accent fw-bolder">{accent}</span>
                </h1>
                <p className="hero-copy">{description}</p>
            </div>
        </section>
    )
}
