import React from "react";

function Categories({ categories, onCategoryChange, activeCategory }) {
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

export default Categories;
