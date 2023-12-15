import React from "react";
import Item from "./Item/Item.jsx"

function ShopItems(props) {
    return (
        // <section className="flex flex-wrap justify-center content-center">
        <section className="flex flex-wrap justify-center content-center">
            {props.data.map((product) => (
                <Item item={product} />
            ))}
        </section>
    );
}

export default ShopItems;