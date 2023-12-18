import React from "react";

type Categories = {
    categories: string[],
    onCategoryChange: (param: string) => void,
    activeCategory: string,
}

function SideBar({ categories, onCategoryChange, activeCategory }: Categories) {
  return (
    <div>
      <ul>
        {categories.map((category) => (
          <li
            key={category}
            className={`m-2 px-12 py-1.5 text-center font-raleway font-bold text-lg border-2 ${category === activeCategory ? "bg-rich-bordeaux text-[#FFF]" : "border-rich-bordeaux"
              }`} >
            <button onClick={() => onCategoryChange(category)}>{category}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
