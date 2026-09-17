export default function CategoryFilter({ allCategories, selectedCategory, onCategoryClick }) {
    const normalizedSelected = selectedCategory || "all";

    return (
        <div className="short-cat pb-3 pt-1">
            <span
                className={`cat d-inline-block py-2 px-4 rounded-5 border border-1 cursor-pointer ${normalizedSelected === "all" ? "bg-black text-white cat-active" : ""}`}
                onClick={() => onCategoryClick?.("all")}
            >
                All categories
            </span>
            {allCategories?.map((cat) => {
                const catSlug = cat?.slug ?? cat;
                const catName = cat?.name ?? (typeof cat === "string" ? cat.replace(/-/g, " ") : "Category");
                const isActive = normalizedSelected === catSlug;

                return (
                    <span
                        key={catSlug}
                        className={`cat ms-2 d-inline-block py-2 px-4 rounded-5 border border-1 cursor-pointer ${isActive ? "bg-black text-white cat-active" : ""}`}
                        onClick={() => onCategoryClick?.(catSlug)}
                    >
                        {catName}
                    </span>
                );
            })}
        </div>
    );
}
