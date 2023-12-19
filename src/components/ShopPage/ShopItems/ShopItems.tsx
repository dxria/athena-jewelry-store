import React from "react";
import Item from "./Item/Item";

type ShopItemsProps = {
    data: {
        title: string;
        description: string;
        price: number;
        category: string;
        img: string;
    }[];
};

function ShopItems({ data }: ShopItemsProps) {
    return (
        <section className="flex flex-wrap justify-start content-center">
            {data.map((product, index) => (
                <Item key={index} item={product} />
            ))}
        </section>
    );
}

export default ShopItems;
// eslint / prettier
