
export default function CategoryFilter({ allCategories }) {
    return (
        <div className=" short-cat pb-3 pt-1">
            <span className="cat d-inline-block py-2 px-4 rounded-5 border border-1 bg-black text-white cat-active ">All categories</span>
            {allCategories?.map((cat) => {
                return (
                    <span
                        key={cat.slug}
                        className="cat ms-2 d-inline-block py-2 px-4 rounded-5 border border-1"
                    >
                        {cat.name}
                    </span>
                );
            })}
        </div>)
}
