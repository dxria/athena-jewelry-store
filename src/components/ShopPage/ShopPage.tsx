import React, { useState } from "react";
import ShopItems from "./ShopItems/ShopItems";
import SideBar from "./Sidebar/Sidebar";

type ShopProps = {
    data: {
        title: string;
        description: string;
        price: number;
        category: string;
        img: string;
    }[];
};

function ShopPage({ data }: ShopProps) {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", ...new Set(data.map((item) => item.category))];

    const filteredItems =
        selectedCategory === "All"
            ? data
            : data.filter((item) => item.category === selectedCategory);
    //       (  ? props.data.filter((item) => item.category === selectedCategory)
    //         : props.data;
    // )
    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category === "All" ? "All" : category);
    };

    return (
        <aside className="flex flex-wrap md:flex-nowrap justify-center md:justify-start lg:space-x-10">
            <div className="text-center md:ml-36 lg:ml-48 mt-10">
                <SideBar
                    categories={categories}
                    onCategoryChange={handleCategoryChange}
                    activeCategory={selectedCategory}
                />
            </div>

            <div>
                <ShopItems data={filteredItems} />
            </div>
        </aside>
    );
}

export default ShopPage;
