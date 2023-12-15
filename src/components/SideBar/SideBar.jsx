import React, { useState } from "react";
import ShopItems from "./../ShopItems/ShopItems";
import Categories from "./Categories/Categories";

function SideBar(props) {
    const [selectedCategory, setSelectedCategory] = useState('');

    const categories = ['All', ...new Set(props.data.map((item) => item.category))];

    const filteredItems = selectedCategory
        ? props.data.filter((item) => item.category === selectedCategory)
        : props.data;

    const handleCategoryChange = (category) => {
        setSelectedCategory(category === 'All' ? '' : category);
    };

    return (
        <aside className="flex flex-wrap md:flex-nowrap justify-center md:justify-start lg:space-x-10">
            <div className="text-center md:ml-36 lg:ml-48 mt-10">
                <Categories categories={categories} onCategoryChange={handleCategoryChange} activeCategory={selectedCategory}/>
            </div>

            <div>
                <ShopItems data={filteredItems} />
            </div>
        </aside>
    );
}

export default SideBar;
