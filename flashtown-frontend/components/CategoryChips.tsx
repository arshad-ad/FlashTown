export default function CategoryChips() {
    const categories = [
        "Clothing",
        "Jewellery",
        "Supermarket",
        "Electronics",
        "Footwear",
        "Dining"
    ];

    return (
        <div className="overflow-x-auto whitespace-nowrap px-4 py-3 bg-white scrollbar-hide max-w-md mx-auto">
            <div className="flex gap-2">
                <button className="px-4 py-1.5 bg-black text-white rounded-full text-sm font-medium">
                    All
                </button>
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className="px-4 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium border border-gray-100"
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>
    );
}
